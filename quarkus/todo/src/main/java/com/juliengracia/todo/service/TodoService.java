package com.juliengracia.todo.service;

import com.juliengracia.todo.dao.TodoDao;
import com.juliengracia.todo.dto.TodoDto;
import com.juliengracia.todo.model.Todo;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
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

    @Transactional
    public void add(TodoDto dto) {
        Todo todo = dto.toTodo();
        todoDao.persist(todo);
    }
}
