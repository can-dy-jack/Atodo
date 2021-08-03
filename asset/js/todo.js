const ATodos = document.getElementById('a-todos');
// const ir = require('electron').ipcRenderer;
const storage = require('electron-localstorage');

addBtn.onclick = function (){
    let task = setTask.value;
    let time = setTime.value;
    let div1 = document.createElement("div");
    div1.classList.add('todo-list');
    if(task !=null){
        let div11 = document.createElement("div");
        let div11text = document.createTextNode(task);
        div11.appendChild(div11text);
        div1.appendChild(div11);
        if(time!=null){
            let div12 = document.createElement("div");
            let div12text = document.createTextNode(time);
            div12.appendChild(div12text);
            div1.appendChild(div12);
            storage.setItem(task,time);  // 查重？
        }
        let div3 = document.createElement("div");
        div3.classList.add('todo-btn');
        let button1 = document.createElement('button');
        button1.classList.add('btn');
        button1.classList.add('btn-outline-info');
        let btn1Text = document.createTextNode('完成');
        button1.appendChild(btn1Text);
        let button2 = document.createElement('button');
        button2.classList.add('btn');
        button2.style.marginLeft = '5px';
        button2.classList.add('btn-outline-info');
        let btn2Text = document.createTextNode('删除');
        button2.appendChild(btn2Text);
        div3.appendChild(button1);
        div3.appendChild(button2);
        div1.appendChild(div3);

        ATodos.appendChild(div1);
        changeTodo();
        setTime.value = "";
        setTask.value = "";
    }
}

