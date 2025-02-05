import { useContext } from "react";
import { AppContext } from "../Utilities/Context";
import { Link } from "react-router-dom";
const SearchPage = () => {
    const {product,handleCart,detailFunc} = useContext(AppContext)
    return ( 
        <div className="">
            <div className=" gap-5 grid items-center justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full " >
            {product.map(item => (
                <div className="w-full rounded-lg shadow h-[500px] overflow-hidden flex flex-col items-center justify-start pb-3 gap-y-3 " key={item.id}>
                <img src={item.image} alt="" className="w-full h-[60%] " />

                    <div className="h-[20%] w-full flex flex-col  px-2 ">
                        <p className="font-semibold text-md hidden sm:flex w-full "> {item.title}</p>
                        <div className="p-3 w-full ">
                            <p className="font-semibold text-sm  "> ${item.price} </p>
                            <p className="font-semibold text-md  "> Review : {item.rating.rate} </p>
                        </div>
                    </div>

                    <div className="p-2 flex w-full items-center justify-between h-[20%] gap-x-1 ">
                        <Link onClick={()=>detailFunc(item,product)} to={`/detail/${item.id}`} className=" cursor-pointer p-2 rounded-md bg-[#f8f8f8] sm:flex items-center w-[60%] justify-center hidden  ">Review Details</Link>
                       
                        <div className=" w-full sm:w-[40%] p-2 bg-red-500 flex items-center justify-center rounded-md  text-white cursor-pointer text-md " 
                            onClick={()=>{
                                handleCart(item) 
                                }}
                            >  ADD TO CART</div>
                    
                    </div>
            </div>
            ))}
            </div>
        </div>
     );
}
 
export default SearchPage;