// estrutura de repetição

for(let i = 0; i < 10; i++){
//    console.log(i)
}

// while 

let f = 0 ;

while(f<10){
//    console.log()
    f++
}

// do while 

let w = 0 

do{
//    console.log(w);
    w++
}
while(w < 21)

//funções 

function ola(nome){
    // `` (strings literal ou template sting ${} chama a variavel)
    //console.log(`seja bem vindo a ${nome}`)
    //alert(`seja bem vindo a ${nome}`)
    document.write(`seja bem vindo a ${nome}`)
}
ola("fiap")


// Arrow Function

const hello=()=>(console.log("função arrow function"))
hello()

//Array[] objeto{} e métodos()

let jogadores =[
    {nome:"felipe", idade:17},
    {nome:"joao", idade:18},
    {nome:"pedro", idade:19}
]

let listarJogadores = jogadores.map(function(item){
    return item.nome
})
console.log(listarJogadores)