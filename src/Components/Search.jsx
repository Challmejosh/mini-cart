import{Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../Utilities/Context'
const Search = () => {
    const {input,setInput,setProduct,data,totalQuantity} = useContext(AppContext)
    const navigate = useNavigate()
    const inputSearch = (e,input)=>{
        e.preventDefault();
        const search = data.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
        if(search){
            setProduct(search)
            navigate('/search')
        }
     }
    return ( 
        <div className="flex items-center mt-2 justify-center gap-x-3">
            <form onSubmit={(e) =>inputSearch(e,input)} className="flex items-center justify-center w-full gap-x-3 ">
                <input name="search" id="search" value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Search..." className="bg-transparent w-full md:w-[400px] md:max-w-[700px] flex items-center justify-center rounded-[999px] border p-3  focus:outline-none   " />
                <button type='submit' className="flex bg-red-500 p-2 items-center justify-center text-white cursor-pointer rounded-md hover:bg-red-600 ">Search</button>
            </form>
            <Link className="p-5 relative  " to="/cart">
                <FaShoppingCart size={24} className="" />
                <p className="absolute top-2 right-3 flex items-center justify-center text-red-500 rounded-full  "> {totalQuantity} </p>
            </Link>
        </div>
     );
}
 
export default Search;