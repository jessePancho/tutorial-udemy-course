import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const author = "Jordan Moore";
const title = "Interesting Facts for curious Minds";
const img = "/images/book-cover.jpg";

const someFunc = (param1, param2) => {
  console.log(param1, param2);
};

someFunc("job", "illegal");

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
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
