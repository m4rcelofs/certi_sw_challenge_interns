const { verify, verifyNegative } = require('../utils/agent');

const table = test.each`
  number | text
  ${11}  | ${'onze'}
  ${12}  | ${'doze'}
  ${13}  | ${'treze'}
  ${14}  | ${'catorze|quatorze'}
  ${15}  | ${'quinze'}
  ${16}  | ${'dezesseis'}
  ${17}  | ${'dezessete'}
  ${18}  | ${'dezoito'}
  ${19}  | ${'dezenove'}
`;

table('Returns "$text" for path "$number"', verify);
table('Returns "menos $text" for path "-$number"', verifyNegative);
