// formWhatsapp

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '543462680500';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let asunto = document.querySelector('#asunto').value
        let msj = document.querySelector('#mensaje').value
        let mensaje = 'send?phone=' + telefono + '&text=Hola, mi nombre es ' + nombre + '%0AASUNTO:%0A' + asunto + '%0AMENSAJE:%0A' + msj + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});


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