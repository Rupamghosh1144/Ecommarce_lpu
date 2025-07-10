import React, { useEffect, useState } from 'react'

export default function ProductList() {
  const [products,setProducts]=useState([]);
  const [input,setInput]=useState([]);
  const [filterProducts,setFilterProducts]=useState([]);

  async  function getProducts(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data= await response.json();
    setProducts(data);
    console.log(products);
  }
    

    //useffect
    useEffect(function(){
      getProducts();
    },[])

    function onInputChange(e) {
  const value = e.target.value;
  setInput(value);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );
  setProducts(filteredProducts);
}


  
  return (
    <div className=' mt-10'>
      <h1 className='text-6xl text-amber-300  text-center mb-1.5'>Product List</h1>
      <input type="text" className='mx-auto block w-80 md:w-96 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400' placeholder='Search Products' onChange={onInputChange} />
      {/* <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-1' >Fetch Products</button> */}
    
    <ul className='flex flex-wrap justify-center gap-6 mt-8'>
      
      {
      filterProducts.map((product)=>(

        <Link to={product.id}>
          <li className=' mb-1 shadow-lg w-90 m-4 h-70 rounded-2xl hover:bg-amber-50 text-center' key={product.id}>
            <img src={product.image} alt={product.title} className='w-40 h-40 object-contain block  '/>
            <p>{product.title}</p>
            <p className='text-amber-900'>Price: ${product.price}</p>
          </li>

        </Link>
      ))
    }
    </ul>

    </div>
  )



















//   return (
//   <div className="mt-10 text-center">
//     <h1 className="text-6xl text-amber-300 mb-4">Product List</h1>

//     <button
//       className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-6"
//       onClick={onButtonClick}
//     >
//       Fetch Products
//     </button>

//     <ul className="flex flex-wrap justify-center gap-6 mt-8">
//       {products.map((product) => (
//         <li
//           key={product.id}
//           className="w-64 h-[380px] border-2 rounded-lg shadow-md flex flex-col items-center justify-start p-4 bg-white"
//         >
//           <div className="w-full h-40 flex items-center justify-center mb-4">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="max-w-full max-h-full object-contain"
//             />
//           </div>
//           <p className="text-sm font-semibold mb-2 text-center">{product.title}</p>
//           <p className="text-md font-medium text-gray-700">Price: ${product.price}</p>
//           <buttocn className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mb-6" >Buy</buttocn>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

}
