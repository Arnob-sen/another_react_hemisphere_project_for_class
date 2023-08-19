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
          <div className='ui raised text container segment'>
            <div className='image'>
          <img src={picture} alt={check} />
          </div>
          <div className='ui teal bottom attached label'>
            <h1>  {text}</h1>
          
            </div>
          </div>
            
            
        </div>
    )
}
export default Hemisphere;