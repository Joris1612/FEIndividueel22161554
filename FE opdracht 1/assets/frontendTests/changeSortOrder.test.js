const bookFirstLetters = ['b', 'd', 'c', 'a', '1'];


//Test if an empty request from the sort does nothing T07
test('should not sort without a sortOrder', () =>{
    const mock = jest.fn(chosenSort => {
            if (chosenSort === "") {
                return bookFirstLetters;
            }
            else {
                // Sort books alphabetically
                bookFirstLetters.sort();
                if (chosenSort === "a-z") {
                    return bookFirstLetters;
                } else {
                    // User wants z-a, so we reverse it
                    bookFirstLetters.reverse();
                    return bookFirstLetters;
                }
            }
        }
    )
    expect(mock('')).toStrictEqual(['b', 'd', 'c', 'a', '1']);
})

//Test if the books get sorted based on alphabetical order T05
test('should sort alphabetically with a-z sort order ', () =>{
    const mock = jest.fn(chosenSort => {
            if (chosenSort === "") {
                return bookFirstLetters;
            }
            else {
                // Sort books alphabetically
                bookFirstLetters.sort();
                if (chosenSort === "a-z") {
                    return bookFirstLetters;
                } else {
                    // User wants z-a, so we reverse it
                    bookFirstLetters.reverse();
                    return bookFirstLetters;
                }
            }
        }
    )
    expect(mock('a-z')).toStrictEqual(['1', 'a', 'b', 'c', 'd']);
})


//Test if the books get sorted in reversed alphabetical order T06
test('should reverse sort alphabetically with z-a sort order ', () =>{
    const mock = jest.fn(chosenSort => {
            if (chosenSort === "") {
                return bookFirstLetters;
            }
            else {
                // Sort books alphabetically
                bookFirstLetters.sort();
                if (chosenSort === "a-z") {
                    return bookFirstLetters;
                } else {
                    // User wants z-a, so we reverse it
                    bookFirstLetters.reverse();
                    return bookFirstLetters;
                }
            }
        }
    )
    expect(mock('z-a')).toStrictEqual(['d', 'c', 'b', 'a', '1']);
})