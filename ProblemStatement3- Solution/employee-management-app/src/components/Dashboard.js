import React from 'react';
import Navbar from './Navbar';
import AddEmployeeModal from './EmployeeModal';
import EmployeeList from './EmployeeList';
import EmployeeCount from './EmployeeCount';


class Dashboard extends React.Component{
  
    render(){
         return(
           <div>
               {/* <Navbar/> */}
               <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="question-dashboard">
                                <EmployeeCount/>
                                <EmployeeList/>
                            </div>
                        </div>
                    </div> 
                </div>
               <AddEmployeeModal/>
           </div>
        )
    }
}

export default Dashboard;