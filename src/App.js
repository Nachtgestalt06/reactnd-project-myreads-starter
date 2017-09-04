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
      this.setState({ books });
    });
  };
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      this.setState({ books: books });
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
          render={() => <BookShelf books={this.state.books} />}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              search={this.searchBooks}
              results={this.searchResults}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
