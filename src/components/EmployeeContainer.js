import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Table from "./Table";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
      results: [],
      search: "",
      filteredResults: []
    };

    componentDidMount() {
        API.search()
            .then(res => {
                this.setState({
                    results: res.data.results,
                    filteredResults: res.data.results
                })
            });
    };

    searchEmployees = (query) => {
        API.search(query)
          .then(res => this.setState({ filteredResults: res.data.results }))
          .catch(err => console.log(err));
    };
    
    handleSearchBar = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    render() {
        return (
            <div>
                <Header />
                <SearchBar
                handleSearchBar = {this.handleSearchBar}
                value = {this.state.search}
                />
                <Table 
                results = {this.state.results}
                value = {this.results}
                />
            </div>
        );
    };
};


export default EmployeeContainer;