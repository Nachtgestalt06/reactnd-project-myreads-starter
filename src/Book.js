import React, { Component } from "react";

class Book extends Component {
  changeSelect = () => {
    // Aqui va la llamada de la API que va a tomar como parametros el libro y el shelf para que cuando quieras mover el libro de una categoria a otra, se actualize ese valor del objeto y el libro se mueva al nuevo shelf
  };
  render() {
    const { title, author, cover, updateBooks } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${cover})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={event => updateBooks(event.target.value)}>
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
        <div className="book-title">{`${title}`}</div>
        <div className="book-authors">{`${author}`}</div>
        <button onClick={() => updateBooks}>Click</button>
      </div>
    );
  }
}

export default Book;
