const squadRB = document.querySelectorAll('.squadInput');
squadRB.forEach(o => {
        o.addEventListener('click', () => {
            createList(getSquadSize);
    })
})

function getSquadSize(n){
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

function createInput(){
    const nameContainer = document.querySelector('.names');
    let input = document.createElement('input');
    input.type = 'text';
    nameContainer.appendChild(input);
}

function createList(n){
    const nameContainer = document.querySelector('.names');
    const list = document.createElement('ul');
    nameContainer.appendChild(list);
    // for loop with n
    for (var i = 0; i < n; i++){
        // needs to be resetted each time radiobutton is clicked #futurenote

    }
    const lItem = document.createElement('li');
    
    list.appendChild(lItem);
}
/* create function that first makes <li>, then for each input, have them in a <ul> */