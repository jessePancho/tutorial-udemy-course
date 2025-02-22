import React from "react";
import { createRoot } from "react-dom/client";

const BookList = () => {
  return (
    <>
      <Book />
      <Book />
      <Book />
    </>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91I1KDnK1kL._SY466_.jpg"
    alt="book"
  />
);
const Title = () => (
  <h2>
    The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop
    Talking About
  </h2>
);
const Author = () => {
  return <h4>Author: Mel Robbins</h4>;
};

const root = createRoot(document.getElementById("root"));

root.render(<BookList />);

{
  /*
Explain the differences between functions Greetings that straight forward used an
<h1> tag and the other one AnnyeongHaseyo that uses React.createElement("h1", {}, "Hello");
When to use either of these? 
Also in breakdown and explain each part of this code React.createElement("h1", {}, "Hello");
*/
}
