// Funcion 1
const equiposMayoresEdad = elementos => elementos.filter(elemento => elemento.asignado.empleado.edad >= 18);

// Funcion 2
const equiposProvincia = elementos => elementos.filter(elemento => elemento.asignado.provincia === "Tarragona");

// Funcion 3
const provincias = elementos => elementos.map(elemento => elemento.asignado.provincia);

// Funcion 4
const puestos = elementos => elementos.map(encargo => encargo.asignado.empleado.puesto);

// Funcion 5
const edadMedia = elementos => elementos.reduce((accu, elemento) => accu + elemento.asignado.empleado.edad, 0) / elementos.length;

// Funcion 6
const equiposPorEdad = elementos => elementos.sort((a, b) => a.asignado.empleado.edad - b.asignado.empleado.edad);

// Funcion 7
const equiposTipo = ((elementos, tipo) => elementos.filter(elemento => elemento.tipo.toLowerCase() === tipo.toLowerCase()));

// Funcion 8
const trabajadoresTipo = ((elementos, tipo) => elementos.filter(elemento => elemento.tipo.toLowerCase() === tipo.toLowerCase())
  .map(elemento => {
    const trabajador = {
      empleado: elemento.asignado.empleado
    };
    return trabajador;
  }));

// Funcion 10
const equiposTipoLocalidad = ((elementos, tipo, localidad) => elementos.filter(elemento => elemento.tipo.toLowerCase() === tipo.toLowerCase() && elemento.asignado.poblacion.toLowerCase() === localidad.toLowerCase()));

// Funcion 11
const resumenEquipos = elementos => elementos.map(elemento => {
  const resumen = {
    id: elemento.id,
    poblacion: elemento.asignado.poblacion,
    provincia: elemento.asignado.provincia
  };
  return resumen;
});
