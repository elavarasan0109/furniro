import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import ShopPage from "./pages/Shop";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}