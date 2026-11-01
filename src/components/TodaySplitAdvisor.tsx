import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Sparkles, Flame, Activity, Dumbbell, Zap } from 'lucide-react';
import { UserProfile, FitnessGoal, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface TodaySplitAdvisorProps {
  userProfile: UserProfile;
  lang?: Language;
  onSelectSplit: (splitFocus: 'Haut du corps' | 'Bas du corps' | 'Full Body' | 'Push (Poussée)' | 'Pull (Tirage)') => void;
  onNavigateToCardio: () => void;
  onNavigateToNutrition: () => void;
}

export const TodaySplitAdvisor: React.FC<TodaySplitAdvisorProps> = ({
  userProfile,
  lang = 'fr',
  onSelectSplit,
  onNavigateToCardio
}) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [lastSession, setLastSession] = useState<'upper' | 'lower' | 'full' | 'none'>(
    userProfile.lastTrainedGroup === 'Bas du corps' ? 'lower' : 
    userProfile.lastTrainedGroup === 'Haut du corps' ? 'upper' : 'lower'
  );
  const [availableTime, setAvailableTime] = useState<'35' | '55' | '75'>('55');
  const [energyLevel, setEnergyLevel] = useState<'high' | 'medium' | 'low'>('high');

  // Decision logic
  let recommendedSplit: 'Haut du corps' | 'Bas du corps' | 'Full Body' | 'Push (Poussée)' = 'Haut du corps';
  let reasoning = '';
  let cardioRecommendation = '';

  if (lastSession === 'upper') {
    recommendedSplit = 'Bas du corps';
    reasoning = lang === 'ar'
      ? 'بما أنك مرنت الجزء العلوي في آخر حصة، فإن ألياف الصدر والظهر والأكتاف تحتاج إلى نافذة 48 ساعة من الراحة والبناء البروتيني. هذا هو الوقت المثالي لاستهداف الجزء السفلي (أفخاذ وأرداف) بقوة وأمان.'
      : lang === 'en'
      ? 'Since you trained your upper body (chest, back, shoulders, arms) in your last session, those muscle fibers are in the middle of protein synthesis recovery (48h window). This is the ideal time to hit lower body (Quads, Hamstrings, Glutes) without tendon strain.'
      : lang === 'es'
      ? 'Dado que trabajaste el tren superior (pecho, espalda, hombros, brazos) en tu última sesión, tus fibras superiores están en plena recuperación proteica (ventana de 48h). Es el momento perfecto para entrenar el tren inferior (Cuádriceps, Isquios, Glúteos) con máxima seguridad.'
      : 'Puisque tu as sollicité le haut du corps (pectoraux, dorsaux, épaules, bras) lors de ta dernière séance, tes fibres musculaires supérieures sont en pleine phase de régénération protéique (fenêtre de 48h). C\'est le moment idéal pour attaquer le bas du corps (Quadriceps, Ischios, Fessiers) sans risquer de surmenage tendineux.';
    
    cardioRecommendation = lang === 'ar'
      ? (userProfile.goal === 'fat_loss' 
          ? 'جهاز المشي بالمشي المائل (ميل 10-12% بسرعة 5 كم/س) لمدة 20 دقيقة بعد الحديد لحرق الدهون بدون إجهاد المفاصل.'
          : 'دراجة ثابتة خفيفة لمدة 12 دقيقة لتنشيط الدورة الدموية وتسريع الاستشفاء.')
      : lang === 'en'
      ? (userProfile.goal === 'fat_loss'
          ? 'Incline treadmill walking (10-12% grade at 5 km/h) for 20 minutes post-lifting to burn fat without joint impact.'
          : 'Low-resistance stationary bike for 12 minutes to flush metabolic waste and speed up leg recovery.')
      : lang === 'es'
      ? (userProfile.goal === 'fat_loss'
          ? 'Cinta de correr con marcha inclinada (10-12% a 5 km/h) durante 20 minutos post-pesas para quemar grasa sin impacto en las rodillas.'
          : 'Bicicleta estática suave 12 minutos a baja resistencia para activar la circulación y acelerar la recuperación.')
      : (userProfile.goal === 'fat_loss' 
          ? 'Tapis de course en marche inclinée (10-12% à 5 km/h) pendant 20 minutes en fin de séance pour brûler les graisses sans choquer les articulations.'
          : 'Vélo stationnaire souple 12 min à faible résistance pour drainer les toxines et accélérer la récupération des jambes.');
  } else if (lastSession === 'lower') {
    recommendedSplit = 'Haut du corps';
    reasoning = lang === 'ar'
      ? 'تحتاج عضلات الساقين إلى 48 إلى 72 ساعة لإعادة ملء مخازن الجليكوجين وترميم الألياف. الجزء العلوي مرتاح تماماً ومستعد لشدة وأوزان قوية في حركات الدفع والسحب.'
      : lang === 'en'
      ? 'Your leg muscles need 48 to 72 hours to replenish glycogen stores and repair micro-tears. Your upper body is completely fresh, rested, and ready for peak intensity on presses and pulls.'
      : lang === 'es'
      ? 'Tus piernas necesitan de 48 a 72 horas para reponer glucógeno y reparar microlesiones. Tu tren superior está totalmente descansado y listo para empujar y traccionar con fuerza.'
      : 'Tes jambes ont besoin de 48 à 72 heures pour reconstruire leurs réserves de glycogène et réparer les micro-lésions musculaires. Ton haut du corps est totalement reposé, frais et prêt à développer une intensité maximale sur les développés et tirages.';
    
    cardioRecommendation = lang === 'ar'
      ? (userProfile.goal === 'fat_loss'
          ? 'جهاز الدرج Stairmaster لمدة 15 دقيقة بسرعة متوسطة لحرق سعرات مرتفع وشد الأرداف.'
          : 'جهاز التجديف Concept2 لمدة 12 دقيقة بوتيرة هادئة لتنشيط القلب بدون هدم عضلي.')
      : lang === 'en'
      ? (userProfile.goal === 'fat_loss'
          ? 'StairMaster for 15 minutes at level 6 for high calorie burn and supplementary glute toning.'
          : 'Concept2 rower for 12 minutes at steady pace for cardiovascular stimulation without catabolism.')
      : lang === 'es'
      ? (userProfile.goal === 'fat_loss'
          ? 'StairMaster durante 15 minutos en nivel 6 para máximo gasto calórico y tonificación de glúteos.'
          : 'Remo Concept2 durante 12 minutos a ritmo constante para estímulo cardiopulmonar sin catabolismo.')
      : (userProfile.goal === 'fat_loss'
          ? 'Stairmaster (Escalier infini) 15 minutes au niveau 6 pour une dépense calorique record et un galbe fessier complémentaire.'
          : 'Rameur Concept2 pendant 12 minutes à cadence régulière pour stimuler le système cardio-respiratoire sans catabolisme.');
  } else {
    if (userProfile.daysPerWeek <= 3) {
      recommendedSplit = 'Full Body';
      reasoning = lang === 'ar'
        ? 'بمعدل 2 إلى 3 أيام أسبوعياً أو بعد فترة راحة، يعتبر تمرين كامل الجسم (Full Body) الخيار الأفضل لتنشيط كل العضلات بتوازن دون إجهاد تراكمي.'
        : lang === 'en'
        ? 'With a 2 to 3 day weekly frequency or after resting days, Full Body is the best choice to stimulate all muscle groups twice as often without excessive fatigue.'
        : lang === 'es'
        ? 'Con 2 a 3 días por semana o tras varios días de descanso, Full Body permite estimular todo el cuerpo con equilibrio sin acumular fatiga.'
        : 'Avec une fréquence de 2 à 3 fois par semaine ou après une période de repos, le Full Body permet de stimuler l\'ensemble des groupes musculaires deux fois plus souvent sans accumuler de fatigue excessive.';
    } else {
      recommendedSplit = 'Haut du corps';
      reasoning = lang === 'ar'
        ? 'عودة تدريبية مثالية مع التركيز على العضلات الكبرى (الصدر والظهر) لتحفيز الجهاز العصبي وضخ الدم.'
        : lang === 'en'
        ? 'Optimal return with a focus on major upper body muscle groups (Chest and Back) to reactivate the nervous system and blood flow.'
        : lang === 'es'
        ? 'Reanudación óptima enfocándose en los grupos grandes del tren superior (Pecho y Espalda) para reactivar el sistema nervioso.'
        : 'Reprise optimale avec un focus sur les grands groupes du haut du corps (Pectoraux et Dos) pour réactiver le système nerveux et la congestion.';
    }
    cardioRecommendation = lang === 'ar'
      ? '20 دقيقة على جهاز المشي أو التجديف بعد نهاية التمرين.'
      : lang === 'en'
      ? '20 minutes of incline treadmill or rower post-workout.'
      : lang === 'es'
      ? '20 minutos de cinta inclinada o remo al finalizar.'
      : '20 minutes de tapis de course ou rameur en fin de séance.';
  }

  if (energyLevel === 'low') {
    reasoning += lang === 'ar'
      ? ' ملاحظة: نظراً لشعورك بالإرهاق اليوم، تم تعديل فترات الراحة لتكون أطول (90-120 ثانية) مع التركيز التام على التكنيك السليم بدلاً من الأوزان القصوى.'
      : lang === 'en'
      ? ' Note: Due to your lower energy today, rest intervals are extended (90-120s) with strict priority on biomechanical technique over max weight.'
      : lang === 'es'
      ? ' Nota: Debido a tu cansancio hoy, ajustamos descansos más generosos (90-120s) priorizando técnica estricta sobre peso excesivo.'
      : ' Note : Étant donné ton niveau de fatigue aujourd\'hui, nous ajustons le volume avec des temps de repos plus confortables (90-120s) et une priorité stricte sur la technique plutôt que la charge maximale.';
  }

  const goalTitles: Record<FitnessGoal, string> = {
    fat_loss: lang === 'ar' ? 'حرق الدهون والتنشيف' : lang === 'es' ? 'Pérdida de Grasa y Definición' : lang === 'en' ? 'Fat Loss & Definition' : 'Perte de Gras & Définition',
    muscle_gain: lang === 'ar' ? 'زيادة الكتلة العضلية' : lang === 'es' ? 'Ganancia de Masa Muscular' : lang === 'en' ? 'Muscle Hypertrophy & Mass' : 'Prise de Masse Musculaire',
    strength: lang === 'ar' ? 'القوة البدنية' : lang === 'es' ? 'Fuerza Atlética' : lang === 'en' ? 'Athletic Strength' : 'Gain de Force Athlétique',
    general_fitness: lang === 'ar' ? 'الصحة والحيوية' : lang === 'es' ? 'Salud y Vitalidad' : lang === 'en' ? 'Health & Vitality' : 'Santé & Vitalité'
  };

  const getSplitLabel = (split: string) => {
    if (lang === 'ar') {
      if (split === 'Haut du corps') return 'الجزء العلوي (صدر، ظهر، أكتاف، ذراعين)';
      if (split === 'Bas du corps') return 'الجزء السفلي (أفخاذ، أرداف، بطات)';
      return 'كامل الجسم (Full Body)';
    }
    if (lang === 'en') {
      if (split === 'Haut du corps') return 'UPPER BODY (Chest, Back, Shoulders & Arms)';
      if (split === 'Bas du corps') return 'LOWER BODY (Quads, Hamstrings & Glutes)';
      return 'FULL BODY (Entire Body Circuit)';
    }
    if (lang === 'es') {
      if (split === 'Haut du corps') return 'TREN SUPERIOR (Pecho, Espalda, Hombros y Brazos)';
      if (split === 'Bas du corps') return 'TREN INFERIOR (Cuádriceps, Isquios y Glúteos)';
      return 'CUERPO COMPLETO (Full Body)';
    }
    if (split === 'Haut du corps') return 'HAUT DU CORPS (Pecs, Dos, Épaules & Bras)';
    if (split === 'Bas du corps') return 'BAS DU CORPS (Quadriceps, Ischios & Fessiers)';
    return 'FULL BODY (Corps Entier)';
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Hero Banner Section */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-[#2D2D32] bg-[#FFFFFF] dark:bg-[#1E1E1E] shadow-sm">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/coach_gym_hero_1793549363928.jpg" 
            alt="Salle de sport moderne avec poids et machines de cardio"
            className="w-full h-full object-cover opacity-15 dark:opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] dark:from-[#121212] via-[#FFFFFF]/90 dark:via-[#121212]/85 to-transparent" />
        </div>

        <div className="relative p-6 sm:p-10 lg:p-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800/50 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{t.todayAdvisor.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A] dark:text-[#E0E0E0] text-balance leading-tight">
            {t.todayAdvisor.heroTitle}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#4A5568] dark:text-[#9E9E9E] leading-relaxed">
            {t.todayAdvisor.heroDesc}{' '}
            <strong className="text-blue-700 dark:text-blue-400 font-semibold">{goalTitles[userProfile.goal]}</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#4A5568] dark:text-[#9E9E9E]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {t.todayAdvisor.checkpoints.safety}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              {t.todayAdvisor.checkpoints.cardio}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              {t.todayAdvisor.checkpoints.recovery}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Check-in Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: 3 Check-in Questions */}
        <div className="lg:col-span-5 bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl p-6 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              {lang === 'ar' ? 'فحص سريع لحالتك اليوم' : 'Check-in Rapide du Jour'}
            </h2>
            <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] mt-1">
              {t.todayAdvisor.q1Desc}
            </p>
          </div>

          {/* Question 1: Dernier entraînement */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E]">
              {t.todayAdvisor.q1Title}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLastSession('upper')}
                className={`px-3 py-2.5 text-xs font-medium rounded-xl border transition-all text-left ${
                  lastSession === 'upper'
                    ? 'bg-blue-600 text-white font-semibold border-blue-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              >
                {t.todayAdvisor.q1Upper}
                <span className={`block text-[10px] ${lastSession === 'upper' ? 'text-blue-100' : 'text-[#4A5568] dark:text-[#9E9E9E]'}`}>
                  {t.todayAdvisor.q1UpperSub}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setLastSession('lower')}
                className={`px-3 py-2.5 text-xs font-medium rounded-xl border transition-all text-left ${
                  lastSession === 'lower'
                    ? 'bg-blue-600 text-white font-semibold border-blue-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              >
                {t.todayAdvisor.q1Lower}
                <span className={`block text-[10px] ${lastSession === 'lower' ? 'text-blue-100' : 'text-[#4A5568] dark:text-[#9E9E9E]'}`}>
                  {t.todayAdvisor.q1LowerSub}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setLastSession('full')}
                className={`px-3 py-2.5 text-xs font-medium rounded-xl border transition-all text-left ${
                  lastSession === 'full'
                    ? 'bg-blue-600 text-white font-semibold border-blue-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              >
                {t.todayAdvisor.q1Full}
                <span className={`block text-[10px] ${lastSession === 'full' ? 'text-blue-100' : 'text-[#4A5568] dark:text-[#9E9E9E]'}`}>
                  {t.todayAdvisor.q1FullSub}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setLastSession('none')}
                className={`px-3 py-2.5 text-xs font-medium rounded-xl border transition-all text-left ${
                  lastSession === 'none'
                    ? 'bg-blue-600 text-white font-semibold border-blue-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              >
                {t.todayAdvisor.q1None}
                <span className={`block text-[10px] ${lastSession === 'none' ? 'text-blue-100' : 'text-[#4A5568] dark:text-[#9E9E9E]'}`}>
                  {t.todayAdvisor.q1NoneSub}
                </span>
              </button>
            </div>
          </div>

          {/* Question 2: Temps disponible */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E]">
              {t.todayAdvisor.q2Title}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setAvailableTime('35')}
                className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                  availableTime === '35'
                    ? 'bg-blue-600 text-white font-semibold border-blue-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                35 min
                <span className={`block text-[10px] ${availableTime === '35' ? 'text-blue-100' : 'text-[#4A5568] dark:text-[#9E9E9E]'}`}>
                  {t.todayAdvisor.q2Express}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setAvailableTime('55')}
                className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                  availableTime === '55'
                    ? 'bg-blue-600 text-white font-semibold border-blue-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                55 min
                <span className={`block text-[10px] ${availableTime === '55' ? 'text-blue-100' : 'text-[#4A5568] dark:text-[#9E9E9E]'}`}>
                  {t.todayAdvisor.q2Standard}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setAvailableTime('75')}
                className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                  availableTime === '75'
                    ? 'bg-blue-600 text-white font-semibold border-blue-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                75+ min
                <span className={`block text-[10px] ${availableTime === '75' ? 'text-blue-100' : 'text-[#4A5568] dark:text-[#9E9E9E]'}`}>
                  {t.todayAdvisor.q2Full}
                </span>
              </button>
            </div>
          </div>

          {/* Question 3: Forme du jour */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] dark:text-[#9E9E9E]">
              {t.todayAdvisor.q3Title}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setEnergyLevel('high')}
                className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all text-center ${
                  energyLevel === 'high'
                    ? 'bg-emerald-600 text-white font-semibold border-emerald-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {t.todayAdvisor.q3High}
              </button>
              <button
                type="button"
                onClick={() => setEnergyLevel('medium')}
                className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all text-center ${
                  energyLevel === 'medium'
                    ? 'bg-amber-600 text-white font-semibold border-amber-600 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {t.todayAdvisor.q3Med}
              </button>
              <button
                type="button"
                onClick={() => setEnergyLevel('low')}
                className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all text-center ${
                  energyLevel === 'low'
                    ? 'bg-slate-700 text-white font-semibold border-slate-700 shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#38383D] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {t.todayAdvisor.q3Low}
              </button>
            </div>
          </div>

        </div>

        {/* Right: The Coach Diagnostic & Recommendation Box */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/40">
                {t.todayAdvisor.verdictBadge}
              </span>
              <span className="text-xs text-[#4A5568] dark:text-[#9E9E9E] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#4A5568] dark:text-[#9E9E9E]" />
                {t.todayAdvisor.durationEst} : {availableTime} min
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-[#4A5568] dark:text-[#9E9E9E]">{t.todayAdvisor.mustWorkToday}</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400">👉</span>
                {getSplitLabel(recommendedSplit)}
              </h3>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed border-t border-slate-100 dark:border-[#2D2D32] pt-4">
              {reasoning}
            </p>

            {/* Cardio instruction for today */}
            <div className="mt-6 p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                    {t.todayAdvisor.cardioRecTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CCCCCC] mt-1 leading-relaxed">
                    {cardioRecommendation}
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Button (Soft Warm Amber - Attention without stress) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => onSelectSplit(recommendedSplit)}
                className="flex-1 h-12 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
              >
                <span>{t.todayAdvisor.startBtn}</span>
                <ArrowIcon className="w-4 h-4 text-slate-950" />
              </button>

              <button
                type="button"
                onClick={onNavigateToCardio}
                className="h-12 px-5 rounded-xl bg-slate-100 dark:bg-[#262628] hover:bg-slate-200 dark:hover:bg-[#2D2D32] text-[#1A1A1A] dark:text-[#E0E0E0] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 dark:border-[#38383D] transition-colors"
              >
                <span>{t.todayAdvisor.cardioBtn}</span>
              </button>
            </div>

          </div>

          {/* Quick Split Override Selector */}
          <div className="bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] mb-3">
              {t.todayAdvisor.manualChoice}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => onSelectSplit('Haut du corps')}
                className="px-3 py-2 text-xs font-medium rounded-lg bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-200 dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] transition-colors"
              >
                {lang === 'ar' ? 'الجزء العلوي' : 'Haut du corps'}
              </button>
              <button
                onClick={() => onSelectSplit('Bas du corps')}
                className="px-3 py-2 text-xs font-medium rounded-lg bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-200 dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] transition-colors"
              >
                {lang === 'ar' ? 'الجزء السفلي' : 'Bas du corps'}
              </button>
              <button
                onClick={() => onSelectSplit('Full Body')}
                className="px-3 py-2 text-xs font-medium rounded-lg bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-200 dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] transition-colors"
              >
                {lang === 'ar' ? 'كامل الجسم' : 'Full Body'}
              </button>
              <button
                onClick={() => onSelectSplit('Push (Poussée)')}
                className="px-3 py-2 text-xs font-medium rounded-lg bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-200 dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D] transition-colors"
              >
                {lang === 'ar' ? 'دفع (صدر وأكتاف)' : 'Push (Pectoraux)'}
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
