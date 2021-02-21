var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


// Recuperando dados persistidos na localStorage do browser para remontar o array de todos
// 
// obs.: no final da instrução abaixo o '|| []' é uma tratativa para quando não exista 
// dados no meu 'localStogage' possa ser montado um array  vazio e não causar erro
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];



function renderTodos(){
    // para o elemento lista (ul) ao qual a variavel se refere, quando invocada
    // a função 'renderTodos', a instrução abaixo apagará todos os elementos dentro
    // dessa lista para recrialos

    // Obs.: Isso evitará duplicidade de informações, é um limpa lista
    listElement.innerHTML = '';


    // for exclusivo para percorrer arrays 
    // pega cada ocorrencia do array 'todos' e retorna na variavel 'todo'
    for (todo of todos){
        // criado o elemento li da lista 
        var todoElement = document.createElement('li');

        // Cria o texto de exibição do li
        var todoText = document.createTextNode(todo);

        // capturando o index do item do array para passar referencia para delecao
        var pos = todos.indexOf(todo);
        
        // para montar link de exclusão 
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);



        //adiciona texto do li ao li 
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        //adiciona elemento li a ul
        listElement.appendChild(todoElement);

        saveToStorage();
    
    }
}

renderTodos();

function addTodo(){
    // obtendo o valor digitado pelo usuario na caixa de input 
    var inputText = inputElement.value;

    //adicionando o texto capturado do input ao final array que renderizacao da lista
    todos.push(inputText);

    // limpanto caixa de input para nova inclusao
    inputElement.value = '';

    // remontando(render) a lista novamente na pagina
    renderTodos();
    
}

// implementa a escuta para click do botão e acionar o metodo addTodo 
buttonElement.onclick = addTodo;


function deleteTodo(pos){
    // splice remove algo de um array com base na posicao inicial e quantidade
    // ex.: recebe (34,1) => Ira remover a posicao 34 e somente ela
    todos.splice(pos,1);
    renderTodos();
 }

// Persistindo dados na localStorange do browser 
// Usando o local storage - salva os dados em uma area no navegador que permite
// a recuperação , usa-se estrutura não relacional (chave e valor) JSON

function saveToStorage(){
    // usando a variavel global 'localStorage' para guardar os dados 
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

 function mostraAlerta(){
     alert('O mouse passou no botao teste mouseover');
 }
 
  function mostraAlertaSucess(){
     alert('To do adicionado com sucesso');
 }
 
         //Como selecionar qualquer elemento (html) para manipular

        //selecionar pelo id da tag/elemento 
        //
            /* 
                Obs.: get pelo ID retorna apenas um unico elemento, pois o id é unico 
                ja para os demais name e class não e retorna um vetor/array
            */

var inputElement = document.getElementById('nome');

console.log(inputElement);


var porTagName = document.getElementsByTagName('ul');
console.log(porTagName);

var porQuery = document.querySelector('ul li.testquery');
console.log( porQuery);

console.log(porQuery.value);


// criacao de elemento link
var linkElement = document.createElement('a');

//settando atributo ao novo elemento
linkElement.setAttribute('href','http://google.com');

//criando texto de referencia ao link
var textElement = document.createTextNode('Acessar google');

// adicionando o texto do link ao link
linkElement.appendChild(textElement);


// adicionar o elemento criado dentro do HTML da pagina 
var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);


// estilizando(css) com javaScript

var divApp = document.querySelector('#app2');

divApp.style.width =100;
divApp.style.height =40;
divApp.style.backgroundColor = '#f0f';
 
    