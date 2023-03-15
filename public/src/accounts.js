// input: 1) array 2) string
// output: 1 matching   account object
function findAccountById(accounts, id) {
  return accounts.find((elem)=>elem.id===id)
}

// input: 1) array
// output: 1)  array of account objects sortted alphabetically by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b)=> {
    nameA = a.name.last.toUpperCase()
    nameB = b.name.last.toUpperCase()
    if (nameA>nameB) return 1
    if (nameA<nameB) return -1
    else return 0
  })
}

// input: 1) one account object 2) array of all books objects
// output: a number that represents the number of times the account's ID appears in any book's borrows array.
function getTotalNumberOfBorrows(account, books) {
  // loop through the books objects. Loop through each Book Object's borrows. 
  let totalCount = 0
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (borrow.id===account.id) totalCount++
    })
  });
  return totalCount
}

// input: 1) account object 2) array of all book objects. 3) array of all author objects.
// output: array of book objects, including author information, that represents all books currently checked out by the given account
function getBooksPossessedByAccount(account, books, authors) {
  // get account ID
  const {id} = account
  var checkedOutBooks = []
  books.forEach(book=>{
    bookIsReturned = book.borrows[0].returned
    bookBorrower = book.borrows[0].id
    if (!bookIsReturned && bookBorrower===id) {checkedOutBooks.push(book)}
  })
  
  checkedOutBooks.forEach(book=>{
    book.author = authors.find(author=>book.authorId === author.id)
  })
  return checkedOutBooks

}




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
