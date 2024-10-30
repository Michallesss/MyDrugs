'use client';
import { useParams } from "next/navigation";
import Overview from "./_components/Overview";
// import Description from "./_components/Description";
// import Reviews from "./_components/Reviews";

export default function ProductPage() {
  const params = useParams<{ productId: string }>();

  return (
    <>
      <Overview />
      {/* <Description /> */}
      {/* <Reviews /> */}
    </>
  );
}