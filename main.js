canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
car_width = 120;
car_height = 70;
car_image = "car.png";
car_x = 10;
car_y = 10;

function add() {
    car_imgtag = new Image();
    car_imgtag.onload() = uploadCar;
    car_imgtag.src = car_image;
}

function uploadCar() {
    ctx.drawImage(car_imgtag, car_x, car_y, car_width, car_height)
}
window.addEventListener("keydown", mykeydown);

function mykeydown() {
    keypressed = e.keyCode;
    if (keypressed == '38') {
        car_up();
    }
    if (keypressed == '40') {
        car_down();
    }
    if (keypressed == '37') {
        car_left();
    }
    if (keypressed == '39') {
        car_right();
    }
}

function car_up() {
    if (car_y >= 0) {
        car_y = car_y - 10;
        uploadCar();
    }
}

function car_down() {
    if (car_y < 600) {
        car_y = car_y + 10;
        uploadCar();
    }
}

function car_left() {
    if (car_x > 0) {
        car_x = car_x - 10;
        uploadCar();
    }
}

function car_up() {
    if (car_x < 800) {
        car_x = car_x + 10;
        uploadCar();
    }
}