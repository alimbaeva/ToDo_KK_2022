const inputTask = document.querySelector('.inputTask');
const button = document.querySelector('button');
const tasksLists = document.querySelector('.tasks_list');
inputTask.focus();

function addTaskItem(task) {
    const taskEl = `
    <div class="taskItem">
        <p>${task}</p>
    </div>
`
    tasksLists.innerHTML += taskEl
    inputTask.value = '';
    inputTask.focus();
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    const task = inputTask.value;
    addTaskItem(task)
});

tasksLists.addEventListener('click', (e) => {
    const taskelements = document.querySelectorAll('.taskItem');
    taskelements.forEach((el) => {
        el.addEventListener('click', () => {
            el.remove();
        })
    })

})