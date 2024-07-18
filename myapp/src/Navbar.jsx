import React from 'react';
import { NavLink, Route, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling the navbar

const Navbar = () => {
  const Route=useNavigate()
  return (
    <nav className="navbar">
      <NavLink to="/men" activeClassName="active">Men</NavLink>
      <NavLink to="/women" activeClassName="active">Women</NavLink>
      <NavLink to="/outlet" activeClassName="active">Outlet</NavLink>
      <NavLink to="/collaboration" activeClassName="active">Collaboration</NavLink>
      <NavLink to="/kids" activeClassName="active">Kids</NavLink>
      <NavLink to="/new" activeClassName="active">New</NavLink>
      <NavLink to="/sports" activeClassName="active">Sports</NavLink>
      <NavLink to="/motorsports" activeClassName="active">Motorsports</NavLink>
      <div className='icon'>
      <p><i class="fa-solid fa-magnifying-glass"></i>SEARCH</p>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-user"></i>
      <p onClick={()=>Route("/Page")}><i class="fa-solid fa-user"></i></p>
      </div>
    </nav>
  );
}

export default Navbar;
