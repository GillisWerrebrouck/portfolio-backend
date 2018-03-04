const mongoose = require('../database.class');

// check if an ObjectId is valid
function checkObjectId(objectId) {
  return new Promise((resolve, reject) => {
    if (mongoose.Types.ObjectId.isValid(objectId)) {
      return resolve(objectId);
    }

    return reject(new Error('Not a valid id').message);
  });
}

// export all helper functions
module.exports = {
  checkObjectId,
};
