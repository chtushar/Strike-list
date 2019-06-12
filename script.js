/*Variable*/

var addTask = document.querySelector('.visible-addTask');
var icon_addtask = document.querySelector('.visible-addTask i')
var textBox = document.querySelector('.hidden-addTask');
var cancelButton = document.querySelector('#cancel');
var addButton = document.querySelector('#submit');
var tbody = document.querySelector('tbody');
var newTask = document.querySelector('.textarea');
var deleteButton = document.querySelector('.delete');
var id = 0;
/*Function*/
function forCancel(){
  textBox.style.visibility = 'hidden';
  addTask.classList.remove('animate-visibleAddTask');
  icon_addtask.classList.remove('animate-plus-sign');
}

function forAddButton(){

    addTask.classList.add('animate-visibleAddTask');
    icon_addtask.classList.add('animate-plus-sign');
    textBox.style.visibility = 'visible';

}

function enterTask(){

  var newTask = document.querySelector('.textarea').value;


  tbody.innerHTML += `<tr>
  <td><span>${newTask}</span></td>
  <td class="delete" onclick="removeTask(this.parentNode)"><span>X</span></td>
</tr>
`
textBox.style.visibility = 'hidden';
  addTask.classList.remove('animate-visibleAddTask');
  icon_addtask.classList.remove('animate-plus-sign');
  id++;
}

function removeTask(el){
  el.remove();
}
/*Calling Function*/
addTask.addEventListener('click',forAddButton);

cancelButton.addEventListener('click',forCancel );


addButton.addEventListener('click', enterTask);

newTask.addEventListener('keyup',(e)=>{

  if (e.keyCode === 13) {

    enterTask();
  }
})





// var nameNode = document.querySelector('.name');
// var text = document.querySelector('.name').textContent;
// nameNode.addEventListener('click',()=>{

// if(nameNode.classList.contains('strike') === false){
// var result = name.strike();
// nameNode.classList.add('strike');
// nameNode.innerHTML = result;}
// else{
// nameNode.classList.remove('strike');
// nameNode.innerHTML = text;}

// });
