var arraygiocatori = []

for (var k = 0; k < 100; k++) {
      var giocatori = []
      //creo il codice univoco alfanumerico
      var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var unicode = []
      for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * 26);
        lettcode = alphabet.charAt(random);
        unicode.push(lettcode)
      }
      for (var j = 0; j < 3; j++) {
        numbcode = (Math.floor(Math.random() * 10));
        unicode.push(numbcode)
      }
      giocatori.code = unicode.join("")

      //genero punteggi
      punti = Math.floor(Math.random() * 21);
      giocatori.points = punti
      rimbalzo = Math.floor((Math.random() * 10) + 1);
      giocatori.rimbalzi = rimbalzo
      fallo = Math.floor(Math.random() * 6);
      giocatori.falli = fallo
      giocatori.foto = chooseimg();
      successo2 = (Math.floor(Math.random() * 101)) + "%"
      giocatori.success2pt = successo2
      successo3 = (Math.floor(Math.random() * 101)) + "%"
      giocatori.success3pt = successo3
      console.log(giocatori)
      arraygiocatori.push(giocatori)
}


    var utente = prompt("Inserisci il codice")
    for (var i = 0; i < arraygiocatori.length; i++) {
      if (utente==arraygiocatori[i].code) {
      $('#foto').addClass(arraygiocatori[i].foto);
      $('#codice').html(arraygiocatori[i].code);
      $('#punti').html(arraygiocatori[i].points);
      document.getElementById('rimbalzi').innerHTML = arraygiocatori[i].rimbalzi
      document.getElementById('falli').innerHTML = arraygiocatori[i].falli
      document.getElementById('tiri2').innerHTML = arraygiocatori[i].success2pt
      document.getElementById('tiri3').innerHTML = arraygiocatori[i].success3pt
      }
    }


function chooseimg () {
    var fotoarray = ["bck-img1","bck-img2","bck-img3","bck-img4","bck-img5","bck-img6","bck-img7","bck-img8"];
    var k = Math.floor(Math.random() * 8)
    return fotoarray[k]
}
