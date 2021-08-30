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
        var couponCode = document.getElementById('coupon_code').value;
         
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

        //Ciclo for per le aggiunzioni
        for(i=0; i<aggiunzionI.length; i++) {
            if(aggiunzionI.length) {
                prezzo = burger + aggiunzionI.length;
                console.log(prezzo);
                document.getElementById('prezzo').innerHTML= prezzo + '$';
            }
            /*
            if(cheese) {
                prezzo = burger + cheese;
                console.log(burger + cheese + '$');
                document.getElementById('prezzo').innerHTML= burger + cheese + '$';
            }
            else if(tomato) {
                prezzo = burger + tomato;
                console.log(burger + tomato + '$');
                document.getElementById('prezzo').innerHTML=burger + cheese + ' $';
            }
            else if(egg) {
                prezzo = burger + egg;
                console.log(burger + egg);
                document.getElementById('prezzo').innerHTML=burger + cheese + ' $';
            }
            else if(lattuce) {
                prezzo = burger + lattuce;
                console.log(burger + lattuce + '$');
                document.getElementById('prezzo').innerHTML=burger + cheese + ' $';
            }
            else if(mustard) {
                prezzo = burger + mustard;
                console.log(burger + mustard + '$');
                document.getElementById('prezzo').innerHTML=burger + cheese + ' $';
            }
            else if(ketchup) {
                prezzo = burger + ketchup;
                console.log(burger + ketchup + '$');
                document.getElementById('prezzo').innerHTML=burger + cheese + ' $';
            }
            else{
                prezzo = burger;
                console.log(burger + '$');
                document.getElementById('prezzo').innerHTML = burger + '$';
            }*/
        }

        
        if(couponCode == '') {
            prezzo = prezzo * 0.8;
        }
        else {
            prezzo = prezzo;
        }
    }
)

//Funzione per le aggiunzioni
const myButton = document.querySelector('button');

myButton.onclick = function () {
    console.log('25$ +70$');    
    document.getElementById('prezzo').innerHTML = '91 $';
}
    