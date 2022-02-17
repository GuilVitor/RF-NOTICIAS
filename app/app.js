

const url = "https://api.api-futebol.com.br/v1/ao-vivo"

 let headers = new Headers();

 headers.append('Athorization', 'Bearer test_7d3235ddea58b531a4a414a266cc16')
 console.log(headers);

const options = {
 headers: {'Authorization' : 'Bearer test_7d3235ddea58b531a4a414a266cc16'},
}


/////////////////////////////////////////////////////////

function buscarPartidas() {
  fetch(url, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas(obj);
  })
})
.catch()
}


function mostrarPartidas(partidas) {
  console.log(partidas, "Isso é partidas")

 for (i=0; i<partidas.length; i++){

    var placar = document.createElement('h5');
   placar.innerText = partidas[i].placar;
   placar.style.color = "red"
   placar.style.fontSize = '18px'
   placar.style.width = "230px"
   placar.style.marginLeft = "320px"
   placar.style.marginTop = "10px"

    var escudoMandante = document.createElement('img');
    escudoMandante.style.width = "50px"
    escudoMandante.style.marginLeft = "20px"
    escudoMandante.style.marginTop = "-100px"
    escudoMandante.setAttribute('src', partidas[i].time_mandante.escudo)

    var escudovisitante = document.createElement('img');
    escudovisitante.style.marginLeft = "250px"
    escudovisitante.style.marginTop = "-50px"
    escudovisitante.setAttribute('src',partidas[i].time_visitante.escudo)
    escudovisitante.style.width = "50px"

    var horas = document.createElement('h5'); 
    horas.innerText = partidas[i].hora_realizacao

    var camper = document.createElement('h5');
    camper.innerText = partidas[i].campeonato.nome;

    var datas = document.createElement('h5');
    datas.innerText = partidas[i].data_realizacao
    datas.style.marginTop =  "-10px"

    document.getElementById('partidasAoVivo').append
    (placar, escudoMandante,escudovisitante,datas,horas,camper);
 }
}

document.write(buscarPartidas());

//////////////////////////////////////////////////////////


function buscarPartidas2() {
  fetch(url, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas2(obj);
  })
})
.catch()
}

function mostrarPartidas2(partidas) {
  console.log(partidas, "Isso é partidas")

 for (i=0; i<partidas.length; i++){

    var placar = document.createElement('h5');
   placar.innerText = partidas[i].placar;
   placar.style.fontSize = '15px'
   placar.style.color = "red"
   placar.style.width = "200px"
   placar.style.marginLeft = "170px"
   placar.style.marginTop = "10px"

    var escudoMandante = document.createElement('img');
    escudoMandante.style.width = "50px"
    escudoMandante.style.marginLeft = "10px"
    escudoMandante.style.marginTop = "-100px"
    escudoMandante.setAttribute('src', partidas[i].time_mandante.escudo)

    var escudovisitante = document.createElement('img');
    escudovisitante.style.marginLeft = "200px"
    escudovisitante.style.marginTop = "-70px"
    escudovisitante.setAttribute('src',partidas[i].time_visitante.escudo)
    escudovisitante.style.width = "50px"

    var camp = document.createElement('h5');
    camp.innerText = partidas[i].campeonato.nome

    var horas = document.createElement('h5'); 
    horas.innerText = partidas[i].hora_realizacao

    var datas = document.createElement('h5');
    datas.innerText = partidas[i].data_realizacao
    document.getElementById('partidasAoVivo2').append(placar,escudoMandante,escudovisitante,datas,horas,camp);
 }
}

document.write(buscarPartidas2());


///////////////////////////////////////////////////////////////////////



const imgs = document.getElementById("img");
const img1 = document.querySelectorAll("#img img");

let idx1 = 0;

function carrossel (){
  idx1++

  if(idx1 > img1.length - 1){
    idx1 = 0;
  }

  imgs.style.transform = `translateX(${-idx1 * 865}px)`;

}

setInterval(carrossel, 5000);
/////////////////////////////////////////////////////////////////////////////////


const imgss = document.getElementById("pcimg");
const img2 = document.querySelectorAll("#pcimg img");

let idx2 = 0;

function carrosseu (){
  idx2++

  if(idx2 > img2.length - 1){
    idx2 = 0;
  }

  imgss.style.transform = `translateX(${-idx2 * 350}px)`;

}

setInterval(carrosseu, 5000);

