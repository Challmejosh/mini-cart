import { Route, Routes } from "react-router-dom"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Checkout from "./Components/Checkout"
import SearchPage from "./Pages/SearchPage"
import Detail from "./Pages/Detail"
import CategoryPage from "./Pages/CategoryPage"
import Search from "./Components/Search"
import Category from './Components/Category'
import {ToastContainer} from 'react-toastify'
function App() {

  return (
    <>
    <ToastContainer />
    <Search />
    {/* <Category /> */}
    <Routes>
      <Route path="/" exact element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
    </>
  )
}

export default App
