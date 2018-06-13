const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'crea tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra el elemento de la lista de las tareas por hacer', {
        descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}