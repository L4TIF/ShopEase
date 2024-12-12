
import { CartContext } from "../Context/CartContext";
import CheckoutItems from "../Components/ui/CheckoutItems";
import { useContext } from "react";




const Checkout = () => {
    const { buyItem } = useContext(CartContext);


    const checkoutList = [...buyItem.values()];
    const checkoutListWithTotal = checkoutList.map((item) => ({
        ...item, total: item.price * item.quantity
    }))

    const totalPrice = checkoutListWithTotal.reduce((pre, item) => (item.total += pre), 0)

    return (

        <div>
            {


                checkoutList && checkoutList.length > 0 ?
                    <CheckoutItems totalPrice={totalPrice} checkoutList={checkoutList} />
                    :
                    <div className="text-center text-2xl text-red-600 h-screen">Your cart is empty order something </div>
            }
        </div>


    )
}

export default Checkout