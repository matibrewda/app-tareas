let archivoTareas = require('./funcionesDeTareas').archivoTareas;
let escribirJSON = require('./funcionesDeTareas').escribirJSON;

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(listarTareas);
        function listarTareas(item,index){
            console.log((index+1) +'. ' + item.titulo + ' - ' + item.estado);
        }
        console.log()
        break;
        case 'crear':

            let tareasNuevas = [{titulo : 'Aprender GIT',estado : 'pendiente'},]
            let tareasviejas = archivoTareas.leerArchivo();
            let datosAgregados = archivoTareas.escribirArchivo(tareasNuevas,tareasviejas);
            console.log(datosAgregados)
    
            break;   

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
