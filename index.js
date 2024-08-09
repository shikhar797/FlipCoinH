var randomNumber1=Math.floor(Math.random() * 4);
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var audio = new Audio('coin-flip-88793.mp3');
if(randomNumber1==3){
    
    image1.src='tails.png'
}
else image1.src='heads.png'

if(randomNumber1==3){
    var text = document.querySelector('h1');
    text.textContent='Tails'
    audio.play();
}
else {
    var text = document.querySelector('h1');
    text.textContent='Heads'
    audio.play();
}

function reload() {
    window.parent.location = window.parent.location.href;
}