const formRegistro = document.getElementById('formRegis').value;
const nameUser = document.getElementById('nameUser').value;
const emailUser = document.getElementById('email').value;
const password = document.getElementById('password').value;
const btnRegistro = document.getElementById('btnRegistro').value;



const url = ("http://localhost:3000");
var datosUser = { nombreUser: nameUser,
                  emailUser: emailUser,
                  password: password,
};

fetch(url, {
  method: "POST", 
  body: JSON.stringify(datosUser), 
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));

