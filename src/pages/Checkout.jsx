export default function Checkout({cart}){
     const totalPrice = cart?.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return(

       <div className="max-w-4xl  mx-auto p-6 mt-6 items-center  text-center shadow-xl hover:bg-gray-100 transition duration-300">
       
        {cart.map((item)=>(
            <div className=" grid grid-cols-2 mb-4 gap-2">
                
                <img src={item.image} alt={item.name} 
                className="rounded-xl object-cover h-40 "
                />
                <div>
                     <h2 className="font-bold text-2xl">{item.name} <span className="text-gray-500">({item.quantity})</span> </h2>
                    
                    <p>${item.price * item.quantity}</p>

                </div>
               

            
            
        </div>
        ))}
          <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <div className="text-right ">
            <button className="bg-green-600 px-8 py-3 rounded-xl text-white font-bold text-lg hover:bg-green-700 transition ">cashout</button></div>
        </div>
      

    )
}