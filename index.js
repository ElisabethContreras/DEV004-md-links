import { 
  existPath, 
  absolutePath, 
  convertToAbsolute, 
  existMdFile, 
  readFile,
  resultRegex,
  validateLinks } from './functions.js';
import chalk from 'chalk';
// import fs from 'fs';
// import axios from 'axios';
// import path from 'path';


// relativa
const doc = 'Ejemplo-1.md'
// absoluta
//const doc = 'C:/Users/elisa/OneDrive/Escritorio/Laboratoria clases/Md Links/DEV004-md-links/Ejemplo-1.md'
// no existe
//const doc = 'yensita.md'
//no es archivo .md
//const doc = 'Ejemplo-2.js'
//const doc = 'C:/Users/elisa/OneDrive/Escritorio/Laboratoria clases/Md Links/DEV004-md-links/Ejemplo-2.js'

// crear funcion mdLinks
function mdLinks(doc) {
  //reconocer si existe y mandar los mensajes
const existAPath = existPath(doc)
if (!existAPath === true) {
    console.log(chalk.bgRed('***Error: la ruta no existe, intente con otra ruta***'));
    process.exit();
   
}
 
//¿Es absoluta o relativa?
const absolute = absolutePath(doc)
if (absolute === false) {
   const convertPathToAbsolute = convertToAbsolute(doc)
  console.log(chalk.bgGreen(convertPathToAbsolute+ ' la ruta ahora es absoluta'));
    //console.log(chalk.bgRed(convertPathToAbsolute + ' ' + 'La ruta ahora es absoluta'))
   }else {
    console.log(chalk.bgCyan('la ruta ya es absoluta, no necesita conversión'))
   
}

//¿Existe algún archivo?
const fileMd = existMdFile(doc)
if(fileMd === false){
    console.log(chalk.bgRed('Ups! El archivo no es .md, por el momento sólo leemos archivos .md'));
    process.exit();
} //else{
   // console.log(chalk.bgGreen('yipiii!!!, se encontraron archivos md'));
//}

// Leer el archivo
readFile(doc)
  .then((data) => {
    const resultRegexIndex = resultRegex(data, doc);
//Validar el archivo, si tiene o no links. Da un booleano como resultado
    validateLinks(resultRegexIndex)
      .then((resultados) => {

       console.log(resultados);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(chalk.bgRed('Ocurrió un error al leer el archivo:', error));
  });

}
mdLinks(doc)