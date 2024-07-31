let inputAdultos = document.getElementById("numAdultos");
let inputCriancas = document.getElementById("numCriancas");
let inputDuracao = document.getElementById("numHoras");
let resultado = document.getElementById("resultado");

function calcChurras() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;
  let totalPesssoa = parseInt(adultos) + parseInt(criancas);

  let qtdTotalCarnes = carnePP(duracao) * adultos + (carnePP() * criancas) / 2;
  let qtdTotalCervejas = cervejaPP(duracao) * adultos;
  let qtdTotalRefri = refriPP() * adultos + (refriPP() * criancas) / 2;
  //let qtdTotalCarvao = carvaoChurras(duracao);
  let qtdTotalpaoAlho = paoAlhoPP(duracao) * adultos + (paoAlhoPP() * criancas) / 2;

  console.log(qtdTotalCarnes);
  console.log(qtdTotalCervejas);
  console.log(qtdTotalRefri);
  // console.log(qtdTotalCarvao);
  console.log(qtdTotalpaoAlho);
  console.log(totalPesssoa);

  resultado.innerHTML = `<p>${qtdTotalCarnes / 1000} Kg de Carne`;
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCervejas / 355)} latas de Cerveja`;
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefri / 2000)} Refris 2L `;
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCarnes / 1000 / 5)} Saco de carvão de 5KG `;
  resultado.innerHTML += `<p>${Math.ceil(totalPesssoa / 6)} Pacotes de farofa `;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return (carne = 650);
  } else return (carne = 400);
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return (cerveja = 2000);
  } else return (cerveja = 1200);
}

function refriPP(duracao) {
  if (duracao >= 6) {
    return (refri = 1500);
  } else return (refri = 1000);
}

// function carvaoChurras(qtdTotalCarnes) {
//   return (carvao = qtdTotalCarnes / 5);
// }

function paoAlhoPP(duracao) {
  if (duracao <= 6) {
    return (paoAlho = 1.5);
  } else return (paoAlho = 2.5);
}

function limparCampos() {
  document.getElementById("numAdultos").value = "";
  document.getElementById("numCriancas").value = "";
  document.getElementById("numHoras").value = "";
  document.getElementById("resultado").innerHTML = "";
}
