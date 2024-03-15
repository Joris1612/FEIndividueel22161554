// testing the file input by the user

const allowedExtensions = ["jpg", "jpeg", "webp", "png"];

// testing for empty file input T08
test('Should return false with empty fileExtension', () =>{
    const mock = jest.fn( extension => allowedExtensions.includes(extension))
    expect(mock("")).toBe(false);
})

//testing for wrong file input T01
test('Should return false with wrong fileExtension', () =>{
    const mock = jest.fn( extension => allowedExtensions.includes(extension))
    expect(mock("exe")).toBe(false);
})

// testing for right file input T02
test('Should return true with right fileExtension', () =>{
    const mock = jest.fn(extension => allowedExtensions.includes(extension))
    expect(mock("jpg")).toBe(true);
})