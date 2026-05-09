import { useParams } from "react-router-dom"
import products from "../data/products"
export default function ProductDetails({addToCart}){
    const {id} = useParams();
    const product = products.find(
        (p)=>p.id===Number(id)
    );

    if(!product){
        return <h2 className="p-6">Product Not Found</h2>
    }
    return(
        <div className="p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                <img src={product.image}
                 alt={product.name} 
                 className="w-full rounded-xl"
                 />
            </div>

            <div >
                <h1 className="text-3xl font-bold mb-4">
                    {product.name}
                </h1>
                <p className="text-gray-600 mb-6">
                    ${product.price}
                    
                    </p>

                <p className="text-gray-600 mb-6"> 
                    This is a high quality product designed for comfort and style.
                </p>

                <button 
                onClick={()=>addToCart(product)}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition" >Add to cart</button>
            </div>
        </div>
    )
}