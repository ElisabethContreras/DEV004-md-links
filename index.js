import { existPath, absolutePath, convertToAbsolute, existMdFile, readFile } from './functions.js';
import chalk from 'chalk';

// relativa
//const doc = 'Ejemplo-1.md'
// absoluta
//const doc = 'C:/Users/elisa/OneDrive/Escritorio/Laboratoria clases/Md Links/DEV004-md-links/Ejemplo-1.md'
// no existe
const doc = 'yensita.md'
//no es archivo .md
//const doc = 'Ejemplo-2.js'
// const prueba = existPath(doc)
// console.log(prueba);
// console.log( existPath(doc));


//reconocer si existe y mandar los mensajes

// existPath(doc).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err)
// })

//¿Es absoluta o relativa?
const absolute = absolutePath(doc)
if (absolute === false) {
    const convertPathToAbsolute = convertToAbsolute(doc)
    console.log(chalk.bgRed(convertPathToAbsolute + ' ' + 'La ruta ahora es absoluta'))
   
} else {
   
}

//¿Existe algún archivo?
const fileMd = existMdFile(doc)
try{
    if(fileMd === true){
        console.log(chalk.bgGreen('Contiene archivos .md'))
}
} catch(error){
    console.error(chalk.bgRed(error));
} 

// Leer el archivo

// const readFileMd = readFile(doc)
// console.log(chalk.bgBlue(readFileMd));



