const markup = document.getElementsByClassName('sidePt');


function Card() {
  let fragment = new DocumentFragment();

  for(let i = 0; i < 95; i++) {
    let card = document.createElement('sidePt');
    card.className = 'card';

    fragment.append(card);
    
  }
  let img = ['./img/Bulbasaur.png','./img/C.png'].sort(()=>Math.random() - 0.5);
	document.querySelectorAll('.card').forEach((el,i)=>el.insertAdjacentHTML('beforeend', `<img src="${img[i]}" height="80" width="80">`));
  return fragment;
}

markup[0].append(Card());
markup[1].append(Card());
console.log(document.querySelector('.card'));
