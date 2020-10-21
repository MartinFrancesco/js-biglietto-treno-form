/* VENDITA BIGLIETTI TRENO */

// REFERENZA ELEMENTI
var biglietto = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');

// EVENTI
//Calcolo e generazione biglietto
bottoneGenera.addEventListener('click', function() {

   //Dati utente
   var nome = document.getElementById('nome').value;
   console.log("Nome passeggero: " + nome);
   var km = document.getElementById('km').value;
   console.log("Destinazione a: " + km);
   var età = document.getElementById('fascia-età').value;
   console.log("Fascia di età: " + età);

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
     costo = scontoMinorenni.toFixed(2);
     console.log("Prezzo scontato: " + scontoMinorenni + "€");
   } else if (età === "over65") {
     costo = scontoOver65.toFixed(2);
     console.log("Prezzo scontato: " + scontoOver65 + "€");
   } else {
     costo = prezzo.toFixed(2);
     console.log(prezzo);
   }

   //Compilazione BIGLIETTO
   var biglietto = document.getElementById('biglietto');
   biglietto.className = "visible";

   // Nome passeggero
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
   document.getElementById('costo').innerHTML = " " + costo + "€";
 })

 //Annula prenotazione
 bottoneAnnulla.addEventListener('click', function() {

   biglietto.className = "hidden";

   document.getElementById('nome').value = "";
   document.getElementById('km').value = "";
   document.getElementById('fascia-età').value = "";
 })
