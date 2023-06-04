const request = require('supertest');
const { makeApp } = require("../../app");

// with dependency injection, we can pass a mock app to the test
const app = makeApp("mock");

describe("GET /scratch", () => {
    it("should respond with 200 ok", async () => {
        const response = await request(app).get("/scratch");
        expect(response.statusCode).toBe(200);
        // expect the response body to be in json
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));

    })
});

describe("GET /scratch/generateId", () => {
    it("should respond with 200 ok", async () => {
        const response = await request(app).get("/scratch/generateId");
        expect(response.statusCode).toBe(200);
    });
});