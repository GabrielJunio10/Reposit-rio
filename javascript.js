let resultado = document.getElementById('p-resultado')
let button1 = document.getElementById('btn-1')
let button2 = document.getElementById('btn-2')
let buttonreset = document.getElementById('reset')
let buttonimg = document.getElementById('imagem')
let divVar = document.getElementById('campo')
let imagem = document.getElementById('agoravai')
let btn = document.getElementById('btn2')



//essa função tem como parametro o "num", que serve para adicionar exatamente o botão que esta chamando a função
adicionar = (num) =>{
    document.getElementById('p-resultado').innerHTML += num
}


limpar = () =>{
    document.getElementById('p-resultado').innerHTML = ''
}

// é necessário criamos um variavel "retorno" para armazenar o valor de resultado, por que resultado ja é o campo do html (tag P)
function voltar(){

    let retorno = resultado.innerHTML
    resultado.innerHTML = retorno.substring(0, retorno.length - 1)

}

// é necessário criamos um variavel "retorno" para armazenar o valor de resultado, por que resultado ja é o campo do html (tag P)

//essa função eval é sensacional, basicamente faz todas as operações matematicas da calculadora
calcular = () =>{
    if(resultado.innerHTML){
        let retorno = resultado.innerHTML
        resultado.innerHTML = eval(retorno)
    } else{
        alert('adicione um valor válido')
    }
    
}

buttonimg.addEventListener("click", function(){
imagem.style.display = "inline"
})


btn.addEventListener("click", function(){
    alert("vai toma no cu camargo")
    })