const app = require('./app');
const request = require('supertest');

describe('Server', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000); // Start server before tests
  });

  afterAll(done => {
    server.close(done); // Close server after tests
  });

  it('responds with 200 status when server starts', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  it('responds with correct message when server starts', async () => {
    const response = await request(server).get('/');
    expect(response.text).toContain(`Example app listening at http://localhost:3000`);
  });
});
