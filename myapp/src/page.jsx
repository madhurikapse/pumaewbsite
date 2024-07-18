
import React from 'react'
import "./Page.css"
import { useNavigate } from 'react-router-dom'
function Page() {
    const navigate = useNavigate();
    
  return (
    <div className='page'>
      <h3>MY account</h3>
      <hr></hr>
      <h3>Wishlist</h3> <hr></hr>
      <h3>Check order/inital return</h3> <hr></hr>
      <h3>Store finder</h3> <hr></hr>
      <h3>Language</h3> <hr></hr>
      <button style={{width:"100px",background:"black",color:"white"}} onClick={()=>navigate("/Login")}>LOGIN</button><hr></hr>
      <button style={{width:"180px"}} >Register</button>
</div>
  )}

export default Page;