package com.juliengracia.todo.ressource;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import javax.ws.rs.core.Response;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItems;

@QuarkusTest
class TodoResourceTest {

    @Test
    void should_retrieve_all_todos() {
        given()
                .when().get("/todo")
                .then()
                .body("id", hasItems(1,2))
                .body("title", hasItems("FirstTodo", "SecondTodo"))
                .body("description", hasItems("TodoDescription", "TodoDescription"))
                .body("done", hasItems(false, false))
                .body("size()", equalTo(2))
                .statusCode(Response.Status.OK.getStatusCode());
    }
}