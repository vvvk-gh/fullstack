$(()=>{
    let item = $('#newItem')
    let listItem = $('#itemList')

    $('#append').click(()=>{
        let text = item.val();
        listItem.append(`<li>${text}</li>`);
        $('#newItem').val('  ');
    })

    $('#prepend').click(()=>{
        let text = item.val();
        listItem.prepend(`<li>${text}</li>`);
        $('#newItem').val('  ');
    })

})