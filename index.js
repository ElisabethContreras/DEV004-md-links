import { existPath, absolutePath, convertToAbsolute, existMdFile, readFile } from './functions.js';
import chalk from 'chalk';


// relativa
const doc = 'Ejemplo-1.md'
// absoluta
//const doc = 'C:\Users\elisa\OneDrive\Escritorio\Laboratoria clases\Md Links\DEV004-md-links\Ejemplo-1.md'
// no existe
//const doc = 'yensita.md'
// const prueba = existPath(doc)
// console.log(prueba);
// console.log( existPath(doc));


//reconocer si existe y mandar los mensajes
existPath(doc).then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err)
})

//¿Es absoluta o relativa?
const absolute = absolutePath(doc)
if (absolute === true) {
    console.log(chalk.bgGreen('ok, la ruta es absoluta'));
} else {
    const convertPathToAbsolute = convertToAbsolute(doc)
    console.log(chalk.bgRed(convertPathToAbsolute + ' ' + 'La ruta se ahora es absoluta'))
}

//¿Existe algún archivo?
const fileMd = existMdFile(doc)
if(fileMd === true){
    console.log(chalk.bgGreen('Contiene archivos .md'))
} else{
    console.log(chalk.bgRed('****Error: No se encontró ningún archivo .md****'));
}

// Leer el archivo

const readFileMd = readFile(doc)
if(readFileMd){
    console.log(chalk.bgGreen('está leyendo el archivo'))
}


