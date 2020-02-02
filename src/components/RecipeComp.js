import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
  render() {
    const { id, title, readyInMinutes, servings, image } = this.props.recipe;
    const baseUri = "https://spoonacular.com/recipeImages/";
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={baseUri + image}
            className="img-card-top"
            style={{ height: "14rem" }}
            alt={title}
          />
          <div className="card-body text-capitalize">
            <h5>{title}</h5>
            <h6 className="text-warning text-slanted">
              Ready In: {readyInMinutes} min
            </h6>
            <h6 className="text-success text-slanted">Serves: {servings}</h6>
          </div>
          <div className="card-footer">
            <Link to={`/recipes/${id}/information`} className="btn btn-primary">
              Details
            </Link>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mx-2 ">
              Recipe Url
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}
