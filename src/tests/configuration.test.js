const { agent } = require('../utils/agent');

test('Returns proper response type', async () => {
  return agent
    .get('/1')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
});

test('Uses proper charset', async () => {
  return agent
    .get('/1')
    .expect(response => response.charset === 'utf8');
});
