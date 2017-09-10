import React, { Component } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

class BookShelf extends Component {
  
  render() {
    const { books, onUpdateBooks } = this.props;
    let currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    let wantToRead = books.filter(book => book.shelf === "wantToRead");
    let read = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">
                Currently Reading
              </h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map(book => (
                    <li key={book.id}>
                      <Book
                        title={book.title}
                        author={book.authors}
                        cover={book.imageLinks.thumbnail}
                        shelf={book.shelf}
                        update={this.onUpdateBooks}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToRead.map(book => (
                    <li key={book.id}>
                      <Book
                        title={book.title}
                        author={book.authors}
                        cover={book.imageLinks.thumbnail}
                        shelf={book.shelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map(book => (
                    <li key={book.id}>
                      <Book
                        title={book.title}
                        author={book.authors}
                        cover={book.imageLinks.thumbnail}
                        shelf={book.shelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="add-contact">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BookShelf;
