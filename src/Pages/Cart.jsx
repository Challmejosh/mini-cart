import { useContext } from "react";
import { AppContext } from "../Utilities/Context";
import { Link } from "react-router-dom";
import {MdShoppingBasket} from 'react-icons/md'

const Cart = () => {
    const {cart,handleRemCart,handleDelete,total,addCart} = useContext(AppContext)
    return ( 
        <div className="sm:mx-14 mx-0 flex items-center justify-center flex-col">
            <h1 className="flex w-full items-center justify-center font-semibold text-lg p-3">Cart</h1>
            {cart.length !== 0 ? (
            <div className=" h-fit flex flex-col gap-y-3 items-center justify-center ">
                
                {cart.map(item => (
                        <div key={item.id} className="w-full shadow-md rounded-lg p-2 flex gap-x-3 sm:items-center items-start ">
                            <img src={item.image} alt="" className="w-[100px] sm:w-[250px] h-[80px] sm:h-[80px] rounded-md object-cover " />
                            <div className="w-full flex-col sm:flex-row flex sm:items-center items-start justify-center sm:justify-between gap-3 sm:gap-0 ">
                                <div className="flex flex-col items-start justify-center gap-y-3 ">
                                    <div className="flex items-center justify-start w-full">
                                        <h2 className="font-semibold">{item.title}</h2>
                                    </div>
                                    <div className="flex items-center gap-x-3 justify-between w-full ">
                                        <p className="w-[40%] "> {item.price} x {item.quantity}</p>
                                        <div className="w-[30%] ">
                                            <p className="">${Math.round(item.price * item.quantity)}</p>
                                        </div>
                                        <div className=" w-[30%] flex items-center justify-center gap-x-3 ">
                                            <p onClick={()=>addCart(item)} className="font-semibold rounded-full border p-3 hover:bg-[#333] w-[20px] h-[20px] flex items-center justify-center cursor-pointer ">+</p>
                                            <p onClick={()=>handleRemCart(item)} className="font-semibold rounded-full border p-3 hover:bg-[#333] w-[20px] h-[20px] flex items-center justify-center cursor-pointer ">-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end w-full  sm:justify-center ">
                                    <div onClick={()=>handleDelete(item)} className="cursor-pointer bg-red-500 p-3 rounded-md w-[90px] flex items-center  sm:justify-center hover:bg-red-400 text-white ">remove</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="flex items-center justify-between p-3 w-full ">
                    <p className="flex items-center justify-center text-lg font-semibold">Total</p>
                    <p className="font-semibold text-lg flex items-center justify-center ">{Math.round(total).toFixed(2)} </p>
                </div>
                <Link to="/checkout" className="bg-red-500 rounded-md cursor-pointer p-3 w-[180px] flex items-center justify-center text-white ">Proceed</Link>
            </div>
            ):(
                <div className="">
                    <MdShoppingBasket size={30} />
                </div>
            )}
        </div>
     );
}
 
export default Cart;