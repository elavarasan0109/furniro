import { useState } from "react";
import FurniroCart from "./pages/Furnirocart";
import CheckoutPage from "./pages/Checkout";

const initialItems = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    qty: 1,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&q=80",
  },
];

function App() {
  const [page, setPage] = useState("cart");
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

  const handleCheckout = () => {
    setSuccessMessage("");
    setPage("checkout");
  };

  const handleBackToCart = () => {
    setPage("cart");
  };

  const handlePlaceOrder = ({ firstName }) => {
    setSuccessMessage(
      firstName
        ? `Thanks ${firstName}, your order has been placed successfully.`
        : "Your order has been placed successfully."
    );
    setItems([]);
    setPage("cart");
  };

  return page === "cart" ? (
    <FurniroCart
      items={items}
      subtotal={subtotal}
      onQuantityChange={handleQtyChange}
      onRemove={handleRemove}
      onCheckout={handleCheckout}
      successMessage={successMessage}
    />
  ) : (
    <CheckoutPage
      items={items}
      subtotal={subtotal}
      onBackToCart={handleBackToCart}
      onPlaceOrder={handlePlaceOrder}
    />
  );
}

export default App;
