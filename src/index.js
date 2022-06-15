
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.new_task_description.value);
  })

});

function handleToDo(todo) {

  let li = document.createElement("li");
  document.querySelector("#tasks").appendChild(li);

  li.appendChild(document.createTextNode(todo));
  var button = document.createElement("button");
  button.addEventListener('click' , deleteToDo);
  button.setAttribute("id", "delete_todo");
  button.textContent = ' x ';
  li.appendChild(button);
}


function deleteToDo(e) {
  e.target.parentNode.remove()
}
function editToDo(e){

}
function prioritizeToDo(e){
  // A priority value selected from a dropdown 
  // that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)


}
function sortToDo(){
    //As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority

}