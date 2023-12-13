import {Menu,MenuButton,MenuList,Button, MenuItem} from '@chakra-ui/react'
import { IoIosArrowDown , IoMdCart } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import {CartState} from "../Context/Context";

const Header = () => {

  const {state : {cart} , dispatch , productDispatch} = CartState();

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[#343A40] mb-5">
        <Link to="/" className='text-2xl text-white'>Shopping Cart</Link>

        <div>
            <input type="text" onChange={(e) => productDispatch({type:"FILTER_BY_SEARCH" , payload:e.target.value})} placeholder="Search a Product..." className="text-lg border-[2px] border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-gray-400 w-[30rem]"/>
        </div>

        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<IoIosArrowDown />} className='bg-[#218838] text-white px-4 py-3 rounded-lg'>
                  <div className='flex items-center gap-1'>
                      <IoMdCart size={"2rem"}/>
                      <p>{cart.length}</p>
                  </div>
                </MenuButton>
                
                <MenuList className='border-[2px] border-gray-300 py-2 bg-white w-[30rem]'>
                  {
                    cart.map((c) => {
                      return (
                        <MenuItem className='px-2 py-2 hover:bg-slate-200 flex items-center justify-around'>
                          <div className='w-[7rem] h-[5rem] bg-zinc-300 rounded-md'></div>
                          <div>
                            <h3>{c.name}</h3>
                            <p>₹ {c.price}</p>
                          </div>
                          <div>
                            <button onClick={() => dispatch({type:"REMOVE_FROM_CART" , payload:c})}><MdDeleteOutline size={"2rem"}/></button>
                          </div>
                        </MenuItem>
                      )
                    })
                  }


                  {
                    cart.length <= 0 ? (<p className='text-lg text-center'>Cart is Empty</p>)
                    :
                    <Link to="/cart" className='flex justify-center'>
                      <button className='bg-[#0069D9] text-white text-lg w-[89%] my-4 px-4 py-2 rounded-md'>Go To Cart</button>
                    </Link>
                  }

                </MenuList>
                
            </Menu>
        </div>
    </div>
  )
}

export default Header