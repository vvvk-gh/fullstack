$(()=>{
    let newtask = $('#newtask');
    let todolist = $("#todolist");
    let addBtn = $("#addBtn");
    
    addBtn.click( ()=> {

        let newTodotask = newtask.val();

        $.post('/todos/' ,
        {task : newTodotask},
        (data) => {
            todolist.empty();
            for(todo of data){
                todolist.append(`<li> ${todo.task}</li>`)              
            }
          
        })

    })
})