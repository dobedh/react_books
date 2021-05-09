import React from "react";
import axios from "axios";

function Home() {
  const books = axios.get(
    "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
  );
  console.log(books);
  return <span> Book list </span>;
}

export default Home;
