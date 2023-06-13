import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y12 pb-44">
        <h1 className="text-5xl font-semi-bold text-center mb-10">
          DEALS OF THE DAY
        </h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </section>
    </main>
  );
}

// const function1 = (
//   arg1: string,
//   arg2: string,
//   cb1: (param1: string) => void
// ) => {
//   const concat = arg1 + arg2;

//   cb1(concat);

//   console.log(concat);

//   return concat;
// };

// function1("string1", "string2", (x) => {
//   console.log(x.toLocaleUpperCase());
//   console.log("callback");
// });
