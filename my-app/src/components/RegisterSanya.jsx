import React, { useState } from 'react';

// Импорт изображений из src/assets


const RegisterSanya = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  
  // Add missing state for cards
  const [cards, setCards] = useState([
    // Example initial card for demo purposes; replace with real data as needed
    {
      id: 1,
      number: '**** **** **** 1234',
      expiry: '12/25',
      type: 'Visa',
    },
  ]);

  // Add missing handler for removing a card
  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  // Add missing handler for adding a card
  const handleAddCard = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCard = {
      id: Date.now(), // Simple ID generation; use a better method in production (e.g., UUID)
      number: formData.get('number').replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim(), // Format as **** **** **** 1234
      expiry: formData.get('expiry'),
      type: formData.get('type'),
    };
    setCards([...cards, newCard]);
    setShowAddCardModal(false);
    e.target.reset(); // Reset form
    // In a real app, you'd send this to an API and handle errors/success.
  };

  return (
    <div className='flex justify-center'>
    <div className="p-6 ">
      {/* Example tab navigation; expand as needed for full component */}
      <div className="flex space-x-4 mb-6  mx-auto justify-center">
        
       
        <button
          onClick={() => setActiveTab('payments')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'payments' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-700'}`}
        >
          Payments
        </button>
      </div>

      {/* Conditional tab content; only payments shown as per snippet */}
      {activeTab === 'payments' && (
        <div className="space-y-4">
          <h3 className="font-semibold mb-4">Payment methods</h3>
          <div className="flex flex-col space-y-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative bg-emerald-100 rounded-xl p-10 w-full max-w-xl self-start flex flex-col justify-between text-black shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-lg font-bold text-emerald-600">CV</div>
                  <button
                    onClick={() => removeCard(card.id)}
                    className="text-red-500 text-xl absolute top-2 right-2 hover:text-red-700"
                    aria-label="Remove card"
                  >
                    ×
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-5xl font-mono tracking-wider">{card.number}</p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-lg text-gray-600">Valid thru</p>
                    <p className="text-xl font-semibold">{card.expiry}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-24 h-14 bg-white rounded flex items-center justify-center text-lg font-bold">
                      {card.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowAddCardModal(true)}
              className="border-2 border-dashed border-emerald-300 rounded-xl p-10 w-full max-w-xl self-start flex flex-col items-center justify-center text-emerald-600 bg-white shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Add new card"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-3xl font-bold mb-2">
                +
              </div>
              <p className="text-xl font-medium">Add new card</p>
            </button>
          </div>
        </div>
      )}

      {/* Add Card Modal */}
      {showAddCardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowAddCardModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Add a new Card</h3>
            <form onSubmit={handleAddCard} className="space-y-4">
              <input
                name="number"
                type="text"
                placeholder="Card Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                maxLength="19"
              />
              <div className="flex space-x-2">
                <input
                  name="expiry"
                  type="text"
                  placeholder="MM/YY"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                  pattern="\d{2}/\d{2}"
                />
                <input
                  name="cvc"
                  type="text"
                  placeholder="CVC"
                  className="w-20 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                  maxLength="4"
                  pattern="\d{3,4}"
                />
              </div>
              <input
                name="name"
                type="text"
                placeholder="Name on Card"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <select
                name="type"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              >
                <option value="">Select Card Type</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
              </select>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="save" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Securely save my information for 1-click checkout</span>
              </label>
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium"
              >
                Add Card
              </button>
              <p className="text-xs text-gray-500 text-center">
                By confirming your subscription, you allow Globe Inc to charge your card. You can always cancel your subscription with them.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default RegisterSanya;