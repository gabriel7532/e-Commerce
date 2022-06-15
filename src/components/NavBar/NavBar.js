import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <nav className="navbar">                
                <Link className="titulo" to='/'>
                    <h1>Sport shop</h1>
                </Link>
                <div className='botones-navbar'>
                    <NavLink style={{color: 'black'}} to = '/ofertas/enoferta' className = {({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
                    <NavLink style={{color: 'black', textDecoration: 'none'}} to = '/' className = {({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>    
                    <CartWidget/>
                </div>
                                
            </nav>
        </>
    )
}

export default Navbar