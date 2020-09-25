let addBtn  = document.getElementById('addBtn')
let populate = document.getElementById('populate')
let todoList = document.getElementById('todoList')
let newTask = document.getElementById('newTask')

addBtn.onclick = () => {
    let startTime = new Date()
    todoList.innerHTML += `<li> ${newTask.value} </li>`
    console.log((new Date() - startTime))
}

populate.onclick = () => {
    let startTime = new Date()
    for (let i = 0; i < 1000; i++) {
        todoList.innerHTML += `<li> ${i} </li>`    
    }
    console.log((new Date() - startTime))
}

