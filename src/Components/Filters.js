import Rating from './Rating'
import {CartState} from "../Context/Context"

const Filters = () => {

    const {productState : {byStock,byFastDelivery,byRating,sort} , productDispatch} = CartState();

  return (
    <div className='h-[80vh] ml-5 bg-[#343A40] px-8 text-white'>
        <h1 className='text-3xl my-4'>Filter Products</h1>
        <div className='flex gap-2 items-center'>
            <input type="radio" name="group1" id="ascending" onChange={() => productDispatch({type:"SORT_BY_PRICE",payload:"lowToHigh"})} checked={sort === "lowToHigh" ? true : false}/>
            <label htmlFor="ascending" className='text-xl'>Ascending</label>
        </div>
        <div className='flex gap-2 items-center my-2'>
            <input type="radio" name="group1" id="descending" onChange={() => productDispatch({type:"SORT_BY_PRICE",payload:"highToLow"})} checked={sort === "highToLow" ? true : false}/>
            <label htmlFor="descending" className='text-xl'>Descending</label>
        </div>
        <div className='flex gap-2 items-center my-2'>
            <input type="checkbox" id="outOfStock" onChange={() => productDispatch({type:"FILTER_BY_STOCK"})} checked={byStock}/>
            <label htmlFor="outOfStock" className='text-xl'>Out Of Stock</label>
        </div>
        <div className='flex gap-2 items-center my-2'>
            <input type="checkbox" id="fastDelivery" onChange={() => productDispatch({type:"FILTER_BY_DELIVERY"})} checked={byFastDelivery}/>
            <label htmlFor="fastDelivery" className='text-xl'>Fast Delivery Only</label>
        </div>
        <div className='my-2 flex items-center gap-2'>
            <label className='text-xl'>Rating</label>
            <Rating rating={byRating} onClick={(i) => productDispatch({type:"FILTER_BY_RATING", payload:i+1})} style={{cursor:"pointer"}}/>
        </div>
        <button className='bg-[#E2E6EA] text-lg px-4 py-2 w-[100%] my-2 rounded-lg text-black' onClick={() => productDispatch({type:"CLEAR_FILTERS"})}>Clear Filters</button>
    </div>
  )
}

export default Filters