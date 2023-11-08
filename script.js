const ballList = document.querySelectorAll('.ball');

const getRamdonColor = () => {
    const arrayColors = [];
    for(let i=0;i<3;i +=1){
        arrayColors.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    return `#${arrayColors[0]}${arrayColors[1]}${arrayColors[2]}`;
}

const setBallsColor = () => {
    const arrayBall = [...ballList];
    arrayBall.forEach((ball)=>{
        ball.style.background = getRamdonColor();
    });
}

window.onload = setBallsColor;