window.addEventListener('load', ()=> {
	const display = document.querySelector('.calculatorDisplay');
	const keypadButtons = document.getElementsByClassName('keypadButton');

	const keypadButtonsArray = Array.from(keypadButtons);
	keypadButtonsArray.forEach( (button) => {
		button.addEventListener('click', ()=> {
			//console.log(button.innerHTML);
			calculadora(button, display)
		})
	});
});

function calculadora(button, display) {
	switch (button.innerHTML) {
		case 'C':
			borrar(display);
			break;

		case '=':
			calcular(display);
			break;

		default:
			actualizar(display, button);
			break;
	}
}

function borrar(display) {
	display.innerHTML = 0;
}

function calcular(display) {
	display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
	if (display.innerHTML == 0) {
		display.innerHTML = '';
	}
	display.innerHTML += button.innerHTML;
}