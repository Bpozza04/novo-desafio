let nomePersonagem = "Bruno";
var xP = 5000;
var nivelDoHeroi = ""; 
if (xP <= 1000){
  nivelDoHeroi = "Ferro"; 
} else if (xP >= 1001 &&  xP <= 2000){
  nivelDoHeroi = "Bronze";
} else if (xP >= 2001 &&  xP <= 5000){
  nivelDoHeroi = "Prata";
} else if (xP >= 5001 &&  xP <= 7000){
  nivelDoHeroi = "Ouro";
} else if (xP >= 7001 &&  xP <= 8000){
  nivelDoHeroi = "Platina";
} else if (xP >= 8001 &&  xP <= 9000){
  nivelDoHeroi = "Ascendente";
} else if (xP >= 9001 &&  xP <= 10000){
  nivelDoHeroi = "Imortal";
} else { 
  nivelDoHeroi = "Radiante";
}
console.log("O Heroi de nome " + nomePersonagem + " esta no nivel de " + nivelDoHeroi)
