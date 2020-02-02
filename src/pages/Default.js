import React from "react";

import { Link } from "react-router-dom";

import Header from "../components/Header";

export default function Default() {
  return (
    <Header title="404">
      <h2 className="text-light text-uppercase" styleclass="default-hero">
        <i className="far fa-frown"></i> This URL does not exist
      </h2>
      <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
        Back To Home
      </Link>
    </Header>
  );
}
