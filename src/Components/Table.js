import React, { Component } from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        classBtnVal: { name: 'none', country: 'none', age: 'none', phone: 'none', id: 'none' },
        searchName: '',
        employees: this.props.employees.results
    };

    render() {
        const { classBtnVal, searchName, employees } = this.state;
        const { data } = this.props;

        return (
            <div className="container">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Filter by Last Name"
                    onChange={(e) => {
                        this.setState({ searchName: e.target.value });
                        this.setState({
                            employees: employees.filter((employee) => {
                                return employee.name.last.toLowerCase().includes(searchName.toLowerCase());
                            })
                        });
                    }}
                />

                <input
                    type="text"
                    class="form-control"
                    placeholder="Filter by Country"
                    onChange={(e) => {
                        this.setState({ searchName: e.target.value });
                        this.setState({
                            employees: employees.filter((employee) => {
                                return employee.location.country.toLowerCase().includes(searchName.toLowerCase());
                            })
                        });
                    }}
                />

                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Age</th>
                            <th scope="col">Phone</th>
                            <th scope="col">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr className="table-row" key={employee.login.uuid}>
                                <td>
                                    <img src={employee.picture.thumbnail} alt="random thumbnail of person" />
                                </td>
                                <td>
                                    {employee.name.first} {employee.name.last}
                                </td>
                                <td>{employee.location.country}</td>
                                <td>{employee.dob.age}</td>
                                <td>{employee.phone}</td>
                                <td>
                                    {employee.id.name} {employee.id.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
