import React from 'react'
import {useLocation} from 'react-router-dom';
import './cardData.css'
function CardData() {
    //  console.log(props)
    const location = useLocation();
  return (
    <div className="card-container">
        <h1> Welcome {location.state.name}</h1>
     <div className="card-inside">
       <h1>{location.state.name}</h1>
       <h1>{location.state.email}</h1>
       <h1>{location.state.password}</h1>
     </div>  
    </div>
  )
}

export default CardData