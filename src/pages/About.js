import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2 className="mb-4">About</h2>
        <h5>
          This Website uses a Third Party Api{" "}
          <a
            href="https://spoonacular.com/food-api"
            target="_blank"
            rel="noopener noreferrer">
            Spoonacular Api
          </a>
        </h5>
        <h5>Any Suggestion or Query? Feel Free To Contact :</h5>
        <h5>
          {" "}
          <i className="fas fa-envelope"></i> shubhamshukla1998@gmail.com
        </h5>
        <p>
          Made by <span className="text-slanted">Shubham Shukla</span> with{" "}
          <i className="fas fa-pizza-slice"></i>
        </p>
      </div>
    </div>
  );
}
