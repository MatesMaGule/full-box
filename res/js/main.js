let wall = document.getElementById("wall")
let build = document.getElementById("build")
let front = document.getElementById("front")
let character = document.getElementById("character")
window.onload = () => {
    showBuild();
    setTimeout(() => {
        showWall();
    }, 2000)
    setTimeout(() => {
        showFront();
    }, 4000)
    setTimeout(() => {
        hideBuild();
    }, 6000)
    setTimeout(() => {
        hideFront();
    }, 8000)
    setTimeout(() => {
        runAway();
    }, 10000)
    
    

}
let showBuild = () => {
    build.style.opacity = 1;
}
let showWall = () => {
    wall.style.opacity = 1;
}
let showFront = () => {
    front.style.opacity = 1;
}
let hideFront = () => {
    front.style.opacity = 0;

}
let hideBuild = () => {
    build.style.opacity = 0;
}
let runAway = () => {
    character.style.left = -400 + "px";
}









