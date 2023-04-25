const PasswordHash = require('../../Applications/security/PasswordHash');

class BcryptPasswordHash extends PasswordHash {
  constructor(bcrypt, saltAround = 10) {
    super();
    this._bcrypt = bcrypt;
    this._saltAround = saltAround;
  }

  async hash(password) {
    return this._bcrypt.hash(password, this._saltAround);
  }
}

module.exports = BcryptPasswordHash;
