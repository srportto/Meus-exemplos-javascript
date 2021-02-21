const express = require('express');

// server as vezes é criado com o nome app
const server = express();

// pedindo para o express receber e entender minhas requisições como JSON
// isso fara o express entender que mandei o json no corpo da requisição
// nas requisições post, put e etc
server.use(express.json());


/*
******************************************************************
**** inico da area do meu primeiro CRUD com node 
******************************************************************
*/

// Array que servira como base de dados para o CRUD */
const users2 = ["Caique", "Luciana", "Evelin", "Monica"];


// definicção de um middleware global...
// o parametro next recebido dentro do middle global nos permite 
// interceptar algo e depois voltar para o fluxo da aplicação invocando a função 
// next
server.use((req, res, next) => {
    console.log('Opa, bateram em uma de nossas rotas...');
    
    // calculando o tempo de resposta de uma requisição
    // para isso usá-se em par o ' console.time('textoDescritivo');' e
    // ' console.timeend('textoDescritivo');'
    console.time('TempoDeResposta');

    // volta ao fluxo de trabalho normal, ou seja, volta ao fluxo da rota chamada
    next();

    console.timeEnd('TempoDeResposta');
})



// middleware especifico
// nesse caso ele está interceptando uma requisição para validar se algo essencial 
// para a rota foi enviado na requisição, e caso não tenha cido, será devolvido um 
// status code de erro
function checkUserExist (req, res, next){
    if (!req.body.nome){
        return res.status(400).json({error: 'O nome do usuario é obrigatorio'});
    }else {
        return next();
    }
}


// middleware especifico
// nesse caso ele está interceptando uma requisição para validar se o usuario o index
// informado existe no array

function checkUserExistInArray (req, res, next){

    if (!users2[req.params.index]){        
        return res.status(400).json({error: 'Usuario não existe'});
    }else {
        return next();
    }
}













// endpoint's da API
// localhost:3000/users
// localhost:3000/users/{id}


/*
  Explicação sobre os parametros 

  Query params          ==> ?test=1  - Opcional na requisição
  Route/patch params    ==> /test/1  - obrigatorio para a requisição

  // corpo da requisição
  Request body = {"nome": "caique", "email": "ceeh1100@gmail.com" }
*/


/*
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''' get's ou reads ou consultas 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/

// consulta todos ou lista todos os usuarios 
// Detalhes da rota ==> localhost:3000/users
server.get('/users', (req, res) => {
    if (users2.length ===0){
        return res.send('Nao há usuarios cadastrados');
    } else{
        return res.json(users2);
    }  
})

// consulta um usuario
// Detalhes da rota ==> localhost:3000/users/{id}
server.get('/users/:id', (req, res) => {
    // para retornar um texto
    //return res.send('Hello world');
  
    //capturando route ou patch params
    // para tal, será adicionado para a url 'localhost:3000/users' o route params id, ex.:    
    // localhost:3000/users/:id ou ...
    // localhost:3000/users/1
    const id = req.params.id;

    //capturando query params
    // para tal, será passado para a url 'localhost:3000/teste' o query params nome, ex.:    
    // localhost:3000/users/1?nome=NomeNaPessoal ou...
    // localhost:3000/users/1?nome=Caique
    const nome = req.query.nome;

    if (nome === undefined){
        // para retornar um json
        return res.json(
            {   message: `Hello world`, 
                id: `meu identificador é: ${id}`,
                amg: `Esse é meu amigo ${users2[id]}`
            }
        );
    } else{
        // para retornar um json
        return res.json(
            {
                message: `Hello ${nome}`,
                id: `meu identificador é: ${id}`,
                amg: `Esse é meu amigo ${users2[id]}`
            }
        );
    }
});

/*
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''' post's ou create's ou inclusão
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/
server.post('/users', checkUserExist, (req, res) => {
    // abaixo usa-se desestruturacao ou seja ... ao inves de 
    // usar esse comando 'const nome = req.body.nome ' usá-se o abaixo (ES6)
    let {nome} = req.body;

    //adicionando o nome que veio no corpo da requisição ao final do array
    users2.push(nome);

    return res.json(users2);
})


/*
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''' put's ou update's ou atualização
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/
// // rota da requisição ==> localhost:3000/users/{index}
server.put('/users/:index', checkUserExist,checkUserExistInArray, (req, res) => {
    // abaixo usa-se desestruturacao ou seja ... ao inves de 
    // usar esse comando 'const nome = req.body.nome ' usá-se o abaixo (ES6)
    let {nome} = req.body;
    let {index} = req.params;

    //mudando o nome do usuario do array de acordo com a posição recebida via patch params
    users2[index] = nome;

    return res.json(users2);
})


/*
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''' delete's ou exclusões
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
*/
// // rota da requisição ==> localhost:3000/users/{index}
server.delete('/users/:index', (req, res) => {
    let {index} = req.params;

    //deletando um usuario do array na posição tal 1 ocorrencia
    users2.splice(index,1);

    return res.send("excluido com sucesso");
})

// Porta que o node esta escutando/recebendo requisições ...
// rota da requisição ==> localhost:3000/users
server.listen(3000);

