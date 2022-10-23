import React, {useState} from "react";
import {TodoItem} from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState([] as Todo[]);

    function handleChange(id: number) {
        const todosCopy = [...todos];
        todosCopy.map(todoC => {
            if (todoC.id === id) {
                todoC.done = !todoC.done;
            }
        })
        setTodos(todosCopy);
    }

    function handleSubmit(label: string, date: string) {
        const todosCopy = [...todos];
        const newTodo = {
            id: (todos.length + 1),
            title: label,
            done: false,
            due_date: date ? new Date(date) : undefined
        };
        todosCopy.push(newTodo);
        setTodos(todosCopy);
    }

    function handleDelete(id: number) {
        const todosCopy = [...todos];
        const newTodos = todosCopy.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <div className="app">
            <h1>TODO LIST</h1>
            <TodoForm onSubmit={handleSubmit}/>
            <div className="todos">
                {todos.map(todo => {
                    return (
                        <TodoItem key={todo.id}
                                  todo={todo}
                                  onClickChange={handleChange}
                                  onClickDelete={handleDelete}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default TodoList;