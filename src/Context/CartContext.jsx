import { createContext, useCallback, useEffect, useState } from 'react'



// create Cart Context 
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState(0);
    const [itemsData, setItemsData] = useState([]);
    const [buyItem, setBuyItem] = useState(new Map());

    const handleCheckout = () => {
        setBuyItem(new Map());
        setCartValue(0);
    }



    const updateCartValue = useCallback((item) => {
        setBuyItem((prev) => {
            const updatedCart = new Map(prev);
            updatedCart.set(item.id, { ...item, quantity: 1 })
            return updatedCart
        })
    }, [])



    const handleIncrease = useCallback((itemId) => {
        setBuyItem((prev) => {
            const updateCart = new Map(prev)
            const isExistingCartItem = updateCart.get(itemId);
            if (isExistingCartItem)
                updateCart.set(itemId, { ...isExistingCartItem, quantity: isExistingCartItem.quantity + 1 })

            return updateCart
        })
    }, [])

    const handleDecrease = useCallback((itemId) => {
        setBuyItem((prev) => {
            const updateCart = new Map(prev)
            const isExistingCartItem = updateCart.get(itemId);
            if (isExistingCartItem && isExistingCartItem.quantity > 1)
                updateCart.set(itemId, { ...isExistingCartItem, quantity: isExistingCartItem.quantity - 1 })
            else
                updateCart.delete(itemId);
            return updateCart
        })
    }, [])

    const itemInCart = (itemId) => {
        return buyItem.has(itemId)
    }

    const getItemQuantity = (itemId) => {
        const item = buyItem.get(itemId);
        return item ? item.quantity : 0;
    }

    useEffect(() => {
        const valueArray = Array.from(buyItem.values())
        const total = valueArray.reduce((acc, item) => { return acc + item.quantity }, 0)
        setCartValue(total)
    }, [buyItem])


    return (
        <CartContext.Provider value={{ cartValue, updateCartValue, buyItem, setBuyItem, itemInCart, getItemQuantity, handleDecrease, handleIncrease, itemsData, setItemsData,handleCheckout }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
