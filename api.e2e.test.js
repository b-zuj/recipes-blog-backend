/* eslint-disable no-restricted-syntax */
const request = require('supertest');
const { createServer } = require('http');
const { app } = require('./app.js');

describe('API', () => {
  let server;

  beforeEach(() => {
    server = createServer(app);
    server.listen(0);
  });

  afterEach(done => {
    server.close(done);
  });

  test('expect 200', async () => {
    await request(server)
      .get('/api/recipes')
      .expect(200);
  });

  test('expect 200', async () => {
    await request(server)
      .get('/api/recipes/3')
      .expect(200);
  });

  test('expect 404', async () => {
    await request(server)
      .get('/api/rec')
      .expect(404);
  });
});
