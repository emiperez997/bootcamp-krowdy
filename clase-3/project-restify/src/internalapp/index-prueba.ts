// argv: Parametros que se escuchan en los comandos
// nodeParam: El comando que se ejecuta (node o nodemon)
// fileExecuteParam: El archivo que se ejecuta

import { spawn } from 'child_process';
const [nodeParam, fileExecuteParam, firstParam, secondParam] = process.argv
// console.log(nodeParam)
// console.log(fileExecuteParam)
// console.log(firstParam)
// console.log(secondParam)
// 
// console.log(process.argv)

const sendDataToOs = () => {
  let principalCommand = 'echo';
  const args = ['holamundofromnodejs', '> filenew.txt']
  const options = {
    shell: true,
  }


  const child = spawn(principalCommand, args, options);
  
  child.stdout.on('data', (data) => {
    console.log('Output:', data);
  })
  
  child.stderr.on('data', (data) => {
    console.log('Error:', data);
  })
  
  child.on('close', (code) => {
    console.log('Code:', code);
  })
}

sendDataToOs()
