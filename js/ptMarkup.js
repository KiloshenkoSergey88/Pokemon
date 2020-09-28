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
    './img/012Weedle.png',];

let markup = document.getElementsByClassName('sidePt');

function Card(img) {
  let fragment = new DocumentFragment();
  let takeCard = document.getElementById('dataPlayerPt');

  for(let i = 0; i < 150; i++) {
    
    let card = document.createElement('sidePt');

    card.className = 'card';
    card.id = `card${i}`;
    fragment.append(card);
    card.onclick = (e) => {
      // вывести тип события и id элемента
      console.log(e.type + " на " + card.id);
    };
    
    
  }
  
  document.querySelectorAll('.card').forEach((card,i,)=>card.insertAdjacentHTML('beforeend', `<img src="${img[i]}" height="80" width="80">`));
  
  
  return fragment;
  
}
markup[0].append(Card(img));
markup[1].append(Card(img));


