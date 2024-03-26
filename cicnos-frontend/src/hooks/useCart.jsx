import { useState, useEffect } from "react";
const api = require("./api");

export const useCart = (
  initialCart,
  addProductsToCart,
  getCheckoutSession,
  editCart
) => {
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función para obtener la sesión de pago
    getCheckoutSession();
  };

  const handleChange = async (data) => {
    api
      .addProductsToCart(data)
      .then((response) => {
        console.log("Productos agregados al carrito:", response);
      })
      .catch((error) => {
        console.error("Error al agregar productos al carrito:", error);
      });
  };

  const handleRemove = (e, currentPriceID) => {
    e.preventDefault();

    const updatedCart = initialCart.filter((item) => {
      return item.priceID !== currentPriceID;
    });

    // Llamar a la función para editar el carrito con el producto eliminado
    editCart(updatedCart);
  };

  useEffect(() => {
    // Función para calcular el total del carrito
    const calculateTotal = () => {
      const newTotal = initialCart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotal(newTotal);
    };

    // Llamar a la función para calcular el total del carrito
    calculateTotal();
  }, [initialCart]);

  return { total, handleSubmit, handleChange, handleRemove };
};
