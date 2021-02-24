// Funcion 1
const equiposMayoresDeEdad = equipos => equipos.filter(equipo => equipo.asignado.empleado.edad >= 18).length;

// Funcion 2
const equiposProvincia = equipos => equipos.filter(equipo => equipo.asignado.provincia === "Tarragona");

// Funcion 3
function provincias(equipos) {

}
// Funcion 4
const puestos = equipos.map(encargo => encargo.equipos.asignado.empleado.puesto);

// Funcion 5
const edadMedia = equipos.reduce((accu, elemento) => accu + elemento.equipos.asignado.empleado.edad, 0) / equipos.length;

// Funcion 6
