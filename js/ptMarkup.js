const socket = io();

// создание карточек на основе добавления элемента "img" в ДОМ-дерево.
let markup = document.getElementById('sidePt');

// переход хода выбора персонажа от первого игрока ко второму.
  // объект с селекторами двух классов для дивов игроков.
  const blocksPlayer = {
  
    firstBlock : '.blockPlayerFirstPt',
    secondBlock : '.blockPlayerSecondPt'
  };
  // переменные для работы с кнопкой.
  let changeOnePl = document.getElementById('changeOnePl');
  let dataChange = blocksPlayer.firstBlock;

  // переменная для отключения кнопки подтверждения выбора игрока 1.
  let changeTwoPl = document.getElementById('changeTwoPl');


socket.on('message', function(char){
  
  for (let i = 0; i < char.length; i++) {
    let data = char[i].body;
    let nameChar = char[i].name;
    function Card() {
      let fragment = new DocumentFragment();
        
        let card = document.createElement('img');
    
        card.className ='card';
        card.id =`${i}`;
        card.src=`${data}`;
        card.title=`${nameChar}`;
        fragment.append(card);
      return fragment;
    };
    markup.append(Card());
  };

  // count переменная-счетчик для определения выбора количевства персонажей для игры.
  // обработчик событий на класс 'card' при нажатии на карту - переносит ёё в блок к игроку.

  let count = 0;
  document.querySelectorAll('.card').forEach((el) => {
    el.onclick = function(e) {
      if (count < 3) {
        count++;
        let addCard = e.srcElement;
        let dataPlayerPt = document.querySelector(dataChange);
        dataPlayerPt.append(addCard);
        // отключение обработчика и визуализации добавленной карты (под средством смены класса у объекта).
        el.onclick = null;

        if (dataChange === blocksPlayer.firstBlock) {
          el.className = 'addCard1';
        } else {
          el.className = 'addCard2';
        };
      };
    };
  });

  // с помощью обработчика событий подменяем блок и кнопку 'Accept1' первого игрока на блок и кнопку 'Accept2' второго, обнуляем счетчик.
  changeOnePl.addEventListener('click', toChangeBlocksPlayer);

  function toChangeBlocksPlayer() {
    dataChange = blocksPlayer.secondBlock;
    count = 0;
    changeOnePl.style.display = "none";
    changeTwoPl.style.display = "inline-block";
  };

});





