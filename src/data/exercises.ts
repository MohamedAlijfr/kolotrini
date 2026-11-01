import { ExerciseGuide } from '../types';

export const EXERCISES_DATABASE: ExerciseGuide[] = [
  // BAS DU CORPS - QUADRICEPS & FESSIERS
  {
    id: 'squat-barre',
    name: 'Squat arrière à la barre (Back Squat)',
    category: 'Quadriceps',
    targetMuscles: ['Quadriceps', 'Grand fessier', 'Érecteurs du rachis', 'Abdominaux'],
    equipment: 'Barre libre',
    difficulty: 'Intermédiaire',
    defaultSets: 4,
    defaultReps: '8 - 10',
    restSeconds: 120,
    tempo: '3-0-1-0 (3s de descente contrôlée, 1s de montée explosive)',
    setupInstructions: 'Positionnez la barre sur les trapèzes (position haute) ou l\'arrière des deltoïdes (position basse). Pieds écartés à la largeur des épaules, pointes légèrement ouvertes vers l\'extérieur (~15°). Gainez la sangle abdominale avant de décrocher la barre.',
    movementInstructions: 'Amorcez la descente en poussant les hanches vers l\'arrière tout en pliant les genoux. Gardez la poitrine fière et le regard neutre. Descendez jusqu\'à ce que les cuisses soient au moins parallèles au sol (pli de hanche sous le genou). Poussez fort dans tout le pied pour remonter en expirant.',
    breathingGuide: 'Grande inspiration ventrale (manœuvre de Valsalva) au sommet pour verrouiller le tronc, bloquez pendant la descente, expirez puissamment en franchissant le point dur de la remontée.',
    safetyCheckpoints: [
      'Gardez les talons et la plante des pieds collés au sol tout au long du mouvement.',
      'Les genoux doivent toujours suivre l\'axe naturel des orteils, ne jamais les laisser s\'effondrer vers l\'intérieur (valgus).',
      'Conservez une courbure lombaire neutre : évitez impérativement l\'arrondissement du bas du dos (butt wink excessif) en bas de trajectoire.'
    ],
    commonMistakesToAvoid: [
      'Plonger le buste trop en avant par manque de mobilité de cheville.',
      'Décoller les talons du sol en reportant tout le poids sur l\'avant-pied.',
      'Bloquer violemment les genoux en hyperextension en haut du mouvement.'
    ],
    alternatives: [
      'Presse à cuisses inclinée 45° (très sécuritaire pour les lombaires)',
      'Squat gobelet avec haltère (Goblet Squat)',
      'Hack Squat guidé'
    ]
  },
  {
    id: 'presse-cuisses',
    name: 'Presse à cuisses 45° (Leg Press)',
    category: 'Quadriceps',
    targetMuscles: ['Quadriceps', 'Fessiers', 'Adducteurs'],
    equipment: 'Machine guidée',
    difficulty: 'Débutant',
    defaultSets: 4,
    defaultReps: '10 - 12',
    restSeconds: 90,
    tempo: '3-1-1-0',
    setupInstructions: 'Asseyez-vous le dos et le bassin bien plaqués contre le dossier. Placez les pieds au milieu du plateau, écartement des épaules.',
    movementInstructions: 'Déverrouillez la sécurité en tenant fermement les poignées latérales. Fléchissez les genoux pour faire descendre le plateau vers la poitrine sans décoller les fesses du siège. Poussez sur la plateforme pour revenir en position initiale.',
    breathingGuide: 'Inspirez à la descente du chariot, expirez en poussant le plateau.',
    safetyCheckpoints: [
      'Ne JAMAIS verrouiller complètement les genoux en fin de poussée (gardez un léger déverrouillage pour protéger l\'articulation).',
      'Ne laissez jamais le bas du dos et le bassin se décoller du siège au point le plus bas.',
      'Saisissez toujours les poignées pour maintenir le bassin plaqué.'
    ],
    commonMistakesToAvoid: [
      'Mettre trop lourd au détriment de l\'amplitude complète.',
      'Laisser les genoux se rapprocher l\'un de l\'autre pendant la poussée.',
      'Poser les mains sur les genoux au lieu des poignées.'
    ],
    alternatives: [
      'Squat guidé à la Smith Machine',
      'Squat sur caisse (Box Squat)'
    ]
  },
  {
    id: 'fentes-bulgares',
    name: 'Squat bulgare aux haltères (Bulgarian Split Squat)',
    category: 'Ischios & Fessiers',
    targetMuscles: ['Fessiers', 'Quadriceps', 'Ischio-jambiers', 'Stabilisateurs'],
    equipment: 'Haltères',
    difficulty: 'Intermédiaire',
    defaultSets: 3,
    defaultReps: '10 par jambe',
    restSeconds: 90,
    tempo: '2-1-1-0',
    setupInstructions: 'Debout à environ 60-80 cm devant un banc de musculation. Posez le dessus d\'un pied sur le banc à l\'arrière. Tenez un haltère dans chaque main.',
    movementInstructions: 'Descendez le genou arrière en direction du sol en gardant le buste légèrement incliné vers l\'avant (~15°) pour cibler les fessiers. Le genou avant reste stable au-dessus de la cheville. Poussez dans le talon avant pour remonter.',
    breathingGuide: 'Inspirez en descendant, expirez en repoussant le sol avec le talon avant.',
    safetyCheckpoints: [
      'Gardez le genou de la jambe avant stable et aligné avec le deuxième orteil.',
      'Ne laissez pas le dos s\'arquer excessivement.',
      'Répartissez 80% du poids sur la jambe avant et seulement 20% sur la jambe d\'appui arrière.'
    ],
    commonMistakesToAvoid: [
      'Pied avant trop proche du banc, provoquant une contrainte excessive sur le genou.',
      'Pousser avec la jambe arrière au lieu de recruter la jambe avant.',
      'Perdre l\'équilibre en plaçant le pied arrière sur la même ligne que le pied avant.'
    ],
    alternatives: [
      'Fentes marchées aux haltères',
      'Fentes arrières au sol'
    ]
  },
  {
    id: 'souleve-terre-roumain',
    name: 'Soulevé de terre roumain (Romanian Deadlift - RDL)',
    category: 'Ischios & Fessiers',
    targetMuscles: ['Ischio-jambiers', 'Grands fessiers', 'Lombaires', 'Grip'],
    equipment: 'Barre libre',
    difficulty: 'Intermédiaire',
    defaultSets: 4,
    defaultReps: '8 - 10',
    restSeconds: 120,
    tempo: '3-1-1-0',
    setupInstructions: 'Debout pieds sous les hanches, tenez la barre avec une prise pronation à la largeur des cuisses. Épaules tirées en arrière et omoplates verrouillées.',
    movementInstructions: 'Avec les genoux très légèrement déverrouillés (angle fixe), initiez le mouvement par une charnière de hanche (hip hinge) : poussez les fesses loin vers l\'arrière en gardant la barre au contact de vos cuisses. Descendez jusqu\'à mi-tibias en sentant l\'étirement des ischios, puis serrez fort les fessiers pour revenir droit.',
    breathingGuide: 'Inspirez en haut, bloquez pendant la charnière de hanche vers l\'arrière, expirez en contractant les fessiers au sommet.',
    safetyCheckpoints: [
      'La barre doit littéralement raser vos cuisses et tibias pour réduire le bras de levier sur les lombaires.',
      'Le dos doit rester rigoureusement droit du coccyx à la base du crâne (pas de courbure du dos).',
      'Ne pliez pas davantage les genoux au fil de la descente (ce n\'est pas un squat classique).'
    ],
    commonMistakesToAvoid: [
      'Arrondir le haut ou le bas du dos pour aller toucher le sol.',
      'Éloigner la barre du corps vers l\'avant.',
      'Hyperextension lombaire en arrière au sommet du mouvement.'
    ],
    alternatives: [
      'RDL aux haltères (permet une trajectoire plus naturelle)',
      'Leg curl couché sur machine'
    ]
  },

  // HAUT DU CORPS - PECTORAUX & BRAS
  {
    id: 'developpe-couche',
    name: 'Développé couché à la barre (Bench Press)',
    category: 'Pectoraux',
    targetMuscles: ['Grand pectoral', 'Deltoïde antérieur', 'Triceps brachial'],
    equipment: 'Barre libre',
    difficulty: 'Intermédiaire',
    defaultSets: 4,
    defaultReps: '6 - 8',
    restSeconds: 120,
    tempo: '3-0-1-0',
    setupInstructions: 'Allongez-vous sur le banc plat, les yeux directement sous la barre. Pieds bien ancrés au sol. Rétractez et abaissez vos omoplates pour créer un pont stable. Saisissez la barre avec une prise légèrement plus large que les épaules.',
    movementInstructions: 'Décrochez la barre et stabilisez-la bras tendus au-dessus des épaules. Descendez la barre de façon contrôlée vers le bas des pectoraux (ligne mamelonnaire). Les coudes forment un angle de 45° à 70° avec le torse (pas à 90°). Touchez légèrement la poitrine sans rebondir, puis poussez en trajectoire légèrement oblique vers le haut.',
    breathingGuide: 'Inspirez profondément au départ pour gonfler la cage thoracique, retenez lors de la descente, expirez puissamment lors de la poussée.',
    safetyCheckpoints: [
      'Ne laissez jamais les coudes s\'écarter à 90° (position en "T") sous peine de créer un conflit acromio-claviculaire à l\'épaule.',
      'Gardez les poignets droits, la barre repose sur la paume et non sur les doigts.',
      'Pieds fermement ancrés au sol pour utiliser le leg drive sans lever les fesses du banc.'
    ],
    commonMistakesToAvoid: [
      'Faire rebondir la barre sur le sternum.',
      'Décoller les fessiers du banc pour tricher avec la charge.',
      'Prise sans pouce (suicide grip) à bannir pour des raisons évidentes de sécurité.'
    ],
    alternatives: [
      'Développé couché avec haltères (meilleure liberté articulaire)',
      'Développé assis à la machine convergente'
    ]
  },
  {
    id: 'developpe-halteres-incline',
    name: 'Développé incliné aux haltères (Incline Dumbbell Press)',
    category: 'Pectoraux',
    targetMuscles: ['Haut des pectoraux (faisceau claviculaire)', 'Deltoïde antérieur', 'Triceps'],
    equipment: 'Haltères',
    difficulty: 'Intermédiaire',
    defaultSets: 4,
    defaultReps: '8 - 10',
    restSeconds: 90,
    tempo: '3-1-1-0',
    setupInstructions: 'Réglez le banc à une inclinaison de 30° à 45° (éviter plus haut pour ne pas surcharger les épaules). Asseyez-vous avec les haltères sur les genoux, puis basculez en arrière en amenant les charges au niveau de la poitrine.',
    movementInstructions: 'Omoplates serrées contre le dossier, poussez les haltères vers le haut en convergeant légèrement sans les faire s\'entrechoquer. Descendez lentement jusqu\'à sentir un bon étirement des pectoraux sans forcer sur la capsule antérieure de l\'épaule.',
    breathingGuide: 'Inspirez à la descente en ouvrant la cage thoracique, expirez en poussant vers le haut.',
    safetyCheckpoints: [
      'Gardez les coudes rentrés à environ 45-60° du tronc.',
      'Contrôlez parfaitement la phase négative (descente en 3 secondes).',
      'Ne laissez pas les haltères descendre plus bas que le niveau des épaules si vous avez des antécédents d\'instabilité.'
    ],
    commonMistakesToAvoid: [
      'Régler le banc trop droit (> 60°), transformant l\'exercice en développé épaules.',
      'Faire claquer les haltères l\'un contre l\'autre en haut.',
      'Laisser tomber les charges au sol à la fin de la série.'
    ],
    alternatives: [
      'Développé incliné à la Smith Machine',
      'Écarté à la poulie vis-à-vis réglée en bas'
    ]
  },
  {
    id: 'tirage-vertical-poitrine',
    name: 'Tirage vertical poitrine à la poulie (Lat Pulldown)',
    category: 'Dos',
    targetMuscles: ['Grand dorsal', 'Grand rond', 'Trapèzes moyens/inférieurs', 'Biceps'],
    equipment: 'Poulie',
    difficulty: 'Débutant',
    defaultSets: 4,
    defaultReps: '10 - 12',
    restSeconds: 90,
    tempo: '2-1-1-1',
    setupInstructions: 'Réglez le boudin de calage pour que vos cuisses soient bien bloquées sans bouger. Saisissez la barre large en pronation (mains plus larges que les épaules). Asseyez-vous buste droit, poitrine sortie.',
    movementInstructions: 'Initiez le mouvement en abaissant vos omoplates (dépression scapulaire), puis tirez la barre vers le haut de la poitrine en ramenant vos coudes vers le bas et les côtes. Marquez 1 seconde de contraction maximale, puis remontez lentement avec contrôle.',
    breathingGuide: 'Inspirez en étirant les bras vers le haut, expirez en tirant la barre vers la clavicule.',
    safetyCheckpoints: [
      'Tirez toujours la barre DEVANT la tête (vers le sternum). Ne tirez JAMAIS derrière la nuque (risque de hernie cervicale et lésion de la coiffe des rotateurs).',
      'Ne balancez pas excessivement le torse d\'avant en arrière pour utiliser l\'élan.',
      'Gardez les avant-bras alignés dans la trajectoire du câble.'
    ],
    commonMistakesToAvoid: [
      'Tirer avec la force des bras au lieu d\'engager le dos.',
      'S\'allonger en arrière à 45° pendant la phase de tirage.',
      'Laisser les épaules monter aux oreilles en haut du mouvement sans contrôle.'
    ],
    alternatives: [
      'Tractions à la barre fixe (assistées avec élastique si besoin)',
      'Tirage vertical prise neutre étroite (poignée triangle)'
    ]
  },
  {
    id: 'tirage-horizontal-rameur',
    name: 'Tirage horizontal poulie basse (Seated Cable Row)',
    category: 'Dos',
    targetMuscles: ['Épaisseur du dos', 'Trapèzes', 'Rhomboïdes', 'Grand dorsal', 'Biceps'],
    equipment: 'Poulie',
    difficulty: 'Débutant',
    defaultSets: 4,
    defaultReps: '10 - 12',
    restSeconds: 90,
    tempo: '2-1-1-1',
    setupInstructions: 'Assis sur le banc, pieds calés sur les repose-pieds, genoux légèrement fléchis. Saisissez la poignée (triangle ou prise neutre) et redressez le torse à la verticale.',
    movementInstructions: 'Tirez la poignée vers le nombril en tirant les coudes vers l\'arrière et en serrant les omoplates comme si vous vouliez écraser une noix entre elles. Contrôlez le retour vers l\'avant en laissant le grand dorsal s\'étirer sans arrondir les lombaires.',
    breathingGuide: 'Inspirez lors du retour des bras vers l\'avant, expirez en ramenant la poignée contre l\'abdomen.',
    safetyCheckpoints: [
      'Maintenez la courbure naturelle du bas du dos à tout moment.',
      'Ne laissez pas les épaules s\'enrouler vers l\'avant.',
      'Fixez le bassin : ne pas donner d\'à-coups avec le buste.'
    ],
    commonMistakesToAvoid: [
      'Balançoire excessive du buste pour démarrer la charge.',
      'Remonter les épaules vers les oreilles pendant le tirage.',
      'Tirer trop haut au niveau de la gorge.'
    ],
    alternatives: [
      'Rowing bûcheron avec un haltère sur banc',
      'Rowing barre buste penché (Bent-over Row)'
    ]
  },
  {
    id: 'developpe-militaire-halteres',
    name: 'Développé militaire assis aux haltères (Seated Dumbbell Shoulder Press)',
    category: 'Épaules',
    targetMuscles: ['Deltoïdes (faisceau antérieur et latéral)', 'Triceps', 'Haut des trapèzes'],
    equipment: 'Haltères',
    difficulty: 'Intermédiaire',
    defaultSets: 4,
    defaultReps: '8 - 10',
    restSeconds: 90,
    tempo: '3-0-1-0',
    setupInstructions: 'Réglez le dossier du banc presque à la verticale (environ 75-80° pour ne pas bloquer l\'articulation scapulo-humérale). Amenez les haltères à la hauteur des épaules.',
    movementInstructions: 'Placez les coudes légèrement vers l\'avant dans le plan scapulaire (~30° vers l\'avant, pas dans l\'alignement direct des oreilles). Poussez les haltères vers le ciel jusqu\'à extension des bras sans bloquer les coudes, puis redescendez sous contrôle.',
    breathingGuide: 'Inspirez en descendant les haltères au niveau des oreilles, expirez lors de la poussée vers le haut.',
    safetyCheckpoints: [
      'Ne cambrez pas exagérément le bas du dos : gardez les abdos contractés et le dos appuyé.',
      'Évitez d\'écarter les coudes complètement sur les côtés pour préserver l\'espace sous-acromial.',
      'Pieds fermement à plat au sol pour une stabilité optimale.'
    ],
    commonMistakesToAvoid: [
      'Pousser la charge derrière la tête.',
      'Claquer les haltères en l\'air.',
      'Descendre trop bas de façon asymétrique.'
    ],
    alternatives: [
      'Développé épaules à la machine convergente',
      'Élévations latérales aux haltères ou poulie'
    ]
  },
  {
    id: 'dips-barres-paralleles',
    name: 'Dips aux barres parallèles (ou machine assistée)',
    category: 'Bras (Biceps & Triceps)',
    targetMuscles: ['Triceps brachial', 'Bas des pectoraux', 'Deltoïde antérieur'],
    equipment: 'Poids du corps',
    difficulty: 'Intermédiaire',
    defaultSets: 3,
    defaultReps: '8 - 12',
    restSeconds: 90,
    tempo: '2-1-1-0',
    setupInstructions: 'Prenez appui sur les barres parallèles, bras tendus, épaules abaissées loin des oreilles. Croisez les chevilles.',
    movementInstructions: 'Fléchissez les coudes en contrôlant la descente jusqu\'à ce que vos bras forment un angle droit (90°). Gardez les coudes orientés vers l\'arrière. Poussez fermement pour revenir bras tendus.',
    breathingGuide: 'Inspirez à la descente, expirez en repoussant les barres.',
    safetyCheckpoints: [
      'Ne descendez jamais sous les 90° si vous manquez de souplesse aux épaules (risque majeur d\'étirement ligamentaire).',
      'Si c\'est trop difficile, utilisez impérativement la machine de dips assistée ou un élastique résistant.',
      'Gardez les épaules verrouillées vers le bas (dépression des omoplates).'
    ],
    commonMistakesToAvoid: [
      'Laisser les épaules s\'enrouler vers l\'avant.',
      'Se balancer avec les jambes.',
      'Effectuer des demi-répétitions sans amplitude adéquate.'
    ],
    alternatives: [
      'Extensions triceps à la poulie haute avec corde',
      'Développé couché prise serrée'
    ]
  },
  {
    id: 'curl-biceps-incline',
    name: 'Curl biceps incliné aux haltères (Incline Dumbbell Curl)',
    category: 'Bras (Biceps & Triceps)',
    targetMuscles: ['Biceps brachial (longue portion)', 'Brachial antérieur'],
    equipment: 'Haltères',
    difficulty: 'Débutant',
    defaultSets: 3,
    defaultReps: '10 - 12',
    restSeconds: 75,
    tempo: '3-0-1-1',
    setupInstructions: 'Réglez un banc à 60°. Asseyez-vous le dos collé avec un haltère dans chaque main, bras pendants perpendiculaires au sol.',
    movementInstructions: 'Sans bouger les coudes ni les projeter vers l\'avant, fléchissez les bras en supination (paumes vers le haut). Contractez intensément le biceps au sommet 1 seconde, puis redescendez très lentement pour profiter de l\'étirement de la longue portion.',
    breathingGuide: 'Inspirez en bas, expirez lors de la montée du curl.',
    safetyCheckpoints: [
      'Gardez la tête et le haut du dos en contact avec le banc.',
      'Ne balancez pas les épaules ni le buste pour lancer le poids.',
      'Les coudes restent immobiles, c\'est l\'avant-bras qui pivote.'
    ],
    commonMistakesToAvoid: [
      'Avancer les coudes pour faciliter la charge (recrutement des deltoïdes au lieu des biceps).',
      'Relâcher brusquement la descente.',
      'Prendre des charges excessives qui forcent à décoller le dos.'
    ],
    alternatives: [
      'Curl à la barre EZ debout',
      'Curl pupitre Larry Scott'
    ]
  },
  {
    id: 'extensions-triceps-corde',
    name: 'Extensions triceps à la poulie haute avec corde',
    category: 'Bras (Biceps & Triceps)',
    targetMuscles: ['Triceps brachial (vaste externe et vaste interne)'],
    equipment: 'Poulie',
    difficulty: 'Débutant',
    defaultSets: 3,
    defaultReps: '12 - 15',
    restSeconds: 60,
    tempo: '2-0-1-1',
    setupInstructions: 'Fixez une corde sur la poulie haute. Reculez d\'un pas, buste légèrement incliné vers l\'avant, genoux souples. Coudes collés le long des flancs.',
    movementInstructions: 'Poussez la corde vers le bas jusqu\'à extension complète des bras. En fin de mouvement, écartez légèrement les deux brins de la corde vers l\'extérieur pour une contraction maximale. Remontez avec contrôle jusqu\'à ce que les avant-bras soient à l\'horizontale.',
    breathingGuide: 'Inspirez à la remontée de la corde, expirez lors de l\'extension vers le bas.',
    safetyCheckpoints: [
      'Les coudes doivent rester scellés contre le corps, sans jamais bouger d\'avant en arrière.',
      'Poignets fermes et verrouillés.',
      'Ne vous aidez pas du poids du corps en vous affaissant au-dessus de la corde.'
    ],
    commonMistakesToAvoid: [
      'Écarter les coudes pendant l\'effort.',
      'Remonter trop haut en laissant les mains monter au-dessus des épaules.',
      'Donner des à-coups avec le dos.'
    ],
    alternatives: [
      'Barre front (Skull crushers) aux haltères',
      'Kickback triceps à la poulie basse'
    ]
  },
  {
    id: 'gainage-planche-pallof',
    name: 'Gainage abdominal dynamique & Pallof Press',
    category: 'Abdominaux & Core',
    targetMuscles: ['Transverse', 'Obliques', 'Grand droit', 'Stabilisateurs profonds'],
    equipment: 'Poulie',
    difficulty: 'Débutant',
    defaultSets: 3,
    defaultReps: '12 répétitions ou 45 sec',
    restSeconds: 60,
    tempo: '2-2-2-0',
    setupInstructions: 'Debout perpendiculaire à une poulie réglée à hauteur de poitrine. Saisissez la poignée à deux mains contre votre sternum. Écartez les pieds à la largeur des épaules, genoux souples.',
    movementInstructions: 'Poussez la poignée droit devant vous bras tendus en résistant fermement à la rotation qu\'impose le câble. Maintenez 2 secondes bras tendus, puis ramenez les mains contre le sternum avec contrôle.',
    breathingGuide: 'Respirez de façon régulière et rythmée sans jamais vous mettre en apnée prolongée.',
    safetyCheckpoints: [
      'Le bassin et les épaules doivent rester parfaitement droits face à l\'avant (anti-rotation).',
      'Verrouillez les fessiers et rentrez le nombril vers la colonne vertébrale.',
      'Gardez les épaules basses et détendues.'
    ],
    commonMistakesToAvoid: [
      'Tourner le torse vers la poulie sous l\'effet de la résistance.',
      'Bloquer sa respiration.',
      'Hyperextension lombaire.'
    ],
    alternatives: [
      'Planche classique sur les avant-bras (4 séries de 45 secondes)',
      'Crunchs à la poulie haute à genoux'
    ]
  }
];
