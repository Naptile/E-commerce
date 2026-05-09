import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

export default function App() {
  // const [cart, setCart] = useState([]);
const [cart, setCart] = useState(()=>{
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
});


useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(cart));
},[cart]);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity: 1 },
        ];
      }
    });
  };


  const increaseQty = (id)=>{
    setCart((prevCart)=>
    prevCart.map((item)=>
    item.id===id
    ?{...item,quantity:item.quantity + 1}
    : item
    )
    )
  }


  const decreaseQty = (id)=>{
    setCart((prevCart)=>
    prevCart.map((item)=>
    item.id ===id
    ?{...item,quantity:item.quantity - 1}
    : item
    ).filter((item)=>item.quantity > 0)
  );
  }

  const removeItem =(id)=>{
    setCart((prevCart)=>
    prevCart.filter((item)=>item.id!==id)
    );
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart}/>

      <Routes>
        <Route path="/" element={<Products />} />
       
        <Route
          path="/products/:id"
          element={
            <ProductDetails addToCart={addToCart} />
          }
        />

        <Route
          path="/cart"
          element={
          <Cart 
          cart={cart}
          increaseQty = {increaseQty}
          decreaseQty ={decreaseQty}
          removeItem ={removeItem}
          />}
        />

        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}