var toggleCircle = document.querySelector('#nightMode-circle');
var nightModeButton = document.querySelector('#nightMode');


toggleCircle.addEventListener('click',()=>{
    if (toggleCircle.classList.contains('nightMode-circle-light')) {
      toggleCircle.classList.remove('nightMode-circle-light')
      toggleCircle.classList.add('nightMode-circle-dark')
      toggleCircle.style.transform = "translate(205%,-50%)"



      document.body.style.backgroundColor = "#1f2325";
      document.body.style.color = "#FEB41C";

      //Buttons
      icon_addtask.style.color = "#FEB41C";
      icon_addtask.parentNode.style.color = "whitesmoke"
      addButton.style.color="#1f2325";
      addButton.style.backgroundColor="#FEB41C";
      cancelButton.style.color = "whitesmoke";

      //Text Area
      newTask.style.color = "whitesmoke";
      newTask.style.border = "0.5px solid whitesmoke";
      newTask.classList.add('togglePlaceholderColor');

      //Table
      tbody.style.color = "whitesmoke";

      //Night Mode

      nightModeButton.style.border = "5px solid #FEB41C";
      toggleCircle.style.backgroundColor = "#FEB41C";
    }
    else{
      toggleCircle.classList.remove('nightMode-circle-dark')
      toggleCircle.classList.add('nightMode-circle-light')
      toggleCircle.style.transform = "translate(5%,-50%)"


      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.color = "#1f2325";

      //Buttons
      icon_addtask.style.color = "#1f2325";
      icon_addtask.parentNode.style.color = "#1f2325"
      addButton.style.color="whitesmoke";
      addButton.style.backgroundColor="#1f2325";
      cancelButton.style.color = "#1f2325";

      //Text Area
      newTask.style.color = "#1f2325";
      newTask.style.border = "0.5px solid #1f2325";
      newTask.classList.remove('togglePlaceholderColor');


       //Table
       tbody.style.color = "#1f2325";



      //Night Mode

      nightModeButton.style.border = "5px solid #1f2325";
      toggleCircle.style.backgroundColor = "#1f2325";
    }
});