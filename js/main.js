/* VENDITA BIGLIETTI TRENO */

// REFERENZA ELEMENTI
var biglietto = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');

var nome = document.getElementById('nome').value;
var km = document.getElementById('km').value;
var età = document.getElementById('fascia-età').value;

// EVENTI
//Calcolo e generazione biglietto
bottoneGenera.addEventListener('click', function() {

   //Dati utente
   var nome = document.getElementById('nome').value;
   console.log(nome);
   var km = document.getElementById('km').value;
   console.log(km);
   var età = document.getElementById('fascia-età').value;
   console.log(età);

   //Calcolo
   //Prezzo biglietto in base ai km (0.21€ al km)
   var x = 0.21;
   var prezzo = km * x;
   console.log ("Prezzo: ", prezzo);

   //Sconti
   var venti = (prezzo / 100) * 20;
   var quaranta = (prezzo / 100) * 40;
   var scontoMinorenni = prezzo - venti;
   var scontoOver65 = prezzo - quaranta;

   // Prezzo calcolato
   var costo = 0;
   if (età == "minorenne") {
     costo = scontoMinorenni;
     console.log(scontoMinorenni);
   } else if (età === "over65") {
     costo = scontoOver65;
     console.log(scontoOver65);
   } else {
     costo = prezzo;
     console.log(prezzo);
   }

   //Compilazione BIGLIETTO
   var biglietto = document.getElementById('biglietto');
   biglietto.className = "visible";

   //  Nome passeggero
   document.getElementById('nome-passeggero').innerHTML = " " + nome;
   // Numero carrozza
   var carrozza = Math.floor(Math.random() * 10) + 1;
   document.getElementById('carrozza').innerHTML = " " + carrozza;
   // Codice treno CP (numero casuale tra 90000 e 100000 escluso)
   var codiceCp = Math.floor(Math.random() * 100000 - 90000) + 90000;
   document.getElementById('codice-cp').innerHTML = " " + codiceCp;
   // Fascia eta selezionata dall'utente
   document.getElementById('offerta-applicata').innerHTML = " " + età;
   // Prezzo finale
   document.getElementById('costo').innerHTML = " " + costo;
 })
