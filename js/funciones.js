// Funcion 1
const equiposMayoresDeEdad = equipos => equipos.filter(equipo => equipo.asignado.empleado.edad >= 18).length;

// Funcion 2
const equiposProvincia = equipos => equipos.filter(equipo => equipo.asignado.provincia === "Tarragona");

// Funcion 3
const provincias = equipos => equipos.map(equipo => equipo.asignado.provincia);

// Funcion 4
const puestos = equipos => equipos.map(encargo => encargo.asignado.empleado.puesto);

// Funcion 5
const edadMedia = equipos => equipos.reduce((accu, elemento) => accu + elemento.asignado.empleado.edad, 0) / equipos.length;

// Funcion 6
const equiposPorEdad = equipos => equipos.sort((a, b) => a.asignado.empleado.edad - b.asignado.empleado.edad);

// Funcion 7
const equiposTipo = ((equipos, tipo) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo.toLowerCase()));
console.log(equiposTipo(equipos, "sobremesa"));

// Funcion 9
