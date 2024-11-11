'use strict'
console.log('collegato');
//array
const myArray = [
    {
        image: 'img/img_1.png',
        title: 'Walk in the forest'
    },
    {
        image: 'img/img_2.png',
        title: 'Deep abysses'
    },
    {
        image: 'img/img_3.png',
        title: 'Medieval castle'
    },
    {
        image: 'img/img_4.png',
        title: 'Futuristic city'
    }
];
//variabili applicativo
let current = 0;
const items = document.querySelector('.items');
//invocazione funzione prima della query
createImg();
const allItems = document.querySelectorAll('.item');
console.log(allItems);
//function
function createImg() {
    //forEach per la visualizzazione
    myArray.forEach((element, i, arr) => {
        //card
        const item = document.createElement('div');
        item.classList.add('item');
        if (i === current) {
            item.classList.add('item-active');
        }
        //img
        const img = document.createElement('img');
        img.src = element.image;
        img.alt = element.title;
        img.classList.add('img');
        item.append(img);
        //title
        const h3 = document.createElement('h3')
        h3.innerHTML = element.title;
        h3.classList.add('h3');
        item.append(h3);
        //all
        items.append(item);
    });
}
// Funzione per il pulsante "prev"
const prev = document.querySelector('.prev');
prev.addEventListener('click', objPrev);
function objPrev() {
    console.log('ho premuto -');
    allItems[current].classList.remove('item-active');
    if (current > 0) {
        current--;
    } else {
        current = myArray.length - 1;
    }
    allItems[current].classList.add('item-active');
}
// Funzione per il pulsante "next"
const next = document.querySelector('.next');
next.addEventListener('click', objNext);
function objNext() {
    console.log('ho premuto +');
    allItems[current].classList.remove('item-active');
    if (current < myArray.length - 1) {
        current++;
    } else {
        current = 0;
    }
    allItems[current].classList.add('item-active');
}
//SETINTERVALL
const sec = 15;
setInterval(() => objNext(), sec * 1000);