import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return(
        <div>
            <nav>
                <h1>Sport shop</h1>
                <ul>
                    <button>Ofertas</button>
                    <button>Productos</button>
                    <button>Mi cuenta</button>
                </ul>
                <CartWidget/>
                
            </nav>
        </div>
    )
}

export default Navbar