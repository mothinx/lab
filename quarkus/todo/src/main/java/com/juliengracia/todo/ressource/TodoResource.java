package com.juliengracia.todo.ressource;

import com.juliengracia.todo.dto.TodoDto;
import com.juliengracia.todo.service.TodoService;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

@Path("/todo")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TodoResource {

    @Inject
    TodoService todoService;

    @GET
    public Response getAll() {
        List<TodoDto> todos = todoService.getAll();
        return Response.ok(todos).build();
    }

    @POST
    public Response add(TodoDto dto) {
        todoService.add(dto);
        return Response.created(URI.create("/todo/")).build();
    }

    @Path("{id}")
    @GET
    public Response getById(@PathParam("id") Long id) {
        TodoDto todo = todoService.getById(id);
        return Response.ok(todo).build();
    }
}