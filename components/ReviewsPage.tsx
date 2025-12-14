
import React, { useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Play, FileText, MessageCircle, ArrowRight, Video, FileSignature, CheckCheck, MoreVertical, X } from 'lucide-react';
import { REVIEWS, VIDEO_REVIEWS, PAPER_REVIEWS } from '../constants';

interface ReviewsPageProps {
  onNavigate: (mode: any) => void;
  onCalculate: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, onCalculate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'chat' | 'paper'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      
      {/* Lightbox for Paper Reviews */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            <button className="absolute top-4 right-4 text-white hover:text-gray-300">
                <X className="w-8 h-8" />
            </button>
            <img src={selectedImage} alt="Review" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
        </div>
      )}

      <div className="container mx-auto px-4 pt-6 max-w-6xl">
        <Breadcrumbs 
            items={[{ label: 'Отзывы', isActive: true }]} 
            onNavigate={onNavigate} 
        />

        <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Отзывы о нас</h1>
            <p className="text-gray-600 text-lg">
                Мы ценим доверие наших клиентов и открыто публикуем обратную связь.
                Здесь собраны видео-обзоры готовых ремонтов, переписки с заказчиками и официальные благодарственные письма.
            </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
                { id: 'all', label: 'Все отзывы', icon: null },
                { id: 'video', label: 'Видео-обзоры', icon: Video },
                { id: 'chat', label: 'Чаты (WhatsApp)', icon: MessageCircle },
                { id: 'paper', label: 'Благодарности', icon: FileSignature },
            ].map(tab => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all border flex items-center gap-2 ${
                        activeTab === tab.id 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-slate-900'
                    }`}
                >
                    {tab.icon && <tab.icon className="w-4 h-4" />}
                    {tab.label}
                </button>
            ))}
        </div>

        {/* Video Reviews Section */}
        {(activeTab === 'all' || activeTab === 'video') && (
            <div className="mb-16 animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <Video className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-slate-900">Видео-отзывы</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VIDEO_REVIEWS.map((video) => (
                        <div key={video.id} className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                             <img src={video.preview} alt={video.author} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                                  </div>
                             </div>
                             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                  <div className="font-bold text-lg">{video.author}</div>
                                  <div className="text-sm text-gray-300 flex items-center gap-2">
                                      <span className="bg-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">HD</span>
                                      {video.location} • {video.duration}
                                  </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Chat Reviews Section */}
        {(activeTab === 'all' || activeTab === 'chat') && (
            <div className="mb-16 animate-in slide-in-from-bottom-4 duration-500 delay-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <MessageCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-slate-900">Переписки в мессенджерах</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="bg-[#E5DDD5] rounded-[2rem] overflow-hidden shadow-md border border-gray-200 flex flex-col h-[500px]">
                            {/* Header */}
                            <div className="bg-[#075E54] p-4 flex items-center gap-3 text-white">
                                <ArrowRight className="w-5 h-5 rotate-180" />
                                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="font-bold text-sm">{review.name}</div>
                                    <div className="text-[10px] opacity-80">{review.location}</div>
                                </div>
                                <MoreVertical className="w-5 h-5" />
                            </div>
                            {/* Chat Body */}
                            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                                {review.chat.map((msg, mIdx) => (
                                    <div key={mIdx} className={`flex ${msg.isManager ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[85%] rounded-lg p-3 shadow-sm text-sm relative ${
                                            msg.isManager ? 'bg-[#DCF8C6] rounded-tr-none' : 'bg-white rounded-tl-none'
                                        }`}>
                                            {msg.text && <p className="text-gray-800 leading-snug">{msg.text}</p>}
                                            <div className="text-[10px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
                                                {msg.time}
                                                {msg.isManager && <CheckCheck className="w-3 h-3 text-blue-500" />}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Paper Reviews Section */}
        {(activeTab === 'all' || activeTab === 'paper') && (
            <div className="mb-16 animate-in slide-in-from-bottom-4 duration-500 delay-200">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                        <FileSignature className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-slate-900">Благодарственные письма</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PAPER_REVIEWS.map((paper) => (
                        <div 
                            key={paper.id} 
                            onClick={() => setSelectedImage(paper.image)}
                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all cursor-zoom-in group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4 border border-gray-100">
                                <img src={paper.image} alt="Letter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 px-3 py-1 rounded text-xs font-bold shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all">
                                        Увеличить
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">{paper.author}</div>
                                <div className="text-xs text-gray-500">Дата: {paper.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                    Присоединяйтесь к числу довольных клиентов
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                    Сделаем ремонт так, что вам захочется написать нам благодарность или записать видео-отзыв.
                </p>
                <button 
                    onClick={onCalculate}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 transform hover:-translate-y-1"
                >
                    Рассчитать смету <ArrowRight className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};
