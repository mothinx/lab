import React from "react";


interface Props {
    todo: Todo;
    onClick: (id: any) => void;
}

export const Todo: React.FC<Props> = ({todo, onClick}) => {

    const dueDate = todo.due_date ? <div>
        {todo.due_date?.toDateString()}
    </div> : null;

    return (
        <div className={todo.done ? "complete" : ""}
             onClick={() => onClick(todo.id)}>
            <div className="todo">
                <div>
                    {todo.title}
                </div>
                {dueDate}
            </div>
        </div>

    );
}

