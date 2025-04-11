import React, { useState, useEffect } from 'react';

const FlashNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const newsItems = [
    "College fest starts next week - Register now!",
    "Last date for project submissions extended to Friday",
    "Campus placement drive on November 15th",
    "Library will be closed tomorrow for maintenance",
    "Workshop on AI & ML this Saturday"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="bg-[#056b9b] text-white p-3 shadow-lg">
      <div className="flex items-center">
        <span className="font-semibold ml-4 whitespace-nowrap">FLASH NEWS:</span>
        <div className="overflow-hidden">
          <div 
            className="whitespace-nowrap transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {newsItems.map((item, index) => (
              <span 
                key={index} 
                className="inline-block w-full pr-4"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashNews;