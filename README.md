📦 E-Commerce Store (React + Tailwind)
🚀 Overview
This is a fully functional E-commerce web application built using modern frontend technologies. The app allows users to browse products, view details, add items to cart, and manage their shopping experience.

✨ Features
🛍️ Product listing page

🔍 Product details (dynamic routing)

🛒 Add to cart functionality

➕ Increase / ➖ decrease item quantity

❌ Remove items from cart

💰 Total price calculation

🔢 Cart item count in navbar

🔗 Multi-page navigation (React Router)

💾 Persistent cart (localStorage)

📸 Screenshots

![Screenshot 1](src/assets/Screenshot%20from%202026-05-09%2013-42-35.png)

![Screenshot 2](src/assets/Screenshot%20from%202026-05-09%2013-42-48.png)

![Screenshot 3](src/assets/Screenshot%20from%202026-05-09%2013-43-04.png)

🧠 Tech Stack
React – UI library

Vite – Fast development environment

Tailwind CSS – Styling

React Router DOM – Navigation & routing

📁 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│
├── pages/
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│
├── data/
│   ├── products.js
│
├── App.jsx
└── main.jsx
⚙️ Installation & Setup
Clone the repository:

git clone https://github.com/Naptile/E-commerce.git
cd ecommerce-store
Install dependencies:

npm install
Run the development server:

npm run dev
🌐 Routing
/                → Products page
/product/:id     → Product details
/cart            → Cart page
/checkout        → Checkout page
🛒 Cart Logic
Products are stored in a global cart state

Items are added with quantity tracking

Existing items increase quantity instead of duplicating

Cart persists using localStorage

🎯 Key Concepts Learned
React state management (useState)

Side effects (useEffect)

Dynamic routing (useParams)

Component reusability

Array methods (map, find, reduce, filter)

Passing props and functions between components


🚀 Deployment
This project can be deployed easily using:

Vercel

Netlify

📌 Future Improvements
🔐 Authentication (login/register)

🧾 Real checkout/payment integration

🌐 API-based products (backend integration)

❤️ Wishlist feature

🔎 Search and filtering

👨‍💻 Author
Naptile 

⭐ Support
If you like this project, give it a ⭐ on GitHub!

