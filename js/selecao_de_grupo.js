// primeira parte: selecao para adicao de novas palavras no grupo;
var elementoAtual = document.getElementsByClassName("grupoInterno");

Array.prototype.slice.call(elementoAtual).forEach(function(pegaElementoAtual){
    pegaElementoAtual.addEventListener('click', function(e){
	    console.log(this.innerHTML);

	// rearranjo dos botoes
	    var botaoNovoJogo = document.querySelector('.botaoNovoJogo');
	    botaoNovoJogo.classList.add('apareceElemento');

	    var botaoNovasPalavras = document.querySelector('.botaoNovasPalavras');
	    botaoNovasPalavras.classList.add('novaConfigBotaoNovasPalavras');
	// rearranjo dos botoes

	    botaoNovasPalavras.onclick = function(){
	    	// while(contador <= quantidade) {
		        // var novaPalavra = document.createElement('p');
		        // novaPalavra.innerHTML = prompt('Informe nova palavra');

		        // var existe = false; //entende-se que inicialmente não temos nada repetido
	    
		        // for (var posicao = 0; posicao < this.length; posicao++){
		        //     if (listaGrupoAnimais[posicao] == novoAnimal){
		        //         existe = true;
		        //         console.log('Esse animal já está na lista');
		        //         break
		        //     }
		        // }
		    
		        // if (existe == false){
		        //       listaGrupoAnimais.push(novoAnimal); //repetindo a pergunta para adicionar a lista
		        //       console.log(listaGrupoAnimais);
		        //       contador++;
		    
		        //     // adicionando no html
		        //       grupoAnimais.appendChild(novoAnimal);
		        // }
	      // }//while
		}//function
    });
});

// segunda parte: selecao para novo jogo;