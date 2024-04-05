//criar pastas 
const fs = require('fs');

//com metodo síncrono
//fs.mkdirSync('logs');

//com metodo assíncrono
fs.mkdir('./logs2',(erro)=>{
    if(erro){
        console.log("Erro!!")
    }
})

//para deletar pastas
if(fs.existsSync('./logs2')){
    fs.rmdSync('./logs2');
}
console.log('fim da execução')