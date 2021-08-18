//Esercizio per le vacanze: Create Your Burger 

//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. 

//Consigli del giorno: Create inizialmente un html base con gli elementi minimi necessari al funzionamento, passate poi alla parte JS ragionando come sempre a step. 

//Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. 

//Quando tutto funziona passate alla parte visiva lavorando al css.

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
         

        var calcoloPrezzo = document.getElementById('calcoloPrezzo');
        console.log(calcoloPrezzo);
        calcoloPrezzo.style.display = "block";

        // Calcola il prezzo del burger
        //burger
        var burger = 5.00;
        //aggiunzioni
        var cheese = 1.00;
        var tomato = 1.00;
        var egg = 1.00;
        var lattuce = 1.00;
        var mustard = 1.00;
        var ketchup = 1.00;

        var prezzo =  burger ;

        if(burger + cheese) {
            prezzo = burger + cheese;
            console.log(burger + cheese);
        }
        else if(tomato) {
            prezzo = burger + tomato;
            console.log(burger + tomato);
        }
        else if(egg) {
            prezzo = burger + egg;
            console.log(burger + egg);
        }
        else if(lattuce) {
            prezzo = burger + lattuce;
            console.log(burger + lattuce);
        }
        else if(mustard) {
            prezzo = burger + mustard;
            console.log(burger + mustard);
        }
        else if(ketchup) {
            prezzo = burger + ketchup;
            console.log(burger + ketchup);
        }
    }
)
    //PREZZO BURGER
    document.getElementById("prezzo").innerHTML = prezzo + '€';