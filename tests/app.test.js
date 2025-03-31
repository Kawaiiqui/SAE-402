const jestOpenAPI = require("jest-openapi").default;
const request = require("supertest");
const path = require("path");
const server = "http://localhost:3000";
// Sets the location of your OpenAPI Specification file
jestOpenAPI(path.join(__dirname, "../src/swagger/api_swagger_doc.yml"));
describe("Test API", () => {
test("GET /task should make a GET request and satisfy OpenAPI spec",
async () => {
// Make request (supertest used here)
const res = await request(server).get("/task");
// Make any assertions as normal
expect(res.status).toEqual(200);
// Assert that the HTTP response satisfies the OpenAPI spec
expect(res).toSatisfyApiSpec();
});
});
