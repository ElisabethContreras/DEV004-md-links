import { existPath, absolutePath, convertToAbsolute, existMdFile, readFile, rexe } from './functions.js';
import chalk from 'chalk';

// relativa
//const doc = 'Ejemplo-1.md'
// absoluta
//const doc = 'C:/Users/elisa/OneDrive/Escritorio/Laboratoria clases/Md Links/DEV004-md-links/Ejemplo-1.md'
// no existe
//const doc = 'yensita.md'
//no es archivo .md
const doc = 'Ejemplo-2.js'
//const doc = 'C:/Users/elisa/OneDrive/Escritorio/Laboratoria clases/Md Links/DEV004-md-links/Ejemplo-2.js'


//reconocer si existe y mandar los mensajes
const existAPath = existPath(doc)
if (!existAPath === true) {
    console.log(chalk.bgRed('***Error: la ruta no existe, intente con otra ruta***'));
    process.exit();
   
}
 
//¿Es absoluta o relativa?
const absolute = absolutePath(doc)
// if(absolute === true){
//     console.log(chalk.bgCyan('la ruta es absoluta'));
// } else{
//     console.log(chalk.bgRed('la ruta es relativa'));
// }
if (absolute === false) {
   const convertPathToAbsolute = convertToAbsolute(doc)
  console.log(chalk.bgGreen(convertPathToAbsolute));
    //console.log(chalk.bgRed(convertPathToAbsolute + ' ' + 'La ruta ahora es absoluta'))
   
 }else {
    console.log(chalk.bgCyan('la ruta ya es absoluta, no necesita conversión'))
   
}

//¿Existe algún archivo?
const fileMd = existMdFile(doc)
if(fileMd === false){
    console.log(chalk.bgRed('***Error: No se encontraron archivos .md'));
    process.exit();
} //else{
   // console.log(chalk.bgGreen('yipiii!!!, se encontraron archivos md'));
//}


// Leer el archivo
readFile(doc)
.then(data => {
//   console.log('Contenido del archivo:', data);
const result =  rexe(data,doc) // array3propo
// validar(rexe)

 console.log(result,57);

})
.catch(error => {
  console.error('Ocurrió un error al leer el archivo:', error);
});

