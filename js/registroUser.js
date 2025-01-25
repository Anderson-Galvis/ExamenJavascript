
//Traemos el formulario
const formRegistro = document.getElementById('registrationForm');
const btnRegistro = document.getElementById('btnRegistro');



// evento para enviar los datos al servidor y limpia el formulario de una 
formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nameUser = document.getElementById('nameUser').value;
  const emailUser = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let datosUser = {
    nombreUser: nameUser,
    emailUser: emailUser,
    password: password,
  }
  guardarDatos(datosUser);
  formRegistro.reset();
});



async function guardarDatos(datosUser) {
  const url = ("http://localhost:3000/user");


  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosUser)
    });

    if(!response.ok){
        alert("sin respuesta")
    }

  } catch (error) {
     console.log(error)
  }
}

