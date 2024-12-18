import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { CartContext } from "../Context/CartContext";


const Header = () => {
    const { cartValue } = useContext(CartContext);


    return (
        <header className='flex justify-between items-center mb-5 pb-3  '>
            <h1 className='text-3xl font-bold ml-4 md:ml-0'><Link to='/ShopEase'>ShopEase</Link></h1>
            <div className=" text-xl  flex gap-5">
                <NavLink to='/ShopEase' className={({ isActive }) => isActive ? `text-red-500` : `text-gray-400`} end >Home</NavLink>
                <NavLink to='Shop' className={({ isActive }) => isActive ? `text-red-500` : `text-gray-400`}>Shop</NavLink>
            </div>

            {/* to Checkout Page */}

            <NavLink to='Checkout' className={({ isActive }) => isActive ? `bg-slate-200 rounded-2xl` : ""}>
                <div className="relative py-2 cursor-pointer p-5    select-none">
                    <div className=" absolute left-1">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartValue ?? 0}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" mt-4 h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </NavLink>
        </header>
    )
}

export default Header