let todolist=[
  {
  item:'buy milk',
  duedate:'14/1/2026'},
  {
    item:'go to college',
    duedate:'14/1/2026'}
  ];
displayItems();
function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let tododate=dateElement.value;
  console.log(todoItem);
  //todolist.push(todoItem);
  todolist.push({
  item: todoItem,
  duedate: tododate
});

  inputElement.value='';
  dateElement.value='';
  displayItems();
}
function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';
  for(let i=0;i< todolist.length;i++){
    //let item=todoList[i].item;
    //let duedate=todolist[i].duedate;
    let {item,duedate}=todolist[i];
    newHtml+=`
    <span>${item}</span>
    <span>${duedate}</span>
  <button class='btn-delete'onclick="todolist.splice(${i},1); displayItems()">Delete</button>
  `;
  }
  containerElement.innerHTML=newHtml;
 /**displayElement.innerText='';
  for(let i=0;i<todolist.length;i++){
  displayElement.innerText=displayElement.innerText+"\n"+todolist[i];
}**/
}