import React, { useState } from 'react';
import { Flame, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { CARDIO_MACHINES } from '../data/cardioMachines';
import { UserProfile, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface CardioGuideProps {
  userProfile: UserProfile;
  lang?: Language;
}

export const CardioGuide: React.FC<CardioGuideProps> = ({ userProfile, lang = 'fr' }) => {
  const t = TRANSLATIONS[lang];
  const [activeGoalFilter, setActiveGoalFilter] = useState<'fat_loss' | 'muscle_gain'>(
    userProfile.goal === 'fat_loss' ? 'fat_loss' : 'muscle_gain'
  );
  const [selectedMachineId, setSelectedMachineId] = useState<string>('tapis-course');

  const selectedMachine = CARDIO_MACHINES.find(m => m.id === selectedMachineId) || CARDIO_MACHINES[0];

  return (
    <div className="space-y-10 pb-20">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-[#2D2D32] bg-[#FFFFFF] dark:bg-[#1E1E1E] shadow-sm">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/cardio_zone_machines_1793549365692.jpg" 
            alt="Zone cardio avec tapis de course et machines en salle"
            className="w-full h-full object-cover opacity-20 dark:opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] dark:from-[#121212] via-[#FFFFFF]/90 dark:via-[#121212]/85 to-transparent" />
        </div>

        <div className="relative p-6 sm:p-10 lg:p-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800/40 mb-4">
            <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{t.cardio.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A] dark:text-[#E0E0E0] leading-tight">
            {t.cardio.heroTitle}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#4A5568] dark:text-[#9E9E9E] leading-relaxed">
            {t.cardio.heroDesc}
          </p>

          {/* Interactive filter control */}
          <div className="mt-6 flex items-center gap-2 p-1.5 bg-[#F8F9FA] dark:bg-[#262628] rounded-xl border border-slate-200 dark:border-[#38383D] max-w-md">
            <button
              onClick={() => setActiveGoalFilter('fat_loss')}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                activeGoalFilter === 'fat_loss'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-[#4A5568] dark:text-[#9E9E9E] hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              {t.cardio.fatLossTab}
            </button>
            <button
              onClick={() => setActiveGoalFilter('muscle_gain')}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                activeGoalFilter === 'muscle_gain'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-[#4A5568] dark:text-[#9E9E9E] hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              {t.cardio.muscleGainTab}
            </button>
          </div>
        </div>
      </div>

      {/* Fundamental Cardio Rules Callout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
            Quand faire le cardio ?
          </h3>
          <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] leading-relaxed">
            Toujours <strong>APRÈS la musculation</strong>. Vos réserves de glycogène doivent servir à soulever lourd. Faire le cardio après force le corps à brûler directement les graisses.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
            Zone 2 vs HIIT
          </h3>
          <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] leading-relaxed">
            Pour la perte de gras sans perte de muscle, préférez la <strong>Zone 2 (65-72% FC)</strong> : vous pouvez parler sans étouffer. Le HIIT est réservé à des séances courtes de 12 min.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
            Impact Articulaire
          </h3>
          <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] leading-relaxed">
            Si vous avez mal aux genoux ou au dos, évitez la course avec chocs. Privilégiez la <strong>marche inclinée</strong>, le <strong>vélo elliptique</strong> ou le <strong>rameur</strong>.
          </p>
        </div>
      </div>

      {/* Machine Selector Tabs & Detailed Sheet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Machine Selection List */}
        <div className="lg:col-span-5 space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] mb-3">
            Sélectionne une machine de ta salle :
          </h2>

          <div className="space-y-2">
            {CARDIO_MACHINES.map((machine) => {
              const isSelected = machine.id === selectedMachineId;
              const protocol = activeGoalFilter === 'fat_loss' ? machine.fatLossProtocol : machine.muscleGainProtocol;

              return (
                <button
                  key={machine.id}
                  onClick={() => setSelectedMachineId(machine.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-blue-600 dark:border-blue-400 shadow-sm'
                      : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] border-slate-200 dark:border-[#2D2D32] hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className={`text-sm font-bold ${isSelected ? 'text-blue-700 dark:text-blue-400' : 'text-[#1A1A1A] dark:text-[#E0E0E0]'}`}>
                      {machine.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#4A5568] dark:text-[#9E9E9E]">
                      <span>{protocol.durationMinutes} min conseillées</span>
                      <span aria-hidden="true">·</span>
                      <span>~{machine.caloriesPerHourApprox} kcal/h</span>
                    </div>
                  </div>

                  <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                    isSelected 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#4A5568] dark:text-[#9E9E9E]'
                  }`}>
                    Voir
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Machine Protocol Card */}
        <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="border-b border-slate-100 dark:border-[#2D2D32] pb-5">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Machine sélectionnée
              </span>
              <span className="text-xs text-[#4A5568] dark:text-[#9E9E9E]">
                Impact articulaire : <strong className="text-[#1A1A1A] dark:text-[#E0E0E0]">{selectedMachine.jointImpact}</strong>
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">
              {selectedMachine.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#9E9E9E] mt-1">
              {selectedMachine.bestFor}
            </p>
          </div>

          {/* Targeted Protocol based on selected Goal */}
          {(() => {
            const proto = activeGoalFilter === 'fat_loss' ? selectedMachine.fatLossProtocol : selectedMachine.muscleGainProtocol;
            return (
              <div className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Protocole {activeGoalFilter === 'fat_loss' ? 'Perte de gras (Sèche)' : 'Prise de masse'}
                  </h4>
                  <span className="text-base font-extrabold text-blue-700 dark:text-blue-400 font-mono">
                    {proto.durationMinutes} minutes
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#38383D]">
                    <span className="text-[#4A5568] dark:text-[#9E9E9E] block mb-1">Zone d'intensité cible</span>
                    <span className="text-[#1A1A1A] dark:text-[#E0E0E0] font-medium">{proto.intensity}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#38383D]">
                    <span className="text-[#4A5568] dark:text-[#9E9E9E] block mb-1">Réglages exacts de la machine</span>
                    <span className="text-amber-700 dark:text-amber-400 font-medium">{proto.settings}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#38383D] text-xs">
                  <span className="text-[#4A5568] dark:text-[#9E9E9E] block mb-1">Moment recommandé</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">{proto.whenToDo}</span>
                </div>
              </div>
            );
          })()}

          {/* Safety instructions for machine */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              Consignes de sécurité & erreurs à éviter
            </h4>
            <ul className="space-y-2">
              {selectedMachine.safetyTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A5568] dark:text-[#CCCCCC]">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contraindications */}
          <div className="p-3.5 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-xs text-[#4A5568] dark:text-[#9E9E9E]">
            <strong className="text-[#1A1A1A] dark:text-[#E0E0E0]">Attention :</strong> {selectedMachine.contraindications}
          </div>

        </div>

      </div>

    </div>
  );
};
