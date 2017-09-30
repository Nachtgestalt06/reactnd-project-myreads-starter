import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchPage extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onUpdateBooks: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired
  };

  state = {
    query: ""
  };
  render() {
    const { onSearch, searchResults, onUpdateBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => onSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onUpdateBooks={onUpdateBooks}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
