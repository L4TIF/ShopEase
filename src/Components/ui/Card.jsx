import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"



const Card = ({ item }) => {

    const { updateCartValue, itemInCart, getItemQuantity, handleDecrease, handleIncrease } = useContext(CartContext);

    return (
        <div className="mx-8 md:mx-0 flex flex-col items-stretch justify-between border shadow-lg rounded-lg p-2 ">
            <div className="h-48 bg-white rounded-lg overflow-hidden"> <img className="h-full mx-auto object-contain" src={item.image} alt={item.title} /></div>
            <div className="mt-10">{item.title}</div>
            <div className="flex justify-between items-center h-12">
                <p className="font-bold text-lg">$ {item.price}</p>

                {
                    itemInCart(item.id) && getItemQuantity(item.id) > 0
                        ?
                        (<div className="flex border px-4 py-2 gap-5">
                            <button onClick={() => handleIncrease(item.id)} className="">


                                <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                </svg>


                            </button>

                            <p className="text-lg">{getItemQuantity(item.id)}</p>

                            <button onClick={() => handleDecrease(item.id)} className="">

                                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                </svg>

                            </button>
                        </div>)
                        :
                        (<button onClick={() => updateCartValue(item)} className="border py-2 px-4 rounded-md bg-blue-400 text-white font-bold">Buy Now</button>)
                }

            </div>
        </div>

    )
}



export default Card