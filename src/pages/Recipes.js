import React, { Component } from "react";

import RecipeList from "../components/RecipeList";
import Search from "../components/Search";

export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipeData: {},
      loading: true,
      search: "",
      url: `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&number=12`,
      error: "",
      base_url: `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&number=12`,
      query: "&query="
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ""
      },
      () => this.getRecipes()
    );
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.results.length === 0) {
        this.setState({
          error: "Sorry but your search did not return any result. Try Again..."
        });
      } else {
        this.setState({
          recipeData: jsonData.results,
          error: "",
          loading: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
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
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipeData} />
        )}
      </>
    );
  }
}
