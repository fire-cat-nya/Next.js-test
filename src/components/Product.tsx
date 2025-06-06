"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: ProductProps) {
  const [hasFastDelivery] = useState(Math.random() < 0.5);

  const addToBasket = () => {
    // カートに追加する処理（後で実装）
    console.log("カートに追加:", {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasFastDelivery,
    });
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        className="mx-auto"
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array.from({ length: Math.floor(rating.rate) }, (_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <p className="text-lg font-semibold">¥{price.toLocaleString()}</p>
      </div>

      {hasFastDelivery && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">お急ぎ便対応</p>
        </div>
      )}

      <button onClick={addToBasket} className="mt-auto amazon-button">
        カートに追加
      </button>
    </div>
  );
}
