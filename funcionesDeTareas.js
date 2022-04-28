const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));

    },
    escribirArchivo: function(tareasNuevas,tareasviejas){
        let datosConvertidos = JSON.stringify(tareasNuevas)
        let nuevosDatos = tareasviejas.concat(datosConvertidos)
        fs.writeFileSync(this.archivo, nuevosDatos)
        return datosConvertidos;
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