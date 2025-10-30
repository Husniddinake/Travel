import React, { useState } from "react";

const AddCardForm = () => {
    const [formData, setFormData] = useState({
        cardNumber: "",
        expDate: "",
        cvc: "",
        name: "",
        country: "United States",
        saveInfo: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Card added successfully!");
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8"
            >
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                    Add a new Card
                </h2>

        
                <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="write card number"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-400"
                    />
                </div>


                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm text-gray-600 mb-1">Exp. Date</label>
                        <input
                            type="text"
                            name="expDate"
                            value={formData.expDate}
                            onChange={handleChange}
                            placeholder="02/27"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-400"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm text-gray-600 mb-1">CVC</label>
                        <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleChange}
                            placeholder="123"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-400"
                        />
                    </div>
                </div>


                <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">Name on Card</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="write name on card"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">Country or Region</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-mint-400"
                    >
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>United Arab Emirates</option>
                        <option>Saudi Arabia</option>
                        <option>Qatar</option>
                        <option>Kuwait</option>
                        <option>Oman</option>
                        <option>Kazakhstan</option>
                        <option>Uzbekistan</option>
                        <option>Kyrgyzstan</option>
                        <option>Tajikistan</option>
                        <option>Pakistan</option>
                        <option>Nepal</option>
                        <option>Sri Lanka</option>
                        <option>Mongolia</option>
                        <option>Bangladesh</option>
                    </select>
                </div>

                <div className="flex items-center mb-6">
                    <input
                        type="checkbox"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="w-4 h-4 text-mint-500 border-gray-300 rounded focus:ring-mint-400"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                        Securely save my information for 1-click checkout
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#98FF98] hover:bg-[#8AFB8A] text-gray-900 font-semibold py-2.5 rounded-lg transition shadow-sm"
                >
                    Add Card
                </button>

                <p className="mt-4 text-xs text-gray-500 text-center">
                    By confirming your subscription, you allow The Outdoor Inn Crowd Limited
                    to charge your card for this payment and future payments in accordance
                    with their terms. You can always cancel your subscription.
                </p>
            </form>
        </div>
    );
};

export default AddCardForm;
