const markup = document.getElementsByClassName('sidePt');

function Card() {
  let fragment = new DocumentFragment();

  for(let i = 0; i < 150; i++) {
    let card = document.createElement('sidePt');
    card.className = 'card';
    card.textContent = 'I here';
    fragment.append(card);
  }

  return fragment;
}

markup[0].append(Card());