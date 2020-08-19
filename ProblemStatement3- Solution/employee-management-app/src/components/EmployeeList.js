import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';

export default class EmployeeList extends Component {
    state = {data: []}

    getData = () => {
        return this.state.data;
    }

    setData = (employeeInfo) => {
        if (employeeInfo === null) throw new Error("Array expected got null");
        employeeInfo.sort((a,b) => (a.availability > b.availability) ? 1 : -1 );
        this.setState({data: employeeInfo});
        localStorage.setItem("empInformation", JSON.stringify(employeeInfo));
    }


    componentDidMount(){
        const empInfo = localStorage.getItem("empInformation") || "[]";
        this.setState({data: JSON.parse(empInfo)});
    }
    
   
    deleteEmployee = (id) => {
        console.log(id);
        const afterDeletionData = this.state.data.filter((row, index) => index !== id)
        this.setData(afterDeletionData);
        
    }
    handleToggleAvailability = (id) =>{
         const empInfo = this.getData();
        
        const newData = empInfo.map((e, index) =>{
            if (index === id) {
                e.availability = !e.availability;
            }
            return e;
        });
        console.log(newData[id].availability)
        this.setData(newData);
    }
    
    
    renderEmployee = (totalEmpData, index) => {
        return(
                <tr key = {index}>
                    <td>{totalEmpData.name}</td>
                    <td>{totalEmpData.department}</td>
                    <td>
                        <div class="custom-control custom-checkbox">
                            <input 
                                type="checkbox" 
                                checked={!totalEmpData.availability}
                                onChange={() => this.handleToggleAvailability(index)}
                            > 
                            </input>
                            
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
                            <i class="fa fa-edit"></i>&nbsp; Edit
                        </button>
                        <button 
                            type="button"
                            onClick = {() => this.deleteEmployee(index)} 
                            class="btn btn-outline-danger btn-sm">
                            <i class="fa fa-trash" ></i>&nbsp; Delete
                        </button>
                    </td>
                </tr>
            )
        }
        
        render() {
            
        const totalEmpData = this.getData();    
        return (
            <div>
                <div class="table-responsive mt-3 mt-md-4 mb-2">
                        <ReactBootstrap.Table strip bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Available</th>
                                    <th>View Details</th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                                {totalEmpData.map(this.renderEmployee)}
                            </tbody>
                        </ReactBootstrap.Table> 
                </div>
            </div>
        )
    }
}