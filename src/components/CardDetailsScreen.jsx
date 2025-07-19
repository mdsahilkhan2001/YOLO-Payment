 import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import CreditCard from './CreditCard';
// import cardDetailBg from "../assets/carddetails.png"
import download from "../assets/download.png"
export default function CardDetailsScreen({ cardData, isFrozen }) {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <div
      className="min-h-screen text-white px-6 py-8 pb-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${download})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
  <div className="w-[328px] h-[36px]">
    <h1 className="font-poppins font-semibold text-[28px] leading-[24px] tracking-[-0.17px] text-white">
      select payment mode
    </h1>
  </div>
</div>


      {/* Payment Mode Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="px-[16px] w-[328px] h-[40px] rounded-full border border-gray-600 text-gray-300">
          pay
        </button>
        <button className="px-[16px] w-[328px] h-[40px] rounded-full border border-red-500 text-red-500 bg-red-500/10">
          card
        </button>
      </div>

      <p className="text-gray-500 text-sm font-medium mb-4 tracking-wider">
        YOUR DIGITAL DEBIT CARD
      </p>

      {/* Card with Details */}
      <div className="mb-6">
        <CreditCard cardData={cardData} isFrozen={isFrozen} showDetails={true} />
      </div>

      {/* Card Details */}
      <div className="space-y-4 bg-gray-900/50 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Card Number</p>
            <p className={`font-mono text-lg ${isFrozen ? 'blur-sm' : ''}`}>
              {cardData.cardNumber}
            </p>
          </div>
          <button
            onClick={() => copyToClipboard(cardData.cardNumber.replace(/\s/g, ''), 'number')}
            className="text-red-500 hover:text-red-400"
          >
            <Copy className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            <p className="text-gray-400 text-sm">Expiry</p>
            <p className={`font-mono ${isFrozen ? 'blur-sm' : ''}`}>
              {cardData.expiry}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-gray-400 text-sm">CVV</p>
            <p className={`font-mono ${isFrozen ? 'blur-sm' : ''}`}>
              {cardData.cvv}
            </p>
          </div>
        </div>

        <button
          className="flex items-center gap-2 text-red-500 text-sm mt-4"
          onClick={() => copyToClipboard(`${cardData.cardNumber} ${cardData.expiry} ${cardData.cvv}`, 'all')}
        >
          <Copy className="h-4 w-4" />
          copy details
        </button>
      </div>

      {copied && (
        <div className="mt-4 text-center">
          <p className="text-green-400 text-sm">
            ✅ {copied === 'all' ? 'All details' : 'Card number'} copied!
          </p>
        </div>
      )}

      {/* RuPay Logo */}
      <div className="text-center mt-8">
        <div className="inline-block bg-orange-500 text-white px-8 py-2 rounded font-bold">
          RuPay
        </div>
        <p className="text-gray-500 text-sm mt-1">PREPAID</p>
      </div>
    </div>
  );
}
