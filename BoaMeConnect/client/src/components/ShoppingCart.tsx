import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

// Paystack type declarations
declare global {
  interface Window {
    PaystackPop: {
      setup: (options: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        metadata?: any;
        callback: (response: { reference: string; status: string }) => void;
        onClose: () => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

const PaystackPop = window.PaystackPop;

export function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { items, totalItems, totalAmount, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = async () => {
    if (totalAmount === 0 || items.length === 0) return;

    setIsProcessing(true);
    
    try {
      // Create order in backend
      const orderResponse = await apiRequest('POST', '/api/orders', {
        email: 'customer@email.com', // This should be from a form in real app
        totalAmount: totalAmount.toFixed(2),
        status: 'pending',
        items: items,
      });

      const order = await orderResponse.json();
      
      // Initialize Paystack payment
      const paystackKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxxxxxxxxxxx';
      
      if (typeof PaystackPop !== 'undefined') {
        const handler = PaystackPop.setup({
          key: paystackKey,
          email: 'customer@email.com',
          amount: Math.round(totalAmount * 100), // Convert to kobo
          currency: 'NGN',
          ref: `BOA_ME_${Date.now()}`,
          metadata: {
            order_id: order.id,
            custom_fields: [
              {
                display_name: "Cart Items",
                variable_name: "cart_items",
                value: JSON.stringify(items)
              }
            ]
          },
          callback: async function(response: { reference: string; status: string }) {
            try {
              // Update order status
              await apiRequest('PATCH', `/api/orders/${order.id}`, {
                status: 'completed',
                paystackReference: response.reference
              });
              
              toast({
                title: "Payment Successful!",
                description: `Transaction reference: ${response.reference}`,
              });
              
              clearCart();
              setIsOpen(false);
            } catch (error) {
              toast({
                title: "Error",
                description: "Payment successful but failed to update order",
                variant: "destructive",
              });
            }
          },
          onClose: function() {
            toast({
              title: "Payment Cancelled",
              description: "Payment window was closed",
            });
          }
        });
        
        handler.openIframe();
      } else {
        toast({
          title: "Error",
          description: "Payment service unavailable",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process checkout",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 bg-brand-green text-white rounded-full hover:bg-opacity-90 transition-all"
      >
        <i className="fas fa-shopping-cart"></i>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-dark-card shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Shopping Cart</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="space-y-4 mb-6">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <i className="fas fa-shopping-cart text-4xl mb-4"></i>
                <p>Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border-b dark:border-gray-600">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-sm hover:bg-gray-300 dark:hover:bg-gray-500"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-sm hover:bg-gray-300 dark:hover:bg-gray-500"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <i className="fas fa-trash text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t dark:border-gray-600 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-lg">${totalAmount.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-brand-blue text-white py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
