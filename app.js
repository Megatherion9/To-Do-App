// const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;

const tasks = require('./tasks/tasks.js');

//Requerir el paquete 'colors'
const colors = require('colors');

/*
Define el comando a introducir via consola
argv entre corchetes se indica la posicion del parametro digitado
En este caso toma la posicion 0
*/
let comando = argv._[0];

//Se definen los parametros que pueden ser digitados en el comando
switch (comando) {
    case 'crear':
        let tarea = tasks.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = tasks.getListado(argv.completada);

        console.log('=======Tareas======='.green);

        for (let tarea of listado) {
            console.log('===================='.green);
            console.log(tarea.descripcion.yellow);
            console.log('Completada: ', tarea.completada);
        }
        console.log('===================='.green);

        break;

    case 'actualizar':
        let actualizada = tasks.actualizar(argv.descripcion, argv.completada);
        console.log(actualizada);

        break;

    case 'borrar':
        let borrada = tasks.borrar(argv.descripcion);
        console.log(borrada);

        break;

    default:
        console.log('Comando no reconocido');
}