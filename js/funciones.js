// Funcion 1
const equiposMayoresDeEdad = equipos => equipos.filter(equipo => equipo.asignado.empleado.edad >= 18).length;

// Funcion 2
const equiposProvincia = equipos => equipos.filter(equipo => equipo.asignado.provincia === "Tarragona");

// Funcion 3
const provincias = equipos => equipos.map(equipo => equipo.asignado.provincia);
console.log(provincias(equipos));

// Funcion 4
const puestos = equipos => equipos.slice(encargo => encargo.asignado.empleado.puesto);
console.log(provincias(equipos));

// Funcion 5
const edadMedia = equipos => equipos.reduce((accu, elemento) => accu + elemento.asignado.empleado.edad, 0) / equipos.length;
console.log(provincias(equipos));

// Funcion 6
const equiposPorEdad = equipos => equipos.sort((a, b) => a.asignado.empleado.edad - b.asignado.empleado.edad)

// Funcion 7
const equiposTipo = ((equipos, tipo) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo.toLowerCase()))
console.log(equiposTipo(equipos, "sobremesa"))
