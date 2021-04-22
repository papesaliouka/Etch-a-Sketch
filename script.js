const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');

let size;

function createPad(count=4) {
    container.textContent='';
    container.style.gridTemplateColumns= `repeat(${count}, minmax(25px, 1fr))`;
    container.style.gridTemplateRows= `repeat(${count}, minmax(25px, 1fr))`;
    for (let i=0; i<count*count; i++){
        const div = document.createElement('div');
        div.classList.add('pad');
        div.addEventListener('mouseleave', ()=> div.classList.add('pad-back'))
        container.appendChild(div);
    }
}


function reset(){
    size = prompt('enter a size between 4 et 16');
    if(parseInt(size)>16){
        size = 16
        createPad(size);
    }else{
        createPad(size);
    }
}


// Even listeners
resetBtn.addEventListener('click', reset);


// on load
createPad();
