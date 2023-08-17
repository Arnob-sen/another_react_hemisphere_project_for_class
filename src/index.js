import React from "react";
import { createRoot } from 'react-dom/client';

const App=()=>
{
    window.navigator.geolocation.getCurrentPosition(
        (position)=>console.log(position),
       (error)=> console.log(error)
    );
    return(
        <div>
            hello world
        </div>
    )
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <App />
)