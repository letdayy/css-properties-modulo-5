let prompt = require('prompt-sync')();
let arr = [];

function cssProp() { 
    let text = "";
    
    while(text != "sair") {
    text = prompt('Digite as propriedades do CSS que deseja organizar: ');
    arr.push(text);
}
arr.pop();

arr.sort().map(element => console.log(element));

}

function main() {  
    let rodar = true;
    while(rodar){
        let resposta = '';
        cssProp();
        arr = [];
        resposta = prompt('Deseja organizar mais alguma lista de propriedades do CSS? ');
        resposta == 'sim' ? rodar : rodar = false;
    }

    console.log('Obrigado por usar o meu script!');
}

main();



