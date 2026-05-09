import { Link } from "react-router-dom";
export default function Cart({
    
    cart,
  increaseQty,
  decreaseQty,
  removeItem,
}

){
    const totalPrice = cart?.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (!cart || cart.length === 0) {
        return (
            <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-600">Add a product from the product details page.</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

            <div className="space-y-4">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                            <p className="text-blue-600 font-bold">${item.price * item.quantity}</p>

                        </div>

                         <div className="text-right mt-4">
                            <Link
                            to="/checkout"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg  hover:bg-blue-700 transition"
                            >
                            proceed to checkout
                            </Link>
                        </div>

                        

                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => decreaseQty(item.id)}
                                className="border bg-gray-200 px-2 py-1 rounded"
                            >
                                -
                            </button>
                            <button
                                onClick={() => increaseQty(item.id)}
                                className="border bg-gray-200 px-2 py-1 rounded"
                            >
                                +
                            </button>
                            <button
                                onClick={() => removeItem(item.id)}
                                className=" bg-red-500 px-2 py-1 rounded-lg text-white"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-right">
                <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    );
}











// export default function Cart({ cart }) {
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Cart</h1>

//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="space-y-4">
          
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
//             >
//               <div>
//                 <h2 className="font-semibold">{item.name}</h2>
//                 <p className="text-gray-600">
//                   ${item.price} × {item.quantity}
//                 </p>
//               </div>

//               <div className="text-blue-600 font-bold">
//                 ${item.price * item.quantity}
//               </div>
//             </div>
//           ))}

//           {/* Total */}
//           <div className="text-right mt-6">
//             <h2 className="text-xl font-bold">
//               Total: ${total}
//             </h2>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }