# sw_challenge_interns

Projeto teste do desafio para vagas de SW CERTI

### Texto do desafio

> Na linguagem de sua preferência, crie um servidor HTTP que, para cada requisição GET, retorne
> como resposta um JSON cuja chave `extenso` seja a versão por extenso do número inteiro enviado no path.
> Os números podem estar no intervalo [-99999, 99999].
>
> Exemplos:
> ```
> λ curl http://localhost:3000/1
> { "extenso": "um" }
> ```
> ```
> λ curl http://localhost:3000/-1042
> { "extenso": "menos mil e quarenta e dois" }
> ```
> ```
> λ curl http://localhost:3000/94587
> { "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
> ```
>
> - Nos mande o link do repositório no GitHub com o código. 
> - Se você abrir um Pull Request (p.ex. do seu branch de desenvolvimento para o master) nós faremos o review e você terá a chance de corrigir os erros para uma segunda avaliação.
> - Não esqueça do README.md com as instruções para rodar o servidor!
> - Não esqueça dos "e"s separando milhares, centenas e dezenas (vide exemplo): "noventa e quatro mil **e** quinhentos e oitenta e sete". Esse não é o padrão da norma culta da língua portuguesa, e isso é intencional.
> - É esperado que o código implemente o algoritmo de tradução.
> - Mesmo que não esteja com a lógica completa, nos envie o que conseguiu fazer até o momento.
>
> Em caso de dúvidas sobre o desafio, mande um email para ept@certi.org.br e mzr@certi.org.br.
>
>
> *Bônus*: Crie um ambiente Docker para que possamos rodar seu servidor sem instalar
> dependências locais.
>
> Outras coisas em que prestamos atenção no review: edge cases e tratamento de erros, testes unitários, estruturação e qualidade do código, uso do git... 
>

## Para rodar os testes:

### Ambiente
- Python 3
- Docker

### Como rodar
Clone o repositório:
```
git clone ssh://git@bitbucket-cdm.certi.org.br:7999/~mzr/sw_challenge_interns.git
cd sw_challenge_interns
```

Faça a instalação e rode o servidor do candidato em um novo ambiente:
```
 python3 createenv.py <port>               # default, ubuntu + git, abre porta do parâmetro
 python3 createenv.py <port> <image:tag>   # imagem diferente, p.ex. node:10
 git clone <git://repo>
 <seguir instruções do candidato e rodar o servidor>
```

Em outro terminal, execute os testes:
```
python3 test.py http://<host>:<port>
```

### Avaliação:
[ ] Fez o código em outro branch e abriu Pull Request?

[ ] README é útil?

[ ] Usou o docker?

[ ] Fez testes unitários?

[ ] Como está a qualidade dos commits?

[ ] % de testes com sucesso

[ ] Usou bibliotecas como cheat?

#### Qualidade do código:

[ ] Estrutura

[ ] Validações de range

[ ] Idioma

[ ] Comentários

[ ] Repetições


