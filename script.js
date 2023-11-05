const squadRB = document.querySelectorAll('.squadInput');
squadRB.forEach(o => {
        o.addEventListener('click', e => {
            alert(e.target.id);
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