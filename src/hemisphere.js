import React from "react";
import northernpic from './image/northern.jpg';
import southernpic from './image/southern.webp';
import './hemisphere.css';
const HemisphereConf={
    Northern:{
        text:'its northern hemisphere',
        picture:northernpic,

    },
    Southern:{
        text:"Its sourthern hemisphere",
        picture:southernpic,
    }
}
const Hemisphere=({latidue})=>
{
    const check=latidue>0 ?'Northern':'Southern';
    const { text,picture } =HemisphereConf[check];
    
   
    return (
        <div className={check}>
          
            <img src={picture} alt={check} />
            {text}
            
        </div>
    )
}
export default Hemisphere;