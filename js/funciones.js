// Funcion 1
const equiposMayoresEdad = (equipos, edad) => equipos.filter(equipo => equipo.asignado.empleado.edad >= edad);

// Funcion 2
const equiposProvincia = (elementos, provincia) => elementos.filter(elemento => elemento.asignado.provincia.toLowerCase() === provincia.toLowerCase());

// Funcion 3
const provincias = elementos => elementos.map(elemento => elemento.asignado.provincia).filter((provincia, i, provincias) => provincias.indexOf(provincia) === i)

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
})

// Funcion 9
const equiposPorTipo = elementos => {
  const tipos = elementos.map(element => element.tipo)
    .filter((element, i, arr) => arr.indexOf(element) === i);

  const resulatado = [];
  tipos.forEach(tipo => {
    const equipos = elementos.filter(equipo => equipo.tipo === tipo)
    resulatado.push({
      tipo,
      equipos
    })
  });
  return resulatado;
}
