/* 
   Document--Html

getElementById(id) — retorna um único elemento ou null.
getElementsByClassName(className) — retorna um HTMLCollection (coleção live).
getElementsByTagName(tagName) — retorna HTMLCollection (live).
getElementsByName(name) — retorna elementos com o atributo name (coleção similar).


querySelector(selector) — retorna o primeiro elemento que casa, ou null.
querySelectorAll(selector) — retorna NodeList (estática) — permite forEach.
*/


const input = document.getElementById('input-search').value; //pega um elemento com a ID descrita

const inputs = document.getElementById("input-search-1").value; //pega um elemento com a ID descrita

const paragraphs = document.getElementsByClassName('paragraph-js'); //pega um ou mais elementos com a classe descrita

const tags = document.getElementsByTagName('p'); //pega todos os elementos com a tag descrita

const myName = document.getElementsByName('links'); //utilizados para forms

const button = document.querySelector(".search"); //pega o primeiro elemento que ele encontrar com a classe descrita

const element = document.querySelector('#input-search'); // pega o primeiro elemento que ele encontrar
// . para classe
// # para id
// ou pode ser utilizados as tags diretamnte como p, h1, a ,etc
//posso selecionar tags com classes ou ids dentro delas tambem

const elements = document.querySelectorAll('p'); // pega todos os eleentos que ele encontrar


function genereteNumber() {

   const min = Math.ceil(document.getElementById('input-search').value); //pega um elemento com a ID descrita

   const max = Math.floor(document.getElementById("input-search-1").value); //pega um elemento com a ID descrita

   const value = document.querySelector('.result'); //pega o primeiro elemento que ele encontrar com a classe descrita

   const result = Math.floor(Math.random() * (max - min + 1)) + min; //gera um numero aleatorio entre o minimo e o maximo

   value.innerHTML = result; //coloca o resultado dentro do elemento selecionado

}