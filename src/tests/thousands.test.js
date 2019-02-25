const { verify, verifyNegative } = require('../utils/agent');

const table = test.each`
  number   | text
  ${1000}  | ${'mil'} 
  ${2000}  | ${'dois mil'}
  ${3000}  | ${'tres mil'}
  ${4000}  | ${'quatro mil'}
  ${5000}  | ${'cinco mil'}
  ${6000}  | ${'seis mil'}
  ${7000}  | ${'sete mil'}
  ${8000}  | ${'oito mil'} 
  ${9000}  | ${'nove mil'}
  ${10000} | ${'dez mil'} 
  ${21000} | ${'vinte e um mil'}
  ${32000} | ${'trinta e dois mil'}
  ${43000} | ${'quarenta e tres mil'}
  ${54000} | ${'cinquenta e quatro mil'}
  ${65000} | ${'sessenta e cinco mil'}
  ${76000} | ${'setenta e seis mil'}
  ${87000} | ${'oitenta e sete mil'} 
  ${98000} | ${'noventa e oito mil'}
  
  ${19001} | ${'dezenove mil e um'}
  ${99009} | ${'noventa e nove mil e nove'}
  
  ${57030} | ${'cinquenta e sete mil e trinta'}
  ${91090} | ${'noventa e um mil e noventa'}
  ${28011} | ${'vinte e oito mil e onze'}
  ${37022} | ${'trinta e sete mil e vinte e dois'}
  ${46033} | ${'quarenta e seis mil e trinta e tres'}
  ${55044} | ${'cinquenta e cinco mil e quarenta e quatro'}
  ${64055} | ${'sessenta e quatro mil e cinquenta e cinco'}
  ${73066} | ${'setenta e tres mil e sessenta e seis'}
  ${82079} | ${'oitenta e dois mil e setenta e nove'} 
  
  ${10100} | ${'dez mil e cem'}
  ${90900} | ${'noventa mil e novecentos'} 
  
  ${10101} | ${'dez mil e cento e um'} 
  ${20202} | ${'vinte mil e duzentos e dois'}
  ${30303} | ${'trinta mil e trezentos e tres'}
  ${40404} | ${'quarenta mil e quatrocentos e quatro'}
  ${50505} | ${'cinquenta mil e quinhentos e cinco'}
  ${60606} | ${'sessenta mil e seiscentos e seis'}
  ${70707} | ${'setenta mil e setecentos e sete'}
  ${80808} | ${'oitenta mil e oitocentos e oito'} 
  ${90909} | ${'noventa mil e novecentos e nove'}
  
  ${10119} | ${'dez mil e cento e dezenove'}
  ${20228} | ${'vinte mil e duzentos e vinte e oito'}
  ${30337} | ${'trinta mil e trezentos e trinta e sete'}
  ${40446} | ${'quarenta mil e quatrocentos e quarenta e seis'}
  ${50555} | ${'cinquenta mil e quinhentos e cinquenta e cinco'}

  ${61664} | ${'sessenta e um mil e seiscentos e sessenta e quatro'}
  ${72773} | ${'setenta e dois mil e setecentos e setenta e tres'} 
  ${83882} | ${'oitenta e tres mil e oitocentos e oitenta e dois'}
  ${95991} | ${'noventa e cinco mil e novecentos e noventa e um'}
  ${99999} | ${'noventa e nove mil e novecentos e noventa e nove'}
`;

table('Returns "$text" for path "$number"', verify);
table('Returns "menos $text" for path "-$number"', verifyNegative);