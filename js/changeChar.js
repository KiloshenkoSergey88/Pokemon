let topPanelPth1p = document.getElementById('topPanelPth1p'),
    topPanelPth2p = document.getElementById('topPanelPth2p');

function hide1(e){

  if (e.target.id != ('topPanelPth1p')) {
    console.log(e.target.id);
  }
};
function hide2(e){

    if (e.target.id != ('topPanelPth2p')) {
      console.log(e.target.id);
    }
};

topPanelPth1p.addEventListener('click', hide1, false);
topPanelPth2p.addEventListener('click', hide2, false);
