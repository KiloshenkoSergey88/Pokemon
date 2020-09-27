const img = 
    ['./img/000Bulbasaur.png',
    './img/001Ivysaur.png',
    './img/002Venusaur.png'];

let markup = document.getElementsByClassName('sidePt');

function Card(img) {
  let fragment = new DocumentFragment();

  for(let i = 0; i < 150; i++) {
    let card = document.createElement('sidePt');
    card.className = 'card';

    fragment.append(card);
    
  }
  
	document.querySelectorAll('.card').forEach((card,i,)=>card.insertAdjacentHTML('beforeend', `<img src="${img[i]}" height="80" width="80">`));
  return fragment;
}

markup[0].append(Card(img));
markup[1].append(Card(img));
console.log(document.querySelector('.card'));