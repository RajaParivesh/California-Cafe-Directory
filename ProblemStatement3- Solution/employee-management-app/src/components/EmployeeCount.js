import React, { Component } from 'react' 

export default class EmployeeCount extends Component {
    
    render() {
        const data = localStorage.getItem('empInformation') || "[]";
        const totalEmpData = JSON.parse(data);
        console.log(totalEmpData);

        var totalEmpCount = totalEmpData.length; 
        var empdata = localStorage.getItem('empInformation');
        let count = 0;
     
        var availableEmpCount = totalEmpData.filter(x => x.availability === false).length;
            
        return (
        
            <div class="card mt-4 mb-3 mb-md-4">
                <div class="card-body p-3">
                    <h5 class="text-secondary mb-2">Available:
                        <span class="font-weight-bold ml-1 text-dark">{availableEmpCount}</span></h5>
                    <h5 class="text-secondary">Total: <span class="font-weight-bold ml-1 text-dark">{totalEmpCount} </span>
                    </h5>
                    ​
                    <button 
                        class="btn btn-primary mt-4"
                        data-toggle="modal" 
                        data-target="#addEmployeeModal"
                        >
                        <i class="fa fa-plus"></i>&nbsp; Add Employee</button>
                </div>
            </div>
        )
    }
}
