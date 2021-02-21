"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = ['caminhar', 'correr'];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo todo');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}();

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  minhaLista.addTodo();
};

var arr = [1, 3, 4, 5, 8, 9];
/*
-----------------------------------------
Tratando array com ES6
-----------------------------------------
*/
// Usando MAP , permite que eu faça ações com um array e gere um novo com essas
// ações implementadas ... no exemplo abaixo, cria-se um novo array com cada item 
// do anterior somado ao index, ou seja
// para a entrada com o array const arr =[1, 3, 4, 5, 8, 9]; a saida será
//  [1, 4, 6, 8, 12, 14]
//

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // com arrow function, substitui funções anonimas (sem nome)
// quando recebe apenas 1 paramentro

var newArr2 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr2); // com arrow function, substitui funções anonimas (sem nome)
// quando recebe apenas 2 paramentro

var newArr3 = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr3); // Usando reduce - usado para montar uma visão resumida de um array
// abaixo será usada para somar todos os elementos do array... percorre todo 
// o array somando valor total mais valor do index do array
//
//Obs.: total inicia em 0

var soma = arr.reduce(function (total, proxValor) {
  return total + proxValor;
});
console.log(soma); // Usando filter - Usado para filtrar algo de um array , é passa uma condição e 
// os elementos do array atual que atender (for verdade) serão mantidos no novo 
// array e os que não (false) , não serão 
//

var arrayFilter = arr.filter(function (item) {
  // condicional para filtragem 
  return item % 2 === 0;
}); // exeibe novo array(filtrado)

console.log(arrayFilter); // Usando find - usado pra procurar algo dentro de um array
//

var arrayFind = arr.find(function (item) {
  return item === 4;
});
console.log(arrayFind); // Passando valores padroes para os parametros das funções 

function somarAlgo() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  console.log(a + b);
}

somarAlgo(1, 2);
/*
-----------------------------------------
desestruturação de objetos/array
-----------------------------------------
*/

var usuario1 = {
  nome: 'caique1',
  idade: 25,
  endereco: {
    cidade: 'Osasco1',
    estado: 'SP'
  },
  sexo: 'M'
};
var usuario2 = {
  nome2: 'caique2',
  idade2: 25,
  endereco2: {
    cidade2: 'Osasco2',
    estado2: 'SP'
  },
  sexo: 'M' // exemplo de como obter os dados do objeto sem desestruturação

};
var nome = usuario1.nome;
var cidade = usuario1.endereco.cidade;
console.log('1 - Meu nome é ' + nome + ' e minha cidade é ' + cidade); // com destruturação

var nome2 = usuario2.nome2,
    cidade2 = usuario2.endereco2.cidade2;
console.log('2 - Meu nome é ' + nome2 + ' e minha cidade é ' + cidade2); //#1 - Em arrays 

var arr1 = ['John', 'Smith']; // destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]

var firstName = arr1[0],
    surname = arr1[1];
alert(firstName); // John

alert(surname); // Smith

/*
-----------------------------------------
Utilizando template literals
-----------------------------------------
*/

var nome4 = 'Caique';
var idade4 = 25; // sem template literal do ES6

console.log('Meu nome é ' + nome4 + ' e tenho ' + idade4 + ' anos.'); // com template literal do ES6

console.log("Meu nome \xE9 ".concat(nome4, " e tenho ").concat(idade4, " anos."));
/*
-----------------------------------------
object short syntex 
-----------------------------------------
*/
// sem o 'object short syntex' do ES6

var usuario3 = {
  nome4: nome4,
  idade4: idade4,
  empresa: 'Rocketseat'
};
console.log(usuario3); // com o 'object short syntex' do ES6

var usuario4 = {
  nome4: nome4,
  idade4: idade4,
  empresa: 'Rocketseat2'
};
console.log(usuario4);
