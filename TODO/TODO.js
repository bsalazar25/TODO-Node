const fs = require('fs');



let listadoTODO = [];


const leerDB = () => {

    try {
        listadoTODO = require('../db/data.json');

    } catch (error) {
        listadoTODO = [];
    }


}

const guardaDB = () => {

    let data = JSON.stringify(listadoTODO);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }

    leerDB();

    listadoTODO.push(porHacer);

    guardaDB();

    return porHacer;

}


const listar = () => {

    leerDB();

    return listadoTODO;

}

const actualizar = (descripcion, completado = true) => {

    leerDB();


    let index = listadoTODO.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    console.log(index);

    if (index >= 0) {
        listadoTODO[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    leerDB();

    let nuevoListado = listadoTODO.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if (listadoTODO.length === nuevoListado.length) {
        return false;

    } else {
        listadoTODO = nuevoListado;
        guardaDB();
        return true;

    }

}


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}