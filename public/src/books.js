// input: 1) array of author objects. 2) integer ID of a single author object
// output: the author object that has the matching ID
function findAuthorById(authors, idToFind) {
  return authors.find(({id})=>idToFind===id)
}

// input:  1)  array of book objects. 2) string ID of a single book object.
// output: the book object that has the matching ID.
function findBookById(books, idToFind) {
  return books.find(({id})=>idToFind===id)
}

// input: 1) array of book objects.
// output: array with two arrays inside of it. All of the inputted books are present in either the first or second array.
// The first array contains book objects that represent the books that are currently checked out, while the second array contains book objects that represent the books that have been returned. You can check for the return status by looking at the first transaction object in the borrows array.
function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter(book=>book.borrows[0].returned===false)
  const availableBooks = books.filter(book=>book.borrows[0].returned===true)
  return [checkedOutBooks, availableBooks]
}

// input: 1) A book object. 2) An array of all account objects.
// output: array of ten (or less) account objects - accounts given by the IDs in the provided book's borrows array. 
function getBorrowersForBook(book, accounts) {
  const findAccountById = (accounts,id) => accounts.find(account=>account.id===id)
  let activeAccounts = []
  book.borrows.forEach(borrow => {
    thisAccount = findAccountById(accounts, borrow.id)
    let result = {}
    result = {
      "returned" : borrow.returned,
      ...thisAccount
    }
    activeAccounts.push(result)

  });
  return activeAccounts.slice(0,10)
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
