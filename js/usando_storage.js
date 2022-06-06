var botaoDesistir = document.querySelector('.botaoDesistir');
botaoDesistir.addEventListener('click',function(){
	var palavras = JSON.parse(localStorage.getItem("palavras"));
	const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
	console.log(palavraAleatoria);

	var novo = document.createElement('p');
	novo.appendChild(palavraAleatoria);
	var teclas = document.querySelector('.teclas');
	teclas.appendChild(novo);

});