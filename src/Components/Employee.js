import React, {Component} from 'react'
import API from '../utils/API'

class Employee extends Component {
    state = {
        allEmployees:[], searchCriteria:"",
    }
    componentDidMount() {
        
        API.searchEmployee()
        .then (res => {
            console.log (res.data.results)
            this.setState({ 
                allEmployees: res.data.results })
        })
        console.log (this.state.allEmployees)
    };

    render() {
        return (
            <div>
                <h1> List of All Employee</h1>
            </div>
        );
    }
}
export default Employee;
