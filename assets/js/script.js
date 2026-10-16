/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [

   {
      name: 'Cuffie',
      category: 'Elettronica',
      price: 89.99,
      rating: 4,
      image: null,
      available: true,
   },
   {
      name: 'Tablet',
      category: 'Elettronica',
      price: 199.9,
      rating: 5,
      image: null,
      available: false,
   },
   {
      name: 'Mouse',
      category: 'Elettronica',
      price: 24,
      rating: 4,
      image: null,
      available: true,
   },
   {
      name: 'Smartwatch',
      category: 'Elettronica',
      price: 119,
      rating: 4,
      image: null,
      available: true,
   },
   {
      name: 'Lampada',
      category: 'Casa',
      price: 29.50,
      rating: 3,
      image: null,
      available: true,
   },
   {
      name: 'Caffettiera',
      category: 'Casa',
      price: 22,
      rating: 2,
      image: null,
      available: true,
   },
   {
      name: 'Libro',
      category: 'Libri',
      price: 14,
      rating: 4,
      image: null,
      available: true,
   },
   {
      name: 'Cappello',
      category: 'Abbigliamento',
      price: 12,
      rating: 2,
      image: null,
      available: true,
   },
   {
      name: 'Collana',
      category: 'Abbigliamento',
      price: 124,
      rating: 5,
      image: null,
      available: false,
   },
   {
      name: 'Scarpe',
      category: 'Abbigliamento',
      price: 149,
      rating: 4,
      image: null,
      available: true,
   },
   {
      name: 'TV',
      category: 'Elettronica',
      price: 122,
      rating: 3,
      image: null,
      available: true,
   },
   {
      name: 'Armadio',
      category: 'Casa',
      price: 399,
      rating: 4,
      image: null,
      available: false,
   },
]

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaPrezzo() {

   for (let i = 0; i < prodotti.length; i++) {
      console.log(`${prodotti[i].name}: €${prodotti[i].price.toFixed(2)}`);
   }

}
formattaPrezzo();

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function stelline(rating) {
   switch (rating) {
      case 1:
         return `Rating ${rating} ★☆☆☆☆`

      case 2:
         return `Rating ${rating} ★★☆☆☆`

      case 3:
         return `Rating ${rating} ★★★☆☆`

      case 4:
         return `Rating ${rating} ★★★★☆`

      case 5:
         return `Rating ${rating} ★★★★★`
   }
   return rating
}
console.log(stelline(5))
/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtroPerCategoria(category) {

   for (let i = 0; i < prodotti.length; i++) {
      if (prodotti[i].category === category) {
         console.log(prodotti[i].name);
      }
   }
}
filtroPerCategoria("Elettronica");


/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtroRating(rating) {

   for (let i = 0; i < prodotti.length; i++) {
      if (prodotti[i].rating >= 3) {
         console.log(`${prodotti[i].name} - ${stelline(prodotti[i].rating)}`);
      }
   }
}
filtroRating("Rating")


/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
