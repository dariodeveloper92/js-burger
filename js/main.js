//Esercizio per le vacanze: Create Your Burger 

//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. 

//Consigli del giorno: Create inizialmente un html base con gli elementi minimi necessari al funzionamento, passate poi alla parte JS ragionando come sempre a step. 

//Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. 

//Quando tutto funziona passate alla parte visiva lavorando al css.
alert('Benvenuto! Scrivi il tuo panino.');

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
        var burger = 70.00;
        //aggiunzioni
        var cheese = 25.00;
        var tomato = 24.00;
        var egg = 23.00;
        var lattuce = 22.00;
        var mustard = 21.00;
        var ketchup = 20.00;

        var prezzo =  burger ;

        let aggiunzionI = [cheese, tomato, egg, lattuce, mustard, ketchup];

        for(i=0; i<aggiunzionI.length; i++) {
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
            }
        }
        
        
    }
)
    