'use client';
// Next
import { useParams } from "next/navigation";
// Components
import Overview from "./_components/Overview";
// import Description from "./_components/Description";
// import Reviews from "./_components/Reviews";
import { IProduct, products } from "../../../../../prisma/testContent";

export default function ProductPage() {
  const params = useParams<{ productId: string }>();
  // find product by id
  const product: IProduct | undefined = products.find((product) => product.id === parseInt(params.productId));

  if (!product) return <h1>Product not found</h1>;

  return (
    <>
      <Overview product={product} />
      {/* <Description /> */}
      {/* <Reviews /> */}
    </>
  );
}