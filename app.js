import hello from './js/ptMarkup';


hello();
start.onclick = () => {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageTwo").style.display = "flex";
    
};
