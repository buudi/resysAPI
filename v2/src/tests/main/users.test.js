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

describe("POST /users", () => {

    it("should create a new user", async () => {
        // create a new user
        const newUser = {
            name: "John Doe",
            role: "member",
            password: "123456"
        }

        const response = await request(app).post("/users").send(newUser);
        const { user } = JSON.parse(response.text);

        // expect the db to contain newUser
        // expect(user).toEqual(expect.arrayContaining([newUser]));

        expect(user).toMatchObject(newUser);
        expect(response.statusCode).toBe(201);
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });
});

