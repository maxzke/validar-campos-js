const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const msgEnviado = document.getElementById('enviado');
const cargando = document.getElementById('cargando');

const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('reset');

const formularioEnviar = document.getElementById('enviar-mail');

evenListeners();

function evenListeners(){
    //Carga al iniciar la pagina
    document.addEventListener('DOMContentLoaded',inicioApp);   
    
    //Campos del Formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //BtnEnviar Click
    btnEnviar.addEventListener('click', enviarEmail);

    // Boton de reset
    btnReset.addEventListener('click', resetFormulario);

    //
}

function inicioApp(){
    //deshabilitar BtnEnviar
    msgEnviado.hidden = true;
    cargando.hidden = true;
    btnEnviar.disabled = true;
}

// Resetear el formulario 
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}

//valida campo vacío
function validarCampo(){
    //valido la longitud del texto
    validarLongitud(this);

    //validar el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    //valido campos llenos
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
    }else{
        btnEnviar.disabled = true;
    }
}

//Valida longitud de texto y colorea verde/rojo
function validarLongitud(campo){
    //console.log(campo);
    if (campo.value.length > 0) {
        //console.log('hay algo');
        campo.style.borderColor = "green";
        //campo.style.color = "green";
        campo.classList.remove('text-danger');
    }else{
        //console.log('campo vacio');
        campo.style.borderColor = "red";
        //campo.style.color = "red";
        campo.classList.add('text-danger');
    }
}

function validarEmail(campo){
    //console.log(campo);
    const validaArroba = campo.value;
    if (validaArroba.indexOf('@') !== -1) {
        //console.log('si hay @');
        campo.style.borderColor = "green";
        campo.classList.remove('text-danger');
    }else{
        //console.log('no hay @');
        campo.style.borderColor = "red";
        campo.classList.add('text-danger');
    }
}

//click al Boton Enviar
function enviarEmail(e){
    
    //spinner
    cargando.hidden = false;
    console.log('enviado');

    setTimeout(() => {
        
        //ocultar spinner 
        cargando.hidden = true;
        //mostrar enviado
        msgEnviado.hidden = false;
    }, 3200);

    

    e.preventDefault();

}