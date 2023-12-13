import { MdDeleteOutline } from "react-icons/md";
import Rating from "./Rating";

const CartCard = ({data}) => {
    // console.log(data);
  return (
    <div className="m-4 flex items-center justify-around gap-6 w-[50rem] border border-slate-300 py-2 px-4">

        <div className="flex items-center gap-4">
            <div className='w-[6rem] h-[6rem] bg-zinc-400 rounded-md'></div>
            <h3 className="w-[13rem]">{data.name}</h3>
            <h3>₹ {data.price}</h3>
        </div>

        <div className="flex items-center gap-8">
            <Rating rating={data.ratings}/>
            <div>
                <select name="" id="" className="w-[4rem] bg-gray-100 px-4 py-2 outline-none rounded-md">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="px-4 py-2 bg-gray-50 rounded-md hover:bg-[#E2E6EA] border-[1px] border-slate-200"><MdDeleteOutline size={"2rem"}/></button>
        </div>
    </div>
  )
}

export default CartCard