import React from 'react';
import { ArrowRight, FileSignature, MessageCircle, Play, Video } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { PAPER_REVIEWS, VIDEO_REVIEWS, WHATSAPP_REVIEWS } from '../constants';

interface ReviewsPageProps {
  onNavigate: (mode: any) => void;
  onCalculate: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, onCalculate }) => {
  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      <div className="container mx-auto px-4 pt-6 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Отзывы', isActive: true }]} onNavigate={onNavigate} />

        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Отзывы клиентов</h1>
          <p className="text-gray-600 text-lg">
            Здесь собраны разные форматы отзывов: видео, скриншоты переписок и благодарственные письма.
          </p>
        </div>

        <div className="mb-16 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <Video className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Видео-отзывы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEO_REVIEWS.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={video.preview}
                  alt={video.author}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-white font-bold">{video.author}</div>
                  <div className="text-xs text-white/80">
                    {video.location} • {video.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 animate-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Скриншоты из WhatsApp</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WHATSAPP_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[9/16] bg-gray-100">
                  <img src={review.screenshot} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <img src={review.avatar} alt={review.name} className="w-6 h-6 rounded-full" />
                    <span className="font-bold text-sm text-slate-900">{review.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

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
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4 border border-gray-100">
                  <img src={paper.image} alt={paper.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{paper.author}</div>
                  <div className="text-xs text-gray-500">Дата: {paper.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Рассчитать стоимость ремонта</h2>
            <p className="text-blue-100 text-lg mb-8">Оставьте заявку — перезвоним и подскажем оптимальный вариант.</p>
            <button
              onClick={onCalculate}
              data-lead-open="callback"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 transform hover:-translate-y-1"
            >
              Заказать расчёт <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
