import React, { useState } from 'react';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('Return');
  const [from, setFrom] = useState('Lahore');
  const [to, setTo] = useState('Karachi');
  const [departDate, setDepartDate] = useState('2022-11-07');
  const [returnDate, setReturnDate] = useState('2022-11-13');
  const [passengers, setPassengers] = useState(1);
  const [passengerClass, setPassengerClass] = useState('Economy');
  const [promoCode, setPromoCode] = useState('');

  const airports = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Faisalabad',
    'Peshawar'
  ];

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
    if (e.target.value === 'One way') {
      setReturnDate('');
    }
  };

  const handleShowFlights = () => {
    console.log({
      from,
      to,
      departDate,
      returnDate,
      passengers,
      passengerClass,
      promoCode
    });
    alert(`
    ${passengers} flight(s) 
    from ${from} to ${to} 
    on ${departDate}` + (tripType === 'Return' ? `
    returning on ${returnDate}` : '') + ` 
    in ${passengerClass} class.` );
     
  };
//   const message = `${passengers} flight(s) from ${from} to ${to} on ${departDate}${tripType === 'Return' ? ` returning on ${returnDate}` : ''} in ${passengerClass} class.`;
//     setNotificationText(message);
//     setShowNotification(true);

//     // 3 soniyadan keyin yashirish
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 3000);
//   };

  const handleAddPromo = () => {
    if (promoCode.trim()) {
      alert(`Promo kod qoshildi: ${promoCode}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        <button className="flex-1 py-3 px-6 text-blue-600 border-b-2 border-blue-600 font-semibold">
          Flights
        </button>
        <button className="flex-1 py-3 px-6 text-gray-500">
          Stays
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* From - To */}
        <div className="md:col-span-2 relative">
          <div className="flex items-center space-x-2">
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            >
              {airports.map((airport) => (
                <option key={airport} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
            <button
              onClick={handleSwap}
              className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-gray-500"
            >
              ↔
            </button>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            >
              {airports.map((airport) => (
                <option key={airport} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </div>
          <label className="block text-xs text-gray-500 mt-1">From - To</label>
        </div>

        {/* Trip Type */}
        <div >
          <select
            value={tripType}
            onChange={handleTripTypeChange}
            className="w-[190px]  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          >
            <option value="One way">One way</option>
            <option value="Return">Return</option>
          </select>
          <label className="block text-xs text-gray-500 mt-1">Trip</label>
        </div>

        {/* Dates */}
        <div className="md:col-span-1 ml-[-35px]">
          <div className="flex space-x-1">
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <input
              type={tripType === 'Return' ? 'date' : 'text'}
              value={tripType === 'Return' ? returnDate : ''}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={tripType === 'One way'}
              className={`flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm ${
                tripType === 'One way' ? 'bg-gray-100 cursor-not-allowed' : ''
              }`}
            />
          </div>
          <label className="block text-xs text-gray-500 mt-1">Depart | Return</label>
        </div>

        {/* Passenger - Class */}
        <div className="md:col-span-1">
          <div className="flex space-x-2">
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Passenger
                </option>
              ))}
            </select>
            <select
              value={passengerClass}
              onChange={(e) => setPassengerClass(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>
          <label className="block text-xs text-gray-500 mt-1">Passenger - Class</label>
        </div>
      </div>

      {/* Promo Code and Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-gray-200">
        <div className="flex-1 relative">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo Code"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm pr-20"
          />
          <button
            onClick={handleAddPromo}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-green-500 text-white text-xs rounded-md hover:bg-green-600 transition-colors"
          >
            + Add Promo Code
          </button>
        </div>
        <button
          onClick={handleShowFlights}
          className="flex-1 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Show Flights
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;