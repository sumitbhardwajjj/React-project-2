import React from 'react'
import Header from './header'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from './Cartslice'

const Cart = () => {
  const dispatch = useDispatch();
  const removeCart = (id)=>{
    dispatch(remove(id))
  }

  const productcart = useSelector(state=>state.Cart)

  const cards = productcart.map(product=>(
    <div className='col-md-3 '>
       <Card style={{height:'300px', margin:"5px",width:"300px", textAlign:"center" }}>
        <div className='text center' style={{display:"flex", justifyContent:"center" }}>
        <Card.Img src={product.image} style={{width:'200px', height:'150px'}}></Card.Img>
        </div>
        <Card.Title>{product.title}</Card.Title>
        <footer>
        <Button variant='danger' onClick={()=>removeCart(product.id)}>Remove</Button>
       </footer>
       </Card>
         </div>
))
  return (
    <div>
      <Header/>
      <h1>Cart Page</h1>
    {cards}
    </div>
  )
}

export default Cart
