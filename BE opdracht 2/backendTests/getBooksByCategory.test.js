import request from 'supertest';
import app from '../app';

describe("GET /booksPerCategory/category", () => {

    describe("Testing return for correct request", () => {

        test("Should return with a 200 status code if book category is correct", async () => {
            const response = await request(app).get("/api/booksPerCategory/Fantasy");
            expect(response.statusCode).toBe(200);
        });

        test("Should return a list books, if category is correct", async () => {
            const response = await request(app).get("/api/booksPerCategory/Fantasy");
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('title');
            expect(response.body[0]).toHaveProperty('img_url');
            expect(response.body[0]).toHaveProperty('author');
            expect(response.body[0]).toHaveProperty('category');
        })

        test("Should return the right category", async () => {
            const response = await request(app).get("/api/booksPerCategory/Fantasy");
            expect(response.body[0].category).toBe("Fantasy");
        });

    })

    describe("Testing return for improper request", () => {

        test("Should return 404 if category does not exist", async () => {
            const response = await request(app).get("/api/booksPerCategory/unusedCategory");
            expect(response.statusCode).toBe(404);
        })
    })
})
