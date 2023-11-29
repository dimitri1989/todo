import { useState } from 'react'
import './TodoForm.css'
const TodoFom = ({pendingHandlerUpdate,setpendingTodo,pendingTodo}) => {//მივიღე ცვლადები მშობელიდან
    var [index,setindex] = useState(1)//ინდექსის ათვლის მდგომარეობა
    function saveValue(event){
        event.preventDefault()
        pendingHandlerUpdate()
        setindex(index + 1)//ინდექსი აიდის მისანიჭებლად 
        setpendingTodo([...pendingTodo,{id:index,task:event.target.text.value}])  
        event.target.text.value="" //ვასუფთავებ ინფუთის ველს
    }
  return (
        <>
        <form onSubmit={saveValue} className="todo-form">
            <input type="text" id="todo" name="text" placeholder="Add new taks" />
        </form>
        </>
  )
}

export default TodoFom