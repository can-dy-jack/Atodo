// close-btn
const ipc = require('electron').ipcRenderer;

const btnClose = document.querySelectorAll('.btn-close');
btnClose[0].addEventListener('click', ()=>{
    ipc.send('win-hide');
})
btnClose[1].addEventListener('click', ()=>{
    ipc.send('win-hide');
})
btnClose[2].addEventListener('click', ()=>{
    ipc.send('win-hide');
})


function changeAdd(){
    if(rAdd.classList.contains('visually-hidden')){
        rNone.classList.add('visually-hidden');
        rDone.classList.add('visually-hidden');
        if(todoCheck.classList.contains('checked')){
            todoCheck.classList.remove('checked');
        }
        if(doneCheck.classList.contains('checked')){
            doneCheck.classList.remove('checked');
        }
        rAdd.classList.remove('visually-hidden');
    }
}

function changeTodo(){
    if(rNone.classList.contains('visually-hidden')){
        rAdd.classList.add('visually-hidden');
        rDone.classList.add('visually-hidden');
        if(doneCheck.classList.contains('checked')){
            doneCheck.classList.remove('checked');
        }
        todoCheck.classList.add('checked');
        rNone.classList.remove('visually-hidden');
    }
}

function changeDone(){
    if(rDone.classList.contains('visually-hidden')){
        rAdd.classList.add('visually-hidden');
        if(todoCheck.classList.contains('checked')){
            todoCheck.classList.remove('checked');
        }
        rDone.classList.remove('visually-hidden');
        doneCheck.classList.add('checked');
        rNone.classList.add('visually-hidden');
    }
}

