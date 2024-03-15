import request  from 'supertest';
import app from '../app';


describe("DELETE /books/id", () => {

    describe("Correctly delete a book", () => {

        test("Should return with a 200 status code", async () => {
            const response = await request(app).delete("/api/books/58");
            expect(response.statusCode).toBe(200);
        })
    })

    describe("Incorrectly delete a book", () =>{
        test("Should return status code 404 if book does not exist/id is not found", async() =>{
            const response = await request(app).delete("/api/books/9999");
            expect(response.statusCode).toBe(404);
        })
    })
})