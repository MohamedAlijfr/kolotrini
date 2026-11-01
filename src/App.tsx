/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CalendarCheck, Dumbbell, ShieldCheck, Flame, 
  Apple, Bot, CheckCircle 
} from 'lucide-react';
import { Header } from './components/Header';
import { ThreeBarsHeader } from './components/ThreeBarsHeader';
import { TodaySplitAdvisor } from './components/TodaySplitAdvisor';
import { WorkoutView } from './components/WorkoutView';
import { ExerciseLibraryView } from './components/ExerciseLibraryView';
import { CardioGuide } from './components/CardioGuide';
import { NutritionView } from './components/NutritionView';
import { AICoachChat } from './components/AICoachChat';
import { ExerciseModal } from './components/ExerciseModal';
import { ProfileModal } from './components/ProfileModal';
import { UserProfile, ExerciseGuide, Language } from './types';
import { TRANSLATIONS } from './i18n/translations';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(true);

  // Language state (French by default, toggleable to English, Spanish, and Arabic)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('kolotrini_lang');
      if (savedLang === 'ar' || savedLang === 'fr' || savedLang === 'en' || savedLang === 'es') {
        return savedLang as Language;
      }
    } catch {}
    return 'fr';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('kolotrini_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = TRANSLATIONS[lang];

  // Persistent User Profile
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('kolotrini_user_profile') || localStorage.getItem('fitcoach_user_profile');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      name: 'Adhérent',
      gender: 'homme',
      age: 26,
      heightCm: 178,
      weightKg: 76,
      goal: 'muscle_gain',
      level: 'intermediate',
      daysPerWeek: 4,
      splitPreference: 'upper_lower',
      lastTrainedGroup: 'Haut du corps'
    };
  });

  const handleUpdateProfile = (updated: UserProfile) => {
    setUserProfile(updated);
    localStorage.setItem('kolotrini_user_profile', JSON.stringify(updated));
  };

  // Active navigation tab
  const [activeTab, setActiveTab] = useState<'today' | 'workout' | 'exercises' | 'cardio' | 'nutrition' | 'coach'>('today');

  // Currently selected workout split focus
  const [selectedSplitFocus, setSelectedSplitFocus] = useState<string>('Haut du corps');

  // Modal states
  const [selectedExerciseForModal, setSelectedExerciseForModal] = useState<ExerciseGuide | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [completedNotification, setCompletedNotification] = useState<boolean>(false);

  // Transition from TodaySplitAdvisor to WorkoutView
  const handleLaunchSessionFromToday = (splitFocus: 'Haut du corps' | 'Bas du corps' | 'Full Body' | 'Push (Poussée)' | 'Pull (Tirage)') => {
    setSelectedSplitFocus(splitFocus);
    setActiveTab('workout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSessionFinished = () => {
    // Record last trained
    const updated = {
      ...userProfile,
      lastTrainedGroup: selectedSplitFocus,
      lastTrainedDate: new Date().toISOString()
    };
    handleUpdateProfile(updated);
    setCompletedNotification(true);
    setTimeout(() => setCompletedNotification(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E0E0E0] flex flex-col transition-colors duration-200">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userProfile={userProfile}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        lang={lang}
        onSelectLang={(newLang) => setLang(newLang)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* Les Trois Barres Structurées Sous kolotrini */}
        <ThreeBarsHeader
          lang={lang}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          userProfile={userProfile}
        />

        {/* Completion Toast Alert */}
        {completedNotification && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-between gap-4 animate-fade-in shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-bold">{t.workout.congratsTitle}</p>
                <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80">{t.workout.congratsSub}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('nutrition')}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-xs font-bold shrink-0 transition-colors"
            >
              {t.workout.seePostMeal}
            </button>
          </div>
        )}

        {/* Tab 1: Quoi travailler aujourd'hui ? */}
        {activeTab === 'today' && (
          <TodaySplitAdvisor
            userProfile={userProfile}
            lang={lang}
            onSelectSplit={handleLaunchSessionFromToday}
            onNavigateToCardio={() => setActiveTab('cardio')}
            onNavigateToNutrition={() => setActiveTab('nutrition')}
          />
        )}

        {/* Tab 2: Séance en salle */}
        {activeTab === 'workout' && (
          <WorkoutView
            userProfile={userProfile}
            lang={lang}
            initialSplit={selectedSplitFocus}
            onOpenExerciseDetails={(ex) => setSelectedExerciseForModal(ex)}
            onSessionFinished={handleSessionFinished}
          />
        )}

        {/* Tab 3: Guide Mouvements & Sécurité */}
        {activeTab === 'exercises' && (
          <ExerciseLibraryView
            onSelectExercise={(ex) => setSelectedExerciseForModal(ex)}
          />
        )}

        {/* Tab 4: Machines Cardio */}
        {activeTab === 'cardio' && (
          <CardioGuide userProfile={userProfile} lang={lang} />
        )}

        {/* Tab 5: Suivi Nutritionnel */}
        {activeTab === 'nutrition' && (
          <NutritionView userProfile={userProfile} lang={lang} />
        )}

        {/* Tab 6: Coach Virtuel */}
        {activeTab === 'coach' && (
          <AICoachChat userProfile={userProfile} lang={lang} />
        )}

      </main>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav 
        aria-label="Navigation mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md border-t border-slate-200 dark:border-[#2D2D32] shadow-sm"
      >
        <div className="grid grid-cols-6 items-center h-16 px-1">
          <button
            onClick={() => setActiveTab('today')}
            className={`flex flex-col items-center justify-center min-h-[44px] ${
              activeTab === 'today' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-500 dark:text-[#9E9E9E] hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <CalendarCheck className="w-5 h-5" />
            <span className="text-[10px] tracking-tight mt-1 truncate">{t.nav.today.split(' ')[0]}</span>
          </button>

          <button
            onClick={() => setActiveTab('workout')}
            className={`flex flex-col items-center justify-center min-h-[44px] ${
              activeTab === 'workout' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-500 dark:text-[#9E9E9E] hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Dumbbell className="w-5 h-5" />
            <span className="text-[10px] tracking-tight mt-1 truncate">{t.nav.workout}</span>
          </button>

          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex flex-col items-center justify-center min-h-[44px] ${
              activeTab === 'exercises' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-500 dark:text-[#9E9E9E] hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] tracking-tight mt-1 truncate">{t.nav.exercises.split(' ')[0]}</span>
          </button>

          <button
            onClick={() => setActiveTab('cardio')}
            className={`flex flex-col items-center justify-center min-h-[44px] ${
              activeTab === 'cardio' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-500 dark:text-[#9E9E9E] hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Flame className="w-5 h-5" />
            <span className="text-[10px] tracking-tight mt-1 truncate">{t.nav.cardio}</span>
          </button>

          <button
            onClick={() => setActiveTab('nutrition')}
            className={`flex flex-col items-center justify-center min-h-[44px] ${
              activeTab === 'nutrition' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-500 dark:text-[#9E9E9E] hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Apple className="w-5 h-5" />
            <span className="text-[10px] tracking-tight mt-1 truncate">{t.nav.nutrition}</span>
          </button>

          <button
            onClick={() => setActiveTab('coach')}
            className={`flex flex-col items-center justify-center min-h-[44px] ${
              activeTab === 'coach' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-500 dark:text-[#9E9E9E] hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Bot className="w-5 h-5" />
            <span className="text-[10px] tracking-tight mt-1 truncate">{t.nav.coach}</span>
          </button>
        </div>
      </nav>

      {/* Exercise Details Modal */}
      <ExerciseModal
        exercise={selectedExerciseForModal}
        onClose={() => setSelectedExerciseForModal(null)}
      />

      {/* User Profile Modal */}
      <ProfileModal
        currentProfile={userProfile}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onSave={handleUpdateProfile}
        lang={lang}
      />

    </div>
  );
}
