# sw_challenge_interns

Projeto teste do desafio para vagas de SW CERTI

### Texto do desafio

> Na linguagem de sua preferência, crie um servidor HTTP que, para cada requisição GET, retorne um JSON cuja chave
> `extenso` seja a versão por extenso do número inteiro enviado no path. Os números
> podem estar no intervalo [-99999, 99999].
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
> Nos mande o link do repositório no GitHub com o código. Não esqueça do README.md com as instruções para rodar o servidor!
>
> Em caso de dúvidas sobre o desafio, mande um email para ept@certi.org.br e mzr@certi.org.br.
>
> *Bônus*: No GitHub, abra um Pull Request com seu código. Isso facilita nossa revisão.
>
> *Bônus*: Crie um ambiente Docker para que possamos rodar seu servidor sem instalar
> dependências locais.

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
