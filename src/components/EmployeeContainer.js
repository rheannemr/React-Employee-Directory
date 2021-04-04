import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Table from "./Table";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
      results: [],
      search: ""
    };

    componentDidMount() {
        this.searchEmployees();
    };

    searchEmployees = () => {
        API.search()
          .then(res => this.setState({ results: res.data.results }))
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
                />
            </div>
        );
    };
};


export default EmployeeContainer;