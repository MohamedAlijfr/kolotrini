import React, { useState, useEffect, useRef } from 'react';
import { 
  Dumbbell, CalendarCheck, ShieldCheck, Flame, Apple, Bot, 
  UserCircle, Moon, Sun, Globe, X, ChevronRight, ChevronLeft, Check
} from 'lucide-react';
import { UserProfile, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  activeTab: 'today' | 'workout' | 'exercises' | 'cardio' | 'nutrition' | 'coach';
  setActiveTab: (tab: 'today' | 'workout' | 'exercises' | 'cardio' | 'nutrition' | 'coach') => void;
  userProfile: UserProfile;
  onOpenProfile: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  lang: Language;
  onSelectLang: (lang: Language) => void;
}

export const LANGUAGES: { id: Language; label: string; code: string; flag: string }[] = [
  { id: 'fr', label: 'Français', code: 'FR', flag: '🇫🇷' },
  { id: 'en', label: 'English', code: 'EN', flag: '🇬🇧' },
  { id: 'es', label: 'Español', code: 'ES', flag: '🇪🇸' },
  { id: 'ar', label: 'العربية', code: 'عربي', flag: '🇸🇦' },
];

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userProfile,
  onOpenProfile,
  isDark,
  onToggleTheme,
  lang,
  onSelectLang
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    if (isLangDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const goalLabels: Record<string, string> = {
    fat_loss: lang === 'ar' ? 'حرق الدهون' : lang === 'es' ? 'Perder grasa' : lang === 'en' ? 'Fat Loss' : 'Perte de gras',
    muscle_gain: lang === 'ar' ? 'بناء العضلات' : lang === 'es' ? 'Ganar músculo' : lang === 'en' ? 'Muscle Gain' : 'Prise de masse',
    strength: lang === 'ar' ? 'القوة البدنية' : lang === 'es' ? 'Fuerza' : lang === 'en' ? 'Strength' : 'Force',
    general_fitness: lang === 'ar' ? 'الصحة العامة' : lang === 'es' ? 'Salud' : lang === 'en' ? 'Health & Fitness' : 'Santé'
  };

  const navItems = [
    {
      id: 'today' as const,
      label: t.nav.today,
      desc: t.nav.desc.today,
      icon: CalendarCheck,
      color: 'blue'
    },
    {
      id: 'workout' as const,
      label: t.nav.workout,
      desc: t.nav.desc.workout,
      icon: Dumbbell,
      color: 'blue'
    },
    {
      id: 'exercises' as const,
      label: t.nav.exercises,
      desc: t.nav.desc.exercises,
      icon: ShieldCheck,
      color: 'emerald'
    },
    {
      id: 'cardio' as const,
      label: t.nav.cardio,
      desc: t.nav.desc.cardio,
      icon: Flame,
      color: 'amber'
    },
    {
      id: 'nutrition' as const,
      label: t.nav.nutrition,
      desc: t.nav.desc.nutrition,
      icon: Apple,
      color: 'emerald'
    },
    {
      id: 'coach' as const,
      label: t.nav.coach,
      desc: t.nav.desc.coach,
      icon: Bot,
      color: 'blue'
    }
  ];

  const handleSelectNav = (tabId: typeof activeTab) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  const activeItem = navItems.find(item => item.id === activeTab) || navItems[0];
  const ActiveIcon = activeItem.icon;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#2D2D32] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6 h-16">
            
            {/* Left Zone: 3-Bars Hamburger Button (Image 2) + Wordmark */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              
              {/* Le bouton des 3 barres horizontales (Image 2) qui ouvre le menu contenant tous les liens (Image 1) */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="group relative flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] text-[#1A1A1A] dark:text-[#E0E0E0] border border-slate-200 dark:border-[#38383D] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                title={t.nav.openMenu}
                aria-label={t.nav.openMenu}
                aria-expanded={isMenuOpen}
              >
                {/* Icône exacte des 3 barres horizontales arrondies (Image 2) */}
                <div className="w-5 h-4 flex flex-col justify-between items-center py-0.5" aria-hidden="true">
                  <span className="w-full h-[2.5px] rounded-full bg-current transition-transform" />
                  <span className="w-full h-[2.5px] rounded-full bg-current transition-transform" />
                  <span className="w-full h-[2.5px] rounded-full bg-current transition-transform" />
                </div>
                <span className="text-xs font-bold hidden sm:inline text-[#1A1A1A] dark:text-[#E0E0E0]">
                  {isRtl ? 'القائمة' : 'Menu'}
                </span>
              </button>

              {/* Logo / Brand Name */}
              <button 
                onClick={() => setActiveTab('today')}
                className="flex items-center gap-2 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                  <Dumbbell className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#1A1A1A] dark:text-[#E0E0E0] whitespace-nowrap">
                  {t.appName}<span className="text-blue-600 dark:text-blue-400">.</span>
                </span>
              </button>

            </div>

            {/* Center Zone: Quick Current Section Pill */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-[#262628]/60 border border-slate-200/80 dark:border-[#38383D] hover:border-blue-400 dark:hover:border-blue-500 text-xs font-semibold text-[#1A1A1A] dark:text-[#E0E0E0] transition-colors group"
              >
                <ActiveIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{activeItem.label}</span>
                <span className="text-[10px] text-[#4A5568] dark:text-[#9E9E9E] font-normal group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  ({isRtl ? 'اضغط للتغيير' : 'Changer'})
                </span>
              </button>
            </div>

            {/* Right Zone: Actions (Language, Theme, Profile) */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              
              {/* Multilingual Switcher: FR / EN / ES / عربي */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] text-[#1A1A1A] dark:text-[#E0E0E0] border border-slate-200 dark:border-[#38383D] transition-colors"
                  title="Changer de langue / Change language / Cambiar idioma / تغيير اللغة"
                  aria-label="Sélectionner la langue"
                  aria-expanded={isLangDropdownOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span className="font-bold">{LANGUAGES.find(l => l.id === lang)?.code || 'FR'}</span>
                </button>

                {/* Dropdown menu */}
                {isLangDropdownOpen && (
                  <div className={`absolute top-full mt-2 ${isRtl ? 'left-0' : 'right-0'} z-50 w-40 py-1.5 bg-[#FFFFFF] dark:bg-[#1E1E1E] rounded-2xl shadow-xl border border-slate-200 dark:border-[#2D2D32] animate-fade-in`}>
                    {LANGUAGES.map((item) => {
                      const isSelected = item.id === lang;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            onSelectLang(item.id);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2 text-xs flex items-center justify-between text-left transition-colors ${
                            isSelected
                              ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold'
                              : 'text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-100 dark:hover:bg-[#262628]'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{item.flag}</span>
                            <span>{item.label}</span>
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Dark / Light Toggle */}
              <button
                onClick={onToggleTheme}
                aria-label="Basculer thème sombre / clair"
                className="p-2 text-slate-500 hover:text-slate-800 dark:text-[#9E9E9E] dark:hover:text-[#E0E0E0] rounded-xl hover:bg-slate-100 dark:hover:bg-[#262628] transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Profile CTA */}
              <button
                onClick={onOpenProfile}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold text-[#1A1A1A] dark:text-[#E0E0E0] bg-slate-100 hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#2D2D32] border border-slate-200 dark:border-[#38383D] rounded-xl transition-all whitespace-nowrap active:scale-95 shadow-sm"
              >
                <UserCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="max-w-[70px] sm:max-w-none truncate">{userProfile.name}</span>
                <span className="hidden xl:inline text-[#4A5568] dark:text-[#9E9E9E] text-[11px] font-normal">
                  ({goalLabels[userProfile.goal] || 'Objectif'})
                </span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Le Menu Tiroir des 3 Barres (Image 1 placée à l'intérieur de Image 2) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex animate-fade-in">
          
          {/* Backdrop sombre doux conforme confort visuel */}
          <div 
            className="fixed inset-0 bg-black/45 dark:bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Container */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menuTitle}
            className={`relative w-full max-w-sm sm:max-w-md h-full bg-[#F8F9FA] dark:bg-[#1A1A1E] text-[#1A1A1A] dark:text-[#E0E0E0] shadow-2xl flex flex-col z-10 border-${isRtl ? 'l' : 'r'} border-slate-200 dark:border-[#2D2D32] overflow-hidden`}
            style={{ 
              marginLeft: isRtl ? 'auto' : '0',
              marginRight: isRtl ? '0' : 'auto' 
            }}
          >
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-200 dark:border-[#2D2D32] bg-[#FFFFFF] dark:bg-[#1E1E1E] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                  <Dumbbell className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold tracking-tight text-[#1A1A1A] dark:text-[#E0E0E0]">
                    {t.nav.menuTitle}
                  </h2>
                  <p className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E]">
                    {t.nav.menuSubtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] transition-colors"
                aria-label={t.nav.closeMenu}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* User Quick Info in Menu */}
            <div className="px-5 py-3.5 bg-slate-50 dark:bg-[#242428] border-b border-slate-200/80 dark:border-[#2D2D32] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <UserCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold block">{userProfile.name}</span>
                  <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E]">
                    {goalLabels[userProfile.goal]} · {userProfile.daysPerWeek}j/sem
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenProfile();
                }}
                className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t.nav.profile}
              </button>
            </div>

            {/* Navigation Items (The exact items from Image 1, styled comfortably) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] px-2 block mb-1">
                {isRtl ? 'الأقسام والوحدات' : 'Modules & Sections'}
              </span>

              {navItems.map((item) => {
                const isSelected = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectNav(item.id)}
                    className={`w-full p-3.5 rounded-2xl text-left border transition-all duration-150 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-600 dark:border-blue-400 shadow-sm text-blue-900 dark:text-blue-200'
                        : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-slate-200 dark:border-[#2D2D32] hover:border-slate-300 dark:hover:border-slate-600 text-[#1A1A1A] dark:text-[#E0E0E0]'
                    }`}
                    style={{ textAlign: isRtl ? 'right' : 'left' }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950 shadow-sm' 
                          : 'bg-slate-100 dark:bg-[#262628] text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`}>
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0">
                        <span className={`text-sm font-bold block truncate ${
                          isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-[#1A1A1A] dark:text-[#E0E0E0]'
                        }`}>
                          {item.label}
                        </span>
                        <span className="text-[11px] block text-[#4A5568] dark:text-[#9E9E9E] leading-snug truncate">
                          {item.desc}
                        </span>
                      </div>
                    </div>

                    <ChevronIcon className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Drawer Footer with Quick Settings */}
            <div className="p-4 border-t border-slate-200 dark:border-[#2D2D32] bg-[#FFFFFF] dark:bg-[#1E1E1E] flex flex-col gap-3 text-xs">
              
              {/* Language selection pills: FR, EN, ES, AR */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold text-[#4A5568] dark:text-[#9E9E9E] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{lang === 'ar' ? 'اللغة' : lang === 'es' ? 'Idioma' : lang === 'en' ? 'Language' : 'Langue'}</span>
                </span>
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-[#262628] border border-slate-200 dark:border-[#38383D]">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => onSelectLang(l.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        lang === l.id
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-[#4A5568] dark:text-[#9E9E9E] hover:text-[#1A1A1A] dark:hover:text-[#E0E0E0]'
                      }`}
                      title={l.label}
                    >
                      {l.code}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] text-[#1A1A1A] dark:text-[#E0E0E0] border border-slate-200 dark:border-[#38383D] font-semibold transition-colors"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
                <span>{isDark ? (isRtl ? 'وضع النهار' : 'Mode Jour') : (isRtl ? 'وضع الليل' : 'Mode Nuit')}</span>
              </button>
            </div>

          </aside>
        </div>
      )}
    </>
  );
};
