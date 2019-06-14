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







/*Get Day*/
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

console.log();






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
  <td><span class="unstrike" onclick="toggleStrike(this)">${newTask}</span></td>
  <td class="delete" onclick="removeTask(this.parentNode)"><span>X</span></td>
</tr>
`
textBox.style.visibility = 'hidden';
  addTask.classList.remove('animate-visibleAddTask');
  icon_addtask.classList.remove('animate-plus-sign');
  document.querySelector('.textarea').value = '';
  id++;
}

function removeTask(el){
  el.remove();
}

function toggleStrike(e){
  if(e.classList.contains("unstrike")){
    e.classList.remove("unstrike");
    e.classList.add("strike");
  }
  else{
    e.classList.remove("strike");
    e.classList.add("unstrike");
  }

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





