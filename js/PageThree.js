fetch('../ServerApp/Data/DataChar.json')
.then(function (response) {
    return response.json()
})
.then(function (data) {
    const Obj = new Object(data);
    console.log('data: ', Obj);

    console.log(Obj.Pokemons);
});


