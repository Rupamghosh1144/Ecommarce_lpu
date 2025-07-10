import React, { useEffect, useState } from 'react'

export default function Product(id) {
  const [product,SetProduct]=useState([]);

  const fetchProduct =async()=>{
    let response = await axios(`https://fakestoreapi.com/products:${id}`);
    SetProduct(response.data);
    console.log(product);
  }
  useEffect(()=>{
    fetchProduct();
  },[]);
  return (
    <div>
      
    </div>
  )
}
