// Parametros por default en las funciones
//
const actividad = function (
 nombre = 'Walter White',
 actividad = 'Enseñar Química'
) {
 console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)
}
actividad('Frank', 'Aprender JavaScript')
actividad('Pedro', 'Creando un sitio web')
actividad('Antonio')
