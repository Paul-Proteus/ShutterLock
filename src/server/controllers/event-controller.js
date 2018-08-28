const db = require('../elephantsql');

const controller = {

  // create new user
  createUser (req, res, next) {
    const { username, password } = req.body
    const text = 'INSERT INTO account(username, password) VALUES($1, $2) RETURNING *';
    const values = [username.toLowerCase(), password.toLowerCase()];

    db.query(text, values)
      .then(res => console.log(res.rows))
      .catch(err => console.error(err.stack));

    next();
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
