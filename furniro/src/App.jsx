import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import FurniroCart from "./pages/Furnirocart";
import CheckoutPage from "./pages/Checkout";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import ShopPage from "./pages/Shop";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Comparison from "./pages/Comparison";
import About from "./pages/About";

const initialItems = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    qty: 1,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&q=80",
  },
];

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [successMessage, setSuccessMessage] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleQtyChange = (id, qty) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
    );
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePlaceOrder = ({ firstName }) => {
    setSuccessMessage(
      firstName
        ? `Thanks ${firstName}, your order has been placed successfully.`
        : "Your order has been placed successfully."
    );
    setItems([]);
  };

  return (
    <Routes>
      {/* Pages with standard Navbar and Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <ShopPage />
          </>
        } />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Pages with their own Navbar and Footer (or none) */}
      <Route path="/cart" element={
        <FurniroCart
          items={items}
          subtotal={subtotal}
          onQuantityChange={handleQtyChange}
          onRemove={handleRemove}
          successMessage={successMessage}
        />
      } />
      <Route path="/checkout" element={
        <CheckoutPage
          items={items}
          subtotal={subtotal}
          onPlaceOrder={handlePlaceOrder}
        />
      } />
    </Routes>
  );
}
