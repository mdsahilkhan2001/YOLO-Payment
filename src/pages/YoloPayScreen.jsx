 import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { CreditCard, IndianRupee } from "lucide-react";
import "./card.css";
import carddetail from "../assets/carddetail.png";

export default function YoloPayScreen() {
  const [isFrozen, setIsFrozen] = useState(true);
  const [selected, setSelected] = useState("card");

  const name = faker.person.fullName();
  const cardNumber = faker.finance.creditCardNumber("#### #### #### ####");
  const expiry = faker.date.future().toLocaleDateString("en-GB").slice(3, 8);

  const toggleFreeze = () => setIsFrozen(!isFrozen);

  return (
    <div className="px-6 pt-8 text-white min-h-screen bg-black">
      <h2 className="text-2xl font-bold mb-1">select payment mode</h2>
      <p className="text-gray-400 mb-6">
        choose your preferred payment method to make payment.
      </p>

      {/* Mode Selection Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelected("pay")}
          className={`w-[90px] h-[42px] text-[15px] flex items-center justify-center gap-1 font-medium tracking-tight rounded-full border shadow-md backdrop-blur-md transition-all duration-300 ${
            selected === "pay"
              ? "bg-white/10 text-white border-white/30"
              : "bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-white"
          }`}
        >
          <IndianRupee size={16} />
          pay
        </button>

        <button
          onClick={() => setSelected("card")}
          className={`w-[90px] h-[42px] text-[15px] flex items-center justify-center gap-1 font-medium tracking-tight rounded-full border shadow-md backdrop-blur-md transition-all duration-300 ${
            selected === "card"
              ? "bg-white/10 text-white border-white/30"
              : "bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-white"
          }`}
        >
          <CreditCard size={16} />
          card
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-2">YOUR DIGITAL DEBIT CARD</p>

      <div className="relative">
        {/* Card Container */}
        <div
          className={`w-full h-56 rounded-xl overflow-hidden transition-all duration-700 ${
            isFrozen ? "grayscale blur-sm" : ""
          }`}
        >
          <img
            src={carddetail}
            alt="card"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-6 text-white z-10">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-lg tracking-wider mt-2">{cardNumber}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-300">EXPIRY</p>
              <p className="text-lg">{expiry}</p>
            </div>
          </div>
        </div>

        {/* Freeze Button */}
        <div className="absolute top-1/2 right-[-60px] transform -translate-y-1/2">
          <button
            onClick={toggleFreeze}
            className="w-20 h-20 rounded-full border border-red-600 text-red-500 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all duration-300"
          >
            <span className="text-2xl">❄️</span>
            <span className="text-sm mt-1">{isFrozen ? "unfreeze" : "freeze"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
