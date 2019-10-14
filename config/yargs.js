
const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descipción de la tarea'

}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemeto TODO', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion, completado

    })
    .command('borrar', 'Elimina una tarea de la lista TODO', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}