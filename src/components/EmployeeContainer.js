import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Table from "./Table";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
      result: {},
      search: ""
    };

    componentDidMount() {
        this.searchEmployees("");
      }

    searchEmployees = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data.results }))
          .catch(err => console.log(err));
    };
    
    handleSearchBar = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <div>
                <Table

                />
            </div>
        );
    };
};


export default EmployeeContainer;