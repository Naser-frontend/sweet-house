import { createContext, useContext, useRef, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartNotice, setCartNotice] = useState("");
  const noticeTimer = useRef(null);

  const addToCart = (product) => {
    setCartNotice(`${product.name} added to cart`);
    if (noticeTimer.current) clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setCartNotice(""), 3000);

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        );
      }

      return [...currentItems, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartNotice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-5 right-5 z-50 rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 ${cartNotice ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      >
        {cartNotice}
      </div>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

