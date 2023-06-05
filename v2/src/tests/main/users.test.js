const request = require('supertest');
const { makeApp } = require("../../app");

// with dependency injection, we can pass a mock db to the test
const app = makeApp("mock");

describe("GET /users", () => {

   it("should return a non empty array", async () => {
       // fetch the users from db
       const response = await request(app).get("/users");
       const { users } = JSON.parse(response.text);

       expect(users.length).toBeGreaterThan(0);

       expect(response.statusCode).toBe(200);

       // expect the response body to be in json
       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
   });

});
