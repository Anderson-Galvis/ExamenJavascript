// const data = {
//     name : "nombre",
//     pass : "contraseña"
//      };
//     fetch("http://localhost:3000", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//         ,

//     },
//     body: JSON.stringify(data),
// })
//      .then((response) => response.json())
//      .then((data) => {
//          console.log(data);
//      })
//      .catch((error) => {
//          console.error(error);
//     });




async function obtenerDatos() {
  try {
    let respuesta = await fetch('http://localhost:3000');
    let datos = await respuesta.json();
    console.log('Datos obtenidos:', datos);
  } catch (error) {
    console.error("Hubo un error:", error);
  }
}


var arrayTareas = {
  titulo: 'tarea1',
  descripcion: 'texto',
  imagen: 'img',
  fechaInicio: 'Fecha',
  fechaFin: 'fechaFIn',
  asignacion: 'pendiente'
}

const cadenaJson = JSON.stringify(arrayTareas);


//funcion que muestra el formulario para agregar la tarea 

const addTarea = document.getElementById('addTarea');
const modalTarea = document.getElementById('modalTarea')

addTarea.addEventListener('click', function () {
  modalTarea.innerHTML = `<h2>Añadir tarea a la lista </h2><br> 

    <form id="registroTarea">
    <div>
      <label for="Nombre Tarea">Titulo de la Tarea:</label><br>
      <input value="tituloTarea" type="text" id="tituloTarea" name="nameUser" placeholder="Nombre de la Tarea"/>
    </div>
    <div>
    <textarea value="textarea" id="descrpcionTarea"class="border" name="textarea" rows="5" cols="20">Describe breve mente la tarea a realizar </textarea>
    </div>
    <div>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      <label for="image">Agrege una Imagen:</label><br>
    </div>
    <div>
    <input type="date" id="FechaInic" name="fechaInic" value="2018-07-22" />
    <label for="fecha" id="fechaIni" name="fechaInicio" placeholder="Fecha Inicio de tarea" >Fecha inicio</label><br>
</div>
<div id="fechaFIn">
        <input type="date" id="fechaFin" name="fechaFIn" value="2018-07-22" />
        <label for="fecha" id="fechaFin" name="fechaFin" placeholder="Fecha FIn de tarea" >Fecha Terminacion</label><br>
</div>

<div class="caja">
    <select name="select" id="etiquetaAsignacion">
        <option value="value1">Pendientes</option>
        <option value="value2" selected>En Proceso</option>
        <option value="value3">Terminadas</option>
      </select>
</div>
  

    <div id="errorMessages"></div>            
    <input id="btnAddTarea" type="submit" value="Registrar" />
    </form>
    `
  agregarTarea()

});

//elementos y funciones para agregar la tarea 

const btnFormu = document.getElementById('RegistroTarea');
const cajaPendientes = document.getElementById('cajaPendientes');
const cajaProceso = document.getElementById('cajaProceso');
const cajaTerminados = document.getElementById('cajaTerminados');
const tituloTareas = document.getElementById('tituloTarea');
const descripcionTarea = document.getElementById('descripcionTarea');
const imgTarea = document.getElementById('avatar');
const fechaInicio = document.getElementById('fechaInicio');
const fechaFin = document.getElementById('fechaFin');
const etiquetaAsignacion = document.getElementById('etiquetaAsignacion')


function agregarTarea() {

  switch (etiquetaAsignacion) {

    case "Pendientes":

    cajaPendientes.innerHTML =
      arrayTareas["titulo"] = tituloTareas
      arrayTareas["descripcion"] = descripcionTarea
      arrayTareas["imagen"] = imgTarea;
      arrayTareas["fechaInicio"] = fechaInicio;
      arrayTareas["fechaFin"] = fechaFin;
      break;

    case "En proceso":
      cajaProceso.innerHTML =
      arrayTareas["titulo"] = tituloTareas
      arrayTareas["descripcion"] = descripcionTarea
      arrayTareas["imagen"] = imgTarea;
      arrayTareas["fechaInicio"] = fechaInicio;
      arrayTareas["fechaFin"]= fechaFin;
        break;
    case "Terminados":
      cajaTerminados.innerHTML = 
      arrayTareas["titulo"] = "hola"
      arrayTareas["descripcion"] = descripcionTarea;
      arrayTareas["imagen"] = imgTarea;
      arrayTareas["fechaInicio"] = fechaInicio;
      arrayTareas["fechaFin"]= fechaFin;
    break;

    default:

      console.log('No existe esa opcion')
    };



};


//funcion para darle el evento al boton para guardar la tarea 

const btnAddTarea = document.getElementById('btnAddTarea');

btnAddTarea.addEventListener('click',()=>{
    preventDefault();
 console.log('sirve')
})