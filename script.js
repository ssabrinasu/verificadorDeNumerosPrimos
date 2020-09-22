
var num
var divisores



function newElement(resposta) {

     var container = document.getElementById("box")
     var newH2 = document.createElement("h2")
     var texto = document.createTextNode(resposta)

     newH2.appendChild(texto)
     container.appendChild(newH2)

}


function verificador() {
     num = document.getElementById('numeroPrimo').value
     divisores = 0

     for(var i = 0; i <= num; i++){
          if(num % i === 0){
               divisores++
          }
     }

     if(divisores <= 2){
          let primo = num + " é um numero primo"

          newElement(primo)
     }
     else {
          let nPrimo = num + " não é um numero primo"

          newElement(nPrimo)
     }
     
}






