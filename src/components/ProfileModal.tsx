import React, { useState } from 'react';
import { X, UserCircle, Save, Target, Activity, Flame, Dumbbell } from 'lucide-react';
import { Language, UserProfile, FitnessGoal, FitnessLevel } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface ProfileModalProps {
  currentProfile: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProfile: UserProfile) => void;
  lang?: Language;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  currentProfile,
  isOpen,
  onClose,
  onSave,
  lang = 'fr'
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const [formData, setFormData] = useState<UserProfile>({ ...currentProfile });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl shadow-xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-[#2D2D32] bg-[#F8F9FA] dark:bg-[#262628] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <UserCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">{t.profile.title}</h2>
              <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E]">{t.profile.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-[#333338] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Prénom */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-1.5">
              {t.profile.nameLabel}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full h-11 px-3.5 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Objectif Principal */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-2">
              {t.profile.goalLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { id: 'fat_loss' as FitnessGoal, label: t.profile.goals.fat_loss.title, desc: t.profile.goals.fat_loss.desc, icon: Flame },
                { id: 'muscle_gain' as FitnessGoal, label: t.profile.goals.muscle_gain.title, desc: t.profile.goals.muscle_gain.desc, icon: Dumbbell },
                { id: 'strength' as FitnessGoal, label: t.profile.goals.strength.title, desc: t.profile.goals.strength.desc, icon: Target },
                { id: 'general_fitness' as FitnessGoal, label: t.profile.goals.general_fitness.title, desc: t.profile.goals.general_fitness.desc, icon: Activity }
              ].map((g) => {
                const isSelected = formData.goal === g.id;
                const Icon = g.icon;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, goal: g.id }))}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-600 dark:border-blue-400 shadow-sm'
                        : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                    style={{ textAlign: isRtl ? 'right' : 'left' }}
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-bold">{g.label}</span>
                    </div>
                    <span className="text-[11px] block leading-snug text-[#4A5568] dark:text-[#9E9E9E]">
                      {g.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Morphologie (Sexe, Âge, Poids, Taille) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-1">
                {t.profile.genderLabel}
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value as 'homme' | 'femme' }))}
                className="w-full h-11 px-2.5 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="homme">{t.profile.genderMale}</option>
                <option value="femme">{t.profile.genderFemale}</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-1">
                {t.profile.ageLabel}
              </label>
              <input
                type="number"
                min={15}
                max={90}
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: Number(e.target.value) }))}
                className="w-full h-11 px-3 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] text-xs font-mono focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-1">
                {t.profile.weightLabel}
              </label>
              <input
                type="number"
                min={40}
                max={180}
                value={formData.weightKg}
                onChange={(e) => setFormData(prev => ({ ...prev, weightKg: Number(e.target.value) }))}
                className="w-full h-11 px-3 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] text-xs font-mono focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-1">
                {t.profile.heightLabel}
              </label>
              <input
                type="number"
                min={120}
                max={220}
                value={formData.heightCm}
                onChange={(e) => setFormData(prev => ({ ...prev, heightCm: Number(e.target.value) }))}
                className="w-full h-11 px-3 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] text-xs font-mono focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Fréquence hebdomadaire & Niveau */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-1.5">
                {t.profile.freqLabel(formData.daysPerWeek)}
              </label>
              <input
                type="range"
                min={2}
                max={6}
                value={formData.daysPerWeek}
                onChange={(e) => setFormData(prev => ({ ...prev, daysPerWeek: Number(e.target.value) }))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-[#4A5568] dark:text-[#9E9E9E] mt-1">
                <span>2j</span>
                <span>3j</span>
                <span>4-5j</span>
                <span>6j</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E] block mb-1.5">
                {t.profile.levelLabel}
              </label>
              <select
                value={formData.level}
                onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value as FitnessLevel }))}
                className="w-full h-11 px-3 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="beginner">{t.profile.levelBeginner}</option>
                <option value="intermediate">{t.profile.levelInter}</option>
                <option value="advanced">{t.profile.levelAdv}</option>
              </select>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-[#2D2D32] flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] text-[#4A5568] dark:text-[#9E9E9E] text-xs font-semibold transition-colors border border-slate-200 dark:border-[#38383D]"
            >
              {t.profile.cancelBtn}
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>{t.profile.saveBtn}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
