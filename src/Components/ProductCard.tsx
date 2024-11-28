
  // components/ProductCard.tsx
  import Image from 'next/image'; // Import Image from next/image

  interface ProductCardProps {
    productName: string;
    price: number;
    description: string;
    imageUrl: string; // New prop for the image URL
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ productName, price, description, imageUrl }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Display product image using Next.js Image component */}
        <Image
          src={imageUrl}
          alt={productName}
          width={400} // Set the width of the image
          height={300} // Set the height of the image
          className="w-full h-72 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold text-black">{productName}</h2>
        <p className="text-lg text-red-700">Price: ${price}</p>
        <p className="text-md text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;