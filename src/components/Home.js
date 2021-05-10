import React from "react";
import axios from "axios";
import Book from "./Book";

class Home extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    );
    this.setState({ books: data });
  };

  render() {
    const { books } = this.state;
    console.log(books);
    return books.map((book) => {
      console.log(book);
      return (
        <Book
          author={book.author}
          title={book.title}
          image={book.imageLink}
          year={book.year}
        />
      );
    });
  }
}

export default Home;
