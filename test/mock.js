const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const crud = require('../index');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/CrudTest');

let testSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: Number,
});

const oneId = new ObjectID();
const twoId = new ObjectID();
const threeId = new ObjectID();


let testDocs = [{
  _id: oneId,
  firstName: 'Hunter',
  lastName: 'Glanzmann',
  age: 26
}, {
  _id: twoId,
  firstName: 'John',
  lastName: 'Smith',
  age: 24
}, {
  _id: threeId,
  firstName: 'Greg',
  lastName: 'Jones',
  age: 30
}];

crud(testSchema);

const populateTestDocs = (done) => {
  TestModel.remove({}).then(() => {
    return TestModel.insertMany(testDocs);
  }).then(() => done());
};

const clearDocs = (done) =>{
  TestModel.remove({}).then(() => done());
};

const dropTestDb = (done) =>{
  mongoose.connection.db.dropDatabase().then(() => done());
};

let TestModel = mongoose.model('Test', testSchema);

module.exports = {
  TestModel,
  populateTestDocs,
  clearDocs,
  testDocs,
  dropTestDb
};
