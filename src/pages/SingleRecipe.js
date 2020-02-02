import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id,
      loading: true,
      recipeSummary: {},
      trivia: {}
    };
  }

  async componentDidMount() {
    const url = `https://api.spoonacular.com/recipes/${this.state.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
    const url2 = `https://api.spoonacular.com/recipes/${this.state.id}/summary?apiKey=${process.env.REACT_APP_API_KEY}`;
    const url3 = `https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      const response2 = await fetch(url2);
      const responseSummary = await response2.json();
      const response3 = await fetch(url3);
      const responseTrivia = await response3.json();
      this.setState({
        recipe: responseData,
        recipeSummary: responseSummary,
        trivia: responseTrivia,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      title,
      image,
      extendedIngredients,
      sourceUrl,
      servings,
      preparationMinutes,
      cookingMinutes
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading recipe....
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/recipes" className="btn btn-warning mb-5">
              Back To Recipe
            </Link>
            <img
              src={image}
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
              alt={title}
            />
            <h4 className="my-2">{this.state.recipeSummary.title}</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: this.state.recipeSummary.summary
              }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h5 className="text-uppercase">{title}</h5>
            <h6 className="text-warning text-slanted">Serves : {servings}</h6>
            <p className="text-info text-slanted">
              Preparation Time : {preparationMinutes} min
              &nbsp;&nbsp;&nbsp;&nbsp; Cooking Time :{cookingMinutes} min
            </p>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-2">
              Recipe Url
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {extendedIngredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item.original}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <h5 className="text-info text-center text-slanted my-5">
          "{this.state.trivia.text}"
        </h5>
      </div>
    );
  }
}
