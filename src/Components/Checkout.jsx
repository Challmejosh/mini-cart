import { useContext } from "react";
import { AppContext } from "../Utilities/Context";

const Checkout = () => {
    const {total,proceed} = useContext(AppContext)
    return ( 
        <div className=" mx-0 sm:mx-[100px] md:mx-[200px] lg:mx-[300px] flex flex-col items-center justify-center  ">
            <h1>Checkout</h1>
            <form onSubmit={(e)=>proceed(e)} action="" className="mx-[14px] p-5 flex gap-y-5 flex-col items-center w-full justify-center ">
                <div className="w-full flex items-center rounded-md justify-center border mx-10">
                    <input name="name" id="name" required type="text" className="flex w-full p-2  " placeholder="Cardholder Name" />
                </div>
                <div className="w-full flex items-center rounded-md justify-center border mx-10">
                    <input name="number" id="number" required title="enter card number" maxLength={16} pattern="[0-9]{16}" inputMode="numeric" type="text" className="flex w-full p-2 " placeholder="0000 0000 0000 0000" />
                </div>
                <div className="w-full flex items-center justify-between gap-x-3 mx-10">
                    <input  name="cvv" id="cvv" required title="Enter cvv " maxLength={3} pattern="[0-9]{3}" inputMode="numeric" type="text" className="flex rounded-md w-full border p-2 " placeholder="482" />
                    <input name="date" id="date" required title="Enter a valid expiration date in MM/YY format" maxLength={5} inputMode="numeric" pattern="(0[1-9]|1[0-2])\/\d{2}" type="text" className="flex rounded-md w-full border p-2 " placeholder="MM/YY" />
                </div>
                <div className="flex items-center justify-between w-full ">
                    <p className=" font-semibold text-lg  ">Total</p>
                    <p className="font-semibold text-lg">{Math.round(total)}</p>
                </div>
                <button type="submit" className="bg-red-500 w-[200px] flex items-center justify-center p-3 rounded-md text-white cursor-pointer " >Pay {Math.round(total)} </button>
            </form>
        </div>
     );
}
 
export default Checkout;