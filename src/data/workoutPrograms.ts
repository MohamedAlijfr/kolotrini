import { WorkoutSessionTemplate } from '../types';

export const WORKOUT_PROGRAMS: WorkoutSessionTemplate[] = [
  {
    id: 'split-haut',
    title: 'Haut du Corps - Force & Hypertrophie (Pecs, Dos, Épaules, Bras)',
    focus: 'Haut du corps',
    estimatedDurationMin: 65,
    goalAdaptation: 'Développement complet du torse, largeur du dos et densité musculaire des bras.',
    warmUp: {
      durationMin: 7,
      steps: [
        '3 minutes de rameur ou vélo elliptique à allure modérée (montée de température)',
        'Dislocations d\'épaules avec bâton ou élastique (15 répétitions)',
        'Rotations externes de la coiffe des rotateurs à la poulie légère (15 reps par bras)',
        '2 séries d\'échauffement léger sur le premier exercice avec la barre à vide'
      ]
    },
    exerciseIds: [
      'developpe-couche',
      'tirage-vertical-poitrine',
      'developpe-halteres-incline',
      'tirage-horizontal-rameur',
      'developpe-militaire-halteres',
      'dips-barres-paralleles',
      'curl-biceps-incline'
    ],
    recommendedCardio: {
      machineId: 'tapis-course',
      durationMin: 20,
      notes: 'Marche inclinée 12% à 5.0 km/h en fin de séance pour maximiser l\'oxydation des graisses.'
    }
  },
  {
    id: 'split-bas',
    title: 'Bas du Corps - Puissance & Galbe (Quadriceps, Ischios, Fessiers, Mollets)',
    focus: 'Bas du corps',
    estimatedDurationMin: 60,
    goalAdaptation: 'Renforcement massif des jambes, stabilité du bassin et forte dépense calorique métabolique.',
    warmUp: {
      durationMin: 8,
      steps: [
        '4 minutes de vélo stationnaire ou tapis plat (lubrification des genoux et hanches)',
        'Mobilité de cheville contre un mur (genou vers l\'avant 10 fois par jambe)',
        'Squat profond à vide en maintenant les orteils 30 secondes (ouverture de hanche)',
        'Pont fessier au sol (Glute Bridge) pour réveiller les fessiers (15 répétitions)'
      ]
    },
    exerciseIds: [
      'squat-barre',
      'souleve-terre-roumain',
      'presse-cuisses',
      'fentes-bulgares',
      'gainage-planche-pallof'
    ],
    recommendedCardio: {
      machineId: 'velo-stationnaire',
      durationMin: 15,
      notes: 'Pédalage fluide à faible résistance pour rincer les toxines et accélérer la récupération musculaire.'
    }
  },
  {
    id: 'split-fullbody',
    title: 'Full Body Athlétique (Corps Entier Polyarticulaire)',
    focus: 'Full Body',
    estimatedDurationMin: 70,
    goalAdaptation: 'Idéal si vous vous entraînez 2 à 3 fois par semaine ou pour une remise en forme rapide et équilibrée.',
    warmUp: {
      durationMin: 8,
      steps: [
        '4 minutes de rameur (échauffe instantanément 85% du corps)',
        'Cercles de bras et fentes dynamiques sans charge (10 par côté)',
        'Montée progressive sur les charges de travail'
      ]
    },
    exerciseIds: [
      'squat-barre',
      'developpe-couche',
      'tirage-vertical-poitrine',
      'souleve-terre-roumain',
      'developpe-militaire-halteres',
      'gainage-planche-pallof'
    ],
    recommendedCardio: {
      machineId: 'rameur-concept2',
      durationMin: 12,
      notes: 'Cadence régulière de 22 s/m pour terminer en stimulant l\'endurance aérobie globale.'
    }
  },
  {
    id: 'split-push',
    title: 'Push - Poussée Ciblée (Pectoraux, Épaules & Triceps)',
    focus: 'Push (Poussée)',
    estimatedDurationMin: 55,
    goalAdaptation: 'Recrutement concentré sur la chaîne antérieure de poussée.',
    warmUp: {
      durationMin: 6,
      steps: [
        'Rotations d\'épaules et échauffement des poignets',
        'Pompes au sol ou inclinées (2x 10 répétitions contrôlées)',
        'Échauffement spécifique des triceps à la poulie'
      ]
    },
    exerciseIds: [
      'developpe-couche',
      'developpe-halteres-incline',
      'developpe-militaire-halteres',
      'dips-barres-paralleles',
      'extensions-triceps-corde'
    ],
    recommendedCardio: {
      machineId: 'stairmaster-escalier',
      durationMin: 15,
      notes: '15 min de Stairmaster niveau 6 pour un boost métabolique sans fatiguer les bras.'
    }
  },
  {
    id: 'split-pull',
    title: 'Pull - Tirage & Épaisseur (Dos, Arrière d\'Épaules & Biceps)',
    focus: 'Pull (Tirage)',
    estimatedDurationMin: 55,
    goalAdaptation: 'Construction d\'un dos en V, posture droite et biceps puissants.',
    warmUp: {
      durationMin: 6,
      steps: [
        'Mobilisation de la colonne vertébrale (mouvements Chat-Vache)',
        'Tirage à l\'élastique face au visage (Face Pull léger)',
        'Suspension passive à la barre fixe (30 secondes d\'étirement dorsal)'
      ]
    },
    exerciseIds: [
      'tirage-vertical-poitrine',
      'tirage-horizontal-rameur',
      'souleve-terre-roumain',
      'curl-biceps-incline',
      'gainage-planche-pallof'
    ],
    recommendedCardio: {
      machineId: 'velo-elliptique',
      durationMin: 20,
      notes: 'Cadence fluide à résistance modérée.'
    }
  }
];
