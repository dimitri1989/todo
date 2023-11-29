import React, { useState } from 'react';
import Button from '../UI/Button';
import './TodoList.css';
const TodoList = ({
  pendingHandlerDeleteIf,
  statuscomplete,
  statuscompleteDeleteFunqtion,
  statuscompleteFunqtion,
  id,
  task,
  setpendingTodo,
  pendingTodo,
  completeTodo,
  setcompleteTodo,
}) => {
  var [test, settest] = useState({ div: 'text' });
  var [bulean, setbulean] = useState(false);
  function check(event) {
    if (event.target.className === 'delete-btn') {
      //თუ კლასი უდრის კონკრეტული ვათონის კლასს მაშინ
      var name = event.target.id; //გამიგე აიდი
      pendingHandlerDeleteIf();
      if (test.div === 'text2' && statuscomplete !== 0) {
        statuscompleteDeleteFunqtion();
      }
      setbulean(false);
      setpendingTodo(
        pendingTodo.filter((a) => {
          return a.id.toString() !== name;
        })
      );
    }
    if (event.target.className === 'btn-complete') {
      var name = event.target.id;

      pendingTodo.map((a) => {
        if (a.id.toString() === name && bulean === false) {
          settest({ div: 'text2' });
          setbulean(true);
          statuscompleteFunqtion();
          console.log(bulean);
        }
      });
    }
  }

  return (
    <div className="todolist" onClick={check}>
      <h3 className={test.div}>{task}</h3>
      <Button todos={id} />
    </div>
  );
};

export default TodoList;
