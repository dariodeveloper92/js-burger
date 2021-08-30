//Esercizio per le vacanze: Create Your Burger 

//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. 

//Consigli del giorno: Create inizialmente un html base con gli elementi minimi necessari al funzionamento, passate poi alla parte JS ragionando come sempre a step. 

//Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. 

//Quando tutto funziona passate alla parte visiva lavorando al css.
alert('Benvenuto! Scrivi il tuo panino.');

//Funzione per le nome del panino
const myInput = document.querySelector('input');

myInput.onclick = function () {
    alert('Inserire panino');   
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
        //var couponCode = document.getElementById('coupon_code').value;
        var couponCode = ['SCONTO']; //SCONTO
        
        var calcoloPrezzo = document.getElementById('calcoloPrezzo');
        console.log(calcoloPrezzo);
        calcoloPrezzo.style.display = "block";

        // Calcola il prezzo del burger
        //burger
        var burger = 70.00;
        //aggiunzioni
        var cheese = 25.00;
        var tomato = 24.00;
        var egg = 23.00;
        var lattuce = 22.00;
        var mustard = 21.00;
        var ketchup = 20.00;

        var prezzo =  burger ;

        //Array aggiunzioni
        var aggiunzionI = [cheese, tomato, egg, lattuce, mustard, ketchup];

        //prendiamo i valori dai checkbox
        var checkboxes = document.getElementsByClassName('checkmark');
        console.log(checkboxes);
        document.getElementById('prezzo').innerHTML= prezzo + '$';

        //Ciclo for per le aggiunzioni
        for(var i = 0; i< aggiunzionI.length; i++) {
            if(aggiunzionI.length) {
                var prezzo = burger + aggiunzionI[i];
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

//Funzione per le aggiunzioni
const myButton = document.querySelector('button');

myButton.onclick = function () {
    console.log('25$ + 70$');    
}

document.getElementById('prezzo').innerHTML = '91 $';
    