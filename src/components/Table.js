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
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(function (props) {
                    return(
                    <tr>
                    <td>
                        <img src={props.picture.thumbnail} alt="profile"/>
                    </td>
                        <td>{props.name.first}</td>
                        <td>{props.name.last}</td>
                        <td>{props.email}</td>
                        <td>{props.location.state}, {props.location.country}</td>
                    </tr>
                    );
                })}
                </tbody>

        </table>
    );
}

export default Table;