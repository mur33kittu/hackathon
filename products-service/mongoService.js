const mongoose = require ('mongoose');

const findInMongo = (refName, model, conditions, selections, req) => {
  return new Promise ((resolve, reject) => {
    model
      .find (conditions, selections)
      .then (data => {
        const dat = {
          refName: refName,
          data: data,
        };
        resolve (dat);
      })
      .catch (err => {
        reject (err);
      });
  });
};

const MongoService = {
  find: findInMongo,
  save: (refName, model, doc, req) => {
    return new Promise ((resolve, reject) => {
      model
        .create (doc)
        .then (data => {
          resolve (data);
        })
        .catch (err => {
          reject (err);
        });
    });
  },
  update: (reqName, model, doc, req) => {
    return new Promise ((resolve, reject) => {
      model
        .update (conditions, {$set: doc})
        .exec ()
        .then (data => {
          resolve (data);
        })
        .catch (err => {
          reject (err);
        });
    });
  },

  remove: (refName, model, conditions, req) => {
    return new Promise ((resolve, reject) => {
      model
        .remove (conditions)
        .then (data => {
          resolve (data);
        })
        .catch (err => {
          reject (err);
        });
    });
  },
};

module.exports = MongoService;
