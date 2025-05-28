import { Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../themeContext/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
      <nav className="navbar flex bg-black items-center p-4 border-b-2 border-gray-400 text-white">
            <div className="flex items-center space-x-4 logo font-bold text-3xl cursor-pointer hover:underline"><img className='h-14' src="Construction Vehicle.png" alt="Sharad" />SAGARMATHA</div>
            <ul className="nav-links flex ml-auto space-x-12 font-semibold text-lg mt-1">
                <li><Link to="/" className='hover:text-yellow-300 hover:underline'>Home</Link></li>
                <li><Link to="/products" className='hover:text-yellow-300 hover:underline'>Products</Link></li>
                <li><Link to="/cart" className='hover:text-yellow-300 hover:underline'>Cart</Link></li>
                <li><Link to="/contact" className='hover:text-yellow-300 hover:underline'>Contact us</Link></li>
            </ul>
            <button
                onClick={toggleTheme}
                className="flex ml-auto items-center cursor-pointer focus:outline-none"
                aria-label="Toggle Theme"
            >
                {/* <span className="mr-2 text-sm">{theme === "Light" ? "Light" : "Dark"}</span> */}
                <span
                    className={`
                            w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out
                            border-2
                            ${theme === "Dark"
                            ? "bg-gray-700 border-gray-500"
                            : "bg-yellow-100 border-gray-300"}
                        `}
                >
                    <span
                        className={`
                                bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
                                ${theme === "Dark" ? "translate-x-4" : ""}
                                ${theme === "Dark" ? "border border-gray-500" : "border border-black"}
                            `}
                    ></span>
                </span>
            </button>
            <div className="ml-3 flex">
                <input type="text" placeholder="Search..." className="p-2 rounded-full bg-yellow-950 "/>
                <Search className='cursor-pointer hover:text-white ml-2 mt-1.5'/>
            </div>
            <div className="cart-icon ml-3">
                <a href="#cart"><ShoppingCart className='cursor-pointer hover:text-white'/></a>
            </div>
        </nav>
  )
}

export default Navbar
