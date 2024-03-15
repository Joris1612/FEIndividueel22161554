import request  from 'supertest';
import app from '../app';


describe("POST /books", () => {

    describe("Add a correct book", () => {

        test("Should return with a 200 status code", async () =>{
            const response = await request(app).post("/api/books").send({
                title: "testTitle2",
                img_url: "testUrl2",
                author: "testAuthor2",
                category: "testCategory2"
            })
            expect(response.statusCode).toBe(200);
        })


        test("Should return the book, with an id", async () =>{
            const response = await request(app).post("/api/books").send({
                title: "testTitle2",
                img_url: "testUrl2",
                author: "testAuthor2",
                category: "testCategory2"
            })
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty(['id']);
            expect(response.body).toHaveProperty(['title']);
            expect(response.body).toHaveProperty(['img_url']);
            expect(response.body).toHaveProperty(['author']);
            expect(response.body).toHaveProperty(['category']);
        })

    })

    describe("Add an incorrect book", () =>{
        test("Should return status code 404 if book is empty", async() =>{
            const response = await request(app).post("/api/books").send({
                title: "",
                img_url: "",
                author: "",
                category: ""
            })
            expect(response.statusCode).toBe(404);
        })
    })
})