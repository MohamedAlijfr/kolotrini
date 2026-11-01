import React, { useState, useEffect } from 'react';
import { 
  Droplets, Apple, Clock, Plus, Minus, 
  Utensils 
} from 'lucide-react';
import { UserProfile, DailyNutritionLog, Language } from '../types';
import { calculatePersonalizedNutrition } from '../utils/nutritionCalculator';
import { TRANSLATIONS } from '../i18n/translations';

interface NutritionViewProps {
  userProfile: UserProfile;
  lang?: Language;
}

export const NutritionView: React.FC<NutritionViewProps> = ({ userProfile, lang = 'fr' }) => {
  const t = TRANSLATIONS[lang];
  const nutritionPlan = calculatePersonalizedNutrition(userProfile);

  // Daily tracker state persisted in localStorage
  const todayDateStr = new Date().toISOString().split('T')[0];
  const [dailyLog, setDailyLog] = useState<DailyNutritionLog>(() => {
    try {
      const saved = localStorage.getItem(`kolotrini_nutrition_${todayDateStr}`) || localStorage.getItem(`fitcoach_nutrition_${todayDateStr}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      date: todayDateStr,
      waterGlasses: 4,
      caloriesConsumed: 0,
      proteinGrams: 0,
      carbsGrams: 0,
      fatsGrams: 0
    };
  });

  useEffect(() => {
    localStorage.setItem(`kolotrini_nutrition_${todayDateStr}`, JSON.stringify(dailyLog));
  }, [dailyLog, todayDateStr]);

  const addWater = () => {
    setDailyLog(prev => ({ ...prev, waterGlasses: prev.waterGlasses + 1 }));
  };

  const removeWater = () => {
    setDailyLog(prev => ({ ...prev, waterGlasses: Math.max(0, prev.waterGlasses - 1) }));
  };

  const addQuickFood = (cals: number, protein: number, carbs: number, fats: number) => {
    setDailyLog(prev => ({
      ...prev,
      caloriesConsumed: prev.caloriesConsumed + cals,
      proteinGrams: prev.proteinGrams + protein,
      carbsGrams: prev.carbsGrams + carbs,
      fatsGrams: prev.fatsGrams + fats
    }));
  };

  const resetTodayLog = () => {
    setDailyLog({
      date: todayDateStr,
      waterGlasses: 0,
      caloriesConsumed: 0,
      proteinGrams: 0,
      carbsGrams: 0,
      fatsGrams: 0
    });
  };

  const totalWaterLiters = (dailyLog.waterGlasses * 0.25).toFixed(1);
  const waterProgressPercent = Math.min(100, Math.round(((dailyLog.waterGlasses * 0.25) / nutritionPlan.waterLiters) * 100));
  const caloriesPercent = Math.min(100, Math.round((dailyLog.caloriesConsumed / nutritionPlan.targetCalories) * 100));
  const proteinPercent = Math.min(100, Math.round((dailyLog.proteinGrams / nutritionPlan.proteinGrams) * 100));

  return (
    <div className="space-y-10 pb-20">
      
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-[#2D2D32] bg-[#FFFFFF] dark:bg-[#1E1E1E] shadow-sm">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/nutrition_meal_prep_1793549364966.jpg" 
            alt="Bol repas équilibré avec poulet, avocat et quinoa"
            className="w-full h-full object-cover opacity-20 dark:opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] dark:from-[#121212] via-[#FFFFFF]/90 dark:via-[#121212]/85 to-transparent" />
        </div>

        <div className="relative p-6 sm:p-10 lg:p-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800/40 mb-4">
            <Apple className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t.nutrition.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A] dark:text-[#E0E0E0] leading-tight">
            {t.nutrition.heroTitle}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#4A5568] dark:text-[#9E9E9E] leading-relaxed">
            {t.nutrition.heroDesc}
          </p>
        </div>
      </div>

      {/* Macro Target Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] space-y-2 shadow-sm">
          <span className="text-[11px] font-bold text-[#4A5568] dark:text-[#9E9E9E] uppercase tracking-wider block">
            {t.nutrition.targetCals}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-[#E0E0E0] font-mono tabular-nums">
            {nutritionPlan.targetCalories} <span className="text-sm font-normal text-[#4A5568] dark:text-[#9E9E9E]">kcal</span>
          </div>
          <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E] block">
            {t.nutrition.tdeeTotal} : {nutritionPlan.tdee} kcal
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] space-y-2 shadow-sm">
          <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block">
            {t.nutrition.proteinTitle}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 dark:text-blue-400 font-mono tabular-nums">
            {nutritionPlan.proteinGrams} <span className="text-sm font-normal text-[#4A5568] dark:text-[#9E9E9E]">g</span>
          </div>
          <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E] block">
            {t.nutrition.proteinSub}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] space-y-2 shadow-sm">
          <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
            {t.nutrition.carbsTitle}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 dark:text-amber-400 font-mono tabular-nums">
            {nutritionPlan.carbsGrams} <span className="text-sm font-normal text-[#4A5568] dark:text-[#9E9E9E]">g</span>
          </div>
          <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E] block">
            {t.nutrition.carbsSub}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] space-y-2 shadow-sm">
          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
            {t.nutrition.fatsTitle}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono tabular-nums">
            {nutritionPlan.fatsGrams} <span className="text-sm font-normal text-[#4A5568] dark:text-[#9E9E9E]">g</span>
          </div>
          <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E] block">
            {t.nutrition.fatsSub}
          </span>
        </div>

      </div>

      {/* Interactive Daily Trackers: Water & Quick Food Logger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Water Tracker */}
        <div className="lg:col-span-5 bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Hydratation du Jour</h3>
                <span className="text-xs text-[#4A5568] dark:text-[#9E9E9E]">
                  Objectif : {nutritionPlan.waterLiters} Litres
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-2xl font-extrabold text-[#1A1A1A] dark:text-[#E0E0E0] font-mono tabular-nums">
                {totalWaterLiters}
              </span>
              <span className="text-xs text-[#4A5568] dark:text-[#9E9E9E] block">/ {nutritionPlan.waterLiters} L</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-[#4A5568] dark:text-[#9E9E9E] font-mono">
              <span>{dailyLog.waterGlasses} verres (250ml)</span>
              <span>{waterProgressPercent}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-[#F8F9FA] dark:bg-[#262628] overflow-hidden border border-slate-200 dark:border-[#38383D]">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${waterProgressPercent}%` }}
              />
            </div>
          </div>

          {/* Action buttons (Calm Blue for positive action) */}
          <div className="flex items-center gap-3">
            <button
              onClick={addWater}
              className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>+1 Verre (250 ml)</span>
            </button>
            <button
              onClick={removeWater}
              className="py-3 px-3 rounded-xl bg-[#F8F9FA] hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] text-[#4A5568] dark:text-[#9E9E9E] hover:text-[#1A1A1A] dark:hover:text-[#E0E0E0] border border-slate-200 dark:border-[#38383D] transition-colors"
              aria-label="Enlever un verre d'eau"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E] leading-relaxed border-t border-slate-100 dark:border-[#2D2D32] pt-3">
            Conseil coach : Un muscle déshydraté de 2% perd jusqu'à 15% de sa force explosive. Pensez à boire une gorgée toutes les 10 à 15 minutes pendant votre séance.
          </p>
        </div>

        {/* Right: Quick Meal & Protein Logger */}
        <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Suivi Rapide Calories & Protéines</h3>
                <span className="text-xs text-[#4A5568] dark:text-[#9E9E9E]">Aujourd'hui à ce jour</span>
              </div>
            </div>

            <button
              onClick={resetTodayLog}
              className="text-xs text-[#4A5568] dark:text-[#9E9E9E] hover:text-rose-600 transition-colors"
            >
              Réinitialiser
            </button>
          </div>

          {/* Calorie & Protein Progress bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#4A5568] dark:text-[#9E9E9E]">Calories consommées</span>
                <span className="text-[#1A1A1A] dark:text-[#E0E0E0] font-mono font-bold">{dailyLog.caloriesConsumed} / {nutritionPlan.targetCalories}</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-[#1A1A1A] overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-300"
                  style={{ width: `${caloriesPercent}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#4A5568] dark:text-[#9E9E9E]">Protéines consommées</span>
                <span className="text-blue-700 dark:text-blue-400 font-mono font-bold">{dailyLog.proteinGrams} / {nutritionPlan.proteinGrams} g</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-[#1A1A1A] overflow-hidden">
                <div 
                  className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                  style={{ width: `${proteinPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick-Add Chips */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#4A5568] dark:text-[#9E9E9E] uppercase tracking-wider block">
              Ajout rapide 1-clic :
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => addQuickFood(120, 25, 2, 1)}
                className="p-3 rounded-xl bg-[#F8F9FA] hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] text-left transition-colors"
              >
                <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E0E0E0] block">Shaker Whey</span>
                <span className="text-[10px] text-blue-700 dark:text-blue-400 font-mono">+25g prot (120 kcal)</span>
              </button>
              <button
                type="button"
                onClick={() => addQuickFood(160, 31, 0, 3)}
                className="p-3 rounded-xl bg-[#F8F9FA] hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] text-left transition-colors"
              >
                <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E0E0E0] block">Blanc Poulet</span>
                <span className="text-[10px] text-blue-700 dark:text-blue-400 font-mono">+31g prot (160 kcal)</span>
              </button>
              <button
                type="button"
                onClick={() => addQuickFood(500, 35, 60, 12)}
                className="p-3 rounded-xl bg-[#F8F9FA] hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] text-left transition-colors"
              >
                <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E0E0E0] block">Repas Midi</span>
                <span className="text-[10px] text-amber-700 dark:text-amber-400 font-mono">+35g prot (500 kcal)</span>
              </button>
              <button
                type="button"
                onClick={() => addQuickFood(200, 15, 25, 4)}
                className="p-3 rounded-xl bg-[#F8F9FA] hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] text-left transition-colors"
              >
                <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E0E0E0] block">Skyr & Fruit</span>
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono">+15g prot (200 kcal)</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Peri-Workout Nutrition Timing Protocol */}
      <div className="bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Timing Péri-Entraînement : Quoi manger quand ?</h3>
            <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E]">Le bon carburant au bon moment pour des barres plus légères et une récupération accélérée</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
              1. 2h avant la salle
            </span>
            <p className="text-xs text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed">
              {nutritionPlan.periWorkoutTiming.preWorkoutMeal}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
              2. 30 min avant
            </span>
            <p className="text-xs text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed">
              {nutritionPlan.periWorkoutTiming.preWorkoutSnack}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              3. Pendant l'effort
            </span>
            <p className="text-xs text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed">
              {nutritionPlan.periWorkoutTiming.intraWorkout}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
              4. Post-entraînement
            </span>
            <p className="text-xs text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed">
              {nutritionPlan.periWorkoutTiming.postWorkout}
            </p>
          </div>
        </div>
      </div>

      {/* Sample Full Day Meal Plan */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-2">
          <Utensils className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          Exemple de Journée Type Nutritionnelle ({userProfile.goal === 'fat_loss' ? 'Sèche' : 'Prise de masse'})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nutritionPlan.sampleMeals.map((meal, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">{meal.mealName}</h4>
                <span className="text-xs font-mono text-blue-700 dark:text-blue-400 font-semibold">{meal.time}</span>
              </div>
              <p className="text-xs text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed">
                {meal.description}
              </p>
              <div className="pt-2 text-[11px] text-[#4A5568] dark:text-[#9E9E9E] font-mono border-t border-slate-100 dark:border-[#2D2D32]">
                {meal.approxMacros}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
