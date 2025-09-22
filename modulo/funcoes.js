/************************************************************************************
 * Objetivo: Arquivo responsavel pelas funçoes para criar a API de estados e ciaddes
 * Data: 15/08/2025
 * Autor: joao blesa
 * Versao: 1.0
 ************************************************************************************/
//import do arquivo estados e cidades
const dados = require('./estados_cidades');
const MESSAGE_ERROR = {status : false, statuscode: 500, development: 'Joao Blesa'};


//Retorna a lista de estados
const getAllEstados = function(){
    //padrao de JSON que sera o retorno da funçaos
    let message = {status : true, statuscode: 200, development: 'Joao Vitor Blesa', uf: [] };
    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla);
    });
    //adiciona um novo elemento no json
    message.quantidade = message.uf.length;

    if(message.uf.length > 0 ) {
        return message; //Resultado Verdadeiro da API 200
    }else{
        return MESSAGE_ERROR; //Resultado falso da API 
    }           
} 

// Retorna dados de estado filtrando pela sigla
const getEstadoBySigla = function(sigla) {
    let estado = {};
    let siglaEstado = sigla.toUpperCase();
    let estadoEncontrado = false;

    dados.listaDeEstados.estados.forEach(item => {
        if (item.sigla === siglaEstado) {
            estado = {
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
                regiao: item.regiao
            };
            estadoEncontrado = true;
        }
    });
    if (estadoEncontrado) {
        return {
            status: true,
            statuscode: 200,
            development: 'Joao Vitor Blesa',
            ...estado
        };
    } else {
        return {
            status: false,
            statuscode: 404,
            message: 'A sigla do estado informada não foi encontrada.',
            development: 'Joao Vitor Blesa'
        };
    }
}

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(sigla) {
    let estado = {};
    let siglaEstado = sigla.toUpperCase();
    let estadoEncontrado = false;

    dados.listaDeEstados.estados.forEach(item => {
        if (item.sigla === siglaEstado) {
            estado = {
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital
            };
            estadoEncontrado = true;
        }
    });
    
    if (estadoEncontrado) {
        return {
            status: true,
            statuscode: 200,
            development: 'Joao Vitor Blesa',
            ...estado
        };
    } else {
        return {
            status: false,
            statuscode: 404,
            message: 'A sigla do estado informada não foi encontrada.',
            development: 'Joao Vitor Blesa'
        };
    }
}

//Retorna a lista de estados filtrando pela regiao
const getEstadosByRegiao = function(regiao){
    let nomeRegiao = regiao.toUpperCase();
    let estadosEncontrados = [];

    dados.listaDeEstados.estados.forEach(item => {
        let nomeRegiaoItem = item.regiao.toUpperCase();
        if (nomeRegiaoItem.includes(nomeRegiao)) {
            estadosEncontrados.push({
                uf: item.sigla,
                descricao: item.nome
            });
        }
    });

    if (estadosEncontrados.length > 0) {
        return {
            status: true,
            statuscode: 200,
            development: 'Joao Vitor Blesa',
            regiao: nomeRegiao,
            estados: estadosEncontrados
        };
    } else {
        return {
            status: false,
            statuscode: 404,
            message: 'A região informada não foi encontrada.',
            development: 'Joao Vitor Blesa'
        };
    }
}

//Retorna a lista de estados que são a capital de um país, filtrando pelo país
const getEstadoIsCapitalByPais = function(pais){
    
}

//Retorna as cidades existentes em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla){
    
}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getEstadoIsCapitalByPais,
    getCidadesBySigla
};