const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');
const prompte = document.getElementById('prompt');
const body = document.querySelector('body');


function createDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'pad');
    container.appendChild(div);
    div.addEventListener("mouseleave", () => div.setAttribute('class', 'pad-back'));
    resetBtn.addEventListener('click', ()=>{
        div.setAttribute('class', 'pad-reset');
        div.setAttribute('class', 'pad');
    });
}

function counter (count=16){
     count = count*count;
    for (let i = 0; i<count; i++){
        createDiv();
    }   
}

counter();



