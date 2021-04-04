import React from "react";

function SearchBar(props) {
    return (
        <form>
          <div className="searchBarForm">
            <label htmlFor="search">Search</label>
            <input
              onChange={props.handleSearchBar}
              value={props.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for Employee by name"
              id="search"
            />
          </div>
        </form>
    );
}

export default SearchBar;