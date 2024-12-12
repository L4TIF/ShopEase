
import Invoice from "./Invoice";


const CheckoutItems = ({ checkoutList, totalPrice }) => {


    return (
        <div className=" flex justify-between">
            <div>
                <div className="text-2xl font-bold">Your Cart</div>
                {
                    checkoutList && checkoutList.map((item, index) => {
                        return <div key={index} className=" md:text-2xl flex justify-between items-center border py-5 px-10 mb-5 rounded-md ">
                            <div className="flex gap-5 items-center ">
                                <div className="h-24 w-16"><img className="h-full object-contain" src={item.image} alt={item.title} /></div>
                                <div className="w-2/4">{item.title}</div>
                            </div>
                            <div className="w-fit">
                                <div>
                                    ${item.price.toFixed(2)}
                                </div>
                                Quantity : {item.quantity}
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                < Invoice total={totalPrice} />
            </div>
        </div>
    )
}

export default CheckoutItems