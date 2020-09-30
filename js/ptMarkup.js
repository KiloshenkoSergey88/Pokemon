const img = 
    ['./img/000Bulbasaur.png',
    './img/001Ivysaur.png',
    './img/002Venusaur.png',
    './img/003Charmander.png',
    './img/004Charmeleon.png',
    './img/005Charizard.png',
    './img/006Squirtle.png',
    './img/007Wartortle.png',
    './img/008Blastoise.png',
    './img/009Caterpie.png',
    './img/010Metapod.png',
    './img/011Butterfree.png',
    './img/012Weedle.png'];

let markup = document.getElementById('sidePt');

function Card() {
  let fragment = new DocumentFragment();

  for(let i = 0; i < 150; i++) {
    
    let card = document.createElement('div');

    card.className = 'card';
    card.id = `${i}`;
    fragment.append(card);
    
  };
  
  return fragment;
  
};
markup.append(Card());
document.querySelectorAll('.card').forEach((card,i,)=>card.insertAdjacentHTML('beforeend', `<img src='${img[i]}' height="80" width="80">`));


