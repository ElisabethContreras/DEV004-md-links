import {existPath, absolutePath, convertToAbsolute} from './functions.js';
//import { chalk } from 'chalk';
// relativa
//const doc = 'README.md'
// absoluta
const doc = 'C:/Users/elisa/OneDrive/Escritorio/Laboratoria clases/Md Links/DEV004-md-links/README.md'
// no existe
//const doc = 'yensita.md'

// const prueba = existPath(doc)
// console.log(prueba);
// console.log( existPath(doc));

existPath(doc).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err)
})

const absolute = absolutePath(doc);
console.log(absolute)

// const convertPathToAbsolute = convertToAbsolute(doc);
// console.log(convertPathToAbsolute); 