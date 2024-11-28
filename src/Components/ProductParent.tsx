
// components/ProductParent.tsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductParent: React.FC = () => {
  // Define product data with image URLs
  const products = [
    {
      productName: "Wireless Earbuds",
      price: 149.99,
      description: "High-quality wireless earbuds with noise-cancellation and long battery life.",
      imageUrl: "/earbuds.png", // Add the image URL here
    },
    {
      productName: "Bluetooth Speaker",
      price: 79.99,
      description: "Portable Bluetooth speaker with superior sound and waterproof design.",
      imageUrl: "/speaker.png", // Add the image URL here
    },
    {
      productName: "Smartwatch",
      price: 199.99,
      description: "Stylish smartwatch with fitness tracking and notifications.",
      imageUrl: "/smartwatch.png", 
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-black mt-20 mb-20 col-span-full">Product Information</h1>
      
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductParent;