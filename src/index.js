import React from "react";
import { createRoot } from 'react-dom/client';


class App extends React.Component{
    constructor(props)
    {
        super(props)// here we override props from parent class react.component.so props of parent class should work perfectly.thats why super 
        this.state={latidue:null}//initialize state
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({latidue:position.coords.latitude})//this for update state.any time to change,update,manipulate use setState method
                // this.state.latidue=position.coords.latitude//this is the direct assignment.never do this.this is only use when initialize state
            },
           (error)=> console.log(error)
        )
    }
    render(){
        
        
        return(
            <div>
                my latidue is {this.state.latidue}
            </div>
        )
    }

    
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <App />
)