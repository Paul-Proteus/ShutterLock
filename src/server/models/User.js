const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

// this file imports bcrypt, uses the hash function on the password section.
// will parse this file for bcrypt. 

userSchema.pre('save', function(next) {
  const self = this;
  bcrypt
    .hash(this.password_digest, SALT_ROUNDS)
    .then(function(hash) {
      self.password_digest = hash;
      next();
    })
    .catch(function(error) {
      console.error('Error encrypting password:', error);
    });
});





const paletteSchema = new Schema({
  name: { type: String, required: true },
  colors: [
    {
      R: Number,
      G: Number,
      B: Number,
    }
  ]
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password_digest: { type: String, required: true },
  palettes: [paletteSchema]
});


const User = mongoose.model('User', userSchema);
const Palette = mongoose.model('Palette', paletteSchema);

module.exports = { User, Palette };

