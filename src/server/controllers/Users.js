const { User, Palette } = require('../models/User');
const bcrypt = require('bcryptjs');

// this page will be scraped for bcrypt
  // - JON

const UsersController = {
  // Middlware for login
  login(req, res, next) {
    User.find(
      {
        username: req.body.username
      },
      (err, docs) => {
        if (err || docs.length === 0) {
          res.status(401);
          res.send('User not found.');
        } else {
          // this is the part to care about ------------------------------------------------>
          bcrypt.compare(req.body.password, docs[0].password_digest).then(isPasswordMatch => {
            if (isPasswordMatch) {
              res.locals.palettes = docs[0].palettes;
              res.locals.newTokenData = {
                _id: docs[0]._id,
                username: docs[0].username,
                palettes: docs[0].palettes
              };
              next();
          // --------------------------------------------------------------------------------->
            } else {
              res.status(401).send('Invalid login credentials.');
            }
          });
        }
      }
    );
  },

  // Middleware for deleting palette by palette ID
  deletePalette(req, res, next) {
    // need to figure out which element of palettes array wants to be deleted
    // get user from token and get doc back
    // grab doc.palettes like above and use filter method to get array element to be deleted

    // may be important for token ------------------------------>
    User.findById(res.locals.tokenData._id, (err, doc) => {
      // ----------------------------------------------------------->
      if (err) {
        console.err(err);
      }
      let filteredArray = doc.palettes.filter(el => {
        console.log('el._id', el._id, 'req.params.palette_id', req.params.palette_id);
        return JSON.stringify(el._id) !== JSON.stringify(req.params.palette_id);
      });
      doc.palettes = filteredArray;
      doc.save((err, user) => {
        if (err) {
          console.error('Error in UserController.deletePalette', err);
          res.send(err);
        }
        res.locals.palettes = user.palettes;
        res.locals.newTokenData = {
          _id: res.locals.tokenData._id,
          username: res.locals.tokenData.username,
          palettes: user.palettes
        };
        next();
      });
    });
  }
};

module.exports = UsersController;
