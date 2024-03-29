const { argv } = require('./config/yargs');
const { crear, listar, actualizar,borrar } = require('./TODO/TODO');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);

        break;

    case 'listar':
        let listado = listar();
        for (let tarea of listado) {
            console.log('==========TODO============'.green);
            console.log(tarea.descripcion);
            console.log(`Estado:${tarea.completado}`);

            console.log('=========================='.green);

        }

        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no admito');

        break;
}