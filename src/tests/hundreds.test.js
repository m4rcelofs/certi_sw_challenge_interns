const { verify, verifyNegative } = require('../utils/agent');

const table = test.each`
  number | text
  ${100} | ${'cem'} 
  ${200} | ${'duzentos'}
  ${300} | ${'trezentos'}
  ${400} | ${'quatrocentos'}
  ${500} | ${'quinhentos'}
  ${600} | ${'seiscentos'}
  ${700} | ${'setecentos'}
  ${800} | ${'oitocentos'} 
  ${900} | ${'novecentos'}
  
  ${101} | ${'cento e um'} 
  ${202} | ${'duzentos e dois'}
  ${303} | ${'trezentos e tres'}
  ${404} | ${'quatrocentos e quatro'}
  ${505} | ${'quinhentos e cinco'}
  ${606} | ${'seiscentos e seis'}
  ${707} | ${'setecentos e sete'}
  ${808} | ${'oitocentos e oito'} 
  ${909} | ${'novecentos e nove'}
  
  ${119} | ${'cento e dezenove'}
  ${228} | ${'duzentos e vinte e oito'}
  ${337} | ${'trezentos e trinta e sete'}
  ${446} | ${'quatrocentos e quarenta e seis'}
  ${555} | ${'quinhentos e cinquenta e cinco'}
  ${664} | ${'seiscentos e sessenta e quatro'}
  ${773} | ${'setecentos e setenta e tres'} 
  ${882} | ${'oitocentoe e oitenta e dois'}
  ${991} | ${'novecentos e noventa e um'}
`;

table('Returns "$text" for path "$number"', verify);
table('Returns "menos $text" for path "-$number"', verifyNegative);
