import { Product } from '@shared/schema';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
    });
    
    // Show feedback
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-brand-blue dark:text-white">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-brand-green">
            ${parseFloat(product.price).toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding || !product.inStock}
            className={`px-4 py-2 rounded-lg transition-all font-medium ${
              isAdding 
                ? 'bg-green-500 text-white' 
                : !product.inStock
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-brand-blue text-white hover:bg-opacity-90'
            }`}
          >
            {isAdding ? 'Added!' : !product.inStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
