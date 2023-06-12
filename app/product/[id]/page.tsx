import ProductImage from "./components/ProductImage";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function ProductPage({ params: { id } }: Props) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();