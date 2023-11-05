const squadRB = document.querySelectorAll('.squadInput');
squadRB.forEach(o => {
        o.addEventListener('click', e => {
            createInput();
    })
})

function getSquadSize(n) {
    switch(n){
        case 'solo':
            return 1;
        case 'duo':
            return 2;
        case 'trio':
            return 3;
        case 'quad':
            return 4;
        default:
            break;
    }
}

function createInput() {
    const nameContainer = document.querySelector('.names');
    let input = document.createElement('input');
    input.type = 'text';
    nameContainer.appendChild(input);
}

/* create function that first makes <li>, then for each input, have them in a <ul> */