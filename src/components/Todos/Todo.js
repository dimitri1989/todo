//მთავარო თუდუ სადაც დაიმპორტდება
//1) todolist
//2) todost ში დაიმპორტდება
import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoFom from './TodoFom';
import './todo.css';

const Todo = () => {
  const [pendingTodo, setpendingTodo] = useState([]); //შესასრულებელი task_ები
  const [statuscomplete, setStatusComplete] = useState(0);
  const [statuspending, setStatuspending] = useState(0);
  function pendingHandlerDelete() {
    setStatuspending(statuspending - 1);
  }
  function pendingHandlerUpdate() {
    setStatuspending(statuspending + 1);
  }
  function statuscompleteFunqtion() {
    pendingHandlerDelete();
    return setStatusComplete(statuscomplete + 1);
  }
  function pendingHandlerDeleteIf() {
    if (statuspending !== 0) {
      pendingHandlerDelete();
    }
  }
  function statuscompleteDeleteFunqtion() {
    pendingHandlerDeleteIf();

    return setStatusComplete(statuscomplete - 1);
  }

  return (
    <>
      <h2 className="pt-5">Pending tasks ({statuspending})</h2>
      <h2 className="pt-5">completed tasks ({statuscomplete})</h2>
      {pendingTodo.map((todos, index) => {
        return (
          <TodoList
            key={index}
            {...todos}
            setpendingTodo={setpendingTodo}
            pendingTodo={pendingTodo}
            statuscompleteFunqtion={statuscompleteFunqtion}
            statuscompleteDeleteFunqtion={statuscompleteDeleteFunqtion}
            statuscomplete={statuscomplete}
            pendingHandlerDeleteIf={pendingHandlerDeleteIf}
          />
        );
      })}
      <TodoFom
        setpendingTodo={setpendingTodo}
        pendingTodo={pendingTodo}
        pendingHandlerUpdate={pendingHandlerUpdate}
      />
    </>
  );
};

export default Todo;
