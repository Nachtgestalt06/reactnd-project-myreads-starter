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
    searchResults: [],
    shelf: ""
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
      this.setState({ books: books, shelf: shelf });
    });
  };
  searchBooks = query => {
    BooksAPI.search(query).then(results => {
      this.setState({ searchResults: results });
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
              bookShelf={this.state.shelf}
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
