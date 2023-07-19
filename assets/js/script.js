//INITIAL DATA
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}

let player = '';
let warning = '';
let playing = false;

reset();

//EVENTS
document.querySelector('.reset').addEventListener('click', reset);

document.querySelector('div[data-item=a1]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a2]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a3]').addEventListener('click', itemClick);
document.querySelector('div[data-item=b1]').addEventListener('click', itemClick);
document.querySelector('div[data-item=b2]').addEventListener('click', itemClick);
document.querySelector('div[data-item=b3]').addEventListener('click', itemClick);
document.querySelector('div[data-item=c1]').addEventListener('click', itemClick);
document.querySelector('div[data-item=c2]').addEventListener('click', itemClick);
document.querySelector('div[data-item=c3]').addEventListener('click', itemClick);

//FUNCTIONS
function itemClick(event) {
    let item = event.target.getAttribute('data-item');
    
    if(playing && square[item] === '') {
        square[item] = player;
        renderSquare();
        tooglePlayer();
    }
}

function reset() {
    warning = '';

    /* Generating a random number */
    let random = Math.floor(Math.random() * 2);
    if(random === 0) {
        player = 'X';
    } else {
        player = 'O';
    }

    for(let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
}

function renderSquare() {
    for(let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);

        if(square[i] !== '') {
            item.innerHTML = square[i];
        } else {
            item.innerHTML = '';
        }
    }
    
    checkGame();
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function tooglePlayer() {
    if(player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }
    renderInfo();
}

function checkGame() {
    if(checkWinnerFor('X')) {
        warning = '"X" won!';
        playing = false;
    } else if(checkWinnerFor('O')) {
        warning = '"O" won!';
        playing = false;
    } else if(isFull()) {
        warning = 'Tie!'
        playing = false;
    }
}

function checkWinnerFor(player) {
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ]

    for(let w in pos) {
        let pArray = pos[w].split(','); //Result: a1, a2, a3 ...

        let hasWon = pArray.every((option) => {
            if(square[option] === player) {
                return true;
            } else {
                return false;
            }
        });

        if(hasWon) {
            return true;
        }
    }

    return false;
}

function isFull() {
    for(let i in square) {
        if(square[i] === '') {
            return false;
        }
    }

    return true;
}