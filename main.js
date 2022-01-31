const pads = document.querySelectorAll('.pads div');
const sounds = document.querySelectorAll('.sound');
const visual = document.querySelector('.visual');

const colors = [
    "aqua",
    "blue",
    "blueviolet",
    "yellow",
    "coral",
    "red"
]

pads.forEach(function(pad, index) {
    pad.addEventListener('click', () => {
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubble(index);
    })
})

function createBubble(index) {
    const bubble = document.createElement('div');

    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'fly 1s ease';
}