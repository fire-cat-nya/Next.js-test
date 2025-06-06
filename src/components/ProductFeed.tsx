"use client";

import React, { useState, useEffect } from "react";
import Product from "./Product";

interface ProductType {
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

export default function ProductFeed() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // サンプル商品データ
    const sampleProducts: ProductType[] = [
      {
        id: 1,
        title: "iPhone 14 Pro",
        price: 149800,
        description: "最新のiPhone 14 Pro。A16 Bionicチップ搭載。",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 4.5, count: 120 },
      },
      {
        id: 2,
        title: "MacBook Air M2",
        price: 164800,
        description: "M2チップ搭載のMacBook Air。軽量で高性能。",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 89 },
      },
      {
        id: 3,
        title: "AirPods Pro",
        price: 39800,
        description: "アクティブノイズキャンセリング搭載のワイヤレスイヤホン。",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 203 },
      },
      {
        id: 4,
        title: "iPad Air",
        price: 84800,
        description: "M1チップ搭載のiPad Air。クリエイティブな作業に最適。",
        category: "electronics",
        image:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 156 },
      },
      {
        id: 5,
        title: "Apple Watch Series 8",
        price: 59800,
        description: "健康管理とフィットネスの革新的なパートナー。",
        category: "electronics",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: { rate: 4.4, count: 98 },
      },
      {
        id: 6,
        title: "Nintendo Switch",
        price: 37978,
        description: "いつでも、どこでも、だれとでも楽しめるゲーム機。",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: { rate: 4.9, count: 312 },
      },
    ];

    setProducts(sampleProducts);
  }, []);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 4).map((product, i) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  );
}
