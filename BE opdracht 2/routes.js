const express = require('express');
const { body, validationResult, query } = require('express-validator');
const router = express.Router();
const bookModel = require('./bookModel');

// GET all books
router.get('/books', async(req, res) => {
    try {
        const allBooks = await bookModel.findAll();
        if(!allBooks){
            res.status(404).json("empty_books")
        }
        res.status(200).json(allBooks);
    } catch (err){
        console.log(err)
        res.status(404).json("general_error")
    }

});

// POST new book
router.post('/books', [
    body('title').notEmpty().escape(),
    body('img_url').notEmpty().escape(),
    body('author').notEmpty().escape(),
    body('category').notEmpty().escape(),
        ] ,async(req, res) => {
    const validated = validationResult(req)
    if(validated.isEmpty()){
        const {title, img_url, author, category} = req.body;
        const newBook = bookModel.build({
            'title': title,
            'img_url': img_url,
            'author': author,
            'category': category
            }
        )

        try{
            await newBook.save();
            res.status(200).json(newBook);
        }
        catch(err){
            console.log(err);
            res.status(404).json("We have a problem.")
        }
    }
    else{
        res.status(404).json("general_error")
    }
});

// GET book by id
router.get('/books/:id', query('id').isEmpty().escape(), async (req, res) => {
    const validated = validationResult(req);
    if(validated.isEmpty()) {
        const chosenBook = await bookModel.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!chosenBook){
            res.status(404).json("book_not_found");
        }
        else{
            res.status(200).json(chosenBook);
        }
    }
    else{
        res.status(404).json("general_error");
    }
});

// GET books by category
router.get('/booksPerCategory/:category', query('category').isEmpty().escape(), async (req, res) => {
    const validated = validationResult(req);
    if(validated.isEmpty()) {
        const booksPerCategory = await bookModel.findAll({
            where: {
                category: req.params.category
            }
        });
        if(booksPerCategory) {
            res.status(200).json(booksPerCategory);
        }
        else{
            res.status(404).json("general_error");
        }
    }
    else{
        res.status(404).json("general_error");
    }
});

// PUT new book update
router.put('/books/:id',[
    body('title').notEmpty().escape(),
    body('img_url').notEmpty().escape(),
    body('author').notEmpty().escape(),
    body('category').notEmpty().escape(),
], async (req, res) => {
    const validated = validationResult(req);
    if(validated.isEmpty()) {
        const {title, img_url, author, category} = req.body;
        const bookToUpdate = await bookModel.findOne({
            where: {
                id: req.params.id
            }
        });
        if(bookToUpdate) {
            bookToUpdate.set({
                'title': title,
                'img_url': img_url,
                'author': author,
                'category': category
            });
            try {
                await bookToUpdate.save();
                res.status(200).json(bookToUpdate);
            } catch (err) {
                console.log(err);
            }
        }
        else{
            res.status(404).json("general_error");
        }
    }
    else{
        res.status(404).json("general_error");
    }
});

// DELETE book
router.delete('/books/:id',query('id').isEmpty().escape(), async (req, res) => {
    const validated = validationResult(req);
    if(validated.isEmpty()) {
        const bookToDelete = await bookModel.findOne({
            where: {
                id: req.params.id
            }
        });
        if(bookToDelete) {
            try {
                await bookToDelete.destroy();
                res.status(200).json({message: "Succes"});
            } catch (err) {
                console.log(err);
            }
        }
        else{
            res.status(404).json("general_error");
        }
    }
    else{
        res.status(404).json("general_error");
    }

});

module.exports = router;