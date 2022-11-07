package com.juliengracia.todo.dto;

import com.juliengracia.todo.model.Todo;
import lombok.Data;

@Data
public class TodoDto {
    private Long id;
    private String title;
    private String description;
    private boolean done;

    public Todo toTodo() {
        Todo todo = new Todo();
        todo.setTitle(title);
        todo.setDescription(description);
        todo.setDone(done);
        return todo;
    }
}
