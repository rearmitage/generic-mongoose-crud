const { assert } = require('chai');
const { TestModel, populateTestDocs, clearDocs, testDocs, dropTestDb } = require('./mock.js');

// Eric Elliot says no to use the 'to' and just use assert equal and deep equal

beforeEach(populateTestDocs);
afterEach(clearDocs);
after(dropTestDb);

describe('Crud: ', () => {
  it('Should insert new document', () => {
    var newTest = {
      firstName: 'Rich',
      lastName: 'Armitage',
      age: 23
    };
    return TestModel.insert(newTest).then((savedDoc) => {
      return TestModel.find().then((allDocs) =>{
        assert.equal(savedDoc.firstName, 'Rich');
        assert.equal(allDocs.length, 4);
      });
    });
  });

  it('Should find all docs', () => {
    return TestModel.read().then((docs) => {
      assert.equal(docs.length, 3);
    });
  });

  it('Should find one doc by id', () => {
    return TestModel.readById(testDocs[0]._id).then((doc) => {
      assert.isDefined(doc);
      assert.equal(doc.firstName, testDocs[0].firstName);
      assert.equal(doc.lastName, testDocs[0].lastName);
    });
  });

  it('Should update one doc by id', () => {
    return TestModel.updateById(testDocs[0]._id, { firstName: 'Joe', lastName: 'Shmoe' }).then((doc) =>{
      return TestModel.find().then((allDocs) =>{
        assert.equal(allDocs.length, 3);
        assert.equal(allDocs[0].firstName, 'Joe');
        assert.equal(allDocs[0].lastName, 'Shmoe');
      });
    });
  });

  it('Should delete one doc by id', () =>{
    return TestModel.removeById(testDocs[0]._id).then((doc) => {
      return TestModel.find().then((allDocs) =>{
        assert.equal(allDocs.length, 2);
      });
    });
  });
});
