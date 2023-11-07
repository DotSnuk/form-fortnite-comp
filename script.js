const squadRB = document.querySelectorAll('.squadInput');
squadRB.forEach(o => {
        o.addEventListener('click', () => {
            if (document.querySelector('.names').childElementCount !== 0){
                resetNames();
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
    const nameClass = document.querySelector('.names');
    while(nameClass.childElementCount !== 0){
        nameClass.removeChild(nameClass.firstChild);
    }
}