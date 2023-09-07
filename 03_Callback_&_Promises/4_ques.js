/*
4. Arrange in alphabetical order.

Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.

*/

const books = [
    {
    title: "Think and Grow Rich",
    author: "Nepolien hill",
    year: 1995,
},
    {
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    year: 2021,
},
    {
    title: "Ram ki Ghata",
    author: "Devdutt Pattnayak",
    year: 2015,
},

]

function logTitle(titles) {
    titles.sort()
    console.log(titles.join(", "))    
}


function extractTitles(books, callback) {
    const titles = books.map(() => book.title)
    callback(titles)    
}

console.log(extractTitles(books, logTitle)) // , , 



