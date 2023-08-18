import React from "react";
const Hemisphere=({latidue})=>
{
    const check=latidue>0 ?'Northern':'southern';
   
    return (
        <div>
            you are from {check} hemisphere
        </div>
    )
}
export default Hemisphere;