'use client';
// React
import { useState } from "react";
// Components
import Cart from "./_components/Cart";
import Product, { ProductProps } from "./_components/Product";

export default function CartPage() {
  const [products, setProducts] = useState<ProductProps[]>([
    {
      id: 1,
      name: "PC",
      image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
      price: 5000
    }
  ]);
  const [price, setPrice] = useState<number>(() => products.reduce((acc, product) => acc + product.price * (product.quantity || 1), 0));

  return (
    <Cart price={price} savings={0.00} pickup={10} tax={3}>
      {products.map((product, index) => (
        <Product id={product.id} key={index} name={product.name} image={product.image} price={product.price} quantity={product.quantity} />
      ))}
    </Cart>
  );
}