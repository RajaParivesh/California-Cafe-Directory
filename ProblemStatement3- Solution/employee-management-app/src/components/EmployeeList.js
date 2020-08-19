import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';

export default class EmployeeList extends Component {
    
    componentDidMount(id){
        this.data = JSON.parse(localStorage.getItem("empInformation"));
    }
    
   
    deleteEmployee = (id) => {
        console.log("-----------delete-------");
        // console.log(this.data);
        console.log(id);
        const afterDeletionData = this.data.filter(row => row !== id)
        console.log(afterDeletionData);
        localStorage.setItem("empInformation", JSON.stringify(afterDeletionData));
        console.log("-----------delete-------");
        
    }
    handleToggleAvailability = (id) =>{
        // const avail = JSON.parse(localStorage.getItem("empInformation"));
        // avail[id].availability = !avail[id].availability;
        // localStorage.setItem("empInformation", JSON.stringify(avail));
        
        this.data[id].availability = !this.data[id].availability;
        localStorage.setItem("empInformation", JSON.stringify(this.data));
        
        console.log("================================================");
        console.log(this.data);
        console.log("================================================");
        
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
            
        var totalEmpData = JSON.parse(localStorage.getItem('empInformation')) || [];    
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