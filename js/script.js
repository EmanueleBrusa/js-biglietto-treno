//inseriemtno dati utente
let km = parseInt(prompt('Inserisci i km da percorrere'));

let età = parseInt(prompt('Inserisci la tua età'));

//costo fisso del viaggio
const costo = 0.21;

let prezzo_completo = (km * costo);

//alert nel caso in cui non si inseriscano valori numerici
if (isNaN(km) || isNaN(età) || km === 0 || età === 0){
    alert('Prego, inserire dei valori validi!');
}
else{
    //calcolo viaggio

if (età < 18){
    under_18 = (prezzo_completo - (prezzo_completo * 20 / 100)).toFixed(2)
    document.getElementById('prezzo_biglietto').innerHTML = `Il tuo totale è: ${under_18}$`;
}else if (età > 65){
    over_65 = (prezzo_completo - (prezzo_completo * 40 / 100)).toFixed(2)
    document.getElementById('prezzo_biglietto').innerHTML = `Il tuo totale è: ${over_65}$`;
}else {
    document.getElementById('prezzo_biglietto').innerHTML = `Il tuo totale è: ${prezzo_completo}$`;
}

}




