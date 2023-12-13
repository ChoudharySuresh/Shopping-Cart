import { MdDeleteOutline } from "react-icons/md";
import {CartState} from "../Context/Context";
import CartCard from "./CartCard";
import Rating from "./Rating";
import { useEffect, useState } from "react";

const Cart = () => {

  const { state : {cart} , dispatch} = CartState();

  const [total , setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr) => acc+Number(curr.price) * curr.qty , 0))
  }, [cart])

  return (
    <div className="flex justify-between">
      <div>
        {
          cart.map((prod) => {
            return (
              <div className="m-4 flex items-center justify-around gap-6 w-[50rem] border border-slate-300 py-2 px-4">
          
                  <div className="flex items-center gap-4">
                      <div className='w-[6rem] h-[6rem] bg-zinc-400 rounded-md'></div>
                      <h3 className="w-[13rem]">{prod.name}</h3>
                      <h3>₹ {prod.price.split(".")[0]}</h3>
                  </div>
          
                  <div className="flex items-center gap-8">
                      <Rating rating={prod.ratings}/>
                      <div>
                          <select value={prod.qty} onChange={(event) => dispatch({type:"CHANGE_CART_QTY" , payload:{id:prod.id , qty:event.target.value}})} className="w-[4rem] bg-gray-100 px-4 py-2 outline-none rounded-md">
                              {
                                [...Array(prod.inStock).keys()].map((x) => (
                                  <option key={x+1}> {x+1} </option>
                                ))
                              }
                          </select>
                      </div>
                      <button onClick={() => dispatch({type:"REMOVE_FROM_CART" , payload:prod})} className="px-4 py-2 bg-gray-50 rounded-md hover:bg-[#E2E6EA] border-[1px] border-slate-200"><MdDeleteOutline size={"2rem"}/></button>
                  </div>
              </div>
            )            
          })
        }
      </div>

      <div className="bg-[#343A40] text-white p-8 mx-5 h-[80vh] rounded-lg">
        <h1 className="text-4xl">Subtotal ({cart.length}) items</h1>
        <p className="my-5 text-2xl font-bold">Total : ₹ {total}</p>
        <button className="bg-[#0069D9] text-xl px-4 py-2 border-none rounded-md">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart