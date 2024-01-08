import React from "react";
import { ProdType } from "@/pages";

type Props = {
  data: ProdType;
};

const Card = ({ data }: Props) => {
  const price: number =
    typeof data.price == "number" ? data.price : data.price.original;

  return (
    <div>
      <p>{data.name}</p>
      <p>{price}</p>
      <p>{data.quantity}</p>
      <p>{data.manifactured}</p>
    </div>
  );
};

export default Card;

//trfce
