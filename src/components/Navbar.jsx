import {Link} from 'react-router-dom'
export default function Navbar({cart}){

    const totalItems = cart.reduce(
        (sum,item)=>sum+ item.quantity,
        0
    );
    
    return(
       
        <nav className="bg-white shadow-sm px-6 py-4">
            <div className="flex justify-between items-center">
                <h2 className="text-blue-600 font-bold text-xl">ShopEase</h2>

                <div className="flex items-center gap-6">
                    <ul className="flex gap-6 text-gray-800 text-lg">
                        <li>
                            <Link 
                            to="/" 
                             className="hover:text-blue-600 transition duration-300 cursor-pointer"
                             >Products
                             </Link>
                             </li>
                       
                        
                         <li>
                            <Link 
                            to={"/checkout"}
                             className="hover:text-blue-600 transition duration-300 cursor-pointer"
                             >Checkout
                            </Link>
                            </li>
                         
                          <li>
                            <Link
                            to={"/"}
                            className="hover:text-blue-600 transition duration-300 cursor-pointer"
                            >Home
                            
                            </Link> 
                            </li>
                    </ul>

                    <input type="text"
                    placeholder="search..."
                    className="border rounded-lg py-2 px-4 outline-none focus:border-blue-600"
                    />
                    <ul className="flex gap-6 text-gray-800 text-lg">
                     <li >
                            <Link
                            to="/cart"
                           
                             className="hover:text-blue-600 transition duration-300 cursor-pointer"
                             > Cart ({totalItems})
                                
                            </Link>

                            </li>
                            </ul>
                </div>
            </div>
                 
               
            
        </nav>
    )
}