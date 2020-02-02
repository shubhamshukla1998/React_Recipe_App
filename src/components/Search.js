import React from "react";

export default function Search(props) {
  const { handleChange, handleSubmit, search } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted">Search Recipes</h1>
          <form className="mt-4" onSubmit={handleSubmit}>
            <label htmlFor="search"> Type Recipes Separated By Comma</label>
            <div className="input-group ">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="paneer,chicken,pasta"
                value={search}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="input-group-text bg-primary text-white">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
