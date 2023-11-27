const addTask = document.getElementById('todo_list');
const inputTask = document.getElementById('to_do');
const buttonAddTask = document.getElementById('button_todo');
//const finishList = document.getElementById('finish_list');

buttonAddTask.addEventListener('click', function () {
    const newTask= document.createElement('li');
    newTask.classList.toggle('task');
    const textTask = inputTask.value; 
    newTask.textContent = textTask;
    addTask.prepend(newTask);
    inputTask.value = '';
} );

addTask.addEventListener('click', function (evt) {
    const targLi = evt.target.classList.toggle('li_fulfilled');
    /*if (evt.target.tagName === 'LI');
        const newLiOk = document.createElement ('li');
        const textTask = targLi.value;
        newLiOk.textContent = textTask;
    finishList.prepend(newLiOk);*/
}
);


