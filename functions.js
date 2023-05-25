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
        const files = fs.readdirSync(path); //de manera sincronica, lee el contenido del directorio
        return files
        .map((file)=>{
            return allFilesDirectory(`${path}/${file}`);
        })
        .flat();
    }
    else{
        return [path];
    }
}

//Se crea una función para validar si es un archivo .md y muestre su extención como tal
const validateMdFile = (paths) => path.extname(paths) ===".md";

//expresiones regulares

//esta variable es para buscar y analizar los enlaces dentro de []o que no estén, pero tienen formato url
const serchLinksRegex = /\[(.+?)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/ig; 
//Aquí se buscan y analizan URL dentro de un texto, estén o no entre ().
const serchUrlRegex = /\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/ig; 
// Esta es para buscar y obtener el texto encerrado entre [], dentro de un texto.
const serchTextRegex = /\[(\w+.+?)\]/gi;
// el "ig" o "gi" se usa para indicar que es una busqueda globlal y que no distingue entre mayúsculas o minúsculas.


//Se crea una función para obtener los links en un documento .md

const getLinks = (file, content)=> {
    const arrayResult= [];
    if(!serchLinksRegex.test(content)) {
        
    }

}
