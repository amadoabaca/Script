 // SIDEBAR

function openNav() {
	document.getElementById("mySidebar").style.width = "300px";
	document.getElementById("main").style.marginLeft = "300px";
  }
  

  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
  }


// page loader

window.onload = function(){
    var contenedor = document.getElementById('contenedor_loader');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}


// typed

const typed = new Typed('.typed', {
	strings: [
		'Servicio Técnico',
		'Desarrollo Web',
		'Asesoramiento',
	],


	typeSpeed: 100, // Velocidadpara poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion,
	backSpeed: 75, // Velocidad para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '_', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

// whatsAppButton

function scrollFunction() {
    document.getElementById("float").style.visibility = "visible";
}

window.onscroll = scrollFunction;


