// input: array of book objects
// output: number - # of book objects inside the array
function getTotalBooksCount(books) {
  return books.length
}

// input: array of accounts
// output: number - # of accounts objects 
function getTotalAccountsCount(accounts) {
  return accounts.length
}

// input: array of boks
// output: #of books currently checked out of library
function getBooksBorrowedCount(books) {
  let booksCheckedOut = 0
  books.forEach(element => {
    if (!isBookAvailable(element)) booksCheckedOut++
  });
  return booksCheckedOut
}

// input: array of book objs
// output: array of objects - 5 or fewer objects of most common genres, most common to least
// structure: { name: "Nonfiction", count: 9 },
function getMostCommonGenres(books) {
  let countedGenres = books.reduce((allGenres,currentBook)=> {
  const {genre} = currentBook
    allGenres[genre]=(allGenres[genre] || 0)+1
    return allGenres
  }, {})
  let ObjectEntries = Object.entries(countedGenres)
  sortedGenres = ObjectEntries.sort((a,b)=>b[1]-a[1]).slice(0,5)
  sortedGenresFormatted = sortedGenres.map((element)=>({name:element[0],count:element[1]}))
  return sortedGenresFormatted
}

// input: array of book objects
// output: array - 5 or fewer books. {name:title,count:#}
function getMostPopularBooks(books) {
  let sortedBooks = books.sort((a,b)=>b.borrows.length-a.borrows.length)
  return mappedBooks = books.slice(0,5).map(({title,borrows})=>{
        return {"name":title,"count":borrows.length}
  })
}

// input: array of books 2)array of authors
// output: array - 5 or less authors. 
function getMostPopularAuthors(books, authors) {
  // Find all of author's books. Count up the number of borrows for each book of each author. 
  let mostPopularAuthors = authors.map(author=>{
    const booksByThisAuthor = books.filter(({authorId})=>author.id===authorId)
    const count = booksByThisAuthor.reduce((result,author)=>{return result + author.borrows.length},0)
    const name = `${author.name.first} ${author.name.last}`
    console.log("author")
    console.log(author)
    return { count, name }
  })
   mostPopularAuthors = mostPopularAuthors.sort((a,b)=>b.count-a.count).slice(0,5)
   return mostPopularAuthors
}


//input: one book object. 
// output: false if book is checked out. True if book is available
function isBookAvailable(book) {
  return book.borrows[0].returned
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
