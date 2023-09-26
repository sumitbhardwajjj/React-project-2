import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'


const Header = () => {
  const cartproducts = useSelector(state=>state.Cart)
  return (
    <div>
      <Nav class="navbar navbar-expand-lg bg-body-tertiary " >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/cart">Cart {cartproducts.length} </Link>
        </li>
       </ul>
    </div>
  </div>
</Nav>
    </div>
  )
}

export default Header
