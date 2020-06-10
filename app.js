const texts = ["as in mimi ni ule msee","Creative Creations by Oscar Asikoyo", "Finest in Kenya 0715857019 / 0798228468","Logo Animations and Website Developer", "Video Editing and Music Production", "Visual Graphics"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;
if(letter.length === currentText.length){
    count++;
    index = 0;
}
setTimeout(type, 150);
}());


