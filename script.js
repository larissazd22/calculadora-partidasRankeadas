function partida(vitorias, derrotas) {
  let resultado = vitorias - derrotas
  return resultado
}


function rankeada() {
  let resultadoDaPartida = partida(10, 30)
  let nivel = ""

  if(resultadoDaPartida <= 10) {
    nivel = "Ferro"
  }else if(resultadoDaPartida <= 20) {
    nivel = "Bronze"
  }else if(resultadoDaPartida <= 50) {
    nivel = "Prata"
  }else if(resultadoDaPartida <= 80) {
    nivel = "Ouro"
  }else if(resultadoDaPartida <= 90){
    nivel = "Diamante"
  }else if(resultadoDaPartida <= 100) {
    nivel = "Lendário"
  }else if(resultadoDaPartida >= 101) {
    nivel = "Imortal"
  }
  return `O Herói tem de saldo de ${resultadoDaPartida} e está no nível de ${nivel}`
}

console.log(rankeada())

