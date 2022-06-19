import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartWidget = () => {

    const {getCartQuantity, totalQuantity} = useContext(CartContext)


    return (
        <div>
            <img style={{width: '2rem'}} src = 'https://cdn-icons-png.flaticon.com/512/107/107831.png' alt = 'cart-widget'/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget