import React, { Component } from "react";

class Book extends Component {

  state = {
    currentShelf: this.props.book.shelf
  }
 
  changeSelect = (event) => {
    const { onUpdateBooks, book } = this.props;
  
    this.setState({
      currentShelf: event.target.value
    });
    onUpdateBooks(book, event.target.value);
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select value={this.state.currentShelf} onChange={this.changeSelect}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{`${book.title}`}</div>
        <div className="book-authors">{`${book.authors}`}</div>
      </div>
    );
  }
}

export default Book;
