function validarCodigo() {
    const input = document.getElementById('codigo');
    const codigo = input.value;
    const codigoCorrecto = "Hola Mundo";
    
    if (codigo === codigoCorrecto) {
        window.location.href = "felicitaciones.html";
    } else {
        M.toast({html: 'Código incorrecto, inténtalo de nuevo.'});
        input.value = '';  // Limpia el input
    }
}