document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();

    var usuario = document.getElementsByName('usuario')[0].value;
    var password = document.getElementsByName('password')[0].value;

    if (usuario === '' || password === '') {
        document.getElementById('error').textContent = 'Los campos no pueden estar vacíos';
    } else if ((usuario === 'docente' && password === '123') || (usuario === 'alumno' && password === '234')) {
        alert('Acceso concedido y el cargo: ' + usuario);
        document.getElementById('error').textContent = '';
    } else {
        document.getElementById('error').textContent = 'Error en cargo /o Clave';
    }
});