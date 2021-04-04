import React from "react";

function Table(props) {
    console.log(props);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(function (props) {
                    return (
                        <tr>
                            <td><img src={props.picture.thumbnail} alt="employee" /></td>
                            <td>{props.name.first} {props.name.last}</td>
                            <td>{props.phone}</td>
                            <td>{props.email}</td>
                            <td>{props.location.city}, {props.location.state}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    );
}

export default Table;