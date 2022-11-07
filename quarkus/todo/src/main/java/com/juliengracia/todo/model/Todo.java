package com.juliengracia.todo.model;


import com.juliengracia.todo.dto.TodoDto;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Setter
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private boolean done;

    public TodoDto mapToTodoDto() {
        TodoDto dto = new TodoDto();
        dto.setId(id);
        dto.setTitle(title);
        dto.setDescription(description);
        dto.setDone(done);
        return dto;
    }
}
