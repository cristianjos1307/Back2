//Como criar arquivos no nosso projeto
const fs= require('fs');
//Declarando a variavel da mensagem
let log = "mensagem de log/n";

//utilizando a função de criar arquivos na pasta
//fs.writeFileSync('./logs.log',log);
fs.writeFileSync('./logs.log',log,{flag: 'a+'});

//criar arquivo de forma assíncrona
fs.writeFile('./logs2.log', log,{flag: 'a+'},(erro)=>{
    if(erro)
    {
        console.log(erro);
    }

})


//setar no console a frase, fim
console.log("Adicionado arquivos");


//para excluir arquivos

    fs.unlinkSync('./logs2.log');
    console.log("Removido Arquivo");

    fs.unlinkSync('./logs.log');
    console.log("Removido Arquivo usando unlinkSync");


