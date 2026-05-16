import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true); // Automatically open cart sidebar when item is added
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  const placeOrder = ({ firstName }) => {
    setSuccessMessage(
      firstName
        ? `Thanks ${firstName}, your order has been placed successfully!`
        : "Your order has been placed successfully!"
    );
    setItems([]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        subtotal,
        successMessage,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQty,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
