/************************************************************************************
 * Objetivo: Arquivo responsavel pelas funçoes para criar a API de estados e ciaddes
 * Data: 15/08/2025
 * Autor: joao blesa
 * Versao: 1.0
 ************************************************************************************/
//import do arquivo estados e cidades
const dados = require('./estados_cidades')
const MESSAGE_ERROR = {status : false, statuscode: 500, development: 'Joao Blesa'}


//Retorna a lista de estados
const getAllEstados = function(){
    //padrao de JSON que sera o retorno da funçaos
    let message = {status : true, statuscode: 200, development: 'Joao Vitor Blesa', uf: [] }
        dados.listaDeEstados.estados.forEach(function(item){
            message.uf.push(item.sigla)
        });
        //adiciona um novo elemento no json
        message.quantidade = message.uf.length

        //Apaga um elemento existente no json
        //delete message.status
        if(message.uf.length > 0 ) {
            return message //Resultado Verdadeiro da API 200
        }else{
            return MESSAGE_ERROR} //Resultado falso da API 
            
} 




//Retorna dados de estado filtrando pela sigla
const getEstadoBySigla = function(sigla){
    let message = {status : true, statuscode: 200, development: 'Joao Vitor Blesa' uf: []}
    dados.listaDeEstados.forEach(function(itens){
       console.log('descriçao: ' + itens)
    
    })
}

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(sigla){

}

//Retorna a lista de estados filtrando pela regiao
const getEstadosByRegiao = function(regiao){

}

//Retorna a lista de estados e formam a capital de um pais filtrando pelo pais
const getEstadoIsCapitalByPais = function(pais){

}

//Retorna a cidade existentes em um estado, filtrando pela sigla
const getCidadesBySigla = function(){

}

module.exports = {
    getAllEstados
}

console.log(getAllEstados)