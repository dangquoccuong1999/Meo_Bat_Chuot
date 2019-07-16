let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
let Rat = function (name, weight, speed, faceImg, xPosition, yPosition, width, height) {
    this.name = name;
    this.weight = weight;
    this.faceImg = faceImg;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.checkLiveDead = true;
    this.tiengKeu = function () {
        alert('Chít Chít ...');
    }

    this.moreRight = function () {
        if (this.xPosition <= canvas.width - this.width) {
            this.xPosition += this.speed;
        }
    }
    this.moreLeft = function () {
        if (this.xPosition >= 0) {
            this.xPosition -= this.speed;
        }
    }
    this.moreUp = function () {
        if (this.yPosition >= 0)
            this.yPosition -= this.speed;
    }
    this.moreDown = function () {
        if (this.yPosition <= canvas.height - this.height) {
            this.yPosition += this.speed;
        }
    }
    this.draw = function () {
        let img = new Image();
        img.src = this.faceImg;
        ctx.drawImage(img, this.xPosition, this.yPosition, this.width, this.height);
    }
}

let Cat = function (name, weight, speed, faceImg, xPosition, yPosition, width, height) {
    this.name = name;
    this.weight = weight;
    this.faceImg = faceImg;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.tiengKeu = function () {
        alert('Meo meo ...');
    }
    this.eat = function (rat) {
        rat.checkLiveDead = false;
        this.weight++;
    }
    this.draw = function () {
        let img = new Image();
        img.src = this.faceImg;
        ctx.drawImage(img, this.xPosition, this.yPosition, this.width, this.height);
    }
    this.moreRight = function () {
        if (this.xPosition <= canvas.width - this.width) {
            this.xPosition += this.speed;
        }
    }
    this.moreLeft = function () {
        if (this.xPosition >= 0) {
            this.xPosition -= this.speed;
        }
    }
    this.moreUp = function () {
        if (this.yPosition >= 0)
            this.yPosition -= this.speed;
    }
    this.moreDown = function () {
        if (this.yPosition <= canvas.height - this.height) {
            this.yPosition += this.speed;
        }
    }
    this.isTouch = function (rat) {
        this.currentXPosition = this.xPosition + this.width;
        console.log(rat.xPosition);
        if (rat.xPosition < this.xPosition + this.width && rat.xPosition > this.xPosition - this.width) {
            if (rat.yPosition < this.yPosition + this.height && rat.yPosition > this.yPosition - this.height){
                return true;
            }
        }
    }

}
