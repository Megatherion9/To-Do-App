//Requerir el paquete file-system para trabajar con archivos de texto
const fs = require('fs');

//Requerir el paquete 'colors'
const colors = require('colors');

//Crear arreglo donde se iran guardando las tareas (inicializar cn vacio)
let listadoTareas = [];

/*Funcion para almacenar persistentemente en la base de datos (archivo .json) */
const cargarDB = () => {
    try {
        listadoTareas = require('../db/data.json');

    } catch (error) {
        listadoTareas = [];
    }
}


/*Funcion para guardar una tarea en un la base de datos (que sera un archivo .json)*/
const guardarDB = () => {

    //Convierte un arreglo en un archivo de tipo JSON
    let data = JSON.stringify(listadoTareas);

    //En un archivo .json predefinido, guarda lo que contengan las variales
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}


/*Funcion para crear una tarea*/
const crear = (descripcion) => {

    cargarDB();
    let tarea = {
        descripcion,
        completada: false
    };

    //Agrega a nueva tarea creada al arreglo
    listadoTareas.push(tarea);
    //Llamar a la funcion guardarDB
    guardarDB();
    return tarea;
}


/*Funcion para listar en consola todas la tareas guardadas*/
const getListado = (completada) => {
    cargarDB();

    if (completada == '') {
        return listadoTareas;
    } else {
        let listadoTareasToShow = listadoTareas.filter(tarea => tarea.completada == completada);
        return listadoTareasToShow;
    }
}


/*Funcion para actualizar una tarea*/
const actualizar = (descripcion, completada) => {

    cargarDB();
    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoTareas[index].completada = completada;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoTareas.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoTareas.length === nuevoListado.length) {
        return false;
    } else {
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}