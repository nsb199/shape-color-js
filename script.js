const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "pink",
    "brown",
    "grey"
];

const shapes = [
    "circle",
    "square",
    "rectangle",
    "triangle",
    "diamond",
    
    "rhombus",
    "oval"
];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("shape").style.backgroundColor = randomColor;
}

function changeShape() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    switch (randomShape) {
        case "circle":
            document.getElementById("shape").style.borderRadius = "50%";
            break;
        case "square":
            document.getElementById("shape").style.borderRadius = "0";
            break;
        case "rectangle":
            document.getElementById("shape").style.borderRadius = "10%";
            break;
        case "triangle":
            document.getElementById("shape").style.borderRadius = "0 0 50% 50%";
            break;
        case "diamond":
            document.getElementById("shape").style.borderRadius = "50% 0 50% 0";
            break;
        case "star":
            document.getElementById("shape").style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            break;
        case "rhombus":
            document.getElementById("shape").style.transform = "rotate(45deg)";
            break;
        case "oval":
            document.getElementById("shape").style.borderRadius = "50%";
            document.getElementById("shape").style.transform = "scaleX(2)";
            break;
        default:
            break;
    }
}
