 import React, { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import PaymentModeScreen from './components/PaymentModeScreen';
import CardDetailsScreen from './components/CardDetailsScreen';
import { generateCardData } from './utils/generateCardData';

export default function App() {
  const [activeTab, setActiveTab] = useState('yolo-pay');
  const [isFrozen, setIsFrozen] = useState(false);
  const [cardData, setCardData] = useState(generateCardData());
  const [currentScreen, setCurrentScreen] = useState('payment-mode');
  
  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
  };
  
  // Generate new card data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to update
        setCardData(generateCardData());
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const renderScreen = () => {
    if (activeTab !== 'yolo-pay') {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center pb-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 capitalize">{activeTab}</h1>
            <p className="text-gray-400">This screen is under development</p>
          </div>
        </div>
      );
    }
    
    switch (currentScreen) {
      case 'payment-mode':
        return (
          <div>
            <PaymentModeScreen 
              cardData={cardData} 
              isFrozen={isFrozen} 
              toggleFreeze={toggleFreeze} 
            />
            <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => setCurrentScreen('card-details')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        );
      case 'card-details':
        return (
          <div>
            <CardDetailsScreen cardData={cardData} isFrozen={isFrozen} />
            <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => setCurrentScreen('payment-mode')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Back to Payment
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-black min-h-screen">
      {renderScreen()}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}