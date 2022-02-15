let btn = document.querySelectorAll(".drum");


for(let x of btn){
    x.addEventListener( "click", function(){
        let key = this.innerHTML;
        makeSound(key);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
});

function makeSound(k){
    switch(k){
        case 'w': case 'W':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case 'a': case 'A':
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

        case 's': case 'S':
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case 'd': case 'D':
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case 'j': case 'J':
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case 'k': case 'K':
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case 'l': case 'L':
            sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
        
    }
}