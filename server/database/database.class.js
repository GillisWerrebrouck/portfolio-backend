const config = require('../../config');

class Database {
  constructor() {
    // eslint-disable-next-line global-require
    this.mongoose = require('mongoose');
    // eslint-disable-next-line global-require
    this.mongoose.Promise = require('bluebird');
  }

  connect() {
    // connect with mongodb
    this.mongoose.connect(`mongodb://${config.db.user}:${config.db.pwd}@${config.db.host}:${config.db.port}/${config.db.database}?authSource=${config.db.authSource}`, {
      reconnectTries: 3,
    }).catch((err) => {
      console.error('Could not connect to mongodb server:\n', err);
      // exit on error
      process.exit(-1);
    });
  }
}

// create instance of Database
const db = new Database();
// create connection
db.connect();

module.exports = db.mongoose;
