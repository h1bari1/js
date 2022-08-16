let signInButton = document.querySelector('.sign-in')
let users = Object.keys(sessionStorage)
let userOption = [
    {
        id: sessionStorage.length + 1,
        task: '',
    }
]
signInButton.addEventListener('click', (e) => {
    let user = getUserName()
    if (!user) {
        let error = document.querySelector('.error')
        error.innerHTML = 'Invalid input. Please enter correct name'
    } else if (!users.includes(user)) {
        sessionStorage.setItem(user, JSON.stringify(userOption));
    }
    renderApp(user)
})

const getUserName = () => {
    let userName = document.querySelector('input')
    return userName.value
}

const createTaskText = (task) => {
    let taskWrap = document.querySelector('.app-wrap')
    let paragraph = document.createElement('p')
    let doneButton = document.createElement('button')
    doneButton.classList.add('done')
    doneButton.innerHTML = 'done'
    paragraph.innerHTML = task
    paragraph.append(doneButton)
    taskWrap.append(paragraph)
}


const addItem = () => {
    let user = getUserName()
    let taskInput = document.querySelector('.task-input')
    let applyButton = document.querySelector('.apply-button')
    let taskError = document.querySelector('.input-error')
    let userTasks = JSON.parse(sessionStorage.getItem(user))
    applyButton.addEventListener('click', () => {
        console.log(userTasks)
        if (taskInput.value) {
            userTasks.push({id: userTasks.length + 1, task: taskInput.value, done: false})
            sessionStorage.setItem(user, JSON.stringify(userTasks))
            taskInput.value = ''
            taskError.innerHTML = '';
            renderTasks(user,taskInput.value)
        } else {
            taskError.innerHTML = 'Field is empty. Please enter task.';
        }
    })
}
const renderTasks = (user,taskInput) => {
    let users = Object.keys(sessionStorage)
    let userTasks = JSON.parse(sessionStorage.getItem(user))
    console.log('1',userTasks)
    users.forEach((elem) => {
        if (elem === user) {
            userTasks.forEach((task) => {
                console.log(task)
                if (task.task && task.task !== taskInput) {
                    createTaskText(task.task)
                }
            })
        }
    })
}
const renderApp = (user) => {
    let popup = document.querySelector('.popup');
    let appWrap = document.querySelector('.app-wrap');
    let appUserName = document.querySelector('.user-name');
    let userTasks = JSON.parse(sessionStorage.getItem(getUserName()))
    popup.classList.add('disable');
    appWrap.classList.add('active');
    appUserName.innerHTML = user;
    if (userTasks) {
        renderTasks(user)
    }
    addItem()
}


