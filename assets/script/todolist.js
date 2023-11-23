const addTask = document.getElementById('todo_list');
const inputTask = document.getElementById('to_do');
const buttonClickTask = document.getElementById('button_todo');
const finishList = document.getElementById('finish_list');

buttonClickTask.addEventListener('click', function () {
    const newTask= document.createElement('li');
    newTask.classList.toggle('task');
    const textTask = inputTask.value; 
    newTask.textContent = textTask;
    addTask.prepend(newTask);
    inputTask.value = '';
} );

addTask.addEventListener('click', function (evt) {
    if (evt.target.addTask === 'task') {
    const newLiOk = document.createElement('li');
    newLiOk.classList.toggle('task_ok');
    //const textTaskOk = inputTask.value;
    newLiOk.textContent = 'Привет';
    finishList.prepend(newLiOk);
    //inputTask.value = '';
    }
} );
