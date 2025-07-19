// Generate fake card data
export const generateCardData = () => {
  const names = ['John Doe', 'Jane Smith', 'Alex Johnson', 'Sarah Wilson', 'Mike Brown', 'Emma Davis'];
  const name = names[Math.floor(Math.random() * names.length)];
  
  // Generate card number
  const cardNumber = Array.from({ length: 4 }, () => 
    Math.floor(1000 + Math.random() * 9000)
  ).join(' ');
  
  // Generate expiry date (future date)
  const currentYear = new Date().getFullYear();
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(currentYear + Math.floor(Math.random() * 5) + 1).slice(-2);
  const expiry = `${month}/${year}`;
  
  // Generate CVV
  const cvv = String(Math.floor(100 + Math.random() * 900));
  
  return { name, cardNumber, expiry, cvv };
};