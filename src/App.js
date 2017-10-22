import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
// My Components
import SearchPage from "./Search";
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  };
  componentDidMount() {
    this.fetchBooks();
  }
  fetchBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      book.shelf = shelf;
      let updatedBooks = this.state.books.filter((b) => b.id !== book.id).concat(book);
      this.setState({ books: updatedBooks });
    });
  };
  searchBooks = query => {
    BooksAPI.search(query).then(results => {
      let searchResults = results.map((book) => {
        let bookOnShelf = this.state.books.find((b) => b.id === book.id);
        if (bookOnShelf) {
          book.shelf = bookOnShelf.shelf;
        } else {
          book.shelf = 'none';
        }
        return book;
      })
      this.setState({ searchResults });
    });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              books={this.state.books}
              onUpdateBooks={this.updateBooks}
              filterBooks={this.state.filterBooks}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              onSearch={this.searchBooks}
              searchResults={this.state.searchResults}
              onUpdateBooks={this.updateBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
