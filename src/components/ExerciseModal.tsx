import React from 'react';
import { X, ShieldCheck, AlertTriangle, Wind, RefreshCw, Dumbbell, Activity, Check } from 'lucide-react';
import { ExerciseGuide } from '../types';

interface ExerciseModalProps {
  exercise: ExerciseGuide | null;
  onClose: () => void;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({ exercise, onClose }) => {
  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl shadow-xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-[#2D2D32] bg-[#F8F9FA] dark:bg-[#262628] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">
              <span>{exercise.category}</span>
              <span aria-hidden="true">·</span>
              <span>{exercise.equipment}</span>
              <span aria-hidden="true">·</span>
              <span>Niveau {exercise.difficulty}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">
              {exercise.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-[#333338] transition-colors"
            aria-label="Fermer la fiche d'exercice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Target muscles & tempo */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D]">
              <span className="text-[#4A5568] dark:text-[#9E9E9E] block mb-1">Muscles sollicités</span>
              <span className="text-[#1A1A1A] dark:text-[#E0E0E0] font-medium">{exercise.targetMuscles.join(', ')}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D]">
              <span className="text-[#4A5568] dark:text-[#9E9E9E] block mb-1">Tempo d'exécution</span>
              <span className="text-blue-600 dark:text-blue-400 font-mono font-medium">{exercise.tempo}</span>
            </div>
          </div>

          {/* Installation & Posture */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              1. Installation & Placement
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed bg-[#F8F9FA] dark:bg-[#262628] p-3.5 rounded-xl border border-slate-200 dark:border-[#38383D]">
              {exercise.setupInstructions}
            </p>
          </div>

          {/* Mouvement */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              2. Trajectoire & Exécution du mouvement
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed bg-[#F8F9FA] dark:bg-[#262628] p-3.5 rounded-xl border border-slate-200 dark:border-[#38383D]">
              {exercise.movementInstructions}
            </p>
          </div>

          {/* Respiration */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-sky-700 dark:text-sky-300 flex items-center gap-2">
              <Wind className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              3. Respiration & Pression intra-abdominale
            </h3>
            <p className="text-xs sm:text-sm text-sky-900 dark:text-sky-200 leading-relaxed bg-sky-50 dark:bg-sky-950/30 p-3.5 rounded-xl border border-sky-200 dark:border-sky-800/40">
              {exercise.breathingGuide}
            </p>
          </div>

          {/* Checkpoints de Sécurité */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Points clés de sécurité biomécanique
            </h3>
            <ul className="space-y-2">
              {exercise.safetyCheckpoints.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A5568] dark:text-[#CCCCCC]">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Erreurs fréquentes à éviter */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              Erreurs à proscrire absolument (Risque de blessure)
            </h3>
            <ul className="space-y-2">
              {exercise.commonMistakesToAvoid.map((mistake, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A5568] dark:text-[#CCCCCC]">
                  <span className="text-rose-600 dark:text-rose-400 font-bold shrink-0">✕</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alternatives si machine occupée ou douleur */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#2D2D32]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              Alternatives si matériel occupé ou gêne articulaire
            </h3>
            <div className="flex flex-wrap gap-2">
              {exercise.alternatives.map((alt, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#CCCCCC] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#38383D] font-medium"
                >
                  {alt}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F9FA] dark:bg-[#262628] border-t border-slate-200 dark:border-[#2D2D32] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            J'ai compris, passer à l'exercice
          </button>
        </div>

      </div>
    </div>
  );
};
