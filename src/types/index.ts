export type FitnessGoal = 'fat_loss' | 'muscle_gain' | 'strength' | 'general_fitness';
export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';
export type SplitType = 'upper_lower' | 'push_pull_legs' | 'full_body';
export type Language = 'fr' | 'ar' | 'en' | 'es';

export interface UserProfile {
  name: string;
  gender: 'homme' | 'femme';
  age: number;
  heightCm: number;
  weightKg: number;
  goal: FitnessGoal;
  level: FitnessLevel;
  daysPerWeek: number;
  splitPreference: SplitType;
  lastTrainedGroup?: string;
  lastTrainedDate?: string;
}

export type MuscleCategory = 
  | 'Pectoraux'
  | 'Dos'
  | 'Épaules'
  | 'Bras (Biceps & Triceps)'
  | 'Quadriceps'
  | 'Ischios & Fessiers'
  | 'Mollets'
  | 'Abdominaux & Core';

export interface ExerciseGuide {
  id: string;
  name: string;
  category: MuscleCategory;
  targetMuscles: string[];
  equipment: 'Barre libre' | 'Haltères' | 'Poulie' | 'Machine guidée' | 'Poids du corps';
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  defaultSets: number;
  defaultReps: string;
  restSeconds: number;
  setupInstructions: string;
  movementInstructions: string;
  breathingGuide: string;
  safetyCheckpoints: string[];
  commonMistakesToAvoid: string[];
  alternatives: string[];
  tempo: string; // e.g. "3-0-1-0"
}

export interface CardioMachineInfo {
  id: string;
  name: string;
  machineType: 'Tapis de course' | 'Stairmaster (Escalier)' | 'Rameur' | 'Vélo elliptique' | 'Vélo stationnaire' | 'Air Bike';
  caloriesPerHourApprox: number;
  jointImpact: 'Très faible' | 'Faible' | 'Modéré';
  bestFor: string;
  fatLossProtocol: {
    durationMinutes: number;
    intensity: string;
    settings: string;
    whenToDo: string;
  };
  muscleGainProtocol: {
    durationMinutes: number;
    intensity: string;
    settings: string;
    whenToDo: string;
  };
  safetyTips: string[];
  contraindications: string;
}

export interface WorkoutSessionTemplate {
  id: string;
  title: string;
  focus: 'Haut du corps' | 'Bas du corps' | 'Full Body' | 'Push (Poussée)' | 'Pull (Tirage)' | 'Legs (Jambes)' | 'Cardio & Gainage';
  estimatedDurationMin: number;
  goalAdaptation: string;
  warmUp: {
    durationMin: number;
    steps: string[];
  };
  exerciseIds: string[];
  recommendedCardio: {
    machineId: string;
    durationMin: number;
    notes: string;
  };
}

export interface DailyWorkoutLog {
  date: string;
  sessionTitle: string;
  completedExercises: {
    exerciseId: string;
    sets: { setNumber: number; weightKg: number; reps: number; completed: boolean }[];
  }[];
  cardioMinutesDone: number;
  notes: string;
}

export interface DailyNutritionLog {
  date: string;
  waterGlasses: number; // 250ml each
  caloriesConsumed: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
}
