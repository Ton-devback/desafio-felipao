//Com laço de repetição, mas incompleto:
let nomeHeroi = "Ton"
let xpHeroi = 100
let nivel = ""

if(xpHeroi < 1001){
    nivel = "Ferro"
}else if(xpHeroi > 1000 && xpHeroi < 2001){
	nivel = "Bronze"
}else if(xpHeroi > 2000 && xpHeroi < 6001){
	nivel = "Prata"
}else if(xpHeroi > 6000 && xpHeroi < 7001){
	nivel = "Ouro"
}else if(xpHeroi > 7000 && xpHeroi < 8001){
	nivel = "Platina"
}else if(xpHeroi > 8000 && xpHeroi < 9001){
	nivel = "Ascendente"
}else if(xpHeroi > 9000 && xpHeroi < 10001){
	nivel = "Imortal"
}else if(xpHeroi > 10000){
	nivel = "Radiante"
}

for (let contador = 1001; contador < 1002; contador +=1000){
    console.log("Se XP for menor do que " + contador + " = ")
}

for (let contador = 1001; contador < 10001; contador +=1000){
    console.log("Se XP estiver entre " + contador + " e " + (contador + 999) + " = ")
}

for (let contador = 10000; contador < 10002; contador +=1000){
    console.log("Se XP for maior que " + contador + " = ")
}

console.log("O Herói " + nomeHeroi + " está no nível XP = " + nivel)
console.log("##################################### Próxima Solução #############################################")

//#################################################################################################################
// Sem o laço de repetição:
let nível2 = nivel

switch (nível2){
	case "Ferro":
	case "Bronze":
	case "Prata":
	case "Ouro":
	case "Platina":
	case "Ascendente":
	case "Imortal":
	case "Radiante":
	console.log("Se XP for menor do que 1001 = Ferro")
	console.log("Se XP estiver entre 1001 e 2000 = Bronze")
	console.log("Se XP estiver entre 2001 e 6000 = Prata")
	console.log("Se XP estiver entre 6001 e 7000 = Ouro")
	console.log("Se XP estiver entre 7001 e 8000 = Platina")
	console.log("Se XP estiver entre 8001 e 9000 = Ascendente")
	console.log("Se XP estiver entre 9001 e 10000 = Imortal")
	console.log("Se XP for maior que 10000 = Radiante")
}

let nomeHeroi2 = "Ton"
let xpHeroi2 = 8250
let nivel1 = ""

if(xpHeroi2 < 1001){
    nivel1 = "Ferro"
}else if(xpHeroi2 > 1000 && xpHeroi2 < 2001){
	nivel1 = "Bronze"
}else if(xpHeroi2 > 2000 && xpHeroi2 < 6001){
	nivel1 = "Prata"
}else if(xpHeroi2 > 6000 && xpHeroi2 < 7001){
	nivel1 = "Ouro"
}else if(xpHeroi2 > 7000 && xpHeroi2 < 8001){
	nivel1 = "Platina"
}else if(xpHeroi2 > 8000 && xpHeroi2 < 9001){
	nivel1 = "Ascendente"
}else if(xpHeroi2 > 9000 && xpHeroi2 < 10001){
	nivel1 = "Imortal"
}else if(xpHeroi2 > 10000){
	nivel1 = "Radiante"
}

console.log("O Herói " + nomeHeroi2 + " está no nível XP = " + nivel1)