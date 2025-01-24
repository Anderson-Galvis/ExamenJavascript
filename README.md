# ExamenJavascript
Examen 

Se debe crear una aplicacion para gestionar tareas y eventos, el objetivo es generar tareas de manera dinamica 

Requerimientos 

1- Debe contar con una interfas de tablero kanba, el tablero debe estar dividido en tres columnas principales que representaran el flujo de las tareas 
las tres columnas son 
  *PENDIENTES
  *EN PROGRESO 
  *COMPLETADAS 

2- Gestion de tareas: Cada tarea debe tener la siguiente informacion

    - titulo   
    - Descripcion de tarea
    - Imagen relacionada con la tarea(opcional)
    - Fecha de inicio
    - Fecha finalizacion
    - Asignacion a una de las tres columnas 
    
3- Creacion de tareas : EL tablero debe permitir la creacion de nuevas tareas al agregar una tarea, esta se debe aparecer automaticamente en la columna correspondiente segun la asignacion realizada por el usuario 

4- Edicion de tareas: las tareas deben poder ser editadas en cualquier momento. permitiendo al usuario modificar:

    . Informacion de la tarea
    . Titulo
    . Descripcion
    . Fecha de inicio
    . Fecha de fin 
    . Imagen 

5- Movimiento de tareas: las tareas deben poder ser movidas entre columnas. cuando una tarea cambie de columna debe desaparecer de su columna original y aparecer en la nueva columna relacionada. 

6- Eliminacion de tareas: Cada tarea debe contar con un boton de eliminacion. cuando el usuario haga clic en ese boton, la tarea debe se eliminada de la vista.

7- Registro e inicio de sesion de usuario El tablero debe permitir el registro y el inicio de sesion.
    
    - No se necesitan regisrar ni niciar sesion para crear  tareas èrp estas se perderan cuando el usuario cierre la ventana del navegador

    - si un usuario esta registrado o inicio sesion todas las tareas que gestione deben ser almacenadas en un servidor. local json server

8- Persistencia de tareas. cuando un usuario inice sesion el tablero debe cargar todas las tareas que el haya guardado previamente. manteniendo las tareas en la columna en la que se encontraba el ultimo acceso. 

9 - validacion de entradas: El sistema debe validar que los campos de la tarea (titulo, descripcion, fechas) sean completos antes de permitir su creacion y edicion.

10- Estilo y diseño responsivo. la interfas debe ser sencilla y clara, y con un diseño responsivo que se adapte a distintos tamaños de pantalla, especialmente en dispositivos de escritior, luego tables y celulares.
