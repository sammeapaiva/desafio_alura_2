//PARTE 1 - SOBE E DESCE
var tira1 = document.querySelector('.tira1');
var imgTira1 = document.querySelector('.abaTira1');
var botoes = document.querySelector('.botoes');

var backg = document.querySelector('.container_backg');

function move(elem, duracao){
	imgTira1.classList.add('perdeShadow');
	imgTira1.classList.remove('ganhaShadow');

	var heightBackg = backg.clientHeight;
	heightBackg = heightBackg - heightBackg * 0.15;
	var topo = window.pageYOffset + tira1.getBoundingClientRect().top;
	var id = setInterval(deslocamento,duracao)
	function deslocamento(){
		topo = topo + 10;
		elem.style.top = topo + 'px';

		if (topo >= heightBackg){
			botoes.classList.remove('retiraElemento');
			clearInterval(id);
		}
	}
}

function back(elem, duracao){
	botoes.classList.add('retiraElemento');
	imgTira1.classList.remove('perdeShadow');
	imgTira1.classList.add('ganhaShadow');

	var heightBackg = backg.clientHeight;
	var topo = window.pageYOffset + tira1.getBoundingClientRect().top;
	var id = setInterval(deslocamento,duracao)
	function deslocamento(){
		topo = topo - 10;
		tira1.style.top = topo + 'px';

// considerando que o top inicial é 65%
		if(topo <= heightBackg * 0.65){
			clearInterval(id);
		}
	}
}