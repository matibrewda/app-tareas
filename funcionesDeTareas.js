const fs = require('fs');
const {
    json
} = require('stream/consumers');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));

    },
    escribirArchivo: function (tareasNuevas, tareasViejas) {

        console.log('tareasNuevas', tareasNuevas)
        let datos = JSON.parse(tareasViejas)

        datos.push(JSON.parse(tareasNuevas))
        console.log('datos', JSON.stringify(datos))

        fs.writeFileSync(this.archivo, JSON.stringify(datos))
        
    }
}
module.exports = archivoTareas;

/*let escribirJSON = {
    archivo: 'tareas.json',
    escribirArchivo: function(tareasNuevas,tareasviejas){
        let datosConvertidos = JSON.stringify(tareasNuevas)
        let nuevosDatos = tareasviejas.concat(datosConvertidos)
        fs.writeFileSync(this.archivo, nuevosDatos)
        return datosConvertidos;
    }
}
module.exports = escribirJSON;*/