import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@shared/schema';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'clothing', label: 'Clothing' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'books', label: 'Books' },
  ];

  const filteredProducts = products?.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  ) || [];

  if (error) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 dark:bg-dark-card flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Failed to Load Products</h2>
          <p className="text-gray-600 dark:text-gray-300">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">BOA ME Store</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Support our mission while getting amazing merchandise. Every purchase directly funds our youth empowerment programs.
          </p>
        </div>

        {/* Product Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-200 dark:bg-dark-bg text-gray-700 dark:text-gray-300 hover:bg-brand-green hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-300 dark:bg-gray-600"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-10 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
