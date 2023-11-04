//criando a classe (formato) do objeto:
class jogo {
	constructor(nomeJogador, idadeJogador, tipoJogador){
		this.nomeJogador = nomeJogador
		this.idadeJogador = idadeJogador
        this.tipoJogador = tipoJogador
	}

	atacar(){
	console.log(`O jogador ${this.nomeJogador}, com idade de ${this.idadeJogador} anos, é do tipo ${this.tipoJogador} e atacou usando ` + nivel + ".")
	}
}
//criando o objeto através da classe:
let nivel = ""
let jogadorMago = new jogo("ton", 50, "mago")
let jogadorGuerreiro = new jogo("ton2", 52, "guerreiro")
let jogadorMonge = new jogo("ton3", 53, "monge")
let jogadorNinja = new jogo("ton4", 54, "ninja")

if (tipoJogador = "mago")
    nivel = "magia"
else if (tipoJogador = "guerreiro")
    nivel = "espada"
else if (tipoJogador = "monge")
    nivel = "usou artes marciais"
else if (tipoJogador = "ninja")
    nivel = "usou shuriken"

jogadorNinja.atacar()