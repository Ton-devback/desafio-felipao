let nomeJogador = "Ton"

let resultados = ranking(72, 5)
    
function ranking(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let nivel1 = ""

if(resultados < 10){
    nivel1 = "Ferro"
}else if(resultados > 10 && resultados < 21){
	nivel1 = "Bronze"
}else if(resultados > 20 && resultados < 51){
	nivel1 = "Prata"
}else if(resultados > 51 && resultados < 81){
	nivel1 = "Ouro"
}else if(resultados > 80 && resultados < 91){
	nivel1 = "Diamante"
}else if(resultados > 90 && resultados < 101){
	nivel1 = "Lendário"
}else if(resultados > 100){
	nivel1 = "Imortal"
}

console.log("O Herói " + nomeJogador + " tem saldo de " + resultados + " vitórias e está no nível = " + nivel1)