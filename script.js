const squadRB = document.querySelectorAll('.squadInput');
squadRB.forEach(o => {
        o.addEventListener('click', () => {
            if (document.getElementsByClassName('names').firstChild){
                console.log('has children!');
            }
            createList(getSquadSize(o.id));
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
    for (var i = 0; i < n; i++){
        // needs to be resetted each time radiobutton is clicked #futurenote
        const lItem = document.createElement('li');
        list.appendChild(lItem);
        let nameLabel = document.createElement('label');
        nameLabel.innerText = `Player ${i+1}`;
        nameLabel.setAttribute('for', `name${i+1}`);
        lItem.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = `name${i+1}`;
        nameInput.name = 'playerName';
        lItem.appendChild(nameInput);
    }
}

function resetNames(){
    while(document.querySelector('.names').firstChild){
        document.removeChild('.names');
    }
}
/* create function that first makes <li>, then for each input, have them in a <ul> */