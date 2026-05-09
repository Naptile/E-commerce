import {Link} from "react-router-dom";
export default function ProductCard({product}){
    return(
        <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition">
            <img src={product.image} 
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
                {product.name}
            </h3>

            <p className="text-blue-600 font-bold mb-4">
                ${product.price}
            </p>

            <Link
            to={`/products/${product.id}`}
            className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >View Details
            
            </Link>
        </div>
    )

}