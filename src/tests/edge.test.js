const { verify } = require('../utils/agent');

const table = test.each`
  number       | text
  ${0}         | ${'zero'}
  ${-0}        | ${'zero'} 
  ${'0001'}    | ${'um'}
  ${'   0105'} | ${'cento e cinco'}
  ${'0105   '} | ${'cento e cinco'}
  ${'0x08'}    | ${'oito'}
  ${'0x80'}    | ${'cento e vinte e oito'} 
`;

table('Returns "$text" for path "$number"', verify);
