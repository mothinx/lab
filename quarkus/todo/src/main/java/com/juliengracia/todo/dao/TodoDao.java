package com.juliengracia.todo.dao;

import com.juliengracia.todo.model.Todo;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TodoDao implements PanacheRepository<Todo> {

}
