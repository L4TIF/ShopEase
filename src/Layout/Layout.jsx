import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { CartProvider } from "../Context/CartContext"



const Layout = () => {

    return (
        <CartProvider>
            <div className="md:w-4/5 overflow-hidden mx-auto ">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </CartProvider>
    )
}

export default Layout