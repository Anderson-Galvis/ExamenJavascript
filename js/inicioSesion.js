

// Crear la funcion para traer los datos del usuario y verificar si cumple con alguno de los usuarios inscritos 


async function obtenerDatos() {
    //hacemos la solicitud al servidor para traer los  datos de los usuarios registrados. 
    const url = 'http://localhost:3000/user';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            alert('error al obtener datos');
            return;
        }
        const datosUser = await response.json();

        //logica o proceso con los datos 
        return datosUser;
    } catch (error) {
        console.log('Error en la solicitud:', error);
    }
};


//login 

async function loginUser(userName, passwordUser) {
    if(!userName || !passwordUser){
        alert('Por Favor, ingresa tu nombre de usuario y contraseña.');
        return;
    }

    try {
        //traemos los datos
        const datosUser = await obtenerDatos();
    
        const user = datosUser.find(user => user.nombreUser === userName && user.password   === passwordUser);
        //comparamos los datos si son los mismos que los que  usuario ingresa 

        if(user){
            console.log('login exitoso! Bienvenido.', datosUser);
        }else{
            alert('Credenciales incorrectas.');
            }
    }catch (error) {
        console.log('Error al intentar hacer login :', error);
    }
};


//datos para el evento del formulario 
//llamar los elementos que se usaran para leer todo el formulario 

const formInicioSesion = document.getElementById('formInicioSesion');

//agregamos el evento para cuando se inicie sesion 
formInicioSesion.addEventListener('submit', function(e){
    e.preventDefault();

//obtenemos los datos del imput del usuario
const userName = document.getElementById('nameUser').value;
const passUser = document.getElementById('contraInicioSe').value;

    loginUser(userName, passUser);
});


