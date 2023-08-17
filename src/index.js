import React from "react";
import { createRoot } from 'react-dom/client';

const App=()=>
{
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