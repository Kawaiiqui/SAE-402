const request = require("supertest");
const baseURL = "http://localhost:3000";
describe ("task API End points", () => {
    test("GET/task should return all tasks", async() => {
        const response = await request(baseURL).get("/task");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
    });
});
