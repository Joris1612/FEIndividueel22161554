
const allBooks = 15;
let amountOfPages;


//Test if the amountOfPages gets calculated based on the amount of books divided by the items per page T04

test('should divide the amount of books by the amount of itemsPerPage', () =>{
    const mock = jest.fn(itemsPerPage => amountOfPages = Math.ceil(allBooks / itemsPerPage));
    expect(mock(5)).toBe(3);
})

//Test if the amountOfPages gets rounded up T03
test('should round amountOfPages up', () =>{
    const mock = jest.fn(itemsPerPage => amountOfPages = Math.ceil(allBooks / itemsPerPage));
    expect(mock(4)).toBe(4);
})

