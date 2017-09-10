import React, { Component } from "react";

class Book extends Component {

  state = {
    value: this.props.shelf
  }
 
  changeSelect = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { title, author, cover, update} = this.props;
    console.log(update);
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
            <select value={this.state.value} onChange={this.changeSelect}>
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
        <button onClick={() => update}>Click</button>
      </div>
    );
  }
}

export default Book;
