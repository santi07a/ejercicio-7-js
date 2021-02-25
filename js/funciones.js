// Funcion 1
const equiposMayoresEdad = equipos => equipos.filter(equipo => equipo.asignado.empleado.edad >= 18).length;

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

// Funcion 8
const trabajadoresTipo = ((equipos, tipo) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo.toLowerCase())
  .map(equipo => {
    const trabajador = {
      empleado: equipo.asignado.empleado
    };
    return trabajador;
  }));

// Funcion 10
const equiposTipoLocalidad = ((equipos, tipo, localidad) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo.toLowerCase() && equipo.asignado.poblacion.toLowerCase() === localidad.toLowerCase()));

// Funcion 11
const resumenEquipos = equipos => equipos.map(equipo => {
  const resumen = {
    id: equipo.id,
    poblacion: equipo.asignado.poblacion,
    provincia: equipo.asignado.provincia
  };
  return resumen;
});
