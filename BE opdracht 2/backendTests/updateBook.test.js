import request  from 'supertest';
import app from '../app';


describe("PUT /books", () => {

    describe("Correctly update a book", () => {

        test("Should return with a 200 status code", async () =>{
            const response = await request(app).put("/api/books/15").send({
                title: "testTitle2",
                img_url: "testUrl2",
                author: "testAuthor2",
                category: "testCategory2"
            })
            expect(response.statusCode).toBe(200);
        })


        test("Should return the book, if updated correctly, with the new values", async () =>{
            const response = await request(app).put("/api/books/16").send({
                title: "testTitle2",
                img_url: "testUrl2",
                author: "testAuthor2",
                category: "testCategory2"
            })
            expect(response.statusCode).toBe(200);
            expect(response.body.title).toBe('testTitle2');
            expect(response.body.img_url).toBe('testUrl2');
            expect(response.body.author).toBe('testAuthor2');
            expect(response.body.category).toBe('testCategory2');
            expect(response.body.id).toBe(16);
        })

    })

    describe("Update an incorrect book", () =>{
        test("Should return status code 404 if book is empty", async() =>{
            const response = await request(app).put("/api/books/17").send({
                title: "",
                img_url: "",
                author: "",
                category: ""
            })
            expect(response.statusCode).toBe(404);
        })
        test("Should return status code 404 if book doesnt exist/id is not found", async() =>{
            const response = await request(app).put("/api/books/9999").send({
                title: "testTitle2",
                img_url: "testUrl2",
                author: "testAuthor2",
                category: "testCategory2"
            })
            expect(response.statusCode).toBe(404);
        })
    })
})