"use client";

import React from 'react';
import TurkeyMap from 'turkey-map-react';

// Interface'in doğru hali: Sadece şehir ismini (string) alan bir fonksiyon bekliyor.
interface InteractiveMapProps {
  onCitySelect: (cityName: string) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ onCitySelect }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-2 shadow-inner bg-white">
      <TurkeyMap
        hoverable={true}
        customStyle={{ idleColor: "#d1d5db", hoverColor: "#3b82f6" }}
        // Tıklanınca dışarıya sadece şehrin ismini (name) yolluyoruz.
        onClick={({ name }) => onCitySelect(name)}
      />
    </div>
  );
};

export default InteractiveMap;