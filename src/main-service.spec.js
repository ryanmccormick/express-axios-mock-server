const request = require('supertest');
const app = require('./main-service');

const endFn = (err, res) => {
  if (err) throw err;
};

describe('Service with mock data', () => {

  beforeEach(() => {
    process.env.USE_TEST_DATA = false;
  });

  it ('response with health check', () => {
    request(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(endFn)
  });

});



