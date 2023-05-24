import {fs} from 'fs';
import {path} from 'path';
import {chalk} from 'chalk';
import {fetch} from 'node-fetch';

//función para validad si existe la ruta
const existPath = (paths) => fs.exists(paths);

//función para volver la ruta en absoluta
const convertToAbsolute = (paths)=> path.resolve(paths);

//Ahora crear una función para que recnozca si es un directorio
const existDirectory = (paths) => fs.statSync(paths).isDirectory();

//Ahora hay que recorrer y ver si tiene o no archivos .md
//primero la función para que obtenga los archivos

function allFilesDirectory(path) {
    if(existDirectory(path)) {
        const files = fs.readdirSync(path);
        return files
        .map((file)=>{
            return allFilesDirectory(`${path}/${file}`);
        })
    }
}