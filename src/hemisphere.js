import React from "react";
import northernpic from './image/northern.jpg';
import southernpic from './image/southern.webp';
const Hemisphere=({latidue})=>
{
    const check=latidue>0 ?'Northern':'southern';
    const pic=latidue>0?northernpic:southernpic
   
    return (
        <div>
          
            <img src={pic} alt={check} />
            you are from {check} hemisphere
        </div>
    )
}
export default Hemisphere;