import { UserProfile, FitnessGoal } from '../types';

export interface NutritionPlan {
  bmr: number;
  tdee: number;
  targetCalories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
  waterLiters: number;
  goalSummary: string;
  periWorkoutTiming: {
    preWorkoutMeal: string;
    preWorkoutSnack: string;
    intraWorkout: string;
    postWorkout: string;
  };
  sampleMeals: {
    mealName: string;
    time: string;
    description: string;
    approxMacros: string;
  }[];
}

export function calculatePersonalizedNutrition(profile: UserProfile): NutritionPlan {
  const { weightKg, heightCm, age, gender, goal, daysPerWeek } = profile;

  // Mifflin-St Jeor Formula for BMR (Base Metabolic Rate)
  let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
  if (gender === 'homme') {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  // Activity Multiplier based on gym frequency
  let activityMultiplier = 1.2;
  if (daysPerWeek === 1 || daysPerWeek === 2) activityMultiplier = 1.35;
  else if (daysPerWeek === 3 || daysPerWeek === 4) activityMultiplier = 1.5;
  else if (daysPerWeek >= 5) activityMultiplier = 1.65;

  const tdee = Math.round(bmr * activityMultiplier);

  // Target calories according to goal
  let targetCalories = tdee;
  let goalSummary = 'Maintien et vitalité générale';

  if (goal === 'fat_loss') {
    targetCalories = Math.max(1400, Math.round(tdee - 450));
    goalSummary = `Déficit contrôlé de -450 kcal pour éliminer les graisses tout en préservant la masse musculaire.`;
  } else if (goal === 'muscle_gain') {
    targetCalories = Math.round(tdee + 300);
    goalSummary = `Léger surplus de +300 kcal (prise de masse propre) pour maximiser l'hypertrophie sans prise de gras inutile.`;
  } else if (goal === 'strength') {
    targetCalories = Math.round(tdee + 150);
    goalSummary = `Surplus énergétique léger (+150 kcal) pour soutenir la récupération nerveuse et la force maximale.`;
  }

  // Protein targets (g / kg)
  // Fat loss: 2.0 - 2.2 g/kg to protect lean mass
  // Muscle gain: 1.8 - 2.0 g/kg
  const proteinPerKg = goal === 'fat_loss' ? 2.1 : goal === 'muscle_gain' ? 2.0 : 1.8;
  const proteinGrams = Math.round(weightKg * proteinPerKg);
  const proteinCals = proteinGrams * 4;

  // Fats target: ~0.9g per kg (vital for hormone synthesis)
  const fatsGrams = Math.round(weightKg * 0.9);
  const fatsCals = fatsGrams * 9;

  // Carbs: Remaining calories
  const remainingCals = Math.max(300, targetCalories - (proteinCals + fatsCals));
  const carbsGrams = Math.round(remainingCals / 4);

  // Water calculation: 35ml per kg body weight + 0.6L for 1h gym session
  const waterLiters = Number(((weightKg * 0.035) + 0.6).toFixed(1));

  const periWorkoutTiming = goal === 'fat_loss' ? {
    preWorkoutMeal: '2h avant : Repas digeste pauvre en gras (ex: Blanc de poulet, riz basmati, courgettes à la vapeur).',
    preWorkoutSnack: '30 min avant : Café noir ou thé vert + 1 petite banane si besoin de carburant.',
    intraWorkout: 'Pendant la séance : Eau fraîche (500ml à 700ml) avec une pincée de sel ou électrolytes.',
    postWorkout: 'Dans l\'heure : Shaker de Whey protéine (30g) ou 3 œufs durs + 1 pomme. Repas complet 1h30 après.'
  } : {
    preWorkoutMeal: '2h à 2h30 avant : Glucides complexes + protéines (Flocons d\'avoine ou riz, dinde/œufs, huile d\'olive).',
    preWorkoutSnack: '40 min avant : 2 galettes de riz avec miel ou banane + beurre de cacahuète.',
    intraWorkout: 'Pendant la séance : 750ml d\'eau avec électrolytes (ou maltodextrine si séance > 75 min).',
    postWorkout: 'Dans les 45 min : 35g de protéines rapides + 40g de glucides à assimilation rapide pour relancer l\'anabolisme.'
  };

  const sampleMeals = goal === 'fat_loss' ? [
    {
      mealName: 'Petit-déjeuner Minceur Protéiné',
      time: '07h30',
      description: '3 œufs entiers brouillés, 40g de pain au levain complet, 1 poignée de myrtilles et thé vert sans sucre.',
      approxMacros: '32g Protéines · 30g Glucides · 16g Lipides (~400 kcal)'
    },
    {
      mealName: 'Déjeuner Équilibré Métabolique',
      time: '12h30',
      description: '150g de filet de saumon ou cabillaud, 60g (cru) de quinoa, brocolis et haricots verts à volonté, filet de jus de citron.',
      approxMacros: '38g Protéines · 42g Glucides · 14g Lipides (~460 kcal)'
    },
    {
      mealName: 'Collation Pré/Post Effort',
      time: '16h30',
      description: '200g de fromage blanc 0% ou Skyr avec 15g d\'amandes et 1 pomme coupée en dés.',
      approxMacros: '24g Protéines · 22g Glucides · 8g Lipides (~260 kcal)'
    },
    {
      mealName: 'Dîner Réparateur Léger',
      time: '20h00',
      description: '160g de blanc de poulet mariné aux herbes, patates douces rôties (150g), grande salade d\'épinards et 1 c. à soupe d\'huile d\'olive.',
      approxMacros: '42g Protéines · 35g Glucides · 13g Lipides (~430 kcal)'
    }
  ] : [
    {
      mealName: 'Petit-déjeuner Hypertrophie Massive',
      time: '07h30',
      description: '80g de flocons d\'avoine cuits au lait végétal, 1 dose de whey, 1 banane tranchée, 20g de beurre de cacahuète.',
      approxMacros: '42g Protéines · 85g Glucides · 18g Lipides (~670 kcal)'
    },
    {
      mealName: 'Déjeuner Anabolique Complet',
      time: '12h30',
      description: '180g de steak haché 5% ou poulet, 100g (cru) de riz basmati, poêlée de légumes colorés, 1 c. à soupe d\'huile d\'olive.',
      approxMacros: '48g Protéines · 80g Glucides · 16g Lipides (~660 kcal)'
    },
    {
      mealName: 'Collation Énergie & Force',
      time: '16h30',
      description: 'Sandwich pain complet avec 100g de blanc de dinde, 1 avocat écrasé, 1 poignée de noix et 1 fruit.',
      approxMacros: '30g Protéines · 45g Glucides · 20g Lipides (~480 kcal)'
    },
    {
      mealName: 'Dîner Régénération Tissulaire',
      time: '20h30',
      description: '180g de pavé de saumon, 250g de pommes de terre vapeur, asperges rôties et 1 yaourt grec au miel.',
      approxMacros: '45g Protéines · 65g Glucides · 22g Lipides (~640 kcal)'
    }
  ];

  return {
    bmr,
    tdee,
    targetCalories,
    proteinGrams,
    carbsGrams,
    fatsGrams,
    waterLiters,
    goalSummary,
    periWorkoutTiming,
    sampleMeals
  };
}
