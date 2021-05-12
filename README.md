# Combate à fraude

Esse projeto é uma API feita em **Node.JS** e **MongoDB**, onde o usuário pode pesquisar por empresas utilizando o CNPJ.

A consulta da **empresa** e de seus respectivos **sócios** é feita na API do [Brasil.io](https://brasil.io/home/)

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

> É necessário enviar algum **CNPJ** válido em ambas as rotas.

```GET /company/updated/:cnpj```
#### /company/updated/06037792000155

### Response

```GET /company/cache/:cnpj```

### Requesição GET
É necessário enviar algum CNPJ válido.




/company/cache/:cnpj

