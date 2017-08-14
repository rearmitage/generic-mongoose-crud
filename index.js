const mongoose = require('mongoose');

const schemaCrud = (Schema) => {
  if (Schema instanceof mongoose.Schema !== true) {
    throw new Error('Must pass in a mongoose Schema');
  }
  Schema.statics.read = crud.read;
  Schema.statics.readById = crud.readById;
  Schema.statics.insert = crud.insert;
  Schema.statics.updateById = crud.updateById;
  Schema.statics.removeById = crud.removeById;
};

const crud = {
  read: function(query = {}) {
    let Model = this;
    return Model.find(query).exec().then((doc) => {
      return Promise.resolve(doc);
    })
    .catch((err) => {
      err.status = 500;
      return Promise.reject(err);
    });
  },
  readById: function(_id) {
    let Model = this;
    return Model.findOne({ _id }).exec().then((doc) => {
      if (!doc) {
        let err = new Error(Model.modelName + ' Not Found');
        err.status = 404;
        return Promise.reject(err);
      }
      return Promise.resolve(doc);
    })
    .catch((err) => {
      err.status = 500;
      return Promise.reject(err);
    });
  },
  insert: function(data) {
    let Model = this;
    let doc = new Model(data);

    return doc.save().then((newDoc) => {
      return Promise.resolve(newDoc);
    })
    .catch((err) => {
      err.status = 500;
      return Promise.reject(err);
    });
  },
  updateById: function(_id, data) {
    let Model = this;
    return Model.findOne({ _id }).exec().then((doc) => {
      if (!doc) {
        let err = new Error(Model.modelName + ' Not found');
        err.status = 404;
        return Promise.reject(err);
      }
      Object.keys(data).forEach((key) => {
        doc[key] = data[key];
      });
      return doc.save().then((updatedDoc) => {
        return Promise.resolve(updatedDoc);
      });
    })
    .catch((err) => {
      err.status = 500;
      return Promise.reject(err);
    });
  },
  removeById: function(_id) {
    let Model = this;
    return Model.findOneAndRemove({ _id }).exec().then((doc) => {
      return Promise.resolve(doc);
    })
    .catch((err) => {
      err.status = 500;
      return Promise.reject(err);
    });
  }
};

module.exports = schemaCrud;
