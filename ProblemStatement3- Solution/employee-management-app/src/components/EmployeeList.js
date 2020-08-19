import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';

export default class EmployeeList extends Component {
    state = {data: []}

    getData = () => {
        return this.state.data;
    }

    setData = (employeeInfo) => {
        if (employeeInfo === null) throw new Error("Array expected got null");
        localStorage.setItem("empInformation", JSON.stringify(employeeInfo));
        this.setState({data: employeeInfo});
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
        // console.log(newData[id].availability)
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
                                class="custom-control-input"
                                id="customCheck1" 
                                checked={!totalEmpData.availability}
                                onChange={() => this.handleToggleAvailability(index)}
                            > 
                            </input>
                            
                            <label class="custom-control-label" for="customCheck1"></label>
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
        // console.log(data)        
        return (
            <div>
                <div class="table-responsive mt-3 mt-md-4 mb-2">
                    {/* <table class="table table-bordered"> */}
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