import React, {useState} from "react";

interface Props {
    onSubmit: (title: string, date: string) => void;
}

const TodoForm: React.FC<Props> = ({onSubmit}) => {

    const [label, setLabel] = useState('');
    const [date, setDate] = useState('');

    function handleTitleChange(event: any) {
        setLabel(event.target.value);
    }

    function handleDateChange(event: any) {
        setDate(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setLabel('')
        onSubmit(label, date);
    }

    const canAddTodo = label.length > 0;

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTitleChange} placeholder="Add a new task..." value={label}></input>
                <input type="date" onSelect={handleDateChange}></input>
                <button type="submit" disabled={!canAddTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;