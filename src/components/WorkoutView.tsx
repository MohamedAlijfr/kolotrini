import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, Check, Info, Flame, Trophy, 
  Dumbbell, Clock, ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WORKOUT_PROGRAMS } from '../data/workoutPrograms';
import { EXERCISES_DATABASE } from '../data/exercises';
import { CARDIO_MACHINES } from '../data/cardioMachines';
import { UserProfile, ExerciseGuide, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface WorkoutViewProps {
  userProfile: UserProfile;
  initialSplit?: string;
  lang?: Language;
  onOpenExerciseDetails: (exercise: ExerciseGuide) => void;
  onSessionFinished: () => void;
}

interface SetLog {
  setNumber: number;
  weightKg: string;
  reps: string;
  completed: boolean;
}

export const WorkoutView: React.FC<WorkoutViewProps> = ({
  userProfile,
  initialSplit = 'Haut du corps',
  lang = 'fr',
  onOpenExerciseDetails,
  onSessionFinished
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedSplitFocus, setSelectedSplitFocus] = useState<string>(initialSplit);

  // Sync if initialSplit changes
  useEffect(() => {
    if (initialSplit) {
      setSelectedSplitFocus(initialSplit);
    }
  }, [initialSplit]);

  const activeProgram = WORKOUT_PROGRAMS.find(p => p.focus === selectedSplitFocus) || WORKOUT_PROGRAMS[0];

  // Rest Timer State
  const [timerSeconds, setTimerSeconds] = useState<number>(90);
  const [initialTimer, setInitialTimer] = useState<number>(90);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Sound alert using Web Audio API
  const playTimerBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch {}
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      playTimerBeep();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const startTimer = (seconds: number) => {
    setInitialTimer(seconds);
    setTimerSeconds(seconds);
    setIsTimerRunning(true);
  };

  // Sets logging state per exercise
  const [exerciseLogs, setExerciseLogs] = useState<Record<string, SetLog[]>>({});

  useEffect(() => {
    const initialLogs: Record<string, SetLog[]> = {};
    activeProgram.exerciseIds.forEach(id => {
      const ex = EXERCISES_DATABASE.find(e => e.id === id);
      const setsCount = ex ? ex.defaultSets : 4;
      const sets: SetLog[] = [];
      for (let i = 1; i <= setsCount; i++) {
        sets.push({
          setNumber: i,
          weightKg: '',
          reps: ex ? ex.defaultReps.split('-')[0].trim() : '10',
          completed: false
        });
      }
      initialLogs[id] = sets;
    });
    setExerciseLogs(initialLogs);
  }, [activeProgram]);

  const toggleSetComplete = (exerciseId: string, setIndex: number, restSeconds: number) => {
    setExerciseLogs(prev => {
      const currentSets = [...(prev[exerciseId] || [])];
      if (currentSets[setIndex]) {
        const nextState = !currentSets[setIndex].completed;
        currentSets[setIndex] = {
          ...currentSets[setIndex],
          completed: nextState
        };
        if (nextState) {
          startTimer(restSeconds);
        }
      }
      return { ...prev, [exerciseId]: currentSets };
    });
  };

  const updateSetWeight = (exerciseId: string, setIndex: number, weight: string) => {
    setExerciseLogs(prev => {
      const currentSets = [...(prev[exerciseId] || [])];
      if (currentSets[setIndex]) {
        currentSets[setIndex] = { ...currentSets[setIndex], weightKg: weight };
      }
      return { ...prev, [exerciseId]: currentSets };
    });
  };

  const updateSetReps = (exerciseId: string, setIndex: number, reps: string) => {
    setExerciseLogs(prev => {
      const currentSets = [...(prev[exerciseId] || [])];
      if (currentSets[setIndex]) {
        currentSets[setIndex] = { ...currentSets[setIndex], reps: reps };
      }
      return { ...prev, [exerciseId]: currentSets };
    });
  };

  const [warmupDone, setWarmupDone] = useState<Record<number, boolean>>({});

  const handleCompleteWorkout = () => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 }
    });
    onSessionFinished();
  };

  const activeExercises = activeProgram.exerciseIds
    .map(id => EXERCISES_DATABASE.find(e => e.id === id))
    .filter((e): e is ExerciseGuide => Boolean(e));

  const recommendedCardioMachine = CARDIO_MACHINES.find(m => m.id === activeProgram.recommendedCardio.machineId) || CARDIO_MACHINES[0];

  return (
    <div className="space-y-8 pb-20">
      
      {/* Top Split Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {WORKOUT_PROGRAMS.map((program) => (
          <button
            key={program.id}
            onClick={() => setSelectedSplitFocus(program.focus)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
              selectedSplitFocus === program.focus
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-[#FFFFFF] dark:bg-[#1E1E1E] text-[#1A1A1A] dark:text-[#E0E0E0] border-slate-200 dark:border-[#2D2D32] hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            {program.focus}
          </button>
        ))}
      </div>

      {/* Session Header Card */}
      <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block mb-1">
              Séance Active · {userProfile.goal === 'fat_loss' ? 'Perte de Gras' : 'Prise de Masse'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-[#E0E0E0]">
              {activeProgram.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#9E9E9E] mt-1">
              {activeProgram.goalAdaptation}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-center">
              <span className="text-[10px] text-[#4A5568] dark:text-[#9E9E9E] uppercase block font-semibold">Durée estimée</span>
              <span className="text-sm font-bold text-[#1A1A1A] dark:text-[#E0E0E0] font-mono">{activeProgram.estimatedDurationMin} min</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-center">
              <span className="text-[10px] text-[#4A5568] dark:text-[#9E9E9E] uppercase block font-semibold">Exercices</span>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 font-mono">{activeExercises.length}</span>
            </div>
          </div>
        </div>

        {/* Warm-up Section */}
        <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Échauffement dynamique obligatoire ({activeProgram.warmUp.durationMin} min)
            </h3>
            <span className="text-[11px] text-[#4A5568] dark:text-[#9E9E9E]">Ne jamais sauter l'échauffement</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {activeProgram.warmUp.steps.map((step, idx) => (
              <label 
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={Boolean(warmupDone[idx])}
                  onChange={() => setWarmupDone(prev => ({ ...prev, [idx]: !prev[idx] }))}
                  className="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span className={`text-[#1A1A1A] dark:text-[#CCCCCC] ${warmupDone[idx] ? 'line-through opacity-50' : ''}`}>
                  {step}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Rest Timer Widget (Pinned for quick access in gym) */}
      <div className="sticky top-20 z-30 p-4 rounded-2xl bg-[#FFFFFF]/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md border border-slate-200 dark:border-[#2D2D32] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-[#4A5568] dark:text-[#9E9E9E] font-bold uppercase tracking-wider block">
              Chronomètre de Repos Inter-Séries
            </span>
            <div className="text-2xl font-extrabold text-[#1A1A1A] dark:text-[#E0E0E0] font-mono tabular-nums">
              {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick preset buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => startTimer(60)}
              className="px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-200 dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D]"
            >
              60s
            </button>
            <button
              onClick={() => startTimer(90)}
              className="px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-200 dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D]"
            >
              90s
            </button>
            <button
              onClick={() => startTimer(120)}
              className="px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#F8F9FA] dark:bg-[#262628] text-[#1A1A1A] dark:text-[#E0E0E0] hover:bg-slate-200 dark:hover:bg-[#333338] border border-slate-200 dark:border-[#38383D]"
            >
              120s
            </button>
          </div>

          {/* Controls */}
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`p-2.5 rounded-xl font-bold transition-colors ${
              isTimerRunning ? 'bg-amber-500 text-slate-950' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            aria-label={isTimerRunning ? "Mettre en pause" : "Démarrer minuteur"}
          >
            {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              setIsTimerRunning(false);
              setTimerSeconds(initialTimer);
            }}
            className="p-2.5 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] text-[#4A5568] dark:text-[#9E9E9E] hover:text-[#1A1A1A] dark:hover:text-[#E0E0E0] border border-slate-200 dark:border-[#38383D] transition-colors"
            aria-label="Réinitialiser le minuteur"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Exercises List & Set Tracking */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E0E0E0] flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Mouvements de musculation ({activeExercises.length} exercices)
        </h3>

        {activeExercises.map((exercise, exIndex) => {
          const sets = exerciseLogs[exercise.id] || [];

          return (
            <div 
              key={exercise.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] space-y-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold font-mono flex items-center justify-center shrink-0 text-sm">
                    {exIndex + 1}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">
                      {exercise.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-[#4A5568] dark:text-[#9E9E9E] mt-0.5">
                      <span>{exercise.equipment}</span>
                      <span aria-hidden="true">·</span>
                      <span>Tempo : {exercise.tempo}</span>
                      <span aria-hidden="true">·</span>
                      <span>Repos : {exercise.restSeconds}s</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenExerciseDetails(exercise)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] text-blue-700 dark:text-blue-400 text-xs font-semibold self-start sm:self-center border border-slate-200 dark:border-[#38383D] transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Exécution & Sécurité</span>
                </button>
              </div>

              {/* Interactive Sets Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-[#1A1A1A] dark:text-[#E0E0E0]">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-[#2D2D32] text-[11px] font-semibold text-[#4A5568] dark:text-[#9E9E9E] uppercase tracking-wider">
                      <th className="py-2 px-3 w-16">{t.workout.set}</th>
                      <th className="py-2 px-3 w-32">{t.workout.loadKg}</th>
                      <th className="py-2 px-3 w-32">{t.workout.reps}</th>
                      <th className="py-2 px-3 text-right">{t.workout.status}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-[#2D2D32]">
                    {sets.map((set, setIdx) => (
                      <tr 
                        key={setIdx}
                        className={`transition-colors ${set.completed ? 'bg-emerald-50/50 dark:bg-emerald-950/20' : ''}`}
                      >
                        <td className="py-2.5 px-3 font-mono font-medium text-[#4A5568] dark:text-[#9E9E9E]">
                          #{set.setNumber}
                        </td>
                        <td className="py-2.5 px-3">
                          <input
                            type="number"
                            placeholder="kg"
                            value={set.weightKg}
                            onChange={(e) => updateSetWeight(exercise.id, setIdx, e.target.value)}
                            className="w-24 px-2.5 py-1 rounded-lg bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] font-mono text-xs focus:border-blue-500 focus:outline-none"
                          />
                        </td>
                        <td className="py-2.5 px-3">
                          <input
                            type="text"
                            placeholder={exercise.defaultReps}
                            value={set.reps}
                            onChange={(e) => updateSetReps(exercise.id, setIdx, e.target.value)}
                            className="w-24 px-2.5 py-1 rounded-lg bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] font-mono text-xs focus:border-blue-500 focus:outline-none"
                          />
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <button
                            type="button"
                            onClick={() => toggleSetComplete(exercise.id, setIdx, exercise.restSeconds)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors ${
                              set.completed
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold'
                                : 'bg-[#F8F9FA] hover:bg-slate-200 dark:bg-[#262628] dark:hover:bg-[#333338] text-[#1A1A1A] dark:text-[#E0E0E0] border border-slate-200 dark:border-[#38383D]'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{set.completed ? t.workout.validated : t.workout.validate}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          );
        })}
      </div>

      {/* Post-Workout Cardio Integration */}
      <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">
                {t.workout.postCardioTitle} ({activeProgram.recommendedCardio.durationMin} min)
              </h3>
              <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E]">
                {t.workout.machineAdvised} : <strong className="text-[#1A1A1A] dark:text-[#E0E0E0]">{recommendedCardioMachine.name}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-xs sm:text-sm text-[#4A5568] dark:text-[#CCCCCC] leading-relaxed">
          <p>
            <strong className="text-blue-700 dark:text-blue-400 font-semibold">{lang === 'ar' ? 'البروتوكول :' : 'Protocole exact :'}</strong>{' '}
            {activeProgram.recommendedCardio.notes}
          </p>
        </div>
      </div>

      {/* Finish Session CTA */}
      <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E]">
          {lang === 'ar' ? 'عاش يا بطل! تذكر شرب نصف لتر من الماء وتناول وجبة الاستشفاء خلال ساعة.' : 'Bravo pour l\'effort. N\'oublie pas de boire 500ml d\'eau et de prendre ta collation post-workout dans l\'heure.'}
        </p>
        <button
          onClick={handleCompleteWorkout}
          className="w-full sm:w-auto h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
        >
          <Trophy className="w-5 h-5 text-white" />
          <span>{t.workout.finishWorkout}</span>
        </button>
      </div>

    </div>
  );
};
