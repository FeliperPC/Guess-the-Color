const ballList = document.querySelectorAll('.ball');
const answerText = document.querySelector('#answer');
const rgbColor = () => document.getElementById('rgb-color').innerText.slice(1, -1).split(',');
const btnReset = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let firstTimeplay = true;
let scoredPoints = 0;


const arrayBall = [...ballList];

const randomIndex = () => Math.floor(Math.random() * (6 - 0) - 0);

const getRandomColor = () => {
    const arrayColors = [];
    while (arrayColors.length != 3) {
        const newColor = Math.floor(Math.random() * (255 - 0) + 0);
        if (!arrayColors.includes(newColor)) arrayColors.push(newColor);
    }
    const newArray = arrayColors.join(' ');
    return newArray;
}

const checkSelection = (event) => {
    const element = event;
    if (element.target.style.background === `rgb(${rgbColor()})`) {
        answerText.innerText = `Correct, That's it!`;
        scoredPoints+=3;
        score.innerText = `Score : ${scoredPoints}`;

    } else {
        answerText.innerText = 'Not this one! Try again';
    }

}
const setBallsColor = () => {
    arrayBall.forEach((ball) => {
        const color = getRandomColor();
        ball.style.background = `rgb(${color})`;
        ball.addEventListener('click', checkSelection);
    });
    if(firstTimeplay) arrayBall[randomIndex()].style.background = `rgb(${rgbColor()})`; 
}

const resetGame = () => {
    firstTimeplay = false;
    setBallsColor();
    document.querySelector('#rgb-color').innerText = ballList[randomIndex()].style.background.slice(3);
    answerText.innerText = 'Pick a Color';
}

btnReset.addEventListener('click', resetGame)
window.onload = setBallsColor;