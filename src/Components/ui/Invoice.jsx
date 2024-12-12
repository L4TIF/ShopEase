import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const Invoice = ({ total }) => {


    const { handleCheckout } = useContext(CartContext);

    const ShippingCharge = 20;
    return (
        <>
            <div className="text-gray-700 p-10 text-xl flex flex-col items-end justify-center bg-slate-200 rounded-lg  w-full">
                <p>Total order amount : {total.toFixed(2)}</p>
                <p>Shipping Charges : {total > 0 && ShippingCharge}</p>
                <p className="text-2xl text-black font-bold mt-4">Net Amount : {total > 0 ? (total + ShippingCharge).toFixed(2) : 0}</p>
                <p className="text-2xl text-black font-bold mt-2">Round : {total > 0 ? Math.round((total + ShippingCharge)) : 0}</p>
                <button onClick={handleCheckout} className="border mt-8 bg-green-600 rounded-lg w-full text-white py-5">Checkout</button>

            </div>
        </>
    )
}

export default Invoice