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
//función para verificar si es absoluta o no la ruta
const absolutePath = (path) => {
    if (path.isAbsolute) {
        console.log(chalk.bgGreen('La ruta es absoluta'))
    } else {
        console.log(chalk.bgRed('****La ruta encontrada es relativa****'));
    }
}
const convertToAbsolute = (paths) => path.resolve(paths);
//console.log(convertToAbsolute);


// verificar por qué lanza undifined en consola


export {
    existPath,
    absolutePath,
    convertToAbsolute
};