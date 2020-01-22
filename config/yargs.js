//En este archivo se definen las validaciones automaticas de los comandos 

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea'
};

const completada = {
    demand: false,
    alias: 'c',
    default: false,
    desc: 'Marca si una tarea ha sido completada'
};

const crear = {
    descripcion,
    completada
};

const actualizar = {
    descripcion,
    completada
};

const listar = {
    completada
};

const borrar = {
    descripcion
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', crear)
    .command('actualizar', 'Actualiza una tarea existente', actualizar)
    .command('listar', 'Lista todas las tareas existentes', listar)
    .command('borrar', 'Borra una tarea existente', borrar)
    .help()
    .argv;

module.exports = {
    argv
}