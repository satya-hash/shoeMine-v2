'use client'
import { createContext, useContext, useEffect, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Add product to cart (if exists, increase quantity)
    const addToCart = (product) => {

        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                localStorage.setItem('cart', prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ))

                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== productId)
        );
    };

    // Update quantity of a product
    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Clear cart
    const clearCart = () => {
        setCart([]);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);



    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook to use Cart Context
export const useCart = () => useContext(CartContext);
