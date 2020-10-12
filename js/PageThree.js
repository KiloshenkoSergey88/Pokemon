fetch('../ServerApp/Data/DataChar.json')
.then(function (response) {
    return response.json()
})
.then(function (data) {
    const Obj = new Object(data);
    console.log('data: ', Obj);

    console.log(Obj.Pokemons);

    let changeTwoPl = document.getElementById('changeTwoPl');
    changeTwoPl.addEventListener('click', addDataPlayer);

    function addDataPlayer() {
        console.log('its worked');

        
        let appCharOneP1 = document.getElementById('addCharBattleP1').childNodes[1].id;
        let appCharTwoP1 = document.getElementById('addCharBattleP1').childNodes[2].id;
        let appCharThreeP1 = document.getElementById('addCharBattleP1').childNodes[3].id;
        

        console.log(appCharOneP1, appCharTwoP1,appCharThreeP1);
    }
});


