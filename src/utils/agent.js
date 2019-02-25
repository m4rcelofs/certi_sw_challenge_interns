const request = require('supertest');
const { toBeProperJson, toHaveProperText, toNotHaveServerError } = require('./validator');

const host = process.env.HOST || 'http://localhost:3000';
const agent = request(host.endsWith('/') ? host : `${host}/`);

const verify = async ({ number, text }) => agent
  .get(`${number}`)
  .expect(200)
  .expect(toBeProperJson)
  .expect(toHaveProperText(text));

const verifyNegative = async ({ number, text }) => verify({
  number: number * -1,
  text: `menos ${text}`,
});

const verifyGracefulError = async ({ number }) => agent
  .get(`${number}`)
  .expect(toNotHaveServerError);

module.exports = {
  agent,
  verify,
  verifyGracefulError,
  verifyNegative,
};
