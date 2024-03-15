import request from 'supertest';
import app from '../app';

describe("GET /books/id", () => {

    describe("Testing return for correct request", () => {

        test("Should return with a 200 status code if book id is correct", async () => {
            const response = await request(app).get("/api/books/1");
            expect(response.statusCode).toBe(200);
        });

        test("Should return a book, if id is correct", async () => {
            const response = await request(app).get("/api/books/1");
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('title');
            expect(response.body).toHaveProperty('img_url');
            expect(response.body).toHaveProperty('author');
            expect(response.body).toHaveProperty('category');
        })

        test("Should return the right book if book id is correct", async () => {
            const response = await request(app).get("/api/books/1");
            expect(response.body.id).toBe(1);
        });

    })

    describe("Testing return for improper request", () => {

        test("Should return 404 if book id is not in database", async () => {
            const response = await request(app).get("/api/books/9999");
            expect(response.statusCode).toBe(404);
        })
    })
})
