$(()=>{
    let page = 0;
    
    $('#fetch').click(()=>{
        console.log('button clicked')
        page++
       
        console.log(page)
        $.get("https://reqres.in/api/users?page="+page , function(data){
            console.log(data.data)
            let res = data.data
                for(let p of res ){
                    $('#listItems').append(`<li>
                    <img src="${p.avatar}" width="80"/>
                    ${p.first_name}</li>`)        
                }            
            })
        })
    })
