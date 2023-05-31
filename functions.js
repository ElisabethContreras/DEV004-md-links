import chalk from 'chalk';
import fs from 'fs';
import path from 'path';



//función para validad si existe la ruta
const existPath = (paths) => {
    return new Promise((resolve, reject) => {
        fs.stat(paths, (err, stats) => {
            if (stats === undefined) {
                // console.log('no existe, verifica');
                // return false
                reject(chalk.bgRed('****La ruta buscada no existe****'))
            }
            else {
                                // console.log('ruta existe');
                // return true
                resolve(chalk.bgGreen('ok ruta existe'))
            }
        })
    })
}
//función para verificar si la ruta es absoluta o relativa
const absolutePath = (paths) => {
    if (path.isAbsolute(paths)) {
       return true
       
    } else {
        return false
        
    }
}
const convertToAbsolute = (paths) => path.resolve(paths);


// reconocer si es un archivo .md
const existMdFile = (paths) => path.extname(paths) === ".md";

//Función para leer el archivo md
   function readFile(paths) {
    try{
        const content = fs.readFileSync(paths, 'utf8');
        return content;
    } catch(error){
        console.error(error);

    }
   }

    


export {
    existPath,
    absolutePath,
    convertToAbsolute,
    existMdFile,
    readFile
};