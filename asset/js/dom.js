const rNone = document.getElementById('RNone');
const rAdd = document.getElementById('RAdd');
const rDone = document.getElementById('RDone');
const nowDate = document.getElementById('nowDate');
const loading = document.getElementById('loading');
const todoCheck = document.getElementById('todoCheck');
const doneCheck = document.getElementById('doneCheck');


// 主页时间
let date = new Date();
nowDate.innerText = date.toLocaleDateString();
// toLocaleString() = toLocaleDateString() + toLocaleTimeString()

// 加载
setInterval('onLoading()',4000);
function onLoading(){
    loading.classList.add('visually-hidden');
}

const addBtn = document.getElementById('add-btn');
const setTask = document.getElementById('setTask');
const setTime = document.getElementById('setTime');

