const request = require("supertest");
const app = require("../index");

test("GET /products should return 200", async () => {
  const res = await request(app).get("/products");
  expect(res.statusCode).toBe(200);
});

