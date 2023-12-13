import React from 'react'
import {CartState} from "../Context/Context"
import SingleProduct from './SingleProduct';
import Filters from './Filters';
const Home = () => {
  const {state : {products} , productState : {byStock,byFastDelivery,byRating,searchQuery,sort}} = CartState();

  const trandformProduct = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => 
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price);
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }
    
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  }
  return (
    <div className='flex justify-between gap-4'>
        <Filters/>

        <div className='flex flex-wrap w-[86%]'>

          { 
            trandformProduct().length === 0 ? (<p className='text-3xl'>Not Found</p>) 
            :
            trandformProduct().map((prod) => {
              return <SingleProduct prod={prod} key={prod.id}/>
            })
          }
        </div>
    </div>
  )
}

export default Home