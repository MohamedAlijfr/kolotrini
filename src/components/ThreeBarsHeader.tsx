import React from 'react';
import { Dumbbell, Flame, Apple, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface ThreeBarsHeaderProps {
  lang: Language;
  activeTab: 'today' | 'workout' | 'exercises' | 'cardio' | 'nutrition' | 'coach';
  onSelectTab: (tab: 'today' | 'workout' | 'exercises' | 'cardio' | 'nutrition' | 'coach') => void;
  userProfile: UserProfile;
}

export const ThreeBarsHeader: React.FC<ThreeBarsHeaderProps> = ({
  lang,
  activeTab,
  onSelectTab,
  userProfile
}) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section 
      aria-label="Trois barres principales kolotrini"
      className="mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        
        {/* Barre 1 : Musculation & Séance du Jour */}
        <button
          type="button"
          onClick={() => onSelectTab('today')}
          className={`group p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between shadow-sm relative overflow-hidden ${
            activeTab === 'today' || activeTab === 'workout' || activeTab === 'exercises'
              ? 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-blue-600 dark:border-blue-400 ring-2 ring-blue-500/15'
              : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-slate-200 dark:border-[#2D2D32] hover:border-slate-300 dark:hover:border-slate-600'
          }`}
          style={{ textAlign: isRtl ? 'right' : 'left' }}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Dumbbell className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                {t.threeBars.bar1.badge}
              </span>
            </div>
            <ArrowIcon className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform ${
              isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
            }`} />
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E0E0E0] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {t.threeBars.bar1.title}
            </h2>
            <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] mt-1 leading-snug">
              {t.threeBars.bar1.subtitle}
            </p>
          </div>
        </button>

        {/* Barre 2 : Machines Cardio & Minutage */}
        <button
          type="button"
          onClick={() => onSelectTab('cardio')}
          className={`group p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between shadow-sm relative overflow-hidden ${
            activeTab === 'cardio'
              ? 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-amber-500 dark:border-amber-400 ring-2 ring-amber-500/15'
              : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-slate-200 dark:border-[#2D2D32] hover:border-slate-300 dark:hover:border-slate-600'
          }`}
          style={{ textAlign: isRtl ? 'right' : 'left' }}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {t.threeBars.bar2.badge}
              </span>
            </div>
            <ArrowIcon className={`w-4 h-4 text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-transform ${
              isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
            }`} />
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E0E0E0] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {t.threeBars.bar2.title}
            </h2>
            <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] mt-1 leading-snug">
              {t.threeBars.bar2.subtitle}
            </p>
          </div>
        </button>

        {/* Barre 3 : Suivi Nutritionnel & Calories */}
        <button
          type="button"
          onClick={() => onSelectTab('nutrition')}
          className={`group p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between shadow-sm relative overflow-hidden ${
            activeTab === 'nutrition'
              ? 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-emerald-600 dark:border-emerald-400 ring-2 ring-emerald-500/15'
              : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-slate-200 dark:border-[#2D2D32] hover:border-slate-300 dark:hover:border-slate-600'
          }`}
          style={{ textAlign: isRtl ? 'right' : 'left' }}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Apple className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                {t.threeBars.bar3.badge}
              </span>
            </div>
            <ArrowIcon className={`w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-transform ${
              isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
            }`} />
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E0E0E0] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {t.threeBars.bar3.title}
            </h2>
            <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] mt-1 leading-snug">
              {t.threeBars.bar3.subtitle}
            </p>
          </div>
        </button>

      </div>
    </section>
  );
};
