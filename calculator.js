function starCheck(name){
    const clicka = document.querySelector(name);
    if(!clicka.classList.contains('star-clicked')){
        clicka.classList.add('star-clicked');
    }
    else{
        clicka.classList.remove('star-clicked');
    }
}
let calcualtionFinal = localStorage.getItem('calculation') || ' ';
displayCalculation();
function  makecalculation(value){
    calcualtionFinal+=value;
    displayCalculation();
    localStorage.setItem('calculation',calcualtionFinal);
}
function displayCalculation(){
    document.querySelector('.js-A').innerHTML=calcualtionFinal;
}