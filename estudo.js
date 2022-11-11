function moeda(atual){
  return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

let nome = "Raul Francisco";
let número = 28; 
let turma = "D";
let série = "1";


function total(){
  let c = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;
  if (!Number(c)){
    alert("Bota número");
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    return 
  }

  if (!Number(j)){
    alert("Bota número anta");
    document.getElementById("juros").value = "";
    document.getElementById("juros").focus();
    return 
  }

  if (!Number(t)){
    alert("mano não sabe o que é número?");
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return;
  }
  
  let mes= "";
  let r = 0;
  for(let i = 1; i <= t; i++){
      r = c * (1 + (j/100));
      "Mês: "+ i + "valor " + moeda(r) + "<br>";  
     // document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
      c = r;
  }
  document.getElementById("total").innerHTML="Total: "+moeda(r);
  //document.write("Resultado: " + moeda(r));
}


function adicao(){
let val1 = document.getElementById("v1").value;
let val2 = document.getElementById("v2").value;
let r = Number(val1) + Number(val2);
document.getElementById("resultado").innerHTML =r;
}

function subtracao(){
  let val1 = document.getElementById("v1").value;
  let val2 = document.getElementById("v2").value;
  let r = Number(val1) - Number(val2);
  document.getElementById("resultado").innerHTML =r;
  }

  function divisao(){
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) / Number(val2);
    document.getElementById("resultado").innerHTML =r;
    }
  
    function multiplicacao(){
      let val1 = document.getElementById("v1").value;
      let val2 = document.getElementById("v2").value;
      let r = Number(val1) * Number(val2);
      document.getElementById("resultado").innerHTML =r;
      }
      function porcentagem(){
        let val1 = document.getElementById("v1").value;
        let val2 = document.getElementById("v2").value;
        let c = 100
        let p = Number(val2)  / Number(c)
        let r = Number(val1) * Number(p);
        document.getElementById("resultado").innerHTML =r;
        }
function calculaRaiz(){
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let delta, raiz, x1, x2;
  delta = (b*b) - (4*a*c);
  if(delta >= 0){
  raiz = Math.sqrt(delta);
  x1 = ((-b)+raiz)/(2*a);
  x2 = ((-b)-raiz)/(2*a);
  raiz = "x1="+Number(x1)+" x2="+Number(x2);
  }else{
    raiz = "Nao tem Raiz Real";
  }
 
  document.getElementById("raiz").innerHTML = raiz;
  
}
