
import React, { useState, useMemo } from 'react';
import { Search, Download, FileText } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface PriceItem {
  name: string;
  unit: string;
  price: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const DATA: PriceCategory[] = [
  {
    title: "Демонтажные и подготовительные работы",
    items: [
      { name: "Удаление старой краски или клея с потолка", unit: "м²", price: "150 руб." },
      { name: "Демонтирование (замена) стеновых панелей", unit: "м²", price: "140 руб." },
      { name: "Демонтирование цементной стяжки до 5 см.", unit: "м²", price: "420 руб." },
      { name: "Демонтаж плитки (пол, стены) без сохранения", unit: "м²", price: "360 руб." },
      { name: "Демонтирование бетонного бортика поддона", unit: "м²", price: "860 руб." },
      { name: "Демонтирование плинтуса", unit: "п.м.", price: "70 руб." },
      { name: "Демонтирование штукатурного покрытия", unit: "м²", price: "220 руб." },
      { name: "Замена ванны чугун", unit: "шт.", price: "900 руб." },
      { name: "Замена ванны акрил", unit: "шт.", price: "800 руб." },
      { name: "Замена ванны сталь", unit: "шт.", price: "900 руб." },
      { name: "Замена ванны др. мат-лы", unit: "шт.", price: "900 руб." },
      { name: "Демонтаж (замена) душевой кабины", unit: "от", price: "1 200 руб." },
      { name: "Демонтаж (замена) унитаза, биде", unit: "шт.", price: "500 руб." },
      { name: "Демонтаж (замена) раковины", unit: "шт.", price: "450 руб." },
      { name: "Демонтаж (замена) смесителя", unit: "шт.", price: "400 руб." },
      { name: "Демонтаж (замена) полотенцесушителя", unit: "от", price: "700 руб." },
      { name: "Демонтирование труб водопроводных метал (пластик)", unit: "точка", price: "400(300) руб." },
      { name: "Вычеканивание труб", unit: "шт. от", price: "1 000 руб." },
      { name: "Демонтаж керамической плитки (пол, стены)", unit: "м²", price: "250 руб." },
      { name: "Сбивка бетонного наплыва на полу", unit: "шт.", price: "1 000 руб." }
    ]
  },
  {
    title: "Общестроительные работы",
    items: [
      { name: "Штроба под водопроводные трубы до 25 мм (блок)", unit: "м²", price: "500 руб." },
      { name: "Грунтовка стен бетоноконтактом (1 слой)", unit: "м²", price: "120 руб." },
      { name: "Штукатурка стен по маякам (до 20 мм)", unit: "м²", price: "750 руб." }
    ]
  },
  {
    title: "Плиточные ремонтные работы",
    items: [
      { name: "Облицовка стен и пола керамической плитки (по ровной поверхности)", unit: "м²", price: "2 080 руб." },
      { name: "Облицовка стен и пола керамогранитом (по ровной поверхности)", unit: "м²", price: "1 250 руб." },
      { name: "Облицовка стен и пола мелкой плиткой 10х10 или 15х15", unit: "м²", price: "1 160 руб." },
      { name: "Отделка стен и пола бордюрной плиткой", unit: "п.м.", price: "550 руб." },
      { name: "Отделка стен и пола керамической плиткой (по ровной поверхности) 90 гр.", unit: "м²", price: "800 руб." },
      { name: "Отделка стен и пола керамической плиткой (по ровной поверхности) 45 гр.", unit: "м²", price: "970 руб." },
      { name: "Отделка стен или пола керамической плиткой «Елочкой»", unit: "м²", price: "1 180 руб." },
      { name: "Отделка стен или пола керамической плиткой «Елочкой с прикрепом»", unit: "м²", price: "1 360 руб." },
      { name: "Облицовка ступеней керамической плиткой", unit: "п.м.", price: "950 руб." },
      { name: "Облицовка ступеней керамогранитом", unit: "п.м.", price: "1 000 руб." },
      { name: "Подрезка плитки для последующей облицовки стен и пола под 45 гр.", unit: "п.м.", price: "520 руб." },
      { name: "Подрезка резного края плитки под 45 гр.", unit: "п.м.", price: "750 руб." },
      { name: "Облицовка порогов плиткой", unit: "п.м.", price: "720 руб." },
      { name: "Укладка декора на стены и пол", unit: "шт.", price: "200 руб." },
      { name: "Сверление отверстий в керамической плитке", unit: "ед.", price: "170 руб." },
      { name: "Затирка швов плитки однокомпонентным раствором", unit: "м²", price: "70 руб." },
      { name: "Затирка швов плитки двухкомпонентным раствором", unit: "м²", price: "110 руб." },
      { name: "Устройство декоративного экрана на полу и стенах", unit: "ед.", price: "2 700 руб." },
      { name: "Облицовка бордюра, плинтуса керамического", unit: "п.м.", price: "580 руб." },
      { name: "Изготовление ревизий на магнитном креплении", unit: "ед.", price: "870 руб." },
      { name: "Монтаж металлического или пластикового лючка", unit: "ед.", price: "670 руб." },
      { name: "Монтаж лючка под плитку с облицовкой", unit: "ед.", price: "1 750 руб." },
      { name: "Облицовка углов стен или пола уголками, раскладками", unit: "п.м.", price: "100 руб." },
      { name: "Укладка мозаики на стены и пол", unit: "м²", price: "1 780 руб." },
      { name: "Подрезка плитки", unit: "п.м.", price: "250 руб." },
      { name: "Подрезка плитки из керамогранита", unit: "п.м.", price: "330 руб." },
      { name: "Раскладка уголков для вагонки", unit: "п.м.", price: "210 руб." }
    ]
  },
  {
    title: "Работы, связанные с установкой панелей ПВХ",
    items: [
      { name: "Раздельная ванна 150*135 (без материалов)", unit: "м²", price: "9 000 руб." },
      { name: "Раздельная ванна 170*170 (без материалов)", unit: "м²", price: "10 000 руб." },
      { name: "Совмещенной ванна 150*190 (без материалов)", unit: "м²", price: "11 000 руб." },
      { name: "Совмещенной ванна 190*190 (без материалов)", unit: "м²", price: "12 000 руб." },
      { name: "Совмещенной ванна 210*210 (без материалов)", unit: "м²", price: "13 000 руб." },
      { name: "Демонтаж старого покрытия из ПВХ (без материалов)", unit: "м²", price: "400 руб." },
      { name: "Заделка межпанельных рустов с расшивкой (без материалов)", unit: "м²", price: "300 руб." },
      { name: "Раздельная ванна 150*135 (с материалами)", unit: "м²", price: "18 000 руб." },
      { name: "Раздельная ванна 170*170 (с материалами)", unit: "м²", price: "20 000 руб." },
      { name: "Совмещенной ванна 150*190 (с материалами)", unit: "м²", price: "21 000 руб." },
      { name: "Совмещенной ванна 190*190 (с материалами)", unit: "м²", price: "22 000 руб." },
      { name: "Совмещенной ванна 210*210 (с материалами)", unit: "м²", price: "23 000 руб." },
      { name: "Демонтаж старого покрытия из ПВХ (с материалами)", unit: "м²", price: "400 руб." },
      { name: "Заделка межпанельных рустов с расшивкой (с материалами)", unit: "м²", price: "300 руб." }
    ]
  },
  {
    title: "Сантехнические работы",
    items: [
      { name: "Монтаж труб водоснабжения ПП без гребенки", unit: "ед.", price: "2 900 руб." },
      { name: "Монтаж труб водоснабжения ПП с гребенкой", unit: "ед.", price: "2 800 руб." },
      { name: "Пайка труб", unit: "шт.", price: "400 руб." },
      { name: "Монтаж крана шарового", unit: "шт.", price: "550 руб." },
      { name: "Установка ванны акрил", unit: "шт.", price: "2 800 руб." },
      { name: "Установка ванны чугун", unit: "шт.", price: "3 300 руб." },
      { name: "Установка душевой кабины", unit: "шт.", price: "от 4 900 руб." },
      { name: "Установка унитаза", unit: "шт.", price: "от 1 700 руб." },
      { name: "Установка инсталляции без обшивки и унитаза", unit: "м²", price: "4 300 руб." },
      { name: "Установка биде", unit: "шт.", price: "1 600 руб." },
      { name: "Установка водяного полотенцесушителя (без подгонки)", unit: "ед.", price: "3 000 руб." },
      { name: "Установка водяного полотенцесушителя (с подгонкой)", unit: "ед.", price: "5 000 руб." },
      { name: "Установка электрического полотенцесушителя", unit: "ед.", price: "5 000 руб." },
      { name: "Монтаж стандартной душевой кабины (без парогенератора)", unit: "ед.", price: "8 000 руб." },
      { name: "Монтаж душевой кабины с гидромассажем", unit: "ед.", price: "10 000 руб." },
      { name: "Монтаж душевой кабины c сауной", unit: "ед.", price: "19 000 руб." },
      { name: "Монтаж парогенератора", unit: "ед.", price: "4 000 руб." },
      { name: "Монтаж джакузи без гидромассажа / с гидромассажем", unit: "ед.", price: "7 000 руб." },
      { name: "Монтаж душевого уголка", unit: "ед.", price: "6 000 руб." },
      { name: "Монтаж душевого бокса на готовую подводку / с подведением труб", unit: "ед.", price: "8 000 руб." },
      { name: "Монтаж душевой колонки простой/с электрооборудованием", unit: "ед.", price: "6 000 руб." },
      { name: "Монтаж душевой штанги", unit: "ед.", price: "1 000 руб." },
      { name: "Монтаж подиума под ванну, душевую кабину, бокс, уголок", unit: "к-т.", price: "6 000 руб." },
      { name: "Монтаж пластиковых шторок для душевых кабин", unit: "к-т.", price: "2 500 руб." },
      { name: "Монтаж стеклянных шторок для душевых кабин", unit: "шт.", price: "4 000 руб." },
      { name: "Отопление + водоснабжение под ключ (до 100 м²)", unit: "м²", price: "1 400 руб." },
      { name: "Отопление + водоснабжение под ключ (100-500 м²)", unit: "м²", price: "1 000 руб." },
      { name: "Отопление + водоснабжение под ключ (от 500 м²)", unit: "м²", price: "800 руб." }
    ]
  }
];

export const PriceList = ({ onBack, onNavigate }: { onBack?: () => void, onNavigate: (mode: any) => void }) => {
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    if (!search.trim()) return DATA;
    const lowerSearch = search.toLowerCase();
    
    return DATA.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.name.toLowerCase().includes(lowerSearch)
      )
    })).filter(category => category.items.length > 0);
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      
      <div className="container mx-auto px-4 pt-6 max-w-5xl">
        <Breadcrumbs 
            items={[{ label: 'Прайс-лист', isActive: true }]} 
            onNavigate={onNavigate} 
        />
        
        {/* Top Controls Section */}
        <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Прайс-лист 2024</h1>
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                    type="text" 
                    placeholder="Поиск услуги (например: укладка плитки)" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-bold shadow-lg">
                    <Download className="w-5 h-5" />
                    <span className="hidden md:inline">Скачать PDF</span>
                </button>
            </div>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">Ничего не найдено</h3>
             <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredData.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-slate-50 p-6 border-b border-gray-200 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-slate-900">{category.title}</h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50 text-xs font-bold text-gray-500 uppercase tracking-wide">
                      <tr>
                        <th className="p-4 pl-6 w-[60%]">Наименование работы</th>
                        <th className="p-4 text-center">Ед. изм.</th>
                        <th className="p-4 pr-6 text-right">Цена</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {category.items.map((item, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                          <td className="p-4 pl-6 text-slate-700 font-medium group-hover:text-slate-900">
                            {item.name}
                          </td>
                          <td className="p-4 text-center text-gray-500 whitespace-nowrap">
                            {item.unit}
                          </td>
                          <td className="p-4 pr-6 text-right font-bold text-slate-900 whitespace-nowrap">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 font-heading">Не нашли нужную услугу?</h3>
                <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                    В прайсе указаны самые популярные виды работ. Если у вас нестандартная задача, мы рассчитаем её индивидуально.
                </p>
                <a href="tel:+74951234567" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all shadow-lg">
                    Позвонить менеджеру
                </a>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
