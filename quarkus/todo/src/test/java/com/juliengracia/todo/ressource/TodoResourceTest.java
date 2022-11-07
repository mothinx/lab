package com.juliengracia.todo.ressource;

import io.quarkus.test.junit.QuarkusTest;
import io.vertx.core.json.JsonObject;
import org.junit.jupiter.api.Test;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.is;

@QuarkusTest
class TodoResourceTest {

    @Test
    void should_retrieve_all_todos() {
        given()
                .when().get("/todo")
                .then()
                .body("id", hasItems(998,999))
                .body("title", hasItems("FirstTodo", "SecondTodo"))
                .body("description", hasItems("TodoDescription", "TodoDescription"))
                .body("done", hasItems(false, false))
                .body("size()", equalTo(2))
                .statusCode(Response.Status.OK.getStatusCode());
    }

    @Test
    void should_add_a_todo() {
        JsonObject jsonObject = new JsonObject();
        jsonObject.put("title", "a title");

        given()
                .body(jsonObject.toString())
                .contentType(MediaType.APPLICATION_JSON)
                .when()
                .post("/todo")
                .then()
                .statusCode(Response.Status.CREATED.getStatusCode());
    }

    @Test
    void should_find_todo_by_id() {
        given()
                .pathParam("id", 999L)
                .contentType(MediaType.APPLICATION_JSON)
                .when()
                .get("/todo/{id}")
                .then()
                .body("title", is("SecondTodo"))
                .body("description", is("TodoDescription"))
                .statusCode(Response.Status.OK.getStatusCode());
    }

    @Test
    void should_throw_exception_if_id_not_found() {
        given()
                .pathParam("id", 99999L)
                .contentType(MediaType.APPLICATION_JSON)
                .when()
                .get("/todo/{id}")
                .then()
                .statusCode(Response.Status.NOT_FOUND.getStatusCode());
    }
}