package com.juliengracia.todo.service;

import com.juliengracia.todo.dao.TodoDao;
import com.juliengracia.todo.dto.TodoDto;
import com.juliengracia.todo.model.Todo;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.List;

@ApplicationScoped
public class TodoService {

    @Inject
    TodoDao todoDao;

    public List<TodoDto> getAll() {
        return todoDao.listAll()
                .stream()
                .map(Todo::mapToTodoDto)
                .toList();
    }
}
