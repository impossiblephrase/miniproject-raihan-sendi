import React from 'react';

type EventCardProps = {
  name: string;
  location: string;
  start_date: string;
  price: number;
  seats: number;
  imageUrl: string;
};

const EventCard: React.FC<EventCardProps> = ({ name, location, start_date, seats, price, imageUrl }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm">
      <div className="relative">
      <img src={imageUrl} alt={name} className="rounded-t-lg w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-white text-gray-800 font-semibold rounded px-2 py-1 text-sm">
          {new Date(start_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">Available seats {seats}</span>
          <span className="text-sm text-gray-800 font-semibold">From IDR {price}</span>
        </div>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;

        
       
