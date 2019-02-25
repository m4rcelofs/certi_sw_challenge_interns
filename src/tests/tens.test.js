const { verify, verifyNegative } = require('../utils/agent');

const table = test.each`
  number | text
  ${10}  | ${'dez'} 
  ${20}  | ${'vinte'}
  ${30}  | ${'trinta'}
  ${40}  | ${'quarenta'}
  ${50}  | ${'cinquenta'}
  ${60}  | ${'sessenta'}
  ${70}  | ${'setenta'}
  ${80}  | ${'oitenta'} 
  ${90}  | ${'noventa'}

  ${21}  | ${'vinte e um'}
  ${32}  | ${'trinta e dois'}
  ${43}  | ${'quarenta e tres'}
  ${54}  | ${'cinquenta e quatro'}
  ${65}  | ${'sessenta e cinco'}
  ${76}  | ${'setenta e seis'}
  ${87}  | ${'oitenta e sete'} 
  ${98}  | ${'noventa e oito'}
`;

table('Returns "$text" for path "$number"', verify);
table('Returns "menos $text" for path "-$number"', verifyNegative);
