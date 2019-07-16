// const NUMBER_RANDOM_HEIGHT = Math.floor(Math.random()* canvas.height);
// const NUMBER_RANDOM_WIDTH = Math.floor(Math.random()* canvas.width);
let cat = new Cat('cat', 50, 20, '1a.png', 0, 0, 150, 150);
let rat = new Rat('rat', 50, 40, '2a.png', 500, 400, 150, 150);
cat.draw(canvas);
rat.draw(canvas);

function docReady() {
    window.addEventListener('keydown', moveCat);
    window.addEventListener('keydown', moveRat);

}

function clearCanvas() {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}

function moveCat(evt) {
    // console.log(evt.key);
    clearCanvas();
    switch (evt.key) {
        case 'ArrowLeft':
            cat.moreLeft();
            break;
        case 'ArrowRight':
            cat.moreRight();
            break;
        case 'ArrowDown':
            cat.moreDown();
            break;
        case 'ArrowUp':
            cat.moreUp();
    }
    cat.draw();
    rat.draw();
}

function moveRat() {
    let numberRandom = Math.floor(Math.random() * 3);
    clearCanvas();
    if (numberRandom == 0 ) {
        rat.moreDown();
    } else if (numberRandom == 1) {
        rat.moreUp();
    } else if (numberRandom == 2) {
        rat.moreLeft();
    } else if (numberRandom == 3 ) {
        rat.moreRight();
    }
    rat.draw();
    cat.draw();
    eat();
}
 function eat() {
     if (cat.isTouch(rat)){
         alert('Đã ăn được chuột');
     }
 }
