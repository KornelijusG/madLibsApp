
const car = document.querySelector('#car');
const ctx = car.getContext('2d');
const drawCar = () => {
ctx.save();
ctx.translate(35, 260);

ctx.fillRect(0, 30, 15, 20);
ctx.fillRect(15, 20, 30, 30);

ctx.fillStyle = 'cyan';
ctx.fillRect(30, 23, 7, 7);
ctx.fillStyle = 'black';

ctx.fillRect(45, 30, 15, 20);

ctx.fillRect(7, 43, 14, 14);
ctx.fillRect(37, 43, 14, 14);
ctx.restore();
};

drawCar();
