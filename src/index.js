import React from "react";
import { createRoot } from 'react-dom/client';


class App extends React.Component{
    constructor(props)
    {
        super(props)// here we override props from parent class react.component.so props of parent class should work perfectly.thats why super 
        this.state={latidue:null,errorMessage:''}//initialize state
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({latidue:position.coords.latitude})//this for update state.any time to change,update,manipulate use setState method.this will use 2nd time.1st time render show the initial value.then go the update method.then rerender it and show the updated value
                // this.state.latidue=position.coords.latitude//this is the direct assignment.never do this.this is only use when initialize state
            },
           (error)=>{
            this.setState({errorMessage:error.message})
           }
        )
    }
    render(){

        
       if(this.state.latidue&&!this.state.errorMessage){ 
        return(
            <div>
                my latidue is {this.state.latidue}
               
            </div>
        )
       }
       if(this.state.errorMessage&&!this.state.latidue){
        return <div>error message is  {this.state.errorMessage}</div>
       }
       else {
        return <div>Loading</div>
       }
    }

    
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <App />
)