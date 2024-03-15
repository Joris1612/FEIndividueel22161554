import request from 'supertest';
import app from '../app';



describe("GET /books", () => {

    describe("Testing proper return", () => {

        test("Should return with a 200 status code", async () =>{
            const response = await request(app).get("/api/books");
            expect(response.statusCode).toBe(200);
        });

        test("Should return a list of books", async () => {
            const response = await request(app).get("/api/books");
            expect(response.statusCode).toBe(200);
            expect(response.body[0]).toHaveProperty(['id']);
            expect(response.body[0]).toHaveProperty(['title']);
            expect(response.body[0]).toHaveProperty(['img_url']);
            expect(response.body[0]).toHaveProperty(['author']);
            expect(response.body[0]).toHaveProperty(['category']);
        })
    })
})