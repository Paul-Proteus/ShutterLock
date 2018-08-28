const pgp = require('pg-promise')(/*options*/);
const db = pgp("postgres://fuuqhclf:ZhUsdo_Qg9Xa4rDHp3g0KJ3Gn-B03qCO@stampy.db.elephantsql.com:5432/fuuqhclf")

// connect to elephantSQL
db.connect()

module.exports = db;