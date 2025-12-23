
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  const leader = TEAM_MEMBERS[0];
  const members = TEAM_MEMBERS.slice(1);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#09090b] mb-6">
                Команда <span className="italic text-[#D4AF37]">экспертов</span>
            </h2>
            <div className="h-px w-full bg-gray-100"></div>
        </div>

        {/* Leader Highlight */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="order-2 lg:order-1">
                <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-4 block">Основатель</span>
                <h3 className="text-4xl font-serif font-bold text-[#09090b] mb-6">{leader.name}</h3>
                <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
                    {leader.bio?.map((item, idx) => (
                        <p key={idx} className="border-l-2 border-[#D4AF37] pl-6">{item}</p>
                    ))}
                </div>
            </div>
            <div className="order-1 lg:order-2 relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
            </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {members.map((member, idx) => (
              <div key={idx} className="group">
                 <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-gray-100">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                 </div>
                 <h4 className="font-serif font-bold text-xl text-[#09090b]">{member.name}</h4>
                 <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">{member.role}</div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
