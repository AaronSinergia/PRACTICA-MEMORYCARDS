import './style.css';

const arrayCartas = [
  {
    id: 1,
    color: 'red',
  },
  {
    id: 2,
    color: 'orange',
  },
  {
    id: 3,
    color: 'blue',
  },
  {
    id: 4,
    color: 'green',
  },
  {
    id: 5,
    color: 'grey',
  },
  {
    id: 6,
    color: 'red',
  },
  {
    id: 7,
    color: 'orange',
  },
  {
    id: 8,
    color: 'blue',
  },
  {
    id: 9,
    color: 'green',
  },
  {
    id: 10,
    color: 'grey',
  },
];

let counter = 0;
let carta1;
let carta2;
let score = 0;

arrayCartas.sort(() => Math.random() - Math.random());

const divApp = document.querySelector('#app');

const scoreHTML = document.createElement('h3');
scoreHTML.textContent = `PUNTUACIÓN: ` + score;
document.body.insertBefore(scoreHTML, divApp);

const resetData = () => {
  counter = 0;
  carta1 = undefined;
  carta2 = undefined;
};

const resetCarta = () => {
  const cartas = document.querySelectorAll('.carta');
  for (let i = 0; i < cartas.length; i++) {
    let card = cartas[i];
    card.style.backgroundColor = '#4d0038';
    card.style.backgroundImage =
      'https://www.transparenttextures.com/patterns/crissxcross.png';
  }
};

const comprove = () => {
  if (carta1.dataCarta.color === carta2.dataCarta.color) {
    score++;
    resetData();
  } else {
    score = 0;
    setTimeout(() => {
      resetCarta();
      resetData();
    }, 1000);
  }
  scoreHTML.textContent = `PUNTUACION: ` + score;
};

const select = (divCartaNodoHTML, datosDeCadaCarta) => {
  if (counter < 2) {
    counter++;
    divCartaNodoHTML.style.backgroundColor = datosDeCadaCarta.color;
    divCartaNodoHTML.style.backgroundImage = 'none';
  }

  if (counter === 1) {
    carta1 = {
      cartaDom: divCartaNodoHTML,
      dataCarta: datosDeCadaCarta,
    };
  }

  if (counter === 2) {
    carta2 = {
      cartaDom: divCartaNodoHTML,
      dataCarta: datosDeCadaCarta,
    };
    comprove();
  }
};

arrayCartas.forEach((datosDeCadaCarta) => {
  const divCartaNodoHTML = document.createElement('div');
  divCartaNodoHTML.className = 'carta';
  divCartaNodoHTML.style.backgroundColor = datosDeCadaCarta.color;
  setTimeout(() => {
    divCartaNodoHTML.style.backgroundColor = null;
  }, 500);

  divCartaNodoHTML.addEventListener('click', () =>
    select(divCartaNodoHTML, datosDeCadaCarta)
  );

  divApp.appendChild(divCartaNodoHTML);
});
