 import React, { useState } from 'react';
import { Snowflake } from 'lucide-react';
import CreditCard from './CreditCard';

export default function PaymentModeScreen({ cardData, isFrozen, toggleFreeze }) {
  const [paymentMode, setPaymentMode] = useState('card');

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-[182px] pb-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[24px] font-bold mb-2">select payment mode</h1>
        <p className="text-gray-400 text-[14px]">
          choose your preferred payment method to make payment.
        </p>
      </div>

      {/* Payment Mode Buttons */}
      <div className="flex gap-3 mb-8 ml-4">
        <button
          onClick={() => setPaymentMode('pay')}
          className={`px-10 py-4 rounded-full text-[18px] font-normal border-2 transition-all duration-300 min-w-[140px] transform hover:scale-105 ${
            paymentMode === 'pay' 
              ? 'border-white text-white bg-transparent shadow-lg shadow-white/20 hover:shadow-white/30' 
              : 'border-gray-500 text-gray-400 hover:border-gray-400 shadow-md shadow-gray-500/20'
          }`}
          style={{ borderRadius: '9999px' }}
        >
          pay
        </button>
        <button
          onClick={() => setPaymentMode('card')}
          className={`px-10 py-4 rounded-full text-[18px] font-normal border-2 transition-all duration-300 min-w-[140px] transform hover:scale-105 ${
            paymentMode === 'card' 
              ? 'border-red-500 text-red-500 bg-transparent shadow-lg shadow-red-500/30 hover:shadow-red-500/40' 
              : 'border-gray-500 text-gray-400 hover:border-gray-400 shadow-md shadow-red-500/20'
          }`}
          style={{ borderRadius: '9999px' }}
        >
          card
        </button>
      </div>

      {/* Card Label */}
      <div className="mb-2">
        <p className="text-gray-500 text-sm font-medium tracking-wider">
          YOUR DIGITAL DEBIT CARD
        </p>
      </div>

      {/* Card and Freeze Button Container */}
      <div className="relative flex items-center justify-center">
        <CreditCard cardData={cardData} isFrozen={isFrozen} showDetails={false} />
        
        {/* Freeze/Unfreeze Button */}
        <div className="absolute -right-5 top-1/2 transform -translate-y-1/2">
          <button
            onClick={toggleFreeze}
            className={`w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${
              isFrozen
                ? 'border-red-500 text-red-500 bg-red-500/10 animate-pulse'
                : 'border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-500'
            }`}
          >
            <Snowflake
              className={`h-6 w-6 transition-all duration-300 ${
                isFrozen ? 'animate-spin' : ''
              }`}
            />
            <span className="text-xs mt-1 font-medium">
              {isFrozen ? 'unfreeze' : 'freeze'}
            </span>
          </button>
        </div>
      </div>

      {/* Freeze status indicator */}
      {isFrozen && (
        <div className="mt-6 text-center">
          <p className="text-red-400 text-sm animate-pulse">
            ❄️ Card is frozen
          </p>
        </div>
      )}
    </div>
  );
}