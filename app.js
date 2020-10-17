// скрипт для перехода с начальной страницы на страницу выбора.
start.onclick = () => {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "block";
};

changeTwoPl.onclick = () => {

    let recBlock1 = document.getElementById('topPanelPth1p'),
        recBlock2 = document.getElementById('topPanelPth2p');
        
    addBattleChar1(recBlock1);
    addBattleChar2(recBlock2);

    document.getElementById("pageTwo").style.display = "none";
    document.getElementById("pageThree").style.display = "block";
};

function addBattleChar1(topPanelPth1p) {

    let writeBlockP1 = document.getElementById('addCharBattleP1');

    topPanelPth1p.appendChild(writeBlockP1.childNodes[3]);
    topPanelPth1p.appendChild(writeBlockP1.childNodes[2]);
    topPanelPth1p.appendChild(writeBlockP1.childNodes[1]);
};

function addBattleChar2(topPanelPth2p) {

    let writeBlockP2 = document.getElementById('addCharBattleP2');

    topPanelPth2p.appendChild(writeBlockP2.childNodes[3]);
    topPanelPth2p.appendChild(writeBlockP2.childNodes[2]);
    topPanelPth2p.appendChild(writeBlockP2.childNodes[1]);
};
