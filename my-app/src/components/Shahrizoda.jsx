import React, { useState } from "react";
import { Link } from "react-router-dom";
const FlightBookingSystem = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("full");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleContinue = () => {
    if (activeSection < 3) setActiveSection(activeSection + 1);
  };

  const handleBack = () => {
    if (activeSection > 1) setActiveSection(activeSection - 1);
  };

  const handleShare = () => {
    console.log("Sharing flight details...");
  };

  const flightDetails = {
    airline: "Emirates A380 Airbus",
    from: "Newark (EWR)",
    to: "Istanbul (IST)",
    date: "Wed, Dec 8",
    price: 240,
    duration: "21h 28m",
  };

  return (
    <div className="min-h-screen bg-mint-50 py-10">
      <div className="max-w-4xl mx-auto">
        {/* ==== STEPS ==== */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setActiveSection(step)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  activeSection === step
                    ? "bg-[#3EB489] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* ==== SECTION 1: FLIGHT DETAILS ==== */}
        {activeSection === 1 && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-mint-100">
            {/* Header */}
            <div className="bg-mint-50 p-6 border-b border-mint-100">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-xl font-bold text-gray-800">
                    Turkey → Istanbul → CYK Park: Beginners Hotel Istanbul
                  </h1>
                  <p className="text-gray-600 mt-1">{flightDetails.airline}</p>
                  <p className="text-gray-500">
                    ● Gomössiyu Mah. Inönü Gal. Nadi, Istanbul 34457
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#3EB489]">$0</p>
                 
                </div>
              </div>
            </div>

            {/* Image */}
            <img
              src="../src/assets/samolyot.jpg"
              alt="Flight"
              className="h-[400px] w-full object-cover"
            />

            {/* Details */}
            <div className="p-6 space-y-6">
              {/* Airline Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mr-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2200/2200643.png"
                    alt="plane"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{flightDetails.airline}</h2>
                  <p className="text-gray-600">Emirates Airlines A380</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-6">
                  {[
                    { icon: "https://cdn-icons-png.flaticon.com/512/2088/2088617.png", label: "On Time" },
                    { icon: "https://cdn-icons-png.flaticon.com/512/483/483947.png", label: "Wi-Fi" },
                    { icon: "https://cdn-icons-png.flaticon.com/512/535/535239.png", label: "GPS" },
                    { icon: "https://cdn-icons-png.flaticon.com/512/565/565547.png", label: "Accessible" },
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <img src={f.icon} alt={f.label} className="w-5 h-5" />
                      </div>
                      <span className="text-xs mt-1">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flight Path */}
              <div className="bg-mint-50 p-6 rounded-xl">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-gray-500 text-sm">Departure</p>
                    <p className="font-semibold">{flightDetails.date}</p>
                    <p className="text-2xl font-bold">12:00 pm</p>
                    <p className="text-gray-500">{flightDetails.from}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1075/1075093.png"
                      alt="flight path"
                      className="w-8 h-8 mb-2 opacity-80"
                    />
                    <div className="h-1 w-full bg-mint-200 rounded-full"></div>
                    <p className="text-sm text-gray-500 mt-2">
                      {flightDetails.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Arrival</p>
                    <p className="font-semibold">Thu, Dec 9</p>
                    <p className="text-2xl font-bold">9:28 am</p>
                    <p className="text-gray-500">{flightDetails.to}</p>
                  </div>
                </div>
              </div>

              {/* Class Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Choose Your Class</h3>
                <div className="flex space-x-4">
                  {["Economy", "First Class", "Business"].map((classType) => (
                    <button
                      key={classType}
                      onClick={() => setSelectedClass(classType)}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        selectedClass === classType
                          ? "bg-[#3EB489] text-white"
                          : "bg-mint-100 hover:bg-mint-200 text-gray-800"
                      }`}
                    >
                      {classType}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    className={`px-4 py-2 rounded-lg flex items-center transition-all ${
                      isFavorite
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <img
                      src={
                        isFavorite
                          ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
                          : "https://cdn-icons-png.flaticon.com/512/833/833300.png"
                      }
                      alt="Favorite"
                      className="w-5 h-5 mr-1"
                    />
                    Favorite
                  </button>

                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center hover:bg-gray-300 transition-all"
                    onClick={handleShare}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/929/929610.png"
                      alt="Share"
                      className="w-5 h-5 mr-1"
                    />
                    Share
                  </button>
                </div>

                <button
                  onClick={handleContinue}
                  className="px-6 py-2 bg-[#3EB489] hover:bg-[#33a17a] text-white rounded-lg shadow font-semibold"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==== SECTION 2: PAYMENT ==== */}
        {activeSection === 2 && (
          <div className="bg-white rounded-2xl shadow-md border border-[#A7F3D0] overflow-hidden">
            <div className="p-8 space-y-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Payment Options</h1>
                <p className="text-gray-600">Choose how you'd like to pay for your trip</p>
              </div>

              {/* Payment options */}
              <div className="space-y-4">
                {[
                  { id: "full", title: "Pay in full", desc: "Pay the total now and you're all set" },
                  {
                    id: "split",
                    title: "Pay part now, part later",
                    desc: "Pay $207 now, the rest auto-charged on Nov 14 — no extra fees",
                  },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`block border-2 rounded-xl p-4 cursor-pointer transition ${
                      selectedPayment === opt.id
                        ? "border-[#3EB489] bg-[#D1FAE5]"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="hidden"
                      onChange={() => setSelectedPayment(opt.id)}
                      checked={selectedPayment === opt.id}
                    />
                    <div className="flex items-start">
                      <div
                        className={`w-5 h-5 rounded-full border-2 mt-1 mr-3 ${
                          selectedPayment === opt.id
                            ? "bg-[#3EB489] border-[#3EB489]"
                            : "border-gray-400"
                        }`}
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{opt.title}</p>
                        <p className="text-sm text-gray-600">{opt.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Credit Card Section */}
            

              {/* Phone number */}
              <div>
                <p className="font-semibold text-gray-800 mb-3">Enter your phone number</p>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+998 90 123 45 67"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3EB489] focus:border-[#3EB489] transition"
                />
                <p className="text-sm text-gray-500 mt-1">
                  We'll text you to confirm your booking (standard rates apply)
                </p>
              </div>

              {/* Terms */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="accent-[#3EB489] w-4 h-4"
                />
                <span className="text-sm text-gray-700">
                  I agree to the terms and conditions
                </span>
              </label>

              {/* Summary */}
              <div className="bg-[#D1FAE5] rounded-xl p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">{selectedClass}</span>
                  <span className="text-[#3EB489] font-semibold">
                    ${flightDetails.price}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/616/616489.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    4.2 / 5 · Very Good (81 reviews)
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between pt-2">
                <button
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!phoneNumber || !isAgreed}
                  className={`px-6 py-2 rounded-lg font-semibold shadow transition ${
                    phoneNumber && isAgreed
                      ? "bg-[#3EB489] hover:bg-[#33a17a] text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==== SECTION 3: CONFIRMATION ==== */}
        {activeSection === 3 && (
          <div className="bg-white rounded-2xl shadow-md border border-[#A7F3D0] overflow-hidden p-8 space-y-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3EB489] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt="success"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Booking Confirmed!
              </h1>
              <p className="text-gray-600">
                Your flight has been successfully booked
              </p>
            </div>

            {/* Booking Details */}
            <div className="bg-mint-50 rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Booking Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Booking Reference</p>
                  <p className="font-semibold">EMR489512</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Flight Number</p>
                  <p className="font-semibold">EK 2024</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Passenger</p>
                  <p className="font-semibold">1 Adult</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Class</p>
                  <p className="font-semibold">{selectedClass}</p>
                </div>
              </div>

              {/* Flight Summary */}
              <div className="border-t border-mint-200 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">12:00 PM</p>
                    <p className="text-gray-600">{flightDetails.from}</p>
                    <p className="text-sm text-gray-500">{flightDetails.date}</p>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1075/1075093.png"
                      alt="flight"
                      className="w-6 h-6 mb-1"
                    />
                    <p className="text-sm text-gray-500">{flightDetails.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">9:28 AM</p>
                    <p className="text-gray-600">{flightDetails.to}</p>
                    <p className="text-sm text-gray-500">Thu, Dec 9</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white border rounded-lg shadow-sm">
              <div className="border-b p-4">
                <p className="font-semibold text-gray-700">Price Summary</p>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { label: "Base Fare", value: "$400" },
                  { label: "Discount", value: "-$40" },
                  { label: "Taxes & Fees", value: "$35" },
                  { label: "Service Fee", value: "$10" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-gray-600">{item.label}</span>
                    <span
                      className={
                        item.label === "Discount"
                          ? "text-red-500"
                          : "text-gray-800"
                      }
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total Paid</span>
                  <span className="text-[#3EB489]">${flightDetails.price}</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-blue-800 mb-2">What's Next?</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• E-ticket will be sent to your email within 15 minutes</li>
                <li>• Online check-in opens 24 hours before departure</li>
                <li>• Boarding pass will be available after check-in</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setActiveSection(1)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition font-semibold"
              >
                Book Another Flight
              </button>
         <Link to='/Sanya'>     <button className="px-6 py-3 bg-[#3EB489] hover:bg-[#33a17a] text-white rounded-lg shadow transition font-semibold">
                Download E-Ticket
              </button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightBookingSystem;
