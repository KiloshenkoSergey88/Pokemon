let countHide = [0, 0];

function hide0(e){
  if (e.target.id != ('topPanelPth1p')) {
  
    if (countHide[0] == 0) {

      countHide[0]++;
      console.log(countHide[0]);
      pFPthGame1p.append(e.target);
      socket.emit('clientEventA', e.target.id);
      socket.on('serverEventA', function(data){
        nameCharP1.innerHTML = data.char.name;
        BSVhealthP1.innerHTML = data.char.stats.HP;
        BSVattackP1.innerHTML = data.char.stats.attack;
        BSVdefendP1.innerHTML = data.char.stats.defend;
        BSVstAttackP1.innerHTML = data.char.force.ultimateA;
        BSVspeedP1.innerHTML = data.char.stats.speed;

      });
    }

  }
};

function hide1(e){
  
  if (e.target.id != ('topPanelPth2p')) {

    if (countHide[1] == 0) {

      countHide[1]++;
      console.log(countHide[1]);
      pFPthGame2p.append(e.target);
      socket.emit('clientEventB', e.target.id);
      socket.on('serverEventB', function(data){
        nameCharP2.innerHTML = data.char.name;
        BSVhealthP2.innerHTML = data.char.stats.HP;
        BSVattackP2.innerHTML = data.char.stats.attack;
        BSVdefendP2.innerHTML = data.char.stats.defend;
        BSVstAttackP2.innerHTML = data.char.force.ultimateA;
        BSVspeedP2.innerHTML = data.char.stats.speed;

      });
    }

  }
};

topPanelPth1p.addEventListener('click', hide0, false);
topPanelPth2p.addEventListener('click', hide1, false);