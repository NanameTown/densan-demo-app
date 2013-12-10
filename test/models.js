// models test

var expect = require("chai").expect;
var models = require("../models");

describe("Models", function () {
  it("#create", function (done) {
    models.create("test", "hoge", function (err, user) {
      expect(err).to.be.null;
      expect(user).to.have.property("id", "test");
      expect(user).to.have.property("name", "hoge");
      done();
    });
  });

  it("#read", function (done) {
    models.read("test", function (err, user) {
      expect(err).to.be.null;
      expect(user).to.have.property("id", "test");
      expect(user).to.have.property("name", "hoge");
      done();
    });
  });

  it("#update", function (done) {
    models.update("test", "fuga", function (err, user) {
      expect(err).to.be.null;
      expect(user).to.have.property("id", "test");
      expect(user).to.have.property("name", "fuga");
      done();
    });
  });
  
  it("#delete", function (done) {
    models.delete("test", function (err) {
      expect(err).to.be.null;
      done();
    });
  });
});

// models.create("test", "hoge", function (err, user) {
//   console.log(user);

//   models.read("test", function (err, user) {
//     console.log(user);

//     models.update("test", "fuga", function (err, user) {
//       console.log(user);

//       models.delete("test", function (err) {
//         models.read("test", function (err, user) {
//           console.log(user);
//         });
//       });
//     });
//   })
// });
