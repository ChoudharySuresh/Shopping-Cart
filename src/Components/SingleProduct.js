import Rating from './Rating';
import {CartState} from "../Context/Context";

const SingleProduct = ({prod}) => {
    const {state : {cart} , dispatch} = CartState();
  return (
    <div className='px-4 py-4 bg-slate-200 m-2 w-[18rem] rounded-lg '>
        <div className='w-[100%] h-[10rem] bg-neutral-300 rounded-lg'></div>
        <h1 className='text-lg font-bold'>{prod.name}</h1>
        <h1 className='text-lg font-semibold'>₹{prod.price.split(".")[0]}</h1>
        {
            prod.fastDelivery ? (<p className='text-lg font-medium mb-2'>Fast Delivery</p>) : (<p className='text-lg font-medium mb-2'>4 Days Delivery</p>)
        }
        {/* <p>
            {
                prod.inStock ? (<p>In Stock</p>) : (<p>Out Of Stock</p>)
            }
        </p> */}
        <Rating rating={prod.ratings}/>

        {
            cart.some((p) => p.id === prod.id) ? 
            (<button className='bg-[#0069D9] px-4 py-2 text-white rounded-md my-4' onClick={() => dispatch({type:"REMOVE_FROM_CART" , payload:prod})}>Remove From Cart</button>)
            :
            <button className='bg-[#0069D9] px-4 py-2 text-white rounded-md my-4' onClick={() => dispatch({type:"ADD_TO_CART" , payload:prod})} disabled={!prod.inStock}>
                {!prod.inStock ? "Out Of Stock" : "Add to Cart"}
            </button>
        }
    </div>
  )
}

export default SingleProduct