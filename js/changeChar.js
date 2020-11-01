let countHide = [0, 0];

function hide0(e){
  if (e.target.id != ('topPanelPth1p')) {
  
    if (countHide[0] == 0) {

      countHide[0]++;
      console.log(countHide[0]);
      pFPthGame1p.append(e.target);
    }
  }
};

function hide1(e){
  
  if (e.target.id != ('topPanelPth2p')) {

    if (countHide[1] == 0) {

      countHide[1]++;
      console.log(countHide[1]);
      pFPthGame2p.append(e.target);
    }
  }
};

topPanelPth1p.addEventListener('click', hide0, false);
topPanelPth2p.addEventListener('click', hide1, false);


socket.on('message', function(char){
  console.log(char);

  
});