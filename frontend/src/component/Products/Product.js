import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem'
import './product.css'


const Product = ({filterProduct}) => {
const [products,setProducts] = useState(filterProduct);
useEffect(()=>{
  
  const  fetchdata =  async()=> {
    const res = await fetch('http://localhost:8080/product');
    const data = await res.json();
    setProducts(data);
    console.log(products);
  }
 fetchdata();
},[])

  return (
   <main className='flex justify-around flex-wrap gap-4 mt-6'>
    {
      products.map(item=>{
     return <ProductItem key={item._id} item={item}/>
    })
    }
    
   </main>
  )
}

export default Product