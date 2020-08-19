import React from 'react';

class EmployeeModal extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            name: '',
            gender: 'Select',
            age: '',
            designation: '',
            department : '',
            joiningDate: '',
            availability:false,
            errors: {}
        }
    }
   
    handleNameChange = (event) =>{
        this.setState({
            name : event.target.value   
        })
    }
    handleGenderChange = (event) =>{
        this.setState({
            gender : event.target.value
        })
    }
    handleAgeChange = (event) =>{
        this.setState({
            age : event.target.value
        })
    }
    handleDesignationChange = (event) =>{
        this.setState({
            designation : event.target.value
        })
    }
    
    handleDepartmentChange = (event) =>{
        this.setState({
            department : event.target.value
        })
    }
    handleJoiningDateChange = (event) =>{
        this.setState({
            joiningDate : event.target.value
        })
    }
    formValidation = () => {
        const { name,gender,age,designation,department,joiningDate,availability} = this.state;
        let isValid = true;
        const errors = {};
        if(name.trim().length < 1){
            errors.nameRequired = "All the fields are mandatory. Enter your name";
            isValid = false;
        }
        if(age.trim().length < 1){
            errors.ageRequired = "All the fields are mandatory. Enter your age";
            isValid = false;
        }
        if(designation.trim().length < 1){
            errors.designationRequired = "All the fields are mandatory. Enter your designation";
            isValid = false;
        }
        if(department.trim().length < 1){
            errors.departmentRequired = "All the fields are mandatory. Enter your department";
            isValid = false;
        }
        this.setState({errors});
        return isValid;
    }
    handleSubmit = (event) => {
        let data = localStorage.getItem('empInformation') || "[]" ;
        let empInfoTable = JSON.parse(data);

        const isValid = this.formValidation();
        if(isValid){
            empInfoTable.push(this.state)      
            localStorage.setItem('empInformation', JSON.stringify(empInfoTable));
        }


    }
   
      
    render(){
        const {name, gender, age, designation, department,joiningDate,errors } = this.state;
        return(
            <div class="modal fade" id="addEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="addEmployeeModal"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
        	        <div class="modal-content">
                        <div class="modal-header pt-3 pb-2">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="form-validation"> 
                                {Object.keys(errors).map((key)=>{
                                    return (
                                        <div 
                                            key={key}>
                                            {alert(JSON.stringify(errors[key]))}
                                        </div>
                                    )
                                })}
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-row ">
                                    <div class="form-group col-md-6">
                                        <label for="" class="mb-1">Name</label>
                                        <input 
                                            type="text" 
                                            value={name}
                                            onChange={this.handleNameChange}
                                            class="form-control"
                                            id="" placeholder="Enter"
                                            >    
                                        </input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="" class="mb-1">Gender</label>
                                        <select 
                                            value={gender} 
                                            onChange = {this.handleGenderChange}
                                            class="form-control" 
                                            id="exampleFormControlSelect1">
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="" class="mb-1">Age</label>
                                        <input 
                                            type="number"
                                            value={age}
                                            onChange = {this.handleAgeChange}                                            
                                            class="form-control" 
                                            id="" 
                                            placeholder="Enter">
                                        </input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="" class="mb-1">Designation</label>
                                        <input 
                                            type="text"
                                            value={designation}
                                            onChange = {this.handleDesignationChange}                                            
                                            class="form-control" 
                                            id="" 
                                            placeholder="Enter">
                                        </input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="" class="mb-1">Department</label>
                                        <input 
                                            type="text" 
                                            value={department}
                                            onChange = {this.handleDepartmentChange}
                                            class="form-control" 
                                            id="" 
                                            placeholder="Enter">
                                        </input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="" class="mb-1">Joining Date</label>
                                        <input 
                                            type="date" 
                                            value={joiningDate}
                                            onChange = {this.handleJoiningDateChange}                                            
                                            class="form-control" 
                                            id="" 
                                            placeholder="">
                                        </input>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
                                    <button type="submit"  class="btn btn-success btn-sm">Save</button>
                                </div>
                                
                            </form>
                        </div>

                    </div>
                </div>
		    </div>
        )
    }
}

export default EmployeeModal;