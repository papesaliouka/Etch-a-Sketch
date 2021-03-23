const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');


function createDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'pad');
    container.appendChild(div);
    div.addEventListener("mouseleave", () => div.setAttribute('class', 'pad-back'));
    resetBtn.addEventListener('click', ()=>{
        div.setAttribute('class', 'pad');

    });
}

function counter (){
 let count = 256;
for (let i = 0; i<count; i++){
    createDiv();
}   
}
counter();
