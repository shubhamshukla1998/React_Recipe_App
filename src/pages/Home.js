import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

export default function Home() {
  return (
    <Header title="amazing recipes">
      <small className="text-light">
        <em>The only recipe app you'll ever need.</em>
      </small>
      <br />
      <Link
        to="recipes"
        className="text-uppercase btn btn-secondary btn-lg mt-3">
        Search Recipes
      </Link>
    </Header>
  );
}
