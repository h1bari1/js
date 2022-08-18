let signInButton = document.querySelector('.sign-in')
let users = Object.keys(sessionStorage)
let userOption = [
    {
        id: sessionStorage.length + 1,
        task: '',
        done: false
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
    let doneButton = document.createElement('input')
    doneButton.setAttribute('type', 'button')
    doneButton.classList.add('done')
    doneButton.value = 'done'
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
        if (taskInput.value) {
            userTasks.push({id: userTasks.length + 1, task: taskInput.value, done: false})
            sessionStorage.setItem(user, JSON.stringify(userTasks))
            createTaskText(taskInput.value)
            taskInput.value = ''
            taskError.innerHTML = '';
            checkDone()
        } else {
            taskError.innerHTML = 'Field is empty. Please enter task.';
        }
    })
}
const renderTasks = (user, taskInput) => {
    let users = Object.keys(sessionStorage)
    let userTasks = JSON.parse(sessionStorage.getItem(user))
    users.forEach((elem) => {
        if (elem === user) {
            userTasks.forEach((task) => {
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
    checkDone()
}
const checkDone = () => {
    let users = Object.keys(sessionStorage)
    let userTasks = JSON.parse(sessionStorage.getItem(getUserName()))
    let doneButton = document.querySelectorAll('.done')
    doneButton.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            let task = elem.parentElement
            if (task) {
                task.classList.add('checked')
                sessionStorage.setItem(users[index + 1], userTasks[index + 1].done === true)
            }
            elem.remove()
        })
    })
}


