import React from "react";


interface Props {
    todo: Todo;
    onClickChange: (id: any) => void;
    onClickDelete: (id: any) => void;
}

export const TodoItem: React.FC<Props> = ({todo, onClickChange, onClickDelete}) => {

    const dueDate = todo.due_date ? <div>
        {todo.due_date?.toDateString()}
    </div> : null;

    return (
        <>
            <div className={todo.done ? "complete" : ""}
                 onClick={() => onClickChange(todo.id)}>
                <div className="todo">
                    <div>
                        {todo.title}
                    </div>
                    {dueDate}
                </div>
            </div>
            <button onClick={() => onClickDelete(todo.id)}>Delete</button>
        </>
    );
}

