// Funcion 1
function equiposMayoresEdad(equipos, edad) {

}

// Funcion 2
function equiposProvincia(equipos, provincias) {

}
// Funcion 3
function provincias(equipos) {

}
// Funcion 4
const puestos = equipos.map(encargo => encargo.equipos.asignado.empleado.puesto)

// Funcion 5
const edadMedia = equipos.reduce((accu, elemento) => accum + elemento.equipos.asignado.empleado.edad, 0) / equipos.length;
// Funcion 6
