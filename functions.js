import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import fetch from 'node-fetch';


//función para validad si existe la ruta
const existPath = (paths) =>{ 
    return new Promise((resolve, reject)=>{
        fs.stat(paths,  (err, stats) => {
            if(stats === undefined){
                // console.log('no existe, verifica');
                // return false
                reject ('****La ruta buscada no existe****')
            }
            else{
                // console.log('ruta existe');
                // return true
                resolve('ok ruta existe')
            }
          })
    })}



   

export{
    existPath
}