import { useEffect,createContext,useState } from "react";
import useFetch from "./useFetch";
import PropTypes from 'prop-types'
import {toast} from 'react-toastify'
import { getItems, setItems } from "./localStorage";
const AppContext = createContext();

const Context = ({children}) => {
    const [cart,setCart] = useState(()=>{
        const item = getItems("cart")
        if(!item){return []}
        return item
    })
    const [detail,setDetail] = useState([])
    const [product,setProduct] = useState([])
    const [input,setInput] = useState('')
    const [changeCart,setChangeCart] = useState(false)
     const {pending,data} = useFetch('https://fakestoreapi.com/products')
     useEffect(()=>{
        setItems("cart",cart)
     },[cart])
     const handleCart = (prod)=>{
         try {
        const checkItem = data.find(item => item.id === prod.id)
        if(checkItem){
            const reCheck = cart.find(item => item.id === prod.id)
       if(reCheck){
           if (cart.map(item => item.id === prod.id)){
               toast('already in cart')
           }
       }else{
           setCart([...cart, {...checkItem, quantity: + 1}])
           toast("added to cart")
       }
   }
        
    } catch (error) {
        toast(error.code)
    }
}
     const addCart = (prod)=>{
         try {
            const checkItem = data.find(item => item.id === prod.id)
            if(checkItem){
                const reCheck = cart.find(item => item.id === prod.id)
        if(reCheck){
            setCart(cart.map(item => item.id === prod.id ? {...item, quantity: item.quantity + 1} : item))
        }else{
            setCart([...cart, {...checkItem, quantity: + 1}])
        }
    }
        
    } catch (error) {
        toast(error.code)
    }
}
    const handleRemCart = (prod)=>{
        try {
             const checkItem = data.find(item => item.id === prod.id)
             if(checkItem){
                 const reCheck = cart.find(item => item.id === prod.id)
                 if(reCheck){
                  setCart(cart.map(item => item.id === prod.id  ? {...item, quantity: item.quantity - 1} : item))
              }else{
                  setCart([...cart, {...checkItem, quantity: - 1}])
              }
             }
            
         } catch (error) {
            toast(error.code)
         }
    }


     const handleDelete = (prod)=>{
         try {
            const check = cart.filter(item=> item.id !== prod.id)
            setCart(check)
            
        } catch (error) {
            toast(error.code)
        }
     }

     const total = cart.reduce((acct, item) => acct + item.price * item.quantity, 0)
     const totalQuantity = cart.reduce((acct, item) => acct  + item.quantity, 0)

        
     
        const detailFunc = (prod,all)=>{
            try {
                const check= all.find(item => item.id === prod.id)
                if(check){
                    setDetail(check)
                }
            } catch (error) {
                toast(error.code)
            }
        }
        const proceed = async (e)=>{
            e.preventDefault();
            await localStorage.removeItem("cart")
            toast("payment done")
        }
         
    return ( 
        <AppContext.Provider value={{pending,data,handleCart,handleRemCart,detail,detailFunc,changeCart,cart,setChangeCart,handleDelete,total,totalQuantity,addCart,setProduct,product,input,setInput,proceed}}>
            {children}
        </AppContext.Provider>
     );
}
Context.propTypes = {
    children: PropTypes.node,
}
 
export {Context,AppContext};