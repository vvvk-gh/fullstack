let inpBox = document.getElementById('inpBox');
let btn = document.getElementById('button');
let listItems = document.getElementById('ul-list');


btn.onclick = function() {

    let li = document.createElement('li');

    //delete button
    let delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    delBtn.onclick = function(e) {
        e.target.parentElement.remove();
    }
  
      
    //up button
    let up = document.createElement('button');
    up.innerText = '⬆';
    up.onclick = function(e) {
         e.target.parentElement.parentElement.insertBefore(
            e.target.parentElement,  // insert this element  
            e.target.parentElement.previousElementSibling // before this elemement
             )
    }

    //down button
      let down = document.createElement('button');
      down.innerText = '⬇';
      down.onclick = function(e) {
          console.log('down')
           e.target.parentElement.parentElement.insertBefore(
               e.target.parentElement.nextElementSibling ,
               e.target.parentElement
               )
      }

    //adding span text 
   
    let spanText = document.createElement("span")
    spanText.innerText = inpBox.value;

    li.appendChild(delBtn)
    li.appendChild(up)
    li.appendChild(down)
    li.appendChild(spanText)
    listItems.appendChild(li);
    inpBox.value = " ";
}