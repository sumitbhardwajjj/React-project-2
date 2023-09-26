import Button from 'react-bootstrap/Button'
import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Header from './header'
import {useDispatch,useSelector} from 'react-redux'
import { add } from './Cartslice'
import { getProducts } from './Productslice'

const Products = () => {

const dispatch = useDispatch()

const {data:products,status} = useSelector(state => state.product)


// const [products,setproduct] = useState([])    

useEffect(()=>{

     dispatch(getProducts());
    // fetch('https://fakestoreapi.com/products')
    //        .then(data => data.json())
    //        .then(result=>setproduct(result))
},[])
     if(status==="loading"){
      return <h1 className='text-center'>Loading...</h1>
     }
     if(status==="ERROR"){
      return <h1 className='text-center'>ERROR!</h1>
     }

const addtoCart = (product) =>{
 dispatch(add(product))
}

const cards = products.map(product=>(
    <div className='col-md-3 '>
       <Card style={{height:'300px', margin:"5px",width:"300px", textAlign:"center" }}>
        <div className='text center' style={{display:"flex", justifyContent:"center" }}>
        <Card.Img src={product.image} style={{width:'200px', height:'150px'}}></Card.Img>
        </div>
        <Card.Title>{product.title}</Card.Title>
        <footer>
        <Button onClick={()=>addtoCart(product)}>Add To Cart</Button>
       </footer>
       </Card>
         </div>
))
  return (
    <>
    <Header/>
    <div className='row'>
        {cards}
    </div>
    </>
  )
}

export default Products
