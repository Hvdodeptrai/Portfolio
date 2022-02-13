const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');
canvas.style.background = 'white';
canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = [ '#9b5de5',  '#f15bb5', '#fee440', '#00bbf9', '#00f5d4'];

window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    document.querySelector('audio').play();
})

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
})


function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.ttl = 1000;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    update() {

        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.ttl--;
        this.draw();
    }

}

var particles;

function init() {
    particles = [];
}

let hue = 0;
let hueRadians = 0;
const particleCount = 40;
const power = 1;

function generateRing() {
    setTimeout(generateRing, 300);
    hue = Math.sin(hueRadians);

    for(let i = 0; i < particleCount; i++) {
        const radian = Math.PI * 2 / 30;
        const x = mouse.x;
        const y = mouse.y;
        particles.push(new Particle(x, y, 10, `hsl(${Math.abs(hue * 360)}, 50%, 50%)`, {
            x: Math.cos(radian * i) * power,
            y: Math.sin(radian * i) * power
        }));
    }
    console.log(hue * 360);
    console.log(particles);
    hueRadians += .01;
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0, 0, 0, .1)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, i) => {
        if(particle.ttl < 0) {
            particles.splice(i, 1);
        } else {
            particle.update();
        }
    })
}

init();
animate();
generateRing();