/*******************************************************************************************************************************************
 * Objetivo: API responsavel em criar endPoints referente estados e cidades
 * Data: 15/08/2025
 * Autor: joao blesa
 * Versao: 1.0
 * * Observaçoes: instalar dependencias para criar API
 * express      - npm install express      --save instala as dependencias para criar uma API 
 * cors         - npm install cors          --save instala as dependencias para configurar as permissoes de uma API
 * body-parser  - npm install body-parser   --save instala as dependencias para receber os tipos de dados via POST  ou PUT
 *******************************************************************************************************************************************/

//import das dependencias
const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

//request -> recebe os dados da API
//Response -> envia os dados na API

//import do arquivo de funçoes
const dados      = require('./modulo/funcoes.js')

// define a porta padrao da API, se for em um servidor de nuvem nao temos acesso a porta
// em execuçao local podemos definir uma porta livre
const PORT       = process.env.PORT || 8080

//Instancia na classe do express
const app = express()

//configuraçoes do CORS
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*') //IP de origem
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') //Metodos (Verbos) de protocolo HTTP

    app.use(cors())
    next()// Proximo
})

//Endpoints
// Endpoint para retornar a lista de todos os estados
app.get('/v1/estados', function(request, response){
    let estados = dados.getAllEstados()

    response.status(estados.statuscode)
    response.json(estados)
})

// Endpoint para retornar dados de um estado filtrando pela sigla
app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = dados.getEstadoBySigla(sigla)
    
    response.status(estado.statuscode)
    response.json(estado)
})

// Endpoint para retornar a capital de um estado filtrando pela sigla
app.get('/v1/estado/capital/:uf', function(request, response){
    let sigla = request.params.uf
    let capital = dados.getCapitalBySigla(sigla)
    
    response.status(capital.statuscode)
    response.json(capital)
})

// Endpoint para retornar a lista de estados filtrando por regiao
app.get('/v1/regiao/estados', function(request, response){
    let regiao = request.query.regiao
    let estados = dados.getEstadosByRegiao(regiao)

    response.status(estados.statuscode)
    response.json(estados)
})

// Endpoint para retornar o estado que é a capital do país
app.get('/v1/estado/capital/pais', function(request, response){
    let estado = dados.getEstadoIsCapitalByPais()
    
    response.status(estado.statuscode)
    response.json(estado)
})

// Endpoint para retornar as cidades de um estado filtrando pela sigla
app.get('/v1/cidades/:uf', function(request, response){
    let sigla = request.params.uf
    let cidades = dados.getCidadesBySigla(sigla)
    
    response.status(cidades.statuscode)
    response.json(cidades)
})

app.get('/v1/estado/capital/pais', cors(), async function(request, response, next){
    response.json(modulo.getEstadoIsCapitalByPais());
    response.status(200);
});

//Start da API
app.listen(PORT, function(){
    console.log('API aguardando requisiçoes ....');
})