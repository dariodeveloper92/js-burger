//Esercizio per le vacanze: Create Your Burger 

//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. 

//Consigli del giorno: Create inizialmente un html base con gli elementi minimi necessari al funzionamento, passate poi alla parte JS ragionando come sempre a step. 

//Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. 

//Quando tutto funziona passate alla parte visiva lavorando al css.
alert('Benvenuto! Scrivi il tuo panino.');

//Funzione "nome del panino"
const myInput = document.querySelector('input');

myInput.onclick = function () { //Clicco sul box per inserire il nome del panino
    alert('Inserire il nome del panino');   //Alert: Inserire il nome del panino
}

//CALCOLO PREZZO PANINO
var btnCalculate = document.getElementById('calcolaPrezzo');
console.log(btnCalculate);

btnCalculate.addEventListener('click',
    function() {
        var cheese = document.getElementById('cheese').value;
        var tomato = document.getElementById('tomato').value;
        var egg = document.getElementById('egg').value;
        var lattuce = document.getElementById('lettuce').value;
        var mustard = document.getElementById('mustard').value;
        var ketchup = document.getElementById('ketchup').value;
        var couponCode = document.getElementById('coupon_code').value;
        
        var coupon_code = ['SCONTO']; //SCONTO
        
        var calcoloPrezzo = document.getElementById('calcoloPrezzo');
        console.log(calcoloPrezzo);
        calcoloPrezzo.style.display = "block";

        // Calcola il prezzo del burger
        //burger
        var burger = 70.00;
        
        var prezzo =  burger ;

        //prendiamo i valori dai checkbox
        var checkboxes = document.getElementsByClassName('checkmark');
        console.log(checkboxes);
        document.getElementById('prezzo').innerHTML= prezzo + '$';

        //Ciclo for per le aggiunzioni
        for(var i = 0; i< checkboxes.length; i++) {
            if( checkboxes[i].checked) {
                prezzo = prezzo + parseInt(checkboxes[i].value);
                console.log(prezzo);
                document.getElementById('prezzo').innerHTML= prezzo + '$';
            }
        }

        if(couponCode == 'SCONTO') {
            prezzo = prezzo * 0.8;
            console.log(prezzo + '$' + ' Aggiunto sconto');
            document.getElementById('prezzo').innerHTML= prezzo + '$';
        }
        else {
            console.log(prezzo + '$' + ' senza sconto');
            document.getElementById('prezzo').innerHTML= prezzo + '$';
        }
    }
)

//Button Annulla----------------------------------------------------------
var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var biglietto_box = document.getElementById('biglietto');
        prezzo.style.display = 'none';
    }
)
    