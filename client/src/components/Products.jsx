import React from "react";

import Product from "./Product";
const Products = () => {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
    {
      image:
        "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
    {
      image:
        "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
    {
      image:
        "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
    {
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80",
      name: "Graphic Design",
      description: "English Department",
      price: 16.48,
    },
  ];
  return (
    <div className="container m-auto mb-20 flex flex-col items-center">
      <div className="text-center my-20">
        <p className="text-xl text-[#737373] font-normal mb-2.5">
          Featured Products
        </p>
        <h1 className="uppercase font-bold text-[#252B42] text-2xl mb-2.5 ">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-sm text-[#737373] ≈">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px]">
        {products.map((product, key) => (
          <Product key={key} product={product} />
        ))}
      </div>
      <button className="mt-14 btn reverse-primary">Load more product</button>
    </div>
  );
};

export default Products;
