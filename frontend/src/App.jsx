// Connected Cart Sidebar globally
import { Routes, Route, Outlet } from "react-router-dom";
import FurniroCart from "./pages/Furnirocart";
import CheckoutPage from "./pages/Checkout";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import ShopPage from "./pages/Shop";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Comparison from "./pages/Comparison";
import About from "./pages/About";

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
  return (
    <Routes>
        {/* Pages with standard Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Pages with shared Navbar/Footer inside them */}
        <Route path="/cart" element={<FurniroCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
  );
}
