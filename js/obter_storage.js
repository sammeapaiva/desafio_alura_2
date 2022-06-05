// jogo padrão
var text = document.querySelectorAll("div.grupoInterno p");
var arrayPalavras = [];

for (var palavra = 0; palavra < text.length; palavra++){
	var cadaPalavra = text[palavra];
	cadaPalavra = cadaPalavra.innerText;
	arrayPalavras.push(cadaPalavra);
}
	console.log(arrayPalavras);
	var palavraJson = JSON.stringify(arrayPalavras);
	localStorage.setItem('palavras',palavraJson);
	console.log(localStorage);
// aprimorar storage a cada clique de escolha de grupo, 
// após serem adicionadas as palavras, etc.

// isso limpando o localStorage anterior selecionado