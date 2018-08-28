const db = require('../elephantsql');

const controller = {

  // user data
  createUser (req, res, next) {
    const { username, password } = req.body
    console.log('inside of create user');
    console.log(req.body.username);
    // console.log(res.body);

    // db.query('INSERT INTO "ACCOUNTS"')
    // .then(userData => {
    //   res.send(userData);
    // })
  },

  index(req, res, next) {
    // console.log('inside of index testing req.sequence', req)

    // if(req.query.sequence) {
    //   db.conn.query("SELECT * FROM events WHERE sequence = " + req.query.sequence, (err, docs) =>{
    //     if(err) throw new Error(err);
    //       res.json(docs.rows);
    //     });
    // } else {
    //   db.conn.query("SELECT * FROM events", (err, docs) => {
    //     if(err) throw new Error(err);
    //       res.json(docs.rows);
    //   })
    // }
  },

  show(req, res, next) { 
    console.log('inside of show testing req.params.id', req.params)

    const qStr = 'SELECT * FROM events WHERE id = \'' + req.params.id +'\'';
    db.conn.query(qStr, (err, docs) => {
      if(err) throw new Error(err);
      if(docs.rows.length === 0) {
        return res.sendStatus(404);
      }
      res.json(docs.rows[0]);
    })
  }
}

module.exports = controller;
