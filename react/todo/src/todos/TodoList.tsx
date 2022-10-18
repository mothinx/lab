import React, {useState} from "react";
import {Todo} from "./Todo";
import TodoForm from "./TodoForm";

const initialTodos: Todo[] = [
    {
        id: 1,
        title: "Réparer la lampe de chevet",
        done: false
    },
    {
        id: 2,
        title: "Trier le linge",
        done: false
    },
    {
        id: 3,
        title: "Inscription au sport",
        done: false
    },
    {
        id: 4,
        title: "Relire rapport de stage du stagiaire",
        due_date: new Date(2022, 10, 22),
        done: true
    },
    {
        id: 5,
        title: "Une tache sans projet",
        done: true
    },
]

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

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

    return (
        <div className="app">
            <h1>TODO LIST</h1>
            <TodoForm onSubmit={handleSubmit}/>
            <div className="todos">
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo}
                                 onClick={handleChange}/>
                })}
            </div>
        </div>
    );
}

export default TodoList;