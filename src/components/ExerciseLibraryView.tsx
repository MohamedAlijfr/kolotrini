import React, { useState } from 'react';
import { Search, ShieldCheck, Info } from 'lucide-react';
import { EXERCISES_DATABASE } from '../data/exercises';
import { ExerciseGuide, MuscleCategory } from '../types';

interface ExerciseLibraryViewProps {
  onSelectExercise: (exercise: ExerciseGuide) => void;
}

const CATEGORIES: MuscleCategory[] = [
  'Pectoraux',
  'Dos',
  'Épaules',
  'Bras (Biceps & Triceps)',
  'Quadriceps',
  'Ischios & Fessiers',
  'Abdominaux & Core'
];

export const ExerciseLibraryView: React.FC<ExerciseLibraryViewProps> = ({ onSelectExercise }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredExercises = EXERCISES_DATABASE.filter(ex => {
    const matchesCategory = selectedCategory === 'all' || ex.category === selectedCategory;
    const matchesSearch = 
      ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.targetMuscles.some(m => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ex.equipment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-20">
      
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-[#2D2D32] bg-[#FFFFFF] dark:bg-[#1E1E1E] shadow-sm p-6 sm:p-10">
        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800/40 mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Biomécanique & Prévention des Blessures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] dark:text-[#E0E0E0] tracking-tight">
            Guide des Mouvements en Toute Sécurité
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#4A5568] dark:text-[#9E9E9E]">
            Exécute chaque exercice avec une technique irréprochable. Découvre le placement exact, la trajectoire, la respiration et les erreurs qui provoquent des blessures.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un exercice (ex: Squat, Développé, Pectoraux...)"
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] text-[#1A1A1A] dark:text-[#E0E0E0] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
          />
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors border ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] text-[#4A5568] dark:text-[#9E9E9E] hover:text-[#1A1A1A] dark:hover:text-[#E0E0E0] border-slate-200 dark:border-[#2D2D32]'
            }`}
          >
            Tous ({EXERCISES_DATABASE.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] text-[#4A5568] dark:text-[#9E9E9E] hover:text-[#1A1A1A] dark:hover:text-[#E0E0E0] border-slate-200 dark:border-[#2D2D32]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Exercise Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => onSelectExercise(exercise)}
            className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-md transition-all cursor-pointer shadow-sm space-y-3 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
                <span>{exercise.category}</span>
                <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E] font-normal">{exercise.equipment}</span>
              </div>

              <h3 className="text-base font-bold text-[#1A1A1A] dark:text-[#E0E0E0] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {exercise.name}
              </h3>

              <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] line-clamp-2 mt-2 leading-relaxed">
                {exercise.setupInstructions}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-[#2D2D32] flex items-center justify-between">
              <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E] font-mono">
                {exercise.defaultSets} séries · {exercise.defaultReps} reps
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Consulter</span>
                <Info className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
