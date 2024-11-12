const sounds = [
    new Audio('sounds/moan1.m4a'),
    new Audio('sounds/moan2.m4a'),
    new Audio('sounds/moan3.m4a'),
    new Audio('sounds/moan4.m4a'),
    new Audio('sounds/moan5.m4a'),
    new Audio('sounds/moan6.m4a'),
    new Audio('sounds/moan7.m4a'),
    new Audio('sounds/moan8.m4a'),
    new Audio('sounds/moan9.m4a'),
    new Audio('sounds/moan10.m4a'),
    new Audio('sounds/moan11.m4a'),
    new Audio('sounds/moan12.m4a'),
    new Audio('sounds/moan13.m4a')
];

document.querySelectorAll('.nipple').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Play the corresponding sound
        sounds.currentTime = 0; // Reset sound to start
        sounds[index].play();

        button.style.setProperty('background-color', '#4caf50'); // Change color on click
        setTimeout(() => {
            button.style.setProperty('background-color', '#ff5722'); // Reset color after time
        }, sounds[index].duration * 1000); // Duration is in seconds, so multiply by 1000 to get milliseconds
    });
});
