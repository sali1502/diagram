"use strict";

import Chart from 'chart.js/auto';

// Hämta in meny-knapparna
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//eventlyssnare
openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

//Toggla fram navigeringsmenyn
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    //hämtar in css för menyn
    let style = window.getComputedStyle(navMenuEl);

    //koll om navigering är synlig eller ej, ändrar display block/none
    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}

// Diagran - stapel
const barChartEl = document.getElementById('barChart');

new Chart(barChartEl, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: 'Antal sökande HT2023',
            data: [12, 19, 3, 5, 2, 3,],
            borderWidth: 1
        }]
    },
});

// Diagran - cirkel
const pieChartEl = document.getElementById('pieChart');


new Chart(pieChartEl, {
    type: 'pie',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Antal sökande HT2023',
            data: [12, 19, 3, 5, 2,],
            borderWidth: 1
        }]
    },
});




