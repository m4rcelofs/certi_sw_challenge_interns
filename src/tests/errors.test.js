const { verifyGracefulError } = require('../utils/agent');

const table = test.each`
  number
  ${''}
  ${Number.MAX_SAFE_INTEGER}
  ${'abcde'}
  ${'5 6 7'}
`;

table('Fails gracefully for $number', verifyGracefulError);
