
import React from 'react';
import { CLIENTS } from '../landing/constants';

const Clients: React.FC = () => {
  // Duplicate clients list to create seamless loop
  const marqueeClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Нам доверяют</p>
        </div>
      </div>
      
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex animate-marquee-slow gap-12 md:gap-24 items-center whitespace-nowrap hover:[animation-play-state:paused]">
          {marqueeClients.map((client, idx) => (
            <div 
              key={idx} 
              className="text-2xl md:text-4xl font-black text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-500 cursor-default select-none transform hover:scale-105"
            >
              {client.logoText}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
