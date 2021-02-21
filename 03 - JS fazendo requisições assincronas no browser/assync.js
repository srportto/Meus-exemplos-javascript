// ******************************************************
// Requisições assincronas, ou seja, sem travar o usuario
// ******************************************************

//
// #1 - Ajax puro/ XMLHttpRequest
// 

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/srportto');
xhr.send(null);

xhr.onreadystatechange = function(){
    // se a requisição ja respondeu faça ...
    if (xhr.readyState ===4){
        console.log(JSON.parse(xhr.responseText));
    }
}

//
// #2 - ajax puro + Promises (promesas)
// 
 
var minhaPromise = function (){
    return new Promise(function(resolve, reject){

        var xhr2 = new XMLHttpRequest();

        xhr2.open('GET', 'https://api.github.com/users/diego3g');
        xhr2.send(null);

        xhr2.onreadystatechange = function(){
            // se a requisição ja respondeu faça ...
            if (xhr2.readyState ===4){
                if(xhr2.status === 200){
                    resolve(JSON.parse(xhr2.responseText));
                }else {
                    reject('Erro na requisição');
                }
                
            }
        }

    });

}

// invoco minha promise
minhaPromise()
    // se sucesso
    .then(function(response){
        console.log(response);
    })

    // Para erro
    .catch(function(error){
        console.warn(error);
    });


//
// #3 - usando a biblioteca axios para trabalhar com requisições ajax com Promises (promesas)
// 

// invocando promesa via axios
axios.get('https://api.github.com/users/srportto')
    // se sucesso
    .then(function(response){
        console.log(response);
    })

    // Para erro
    .catch(function(error){
        console.warn(error);
    });


// implementar assync await 
 


    