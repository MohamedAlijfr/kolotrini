import { CardioMachineInfo } from '../types';

export const CARDIO_MACHINES: CardioMachineInfo[] = [
  {
    id: 'tapis-course',
    name: 'Tapis de Course (Course & Marche Inclinée)',
    machineType: 'Tapis de course',
    caloriesPerHourApprox: 550,
    jointImpact: 'Modéré',
    bestFor: 'Perte de gras ciblée sans fonte musculaire (méthode marche inclinée) et capacité cardiovasculaire générale.',
    fatLossProtocol: {
      durationMinutes: 25,
      intensity: 'Zone 2 (Endurance fondamentale - FC 65-72% de la FCmax)',
      settings: 'Pente 10% à 12%, Vitesse 4.8 à 5.4 km/h (Marche rapide sans se tenir aux rampes).',
      whenToDo: 'Immédiatement APRÈS la séance de musculation (le glycogène musculaire est déjà vidé, le corps oxyde directement les acides gras).'
    },
    muscleGainProtocol: {
      durationMinutes: 15,
      intensity: 'Zone 1-2 très modérée',
      settings: 'Pente 4%, Vitesse 5.0 km/h (marche active de récupération).',
      whenToDo: 'Après la musculation ou lors des jours de repos pour favoriser la circulation sanguine et l\'évacuation des déchets métaboliques sans compromettre la synthèse protéique.'
    },
    safetyTips: [
      'Ne vous tenez JAMAIS aux poignées latérales en marche inclinée : cela annule l\'angle de travail, réduit la dépense calorique de 30% et fausse la posture du rachis.',
      'Attachez le clip coupe-circuit de sécurité à votre t-shirt.',
      'Atterrissez sur le milieu du pied (midfoot strike) pour réduire les chocs aux genoux plutôt que d\'attaquer par le talon.'
    ],
    contraindications: 'Si douleurs aux rotules ou périostites tibiales, privilégier la marche inclinée plutôt que la course avec impact.'
  },
  {
    id: 'stairmaster-escalier',
    name: 'StairMaster (Escalier sans fin)',
    machineType: 'Stairmaster (Escalier)',
    caloriesPerHourApprox: 650,
    jointImpact: 'Faible',
    bestFor: 'Le roi de la dépense calorique, brûle-graisse express et renforcement intensif des fessiers et mollets.',
    fatLossProtocol: {
      durationMinutes: 15,
      intensity: 'Zone 2-3 élevée',
      settings: 'Niveau 6 à 8 (50 à 70 marches par minute). Garder un rythme constant sans s\'effondrer sur la machine.',
      whenToDo: 'Fin de séance Haut du corps ou séance Cardio dédiée (ne pas faire juste avant ou après une grosse séance jambes).'
    },
    muscleGainProtocol: {
      durationMinutes: 10,
      intensity: 'Zone 2 modérée',
      settings: 'Niveau 5 avec pas lents et profonds, en appuyant bien sur le talon pour stimuler les fessiers.',
      whenToDo: '1 à 2 fois par semaine maximum en fin de séance haut.'
    },
    safetyTips: [
      'Gardez le buste droit et la colonne neutre : ne vous penchez pas en avant avec les fesses en arrière.',
      'Posez le pied entier sur chaque marche (talon inclus), ne grimpez pas uniquement sur la pointe des pieds pour protéger le tendon d\'Achille.',
      'Ne posez que le bout des doigts sur les rampes pour l\'équilibre, ne supportez pas le poids de votre corps avec les bras.'
    ],
    contraindications: 'Tendinopathie rotulienne aiguë ou fatigue extrême du bas du corps.'
  },
  {
    id: 'rameur-concept2',
    name: 'Rameur (Rowing Machine Concept2)',
    machineType: 'Rameur',
    caloriesPerHourApprox: 600,
    jointImpact: 'Très faible',
    bestFor: 'Recrutement global exceptionnel : 86% de la masse musculaire totale du corps engagée, zéro impact articulaire.',
    fatLossProtocol: {
      durationMinutes: 20,
      intensity: 'Zone 2 continue ou fractionné HIIT court (10x 30s effort / 30s repos)',
      settings: 'Résistance (damper) réglée entre 4 et 5 (la résistance idéale biomechanique, inutile de mettre à 10).',
      whenToDo: 'Après la musculation ou en jour de repos actif.'
    },
    muscleGainProtocol: {
      durationMinutes: 12,
      intensity: 'Allure aérobie fluide',
      settings: 'Damper 4, cadence de 20-22 coups par minute avec une poussée puissante des jambes.',
      whenToDo: 'Échauffement complet de 6 min avant le haut du corps ou en récupération post-entraînement.'
    },
    safetyTips: [
      'Respectez la séquence rigoureuse : Jambes -> Buste -> Bras lors du tirage, puis Bras -> Buste -> Jambes lors du retour.',
      '60% de la puissance provient de la poussée des jambes, 20% du basculement du tronc et seulement 20% des bras.',
      'Ne jamais arrondir le bas du dos à la prise d\'eau (catch).'
    ],
    contraindications: 'Lombalgie aiguë en crise ou hernie discale lombaire non stabilisée.'
  },
  {
    id: 'velo-elliptique',
    name: 'Vélo Elliptique (Cross Trainer)',
    machineType: 'Vélo elliptique',
    caloriesPerHourApprox: 500,
    jointImpact: 'Très faible',
    bestFor: 'Préservation absolue des articulations (chevilles, genoux, dos), échauffement ou séance longue sans traumatismes.',
    fatLossProtocol: {
      durationMinutes: 30,
      intensity: 'Zone 2 constante',
      settings: 'Résistance moyenne (niveau 6-8) avec cadence de 55-65 RPM. Utiliser activement les poignées mobiles pour engager le haut du corps.',
      whenToDo: 'Fin de séance ou jour cardio dédié.'
    },
    muscleGainProtocol: {
      durationMinutes: 15,
      intensity: 'Légère',
      settings: 'Résistance faible à moyenne (niveau 4-5) en cadence fluide.',
      whenToDo: 'Excellente option pour 8 min d\'échauffement poly-articulaire avant la séance.'
    },
    safetyTips: [
      'Gardez les pieds bien à plat sur les pédales sans décoller exagérément les talons.',
      'Maintenez les abdominaux engagés pour ne pas vous avachir sur les poignées.',
      'Poussez et tirez sur les bras synchronisés avec les jambes.'
    ],
    contraindications: 'Quasiment aucune : machine universellement adaptée aux débutants et aux personnes en surpoids.'
  },
  {
    id: 'velo-stationnaire',
    name: 'Vélo Stationnaire / Vélo de Biking',
    machineType: 'Vélo stationnaire',
    caloriesPerHourApprox: 480,
    jointImpact: 'Très faible',
    bestFor: 'Endurance pure, récupération active des jambes et optimisation de la santé cardiovasculaire sans impacter les tendons.',
    fatLossProtocol: {
      durationMinutes: 30,
      intensity: 'Zone 2 continue (pouls 120-135 bpm)',
      settings: 'Résistance progressive pour maintenir une cadence fluide de 80 à 90 tours/minute (RPM).',
      whenToDo: 'Après la musculation ou en matinée à jeun si toléré.'
    },
    muscleGainProtocol: {
      durationMinutes: 15,
      intensity: 'Récupération active très douce',
      settings: 'Résistance légère, cadence souple de 75 RPM pour faire circuler le sang dans les jambes après une séance intense.',
      whenToDo: 'Fin d\'entraînement.'
    },
    safetyTips: [
      'Réglez la selle à hauteur de la hanche : jambe quasi tendue au point le plus bas (léger angle de 10-15° au genou).',
      'Une selle trop basse détruit les rotules ; une selle trop haute fait basculer le bassin d\'un côté à l\'autre.',
      'Ne bloquez pas la nuque vers l\'arrière.'
    ],
    contraindications: 'Syndrome fémoro-patellaire si la selle est mal réglée.'
  },
  {
    id: 'air-bike',
    name: 'Air Bike / Assault Bike',
    machineType: 'Air Bike',
    caloriesPerHourApprox: 750,
    jointImpact: 'Faible',
    bestFor: 'Conditioning métabolique extrême, combustion calorique post-combustion (EPOC) maximale en un temps record.',
    fatLossProtocol: {
      durationMinutes: 12,
      intensity: 'HIIT Tabata (8 séries de 20s sprint maximal / 10s repos complet)',
      settings: 'Résistance par air proportionnelle à la vitesse : plus vous poussez, plus la résistance est brutale.',
      whenToDo: 'Séance courte dédiée ou fin de séance haut du corps.'
    },
    muscleGainProtocol: {
      durationMinutes: 8,
      intensity: 'Intervalles modérés (ex: 15s effort à 70% / 45s calme)',
      settings: 'Résistance contrôlée pour stimuler le système cardio-respiratoire sans accumuler d\'acide lactique excessif.',
      whenToDo: '1 fois par semaine maximum.'
    },
    safetyTips: [
      'Garder une posture ferme même en état d\'épuisement.',
      'Ne pas s\'effondrer sur le guidon.',
      'Toujours faire 2 minutes de retour au calme à très basse vitesse avant de descendre.'
    ],
    contraindications: 'Problèmes cardiaques non stabilisés ou fatigue neuromusculaire avancée.'
  }
];
