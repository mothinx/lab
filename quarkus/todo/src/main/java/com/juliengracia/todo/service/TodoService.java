package com.juliengracia.todo.service;

import com.juliengracia.todo.dao.TodoDao;
import com.juliengracia.todo.dto.TodoDto;
import com.juliengracia.todo.model.Todo;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.NotFoundException;
import java.util.List;
import java.util.Objects;

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

    @Transactional
    public void add(TodoDto dto) {
        Todo todo = dto.toTodo();
        todoDao.persist(todo);
    }

    public TodoDto getById(Long id) {
        Todo todo = todoDao.findById(id);
        if(Objects.isNull(todo)) {
            throw new NotFoundException();
        }
        return todo.mapToTodoDto();
    }
}
