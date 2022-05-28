var botaoNovoJogo = document.querySelector('.botaoNovoJogo');
var imagensArray = document.querySelectorAll("div.container_imagens > img");
var letrasErradas = ['1','2'];
// console.log(letrasErradas.length);

botaoNovoJogo.addEventListener('click', function(){
	for (var i = 0; i <= letrasErradas.length; i++){
		var imagem = imagensArray[i];
		imagem.classList.remove('retiraElemento');
		// console.count();
	}
});