import React from 'react'
import "./Readnavbar.css"
import { Link } from 'react-router-dom'
function Rednavbar() {
  return (
    <div className='red'>
      <h1>FLAT 40% OFF | END OF SEASON SALE</h1>
     <p><Link to="Men" className="link">SHOP NOW</Link></p> 
      <h4>
FLAT 40% OFF | END OF SEASON SALE SHOP NOW
</h4>
    </div>
  )
}

export default Rednavbar
