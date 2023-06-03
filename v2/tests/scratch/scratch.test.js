const supertest = require('supertest');
const app = require("../../app");

describe("GET /scratch", () => {
    test("it should respond with 200 ok", async () => {
        const response = await supertest(app).get("/scratch");
        expect(response.statusCode).toBe(200);
    })
});

describe("GET /scratch/generateId", () => {
    test("it should respond with 200 ok", async () => {
        const response = await supertest(app).get("/scratch/generateId");
        expect(response.statusCode).toBe(200);
    });
});