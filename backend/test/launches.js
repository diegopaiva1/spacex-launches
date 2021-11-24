const app = require("../src/app");
const request = require("supertest");

let urls = ['next', 'latest', 'upcoming', 'past']

for (const url of urls) {
  let call = '/launches/' + url;

  describe('GET ' + call, function() {
    it('responds with json', function(done) {
      request(app)
        .get(call)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });
  });
}

