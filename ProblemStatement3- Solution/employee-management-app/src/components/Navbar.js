import React from 'react';
import '../App.css';

class Navbar extends React.Component{
  
    render(){
        return(
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <a class="navbar-brand" href="https://www.logic-square.com" target="_blank">
                    <img src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png"
                        class="ls-logo" alt="LS Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Page Name</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;