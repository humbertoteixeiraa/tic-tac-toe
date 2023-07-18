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

//FUNCTIONS
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
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}
