/*******************************************************************************************************************************************
 * Objetivo: API responsavel em criar endPoints referente estados e cidades
 * Data: 15/08/2025
 * Autor: joao blesa
 * Versao: 1.0
 * 
 * Observaçoes: instalar dependencias para criar API
 *      express         - npm install express       --save instala as dependencias para criar uma API 
 *      cors            - npm install cors          --save instala as dependencias para configurar as permissoes de uma API
 *      body-parser     - npm install body-parser   --save instala as dependencias para receber os tipos de dados via POST  ou PUT
 *******************************************************************************************************************************************/

//import das dependencias
const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

//request -> recebe os dados da API
//Response -> envia od dados ma API

//import do arquivo de funçoes
const dados      = require('./modulo/funçoes.js')

// define a porta padrao da API, se for em um servidor de nuvem nao temos acesso a porta
            // em execuçao local podemos definir uma porta livre
const PORT       = process.PORT || 8080

//Instancia na classe do express
const app = express()

//configuraçoes do CORS
app.use((request, response, next)=>{
    response.header('Acess-control-Allow-Origin', '') //IP de origem
    response.header('Acess-control-Allow-Methods', 'GET') //Metodos (Verbos) de protocolo HTTP

    app.use(cors())
    next()// Proximo
})

//EndPoints
app.get('/v1/estados', function(request, response){
    let estados = dados.getAllEstados()

    response.status(estados.statuscode)
    response.json(estados)
})

app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf

    console.log(sigla)
})

app.get('/v1/regiao/estado/:id', function(request, response){
    let regiaoEstados = request.query.regiao
    let sigla = request.query.uf
    let id = request.params.id

    console.log(regiaoEstados);
    console.log(sigla);
    console.log(id);
    
})

//Start da API
app.listen(PORT, function(){
    console.log('API aguardando requisiçoes ....');
    
})

