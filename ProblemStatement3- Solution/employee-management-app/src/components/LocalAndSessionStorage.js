import React from 'react';

class LocalAndSessionStorage extends React.Component{
    
    setData() {
        // set data with localStorage  // data will be stored if session is close
        let obj = {name: "Raja", age :23, email: "rajaparivesh@gmail.com"}
        localStorage.setItem('myData', JSON.stringify(obj));

        // set data with sessionStorage  // data will not be stored if session is close
        sessionStorage.setItem('mySessionStorageData', JSON.stringify(obj));
    }
    getData() {
        // get data with localStorage
        let data = localStorage.getItem('myData')
        console.log(JSON.parse(data));
        
        // get data with sessionStorage
        let data = sessionStorage.getItem('mySessionStorageData')
        console.log(JSON.parse(data));
    }
    
    render(){
        return(
            <div>
                <button onClick= {() => this.setData()}> Set Data</button>
                <button onClick= {() => this.getData()}> Get Data</button>
            </div>
        )
    }
}

export default LocalAndSessionStorage;