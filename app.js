
// скрипт для перехода с начальной страницы на страницу выбора.
start.onclick = () => {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "block";
};

changeTwoPl.onclick = () => {
    document.getElementById("pageTwo").style.display = "none";
    document.getElementById("pageThree").style.display = "block";
}

