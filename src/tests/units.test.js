const { verify, verifyNegative } = require('../utils/agent');

const table = test.each`
  number | text
  ${1}   | ${'um'}
  ${2}   | ${'dois'}
  ${3}   | ${'tres'}
  ${4}   | ${'quatro'}
  ${5}   | ${'cinco'}
  ${6}   | ${'seis'}
  ${7}   | ${'sete'} 
  ${8}   | ${'oito'}
  ${9}   | ${'nove'}
`;

table('Returns "$text" for path "$number"', verify);
table('Returns "menos $text" for path "-$number"', verifyNegative);
