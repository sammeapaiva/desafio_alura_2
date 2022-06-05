// preciso fazer tanto no HTML como fazer arrays pra serem guardadas lá
// jogo

// var grupoAnimais = document.querySelector('.grupoAnimais');
// var listaGrupoAnimais = [];

// var contador = 1;
// var quantidade = 2;
// // assim que eu vou fazer a logica do limite de letras

// var botaoNovasPalavras = document.querySelector('.botaoNovasPalavras');

// botaoNovasPalavras.addEventListener('click', function(){
//     while(contador <= quantidade) {
//         var novoAnimal = document.createElement('p');
//         novoAnimal.innerHTML = prompt('Informe o animal');
    
//         var existe = false; //entende-se que inicialmente não temos nada repetido
    
//         for (var posicao = 0; posicao < listaGrupoAnimais.length; posicao++){
//             if (listaGrupoAnimais[posicao] == novoAnimal){
//                 existe = true;
//                 console.log('Esse animal já está na lista');
//                 break
//             }
//         }
    
//         if (existe == false){
//               listaGrupoAnimais.push(novoAnimal); //repetindo a pergunta para adicionar a lista
//               console.log(listaGrupoAnimais);
//               contador++;
    
//             // adicionando no html
//               grupoAnimais.appendChild(novoAnimal);
//         }
//       }
// });

// grupo pré-selecionado:geral


var lista = document.querySelector('.listaDeGrupos');
var blocoGeral = document.querySelector('.blocoGeral');

var botaoNovosGrupos = document.querySelector('.botaoNovosGrupos');
botaoNovosGrupos.addEventListener('click',function(event){
    event.preventDefault();
    var explicacaoDaTela = document.querySelector('.explicacao');
    explicacaoDaTela.classList.add('retiraElemento');

    var texto = document.createElement('h1');
    texto.innerHTML = prompt('Digite novo grupo de palavras');

    if (texto.innerHTML == null || texto.innerHTML ==""){
        console.log('Nada adicionado');
    } else{
        const novoGrupo = document.createElement('div');
        novoGrupo.appendChild(texto);
        novoGrupo.classList.add('grupoInterno');
        lista.appendChild(novoGrupo);
        blocoGeral.appendChild(lista);

// primeiro, testar se consigo criar uma função que pegue os grupoInterno num geral,
// senão, criar esse onclick para os novos grupos
        novoGrupo.onclick = function selecaoDeGrupo(){
            let grupo = novoGrupo.textContent;
        }
    }
});