"use client";
import { useState } from "react";
import Image from "next/image";

type Props = {
  product: Product;
  fill?: boolean;
};

function ProductImage({ product, fill }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image src={product.image} fill alt={product.title} />
      ) : (
        <Image
          src={product.image}
          width={150}
          height={300}
          className={`flex flex-center object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          alt={product.title}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default ProductImage;
