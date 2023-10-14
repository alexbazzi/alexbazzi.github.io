var canvas = document.getElementById("matrix-rain"),
    ctx = canvas.getContext("2d");

// Set canvas to cover full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Unicode characters to be used for the rain
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
characters = characters.split(""); // Convert string to array

var fontSize = 10,
    columns = canvas.width / fontSize; // Number of columns for the rain

// An array of drops - one per column
var drops = [];
for(var x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Function to draw the characters
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.03)"; // Fade effect using 'black' background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 255, 0, 0.13)"; // Text color with opacity 
    ctx.font = fontSize + "px arial";
    for(var i = 0; i < drops.length; i++) {
        var text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33); // Loop the animation

