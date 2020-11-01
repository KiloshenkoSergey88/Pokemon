// скрипт для перехода с начальной страницы на страницу выбора.
start.onclick = () => {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "block";

    
};

changeTwoPl.onclick = () => {

    let addCharBattleP1 = document.getElementById('addCharBattleP1').getElementsByTagName('img'),
        addCharBattleP2 = document.getElementById('addCharBattleP2').getElementsByTagName('img'),
        topPanelPth1p = document.getElementById('topPanelPth1p'),
        topPanelPth2p = document.getElementById('topPanelPth2p');

    topPanelPth1p.append(addCharBattleP1[0], addCharBattleP1[1], addCharBattleP1[2]);
    topPanelPth2p.append(addCharBattleP2[0], addCharBattleP2[1], addCharBattleP2[2]);
    
    document.getElementById("pageTwo").style.display = "none";
    document.getElementById("pageThree").style.display = "block";
};