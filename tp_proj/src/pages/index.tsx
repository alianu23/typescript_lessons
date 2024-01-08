import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Card from "../../components/Card";
import React, { useState } from "react";

type OptionalPriceType = {
  original: number;
  sale: number;
};

export type ProdType = {
  name: string;
  price: number | OptionalPriceType;
  quantity: number;
  manifactured: string;
};

const inter = Inter({ subsets: ["latin"] });

//ARRAY turul Array<prodType>
const products: ProdType[] = [
  { name: "ip12", price: 120000, quantity: 12, manifactured: "china" },
  {
    name: "ip12",
    price: { original: 300000, sale: 200000 },
    quantity: 12,
    manifactured: "china",
  },
  { name: "ip12", price: 120000, quantity: 12, manifactured: "china" },
  { name: "ip12", price: 120000, quantity: 12, manifactured: "china" },
];

export default function Home(): React.ReactElement {
  const [count, setCount] = useState<number>(0);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Header />
      <div className="grid grid-cols-2 gap-5 mt-8">
        {products.map((prod: ProdType) => (
          <Card data={prod} />
        ))}
      </div>
    </main>
  );
}

//complexity error rule
