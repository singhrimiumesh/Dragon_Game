score = 0;
cross = true;

audio = new Audio(img/music.mp3);
audigo = new Audio(img/gameover.mp3);

setTimeout(() =>{
    audio.play();
        
}, 1000);
document.onkeydown= function(e){
    console.log("key Code is : ", e.keyCode)
    if(e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('.animateDino');
        setTimeout(() => {
           dino.classList.remove9('.animateDino');
        },700)
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).grtPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px" ;
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).grtPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px" ;
    }
}
