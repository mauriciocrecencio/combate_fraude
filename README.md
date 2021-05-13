# Combate à fraude
Eu nunca tinha trabalhado com MongoDB e Mongoose antes, gostei muito, obrigado pelo teste! :)
Esse projeto é uma API feita em **Node.JS** e **MongoDB**, onde o usuário pode pesquisar por empresas utilizando o CNPJ.

A consulta da **empresa** e de seus respectivos **sócios** é feita na API do [Brasil.io](https://brasil.io/home/)

> Entendo que o Auth Token da API do [Brasil.io](https://brasil.io/home/) deveria estar escondido em um .env por se tratar de um dado sensível, mas para facilitar o teste do projeto, deixei ela explícita no código.

## Instalação

Certifique-se de ter instalado em sua máquina **npm** ou **yarn**. 


1) Instale as dependências do projeto com o comando

```bash
npm install || yarn install
```
2) Inicie o servidor com o comando
```bash
npm start || yarn start
```


## API Routes

 É necessário enviar algum **CNPJ** válido em ambas as rotas.

### GET ```/company/cached/:cnpj```
> É verificado se esse CNPJ existe no banco de dados, se sim, é retornado os dados, caso ao contrário, é feita uma consulta na API do [Brasil.io](https://brasil.io/home/) e é salvo a empresa no banco.

#### Response

```json
{
  "company": {
    "cnpj": "string",
    "razao_social": "string",
    "uf": "string",
    "qsa": [
      {
        "cpf_cnpj_socio": "string",
        "nome_socio": "string",
        "qualificacao_socio": "string",
        "tipo_socio": "string"
      }
    ]
  }
}
```

### GET ```/company/updated/:cnpj```
Independente de exisitr o CNPJ no banco de dados ou não, é feita uma nova consulta no [Brasil.io](https://brasil.io/home/) e o banco é salvo/atualizado com os dados mais recentes.

#### Response

```json
{
  "company": {
    "cnpj": "string",
    "razao_social": "string",
    "uf": "string",
    "qsa": [
      {
        "cpf_cnpj_socio": "string",
        "nome_socio": "string",
        "qualificacao_socio": "string",
        "tipo_socio": "string"
      }
    ]
  }
}
```
### GET ```/api-docs```
Acessa a documentação da API no Swagger.




