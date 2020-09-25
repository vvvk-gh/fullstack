let addBtn  = document.getElementById('addBtn')
let populate = document.getElementById('populate')
let todoList = document.getElementById('todoList')
let newTask = document.getElementById('newTask')

addBtn.onclick = () => {
    let startTime = new Date()
    let newItem = document.createElement('li')
    newItem.textContent = newTask.value
    todoList.appendChild(newItem)
    console.log((new Date() - startTime))
}

populate.onclick = () => {
    let startTime = new Date()
    for (let i = 0; i < 1000; i++) {

        let newItem = document.createElement('li')
        newItem.textContent = i;
        todoList.appendChild(newItem)
            
    }
    console.log((new Date() - startTime))
}

