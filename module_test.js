//---------------------------Referencyjnie waluty-------------------------------
/*
const currency = require('./lib/currency1');

console.log('10 euro to: ');
console.log(currency.euroToPLN(10) + ' PLN.');
console.log('---------------------------')
console.log('10 USD to: ');
console.log(currency.usdToPLN(10) + ' PLN.');
console.log('---------------------------')
console.log('10 GBP to: ');
console.log(currency.gbpToPLN(10) + ' PLN.');
console.log('---------------------------')
console.log('10 CHF to: ');
console.log(currency.chfToPLN(10) + ' PLN.');
console.log('---------------------------')
console.log('10 RUB to: ');
console.log(currency.rubToPLN(10) + ' PLN.');*/

//-----------------------------Obiektowo waluty---------------------------------
/*
const Currency = require('./lib/currency2');
const euroPLN = 4.51;
const usdPLN = 3.69;
const gbpPLN = 5.01;
const chfPLN = 4.17;
const rubPLN = 0.050;
let currency = new Currency(gbpPLN);
console.log(currency.gbpToPLN(10));*/

//-----------------------------Referencyjnie obliczenia---------------------------------
const math1 = require('./lib/myMathModule1');
console.log('Wynik dodawania: ' + math1.adding(1,2));
console.log('Wynik potęgowania: ' + math1.pow(2,2));
console.log('Wynik pierwiastkowania kwadratowego: ' + math1.sqrt(9));
console.log('Wynik mnożenia: ' + math1.multiply(2,3));
console.log('Wynik dzielenia: ' + math1.division(8,2));


/*const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('---------------Dodawanie---------- ')
rl.question('Podaj pierwszą liczbę: ', function(number) {
    rl.question('Podaj drugą liczbę: ', function(number2) {
        let add = math1.adding(number, number2);
        console.log('Wynik działania: ' + add);
        rl.close();
    });
});*/

/*console.log('---------------Potęgowanie---------- ')
rl.question('Podaj podstawę: ', function(number) {
    rl.question('Podaj potęgę: ', function(number2) {
        let pow = math1.pow(number, number2);
        console.log('Wynik działania: ' + pow);
        rl.close();
    });
});*/
