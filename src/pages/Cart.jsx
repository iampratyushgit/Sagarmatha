import { useCart } from "../context/CartContext";

const paymentOptions = [
  { name: "Khalti", logo: "https://khalti.com/static/icons/favicon-32x32.png" },
  { name: "eSewa", logo: "https://esewa.com.np/common/images/favicon.ico" },
  { name: "IME Pay", logo: "https://www.imepay.com.np/favicon.ico" },
  { name: "Nabil Bank", logo: "https://www.nabilbank.com.np/favicon.ico" },
  { name: "NIC Asia", logo: "https://www.nicasiabank.com/favicon.ico" },
  { name: "Global IME Bank", logo: "https://globalimebank.com/favicon.ico" },
  { name: "Nepal Bank", logo: "https://nepalbank.com.np/favicon.ico" },
  // Add more banks as needed
];

export default function Cart() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <ul className="divide-y">
            {cart.map((item, idx) => (
              <li key={idx} className="flex items-center py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mr-4" />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
                <div className="font-bold text-lg ml-4">${item.price.toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Choose Payment Option</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {paymentOptions.map((option) => (
                <button
                  key={option.name}
                  className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
                >
                  <img src={option.logo} alt={option.name} className="w-8 h-8 mb-2" />
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}