const { agent } = require('../utils/agent');

test('Returns proper response type', async () => {
  return agent
    .get('/1')
    .set('Accept', 'application/json')
    // .expect('Content-Type', /json/);
    .expect(res => {
      if (!/json/.test(res.type)) {
        throw new Error(`Wrong response type: ${res.type}, headers are ${JSON.stringify(res.headers)}`);
      }
    })
});

test('Uses proper charset', async () => {
  return agent
    .get('/1')
    .expect(response => response.charset === 'utf8');
});
