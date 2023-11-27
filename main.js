// **Es - 1**

// Dato un Array di oggetti
// Crea una funzione che ritorni la seguente stringa:

// - `< firstName >, < country >` del primo sviluppatore Python che trova
// - `Non ci sono sviluppatori Python` nel caso in cui non ci siano.


//     let list = [
//       { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//       { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//       { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//     ];


// Risultato : ```Victoria, Puerto Rico`.

//INIZIO ESERCIZIO 1
//     let list = [
//       { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//       { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//       { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//     ]
// function findPython(array) {
//     let nomenazione=array.filter((sviluppatori)=>sviluppatori.language=='Python')
//     console.log(nomenazione);
//     if (nomenazione.length != 0) {
//         nomenazione.forEach(element => {
//             console.log(`${element.firstName},${element.country}`);
//         });
        
//     }else{
//         console.log('non ci sono svilupatori phyton');
//     }
// }
// findPython(list)


//FINE ESERCIZIO 1






// **Es - 2**

// Dato un array di oggetti, creare una funzione che permetta di mostrare un messaggio di alert:

// - se logged=true: mostrare il messaggio “L’utente è stato registrato.”
// - se logged=false: mostrare il messaggio “L’utente non è registrato.”


//     let list = [
//         { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
//         { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
//         { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
//     ];


// - Utilizzare alert() → metodo che fa visualizzare una finestra di pop-up per mostrare un messaggio di avviso all’utente
//     alert('Messaggio di avviso per l'utente');


//INIZIO ESERCIZIO 2
//     let list = [
//         { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
//         { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
//         { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
//     ];
    
//     let nome = prompt ('inserire nominativo')
//     console.log(nome);
    
//     function logIn(array,utente) {
//         let nomecercato=array.filter((element)=>element.logged==true && element.firstName.toLowerCase()==utente)  
//         console.log(nomecercato);
//         if (nomecercato.length > 0) {
//             alert('utente loggato') 
            
//         } else {
//             alert('utente non loggato')            
//         }
//    }
//    logIn(list,nome)


//FINE ESERCIZIO 2






// **Es - 3 **( lo abbiamo fatto insieme stamattina, cercate di farlo in autonomia senza vedere il codice)

// Dato un array di oggetti crea una funzione che ritorni un array e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
// Awee regà, mi chiamo < firstName > e lavoro con < language here >, ma effettivamente è meglio JS


//     let list = [
//       { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//       { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//       { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//     ];



//INIZIO ESERCIZIO 3
//     let list = [
//       { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//       { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//       { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//     ];
// function greeting(array) {
//     array.forEach((element)=>{element.AGreeting=`Awee regà,mi chiamo ${element.firstName} e lavoro con ${element.language}, ma effettivamente è meglio JS`})
// }
// greeting(list)
// console.log(list);

//FINE ESERCIZIO 3































//ESERCIIZI A PARTE 
//Scrivi una funzione che prende una serie di parole e le unisce in una frase e restituisce la frase. Puoi ignorare qualsiasi necessità di ripulire le parole o aggiungere punteggiatura, ma dovresti aggiungere spazi tra ogni parola. Fai attenzione, non dovrebbe esserci uno spazio all'inizio o alla fine della frase!

//ESEMPIO1
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// let cia =['ciao','comeva','tuttobene','io sono manuel']
// function unione() {
//     console.log(cia.join(' '));
// }
// unione(cia)

//ESEMPIO2
//scrivi un programma che prenda due array e restituisca un nuovo array che contenga tutti gli elementi in piu uniscili con il join
// let array1=[1,2,3,4,5,6]
// let array2=[7,8,9,10,11,12,13,]

// let arrayconcatenato=(array1.concat(array2))
// function unione() {
//     console.log(arrayconcatenato.join(' '));
// }
// unione(arrayconcatenato)

// let somma=(a,b)=>a+b;
// console.log('somma:',somma(5,3));


// let quadrato=(numero)=>numero**2;
// console.log(quadrato(10))

// let ilnumeropositivo = (numero)=>numero>0

// console.log('il numero è positivo',ilnumeropositivo(1,0));

// let concatenazione =(stringa1,stringa2,stringa3,)=>stringa1+' '+stringa2+' '+stringa3;
// console.log(concatenazione( 2,3,4));

// let areadeltriangolo=(base,altezza)=>(base*altezza)/2
// console.log('areadeltriangolo',areadeltriangolo(10,20));

// let parolapalindroma =(parola)=>{
//     let parolainvertita=parola.split('').reverse().join('')
//     return parola === parolainvertita
// }
// console.log(parolapalindroma('aerea'));


