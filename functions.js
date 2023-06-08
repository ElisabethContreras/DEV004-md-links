import fs from 'fs';
import path from 'path';
import axios from 'axios';
//Resolver de manera ASINCRONICA!!!

//función para validad si existe la ruta
const existPath = (paths) => {
  if (fs.existsSync(paths)) {
    return true;
  } else {
    return false;
  }
}
// const existPath = (paths) => {
//     return new Promise((resolve, reject) => {
//         fs.stat(paths, (err, stats) => {
//             if (stats === undefined) {
//                 // console.log('no existe, verifica');
//                 // return false
//                 reject(chalk.bgRed('****La ruta buscada no existe****'))
//             }
//             else {
//                                 // console.log('ruta existe');
//                 // return true
//                 resolve(chalk.bgGreen('ok ruta existe'))
//             }
//         })
//     })
// }
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
const readFile = (paths) => {
  return new Promise((resolve, reject) => {
    fs.readFile(paths, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

//Función para extraer links y texto
const resultRegex = (data, doc) => {
  const arrayMatches = data.match(/[^!]\[.+?\]\(.+?\)/g) // expresión regular para extrae link y texto
  //formar objeto 3prop
  const array3props = arrayMatches.map((elem) => {
    return { // devuelve un objeto con 3 clases: text, href y file. 
      text: elem.match(/\[(.*)\]/)[1], // extrae el texto del archivo, esta en la posición 1
      href: elem.match(/https*?:([^"')\s]+)/)[0], // extrae sólo el link, esta en la posición 0
      file: doc // hacce el llamado al doc de donde se saca la información
    }
  })
  return array3props
};
const validateLinks = (array3props) => {
  const validationPromises = array3props.map((enlace) => {
    return axios.head(enlace.href)
      .then((response) => {
        enlace.valido = response.status >= 200 && response.status < 400;
        return enlace;
      })
      .catch((error) => {
        enlace.valido = false;
        return enlace;
      });
  });
  return Promise.all(validationPromises);

};

  export {
    existPath,
    absolutePath,
    convertToAbsolute,
    existMdFile,
    readFile,
    resultRegex,
    validateLinks

  };