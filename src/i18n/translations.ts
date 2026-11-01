import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  appName: string;
  threeBars: {
    bar1: {
      title: string;
      subtitle: string;
      badge: string;
    };
    bar2: {
      title: string;
      subtitle: string;
      badge: string;
    };
    bar3: {
      title: string;
      subtitle: string;
      badge: string;
    };
  };
  nav: {
    today: string;
    workout: string;
    exercises: string;
    cardio: string;
    nutrition: string;
    coach: string;
    profile: string;
    menuTitle: string;
    menuSubtitle: string;
    closeMenu: string;
    openMenu: string;
    desc: {
      today: string;
      workout: string;
      exercises: string;
      cardio: string;
      nutrition: string;
      coach: string;
    };
  };
  todayAdvisor: {
    badge: string;
    heroTitle: string;
    heroDesc: string;
    checkpoints: {
      safety: string;
      cardio: string;
      recovery: string;
    };
    q1Title: string;
    q1Desc: string;
    q1Upper: string;
    q1UpperSub: string;
    q1Lower: string;
    q1LowerSub: string;
    q1Full: string;
    q1FullSub: string;
    q1None: string;
    q1NoneSub: string;
    q2Title: string;
    q2Express: string;
    q2Standard: string;
    q2Full: string;
    q3Title: string;
    q3High: string;
    q3Med: string;
    q3Low: string;
    verdictBadge: string;
    durationEst: string;
    mustWorkToday: string;
    cardioRecTitle: string;
    startBtn: string;
    cardioBtn: string;
    manualChoice: string;
  };
  workout: {
    activeSession: string;
    durationEst: string;
    exercisesCount: string;
    warmupTitle: string;
    warmupSub: string;
    restTimerTitle: string;
    set: string;
    loadKg: string;
    reps: string;
    status: string;
    validate: string;
    validated: string;
    postCardioTitle: string;
    machineAdvised: string;
    finishWorkout: string;
    congratsTitle: string;
    congratsSub: string;
    seePostMeal: string;
  };
  cardio: {
    badge: string;
    heroTitle: string;
    heroDesc: string;
    fatLossTab: string;
    muscleGainTab: string;
    ruleWhenTitle: string;
    ruleWhenDesc: string;
    ruleZoneTitle: string;
    ruleZoneDesc: string;
    ruleImpactTitle: string;
    ruleImpactDesc: string;
    selectMachineTitle: string;
    minAdvised: string;
    approxKcal: string;
    seeBtn: string;
    selectedMachine: string;
    jointImpact: string;
    protocolFatLoss: string;
    protocolMuscle: string;
    intensityZone: string;
    exactSettings: string;
    idealTiming: string;
    safetyTitle: string;
    attentionTitle: string;
  };
  nutrition: {
    badge: string;
    heroTitle: string;
    heroDesc: string;
    targetCals: string;
    tdeeTotal: string;
    proteinTitle: string;
    proteinSub: string;
    carbsTitle: string;
    carbsSub: string;
    fatsTitle: string;
    fatsSub: string;
    waterTitle: string;
    waterTarget: string;
    waterGlasses: string;
    waterBtn: string;
    quickLogTitle: string;
    quickLogSub: string;
    resetBtn: string;
    consumedCals: string;
    consumedProt: string;
    quickAddTitle: string;
    timingTitle: string;
    timingSub: string;
    t1: string;
    t2: string;
    t3: string;
    t4: string;
    sampleDayTitle: string;
  };
  coach: {
    title: string;
    liveBadge: string;
    subtitle: string;
    inputPlaceholder: string;
    analyzing: string;
    welcomeMsg: (name: string) => string;
  };
  profile: {
    title: string;
    subtitle: string;
    nameLabel: string;
    goalLabel: string;
    goals: {
      fat_loss: { title: string; desc: string };
      muscle_gain: { title: string; desc: string };
      strength: { title: string; desc: string };
      general_fitness: { title: string; desc: string };
    };
    genderLabel: string;
    genderMale: string;
    genderFemale: string;
    ageLabel: string;
    weightLabel: string;
    heightLabel: string;
    freqLabel: (days: number) => string;
    levelLabel: string;
    levelBeginner: string;
    levelInter: string;
    levelAdv: string;
    cancelBtn: string;
    saveBtn: string;
  };
}> = {
  fr: {
    appName: 'kolotrini',
    threeBars: {
      bar1: {
        title: 'Musculation & Séance du Jour',
        subtitle: 'Quoi travailler aujourd\'hui (Haut ou Bas) & Guide de sécurité',
        badge: 'Programme'
      },
      bar2: {
        title: 'Machines Cardio & Durées Ciblées',
        subtitle: 'Tapis, StairMaster, Rameur : combien de temps selon ton objectif',
        badge: 'Cardio'
      },
      bar3: {
        title: 'Suivi Nutritionnel & Métabolisme',
        subtitle: 'Calcul des calories, protéines (~2g/kg), timing des repas & eau',
        badge: 'Nutrition'
      }
    },
    nav: {
      today: 'Quoi travailler aujourd\'hui ?',
      workout: 'Séance en salle',
      exercises: 'Guide Mouvements & Sécurité',
      cardio: 'Machines Cardio',
      nutrition: 'Suivi Nutritionnel',
      coach: 'Coach Virtuel',
      profile: 'Mon Profil',
      menuTitle: 'Menu de Navigation',
      menuSubtitle: 'Accède à tous les modules d\'entraînement et de nutrition',
      closeMenu: 'Fermer le menu',
      openMenu: 'Ouvrir le menu de navigation',
      desc: {
        today: 'Diagnostic Haut / Bas & Conseils selon fatigue',
        workout: 'Séance active, séries, répétitions & chrono',
        exercises: 'Posture, biomécanique & erreurs à éviter',
        cardio: 'Minutage exact & machines recommandées',
        nutrition: 'Calculateur calories, protéines (~2g/kg) & eau',
        coach: 'Discute en direct avec ton coach IA'
      }
    },
    todayAdvisor: {
      badge: 'Séance du Jour · Coach Athlétique',
      heroTitle: 'Qu\'est-ce qu\'il faut travailler aujourd\'hui en salle ?',
      heroDesc: 'Ne rentre plus jamais en salle de sport dans l\'hésitation. Réponds à 3 questions rapides pour recevoir ta recommandation personnalisée selon ton objectif.',
      checkpoints: {
        safety: 'Sécurité articulaire garantie',
        cardio: 'Cardio ciblé par machine',
        recovery: 'Surcompensation physiologique'
      },
      q1Title: '1. Qu\'as-tu travaillé la dernière fois ?',
      q1Desc: 'Aide ton coach à adapter l\'entraînement à ton état musculaire réel.',
      q1Upper: 'Haut du corps',
      q1UpperSub: 'Pecs, Dos, Épaules',
      q1Lower: 'Bas du corps',
      q1LowerSub: 'Cuisses, Fessiers',
      q1Full: 'Full Body',
      q1FullSub: 'Corps entier',
      q1None: 'Repos / Reprise',
      q1NoneSub: 'Rien depuis 3+ jours',
      q2Title: '2. Combien de temps as-tu en salle aujourd\'hui ?',
      q2Express: 'Express',
      q2Standard: 'Standard',
      q2Full: 'Complet',
      q3Title: '3. Quel est ton niveau d\'énergie actuel ?',
      q3High: 'Au top',
      q3Med: 'Moyen',
      q3Low: 'Fatigué',
      verdictBadge: 'Verdict du Coach · Recommandation',
      durationEst: 'Durée estimée',
      mustWorkToday: 'Aujourd\'hui, il faut travailler :',
      cardioRecTitle: 'Cardio & Machine recommandée aujourd\'hui',
      startBtn: 'Lancer la séance',
      cardioBtn: 'Guide Machines Cardio',
      manualChoice: 'Ou choisis manuellement le split que tu préfères faire aujourd\'hui :'
    },
    workout: {
      activeSession: 'Séance Active',
      durationEst: 'Durée estimée',
      exercisesCount: 'Exercices',
      warmupTitle: 'Échauffement dynamique obligatoire',
      warmupSub: 'Ne jamais sauter l\'échauffement',
      restTimerTitle: 'Chronomètre de Repos Inter-Séries',
      set: 'Série',
      loadKg: 'Charge (kg)',
      reps: 'Répétitions',
      status: 'Statut',
      validate: 'Valider',
      validated: 'Validée',
      postCardioTitle: 'Cardio de Fin de Séance',
      machineAdvised: 'Machine préconisée',
      finishWorkout: 'Valider & Terminer la séance',
      congratsTitle: 'Séance validée avec succès !',
      congratsSub: 'Ton split a été mis à jour pour le diagnostic de ta prochaine séance.',
      seePostMeal: 'Voir la collation post-séance'
    },
    cardio: {
      badge: 'Guide des Machines Cardio · Temps & Intensité',
      heroTitle: 'Quelle machine cardio choisir et combien de temps ?',
      heroDesc: 'Le cardio n\'est pas une punition : c\'est un outil stratégique. Trop de cardio intense peut épuiser le muscle ; un cardio bien dosé accélère l\'oxydation des graisses et la santé cardiaque.',
      fatLossTab: 'Éliminer le gras (Sèche)',
      muscleGainTab: 'Prise de masse / Santé',
      ruleWhenTitle: 'Quand faire le cardio ?',
      ruleWhenDesc: 'Toujours APRÈS la musculation. Vos réserves de glycogène doivent servir à soulever lourd. Faire le cardio après force le corps à brûler directement les graisses.',
      ruleZoneTitle: 'Zone 2 vs HIIT',
      ruleZoneDesc: 'Pour la perte de gras sans perte de muscle, préférez la Zone 2 (65-72% FC) : vous pouvez parler sans étouffer. Le HIIT est réservé à des séances courtes de 12 min.',
      ruleImpactTitle: 'Impact Articulaire',
      ruleImpactDesc: 'Si vous avez mal aux genoux ou au dos, évitez la course avec chocs. Privilégiez la marche inclinée, le vélo elliptique ou le rameur.',
      selectMachineTitle: 'Sélectionne une machine de ta salle :',
      minAdvised: 'min conseillées',
      approxKcal: 'kcal/h',
      seeBtn: 'Voir',
      selectedMachine: 'Machine sélectionnée',
      jointImpact: 'Impact articulaire',
      protocolFatLoss: 'Protocole Perte de gras (Sèche)',
      protocolMuscle: 'Protocole Prise de masse',
      intensityZone: 'Zone d\'intensité cible',
      exactSettings: 'Réglages exacts de la machine',
      idealTiming: 'Moment recommandé',
      safetyTitle: 'Consignes de sécurité & erreurs à éviter',
      attentionTitle: 'Attention :'
    },
    nutrition: {
      badge: 'Nutrition Personnalisée & Métabolisme',
      heroTitle: 'La nutrition adaptée à tes résultats en salle',
      heroDesc: 'Pour construire du muscle ou sécher harmonieusement, la régularité nutritionnelle représente 70% de l\'équation corporelle.',
      targetCals: 'Calories Cibles / Jour',
      tdeeTotal: 'Dépense totale (TDEE)',
      proteinTitle: 'Protéines (~2g / kg)',
      proteinSub: 'Reconstruction & anabolisme',
      carbsTitle: 'Glucides (Énergie)',
      carbsSub: 'Glycogène & force en séance',
      fatsTitle: 'Lipides Sains',
      fatsSub: 'Système hormonal & articulations',
      waterTitle: 'Hydratation du Jour',
      waterTarget: 'Objectif',
      waterGlasses: 'verres (250ml)',
      waterBtn: '+1 Verre (250 ml)',
      quickLogTitle: 'Suivi Rapide Calories & Protéines',
      quickLogSub: 'Aujourd\'hui à ce jour',
      resetBtn: 'Réinitialiser',
      consumedCals: 'Calories consommées',
      consumedProt: 'Protéines consommées',
      quickAddTitle: 'Ajout rapide 1-clic :',
      timingTitle: 'Timing Péri-Entraînement : Quoi manger quand ?',
      timingSub: 'Le bon carburant au bon moment pour des barres plus légères et une récupération accélérée',
      t1: '1. 2h avant la salle',
      t2: '2. 30 min avant',
      t3: '3. Pendant l\'effort',
      t4: '4. Post-entraînement',
      sampleDayTitle: 'Exemple de Journée Type Nutritionnelle'
    },
    coach: {
      title: 'Coach Athlète Pro',
      liveBadge: 'En direct à la salle',
      subtitle: 'Conseils certifiés · Biomécanique, sécurité des mouvements & nutrition',
      inputPlaceholder: 'Pose une question à ton coach (ex: douleur au genou, alternative au banc...)',
      analyzing: 'Le coach analyse ta situation biomécanique...',
      welcomeMsg: (name: string) => `Salut ${name} ! Je suis ton Coach Athlète Pro sur kolotrini. Tu es actuellement à la salle de sport ou tu prépares ta séance ?\n\nTu peux me poser n'importe quelle question : un mouvement qui te fait mal, une machine occupée à remplacer, ton temps de cardio sur tapis ou ce qu'il faut manger ce soir. Comment puis-je t'aider aujourd'hui ?`
    },
    profile: {
      title: 'Mon Profil & Objectifs',
      subtitle: 'Paramètre ton profil pour des conseils d\'entraînement et de nutrition sur-mesure',
      nameLabel: 'Prénom ou pseudo',
      goalLabel: 'Objectif Personnel Principal',
      goals: {
        fat_loss: { title: 'Éliminer le gras (Sèche)', desc: 'Brûler les réserves lipidiques et tonifier' },
        muscle_gain: { title: 'Gagner de la masse', desc: 'Hypertrophie musculaire et volume' },
        strength: { title: 'Force Athlétique', desc: 'Performance maximale sur les barres' },
        general_fitness: { title: 'Santé & Vitalité', desc: 'Bien-être cardiovasculaire et longévité' }
      },
      genderLabel: 'Sexe',
      genderMale: 'Homme',
      genderFemale: 'Femme',
      ageLabel: 'Âge',
      weightLabel: 'Poids (kg)',
      heightLabel: 'Taille (cm)',
      freqLabel: (days: number) => `Fréquence en salle (${days} jours / sem)`,
      levelLabel: 'Niveau d\'expérience',
      levelBeginner: 'Débutant (< 6 mois en salle)',
      levelInter: 'Intermédiaire (6 mois à 2 ans)',
      levelAdv: 'Avancé (+ de 2 ans réguliers)',
      cancelBtn: 'Annuler',
      saveBtn: 'Enregistrer mon profil'
    }
  },
  ar: {
    appName: 'kolotrini',
    threeBars: {
      bar1: {
        title: 'كمال الأجسام وتمارين اليوم',
        subtitle: 'ماذا تلعب اليوم (علوي أم سفلي) ودليل أمان الحركات',
        badge: 'التمارين'
      },
      bar2: {
        title: 'أجهزة الكارديو والمدة المحددة',
        subtitle: 'المشاية، الدرج، التجديف: كم دقيقة حسب هدفك الشخصي',
        badge: 'الكارديو'
      },
      bar3: {
        title: 'المتابعة الغذائية وحساب السعرات',
        subtitle: 'حساب السعرات، البروتين (~2غ/كغ)، توقيت الوجبات وشرب الماء',
        badge: 'التغذية'
      }
    },
    nav: {
      today: 'ماذا أتدرب اليوم؟',
      workout: 'التمارين في الصالة',
      exercises: 'دليل الحركات والسلامة',
      cardio: 'أجهزة الكارديو',
      nutrition: 'المتابعة الغذائية',
      coach: 'المدرب الذكي',
      profile: 'ملفي الشخصي',
      menuTitle: 'قائمة التنقل الرئيسية',
      menuSubtitle: 'الوصول السريع لجميع أقسام التمارين والتغذية',
      closeMenu: 'إغلاق القائمة',
      openMenu: 'فتح قائمة التنقل',
      desc: {
        today: 'تشخيص الجزء العلوي/السفلي واستعادة العضلات',
        workout: 'التمرين النشط، الجولات والعدات ومؤقت الراحة',
        exercises: 'الوضعية السليمة والميكانيكا وتفادي الإصابات',
        cardio: 'المدة الزمنية الدقيقة والآلات المخصصة',
        nutrition: 'حساب السعرات، البروتين (~2غ/كغ) وتتبع الماء',
        coach: 'استشارة فورية مع مدربك الرياضي الذكي'
      }
    },
    todayAdvisor: {
      badge: 'تمرين اليوم · المدرب الرياضي',
      heroTitle: 'ماذا يجب أن تتمرن اليوم في صالة الجيم؟',
      heroDesc: 'لا تدخل الصالة وأنت في حيرة أبداً. أجب عن 3 أسئلة سريعة لتحصل على التوصية المخصصة حسب هدفك البدني.',
      checkpoints: {
        safety: 'أمان المفاصل مضمون',
        cardio: 'كارديو محدد حسب كل جهاز',
        recovery: 'الاستشفاء العضلي العلمي'
      },
      q1Title: '1. ماذا مرنت في آخر حصة تدريبية؟',
      q1Desc: 'ساعد مدربك في تعديل الحصة حسب حالتك العضلية الواقعية.',
      q1Upper: 'الجزء العلوي',
      q1UpperSub: 'صدر، ظهر، أكتاف، ذراعين',
      q1Lower: 'الجزء السفلي',
      q1LowerSub: 'أفخاذ، عضلات الأرداف',
      q1Full: 'كامل الجسم',
      q1FullSub: 'جميع العضلات معاً',
      q1None: 'راحة / عودة للتمرين',
      q1NoneSub: 'توقف منذ 3 أيام أو أكثر',
      q2Title: '2. كم من الوقت لديك في الصالة اليوم؟',
      q2Express: 'سريع (35 د)',
      q2Standard: 'متوسط (55 د)',
      q2Full: 'كامل (75+ د)',
      q3Title: '3. كيف تشعر بمستوى طاقتك الآن؟',
      q3High: 'طاقة عالية',
      q3Med: 'متوسط (تعب خفيف)',
      q3Low: 'تعب ملحوظ',
      verdictBadge: 'قرار المدرب · التوصية الدقيقة',
      durationEst: 'المدة المقدرة',
      mustWorkToday: 'اليوم يجب أن تتمرن :',
      cardioRecTitle: 'جهاز الكارديو والمدة الموصى بها اليوم',
      startBtn: 'ابدأ تمرين اليوم',
      cardioBtn: 'دليل أجهزة الكارديو',
      manualChoice: 'أو اختر يدوياً التقسيمة التي تفضلها اليوم:'
    },
    workout: {
      activeSession: 'الحصة الحالية',
      durationEst: 'المدة المقدرة',
      exercisesCount: 'التمارين',
      warmupTitle: 'الإحماء الحركي الإجباري',
      warmupSub: 'لا تتجاهل الإحماء أبداً لحماية مفاصلك',
      restTimerTitle: 'مؤقت الراحة بين المجموعات',
      set: 'المجموعة',
      loadKg: 'الوزن (كغ)',
      reps: 'التكرارات',
      status: 'الحالة',
      validate: 'تأكيد',
      validated: 'مكتملة',
      postCardioTitle: 'كارديو نهاية التمرين',
      machineAdvised: 'الجهاز الموصى به',
      finishWorkout: 'إنهاء وتأكيد التمرين بالكامل',
      congratsTitle: 'أحسنت! تم إكمال الحصة بنجاح',
      congratsSub: 'تم تحديث جدولك لحساب الحصة القادمة بدقة.',
      seePostMeal: 'وجبة ما بعد التمرين'
    },
    cardio: {
      badge: 'دليل أجهزة الكارديو · الوقت والشدة',
      heroTitle: 'أي جهاز كارديو تختار وكم دقيقة؟',
      heroDesc: 'الكارديو ليس عقاباً بل أداة مدروسة. الكارديو الزائد قد يهدم العضلات، بينما الكارديو الدقيق يحرق الدهون ويدعم صحة القلب.',
      fatLossTab: 'حرق الدهون (التنشيف)',
      muscleGainTab: 'بناء العضلات / الصحة',
      ruleWhenTitle: 'متى تلعب الكارديو؟',
      ruleWhenDesc: 'دائماً بعد تمارين الحديد. يجب استغلال مخازن الجليكوجين لرفع الأوزان، ثم يجبر الكارديو اللاحق الجسم على حرق الدهون مباشرة.',
      ruleZoneTitle: 'المنطقة الثانية Zone 2 مقابل HIIT',
      ruleZoneDesc: 'لحرق الدهون دون خسارة العضل، اختر Zone 2 (65-72% نبض) حيث تستطيع التحدث دون انقطاع نفس.',
      ruleImpactTitle: 'أمان المفاصل',
      ruleImpactDesc: 'إذا كان لديك ألم بالركبة أو الظهر، تجنب الجري ذو الصدمات. استعمل المشي المائل أو الدراجة البيضاوية أو التجديف.',
      selectMachineTitle: 'اختر جهازاً من صالتك الرياضية:',
      minAdvised: 'دقيقة موصى بها',
      approxKcal: 'سعرة/ساعة',
      seeBtn: 'عرض',
      selectedMachine: 'الجهاز المختار',
      jointImpact: 'تأثير المفاصل',
      protocolFatLoss: 'بروتوكول حرق الدهون (تنشيف)',
      protocolMuscle: 'بروتوكول بناء العضلات',
      intensityZone: 'مستوى الشدة المستهدف',
      exactSettings: 'إعدادات الجهاز الدقيقة',
      idealTiming: 'الوقت الموصى به',
      safetyTitle: 'تعليمات الأمان وأخطاء شائعة',
      attentionTitle: 'تنبيه هـام :'
    },
    nutrition: {
      badge: 'التغذية الرياضية المخصصة ومعدل الحرق',
      heroTitle: 'التغذية المصممة لنتائجك في الجيم',
      heroDesc: 'لبناء عضلات صافية أو التخلص من الدهون، يمثل الانضباط الغذائي 70% من النتيجة الإجمالية لجسمك.',
      targetCals: 'السعرات المستهدفة يومياً',
      tdeeTotal: 'إجمالي الحرق اليومي (TDEE)',
      proteinTitle: 'البروتين (~2غ / كغ)',
      proteinSub: 'البناء والاستشفاء العضلي',
      carbsTitle: 'الكربوهيدرات (الطاقة)',
      carbsSub: 'شحن الجليكوجين والقوة',
      fatsTitle: 'الدهون الصحية',
      fatsSub: 'توازن الهرمونات والمفاصل',
      waterTitle: 'شرب الماء اليومي',
      waterTarget: 'الهدف',
      waterGlasses: 'أكواب (250 مل)',
      waterBtn: '+1 كوب ماء (250 مل)',
      quickLogTitle: 'المتابعة السريعة للسعرات والبروتين',
      quickLogSub: 'المستهلك اليوم حتى الآن',
      resetBtn: 'إعادة ضبط',
      consumedCals: 'السعرات المستهلكة',
      consumedProt: 'البروتين المستهلك',
      quickAddTitle: 'إضافة سريعة بنقرة واحدة:',
      timingTitle: 'توقيت الوجبات حول التمرين : ماذا تأكل ومتى؟',
      timingSub: 'الوقود الصحيح في الوقت المناسب لرفع أوزان أفضل وتسريع الاستشفاء',
      t1: '1. قبل التمرين بساعتين',
      t2: '2. قبل التمرين بـ 30 دقيقة',
      t3: '3. أثناء التمرين',
      t4: '4. بعد التمرين مباشرة',
      sampleDayTitle: 'نموذج يوم غذائي كامل ومثالي'
    },
    coach: {
      title: 'المدرب الذكي المحترف',
      liveBadge: 'مباشر في الصالة',
      subtitle: 'نصائح رياضية موثوقة · ميكانيكا الجسم، أمان الحركات والتغذية',
      inputPlaceholder: 'اسأل مدربك (مثال: ألم بالظهر في السكوات، بديل لجهاز مشغول...)',
      analyzing: 'المدرب يحلل حالتك التدريبية والفيزيولوجية...',
      welcomeMsg: (name: string) => `أهلاً بك يا ${name}! أنا مدربك الرياضي المعتمد على kolotrini. هل أنت الآن في الصالة أم تجهز لتمرينك؟\n\nيمكنك سؤالي عن أي شيء: تمرين يسبب لك انزعاجاً، جهاز مشغول ترغب باستبداله، كم دقيقة كارديو تمشي على المشاية، أو ماذا تأكل الليلة بعد التمرين. كيف يمكنني مساعدتك؟`
    },
    profile: {
      title: 'ملفي الشخصي وأهدافي',
      subtitle: 'اضبط بياناتك لتلقي خطة تدريبية وغذائية مفصلة بدقة لمقاساتك',
      nameLabel: 'الاسم أو اللقب',
      goalLabel: 'الهدف الشخصي الأساسي',
      goals: {
        fat_loss: { title: 'حرق الدهون (التنشيف)', desc: 'استهداف الدهون العنيدة ونحت الجسم' },
        muscle_gain: { title: 'زيادة الكتلة العضلية', desc: 'تضخيم وبناء عضلات نقية' },
        strength: { title: 'زيادة القوة البدنية', desc: 'أداء أقصى ورفع أوزان أثقل' },
        general_fitness: { title: 'الصحة والحيوية', desc: 'لياقة قلبية وتنفسية ونشاط عام' }
      },
      genderLabel: 'الجنس',
      genderMale: 'ذكر',
      genderFemale: 'أنثى',
      ageLabel: 'العمر',
      weightLabel: 'الوزن (كغ)',
      heightLabel: 'الطول (سم)',
      freqLabel: (days: number) => `مرات الذهاب للصالة (${days} أيام / أسبوع)`,
      levelLabel: 'مستوى الخبرة',
      levelBeginner: 'مبتدئ (أقل من 6 أشهر)',
      levelInter: 'متوسط (من 6 أشهر إلى سنتين)',
      levelAdv: 'متقدم (أكثر من سنتين بانتظام)',
      cancelBtn: 'إلغاء',
      saveBtn: 'حفظ الملف الشخصي'
    }
  },
  en: {
    appName: 'kolotrini',
    threeBars: {
      bar1: {
        title: 'Gym Workout & Today Split',
        subtitle: 'What to train today (Upper or Lower) & Form Safety Guide',
        badge: 'Workout'
      },
      bar2: {
        title: 'Cardio Machines & Target Times',
        subtitle: 'Treadmill, StairMaster, Rower: exact minutes for your goal',
        badge: 'Cardio'
      },
      bar3: {
        title: 'Nutrition Tracking & Metabolism',
        subtitle: 'Daily calories, protein targets (~2g/kg), meal timing & water',
        badge: 'Nutrition'
      }
    },
    nav: {
      today: 'What to train today?',
      workout: 'Gym Workout',
      exercises: 'Exercise & Form Safety Guide',
      cardio: 'Cardio Machines',
      nutrition: 'Nutrition Tracker',
      coach: 'Virtual Coach',
      profile: 'My Profile',
      menuTitle: 'Navigation Menu',
      menuSubtitle: 'Quick access to all workout and nutrition modules',
      closeMenu: 'Close menu',
      openMenu: 'Open navigation menu',
      desc: {
        today: 'Upper / Lower diagnostic & Fatigue-based advice',
        workout: 'Active session, sets, reps & rest timer',
        exercises: 'Form cues, biomechanics & injury prevention',
        cardio: 'Exact minutes & machine recommendations',
        nutrition: 'Calories, protein (~2g/kg) & hydration log',
        coach: 'Chat live with your fitness AI coach'
      }
    },
    todayAdvisor: {
      badge: 'Today Split · Athletic Coach',
      heroTitle: 'What should you train today at the gym?',
      heroDesc: 'Never enter the gym wondering what to do. Answer 3 quick questions to get your personalized training split recommendation tailored to your goal.',
      checkpoints: {
        safety: 'Joint-friendly biomechanics guaranteed',
        cardio: 'Targeted machine cardio timing',
        recovery: 'Optimal muscle supercompensation'
      },
      q1Title: '1. What muscle group did you train last time?',
      q1Desc: 'Helps your coach balance your recovery and prevent overtraining.',
      q1Upper: 'Upper Body',
      q1UpperSub: 'Chest, Back, Shoulders, Arms',
      q1Lower: 'Lower Body',
      q1LowerSub: 'Quads, Hamstrings, Glutes',
      q1Full: 'Full Body',
      q1FullSub: 'Entire body circuit',
      q1None: 'Rest / Restart',
      q1NoneSub: 'No gym in 3+ days',
      q2Title: '2. How much time do you have in the gym today?',
      q2Express: 'Express',
      q2Standard: 'Standard',
      q2Full: 'Complete',
      q3Title: '3. What is your current energy level?',
      q3High: 'Peak Energy',
      q3Med: 'Moderate',
      q3Low: 'Fatigued',
      verdictBadge: 'Coach Recommendation',
      durationEst: 'Estimated duration',
      mustWorkToday: 'What you need to focus on today',
      cardioRecTitle: 'Recommended post-lifting cardio',
      startBtn: 'Launch this session in the gym',
      cardioBtn: 'See cardio machines & target times',
      manualChoice: 'Or pick another split manually:'
    },
    workout: {
      activeSession: 'Active Gym Session',
      durationEst: 'Estimated duration',
      exercisesCount: 'Target exercises',
      warmupTitle: 'Pre-Workout Activation (5-8 min)',
      warmupSub: 'Crucial for joint synovial fluid, rotator cuffs, and hip mobility before loading weights.',
      restTimerTitle: 'Rest timer between sets',
      set: 'Set',
      loadKg: 'Load (kg)',
      reps: 'Reps',
      status: 'Status',
      validate: 'Log',
      validated: 'Done',
      postCardioTitle: 'Post-Workout Targeted Cardio',
      machineAdvised: 'Recommended machine for your goal',
      finishWorkout: 'Complete and save workout session',
      congratsTitle: 'Session completed successfully!',
      congratsSub: 'Your split history has been updated for your next workout diagnostic.',
      seePostMeal: 'View post-workout nutrition'
    },
    cardio: {
      badge: 'Targeted Machine Cardio Guide',
      heroTitle: 'How long to do cardio & on which machine?',
      heroDesc: 'Maximize fat burning without sacrificing muscle tissue. Clear protocols with exact speeds, incline, and durations per machine.',
      fatLossTab: 'Fat Loss & Cutting Focus',
      muscleGainTab: 'Muscle Mass Preservation Focus',
      ruleWhenTitle: 'Rule #1: When to do cardio?',
      ruleWhenDesc: 'Always perform cardio AFTER heavy weightlifting or on separate rest days. Lifting first burns muscle glycogen, forcing your body to use fat reserves during cardio.',
      ruleZoneTitle: 'Rule #2: The Sweet Spot (Zone 2)',
      ruleZoneDesc: 'Maintain a pace where you can still speak in full sentences without gasping (65-75% max HR). This maximizes lipid oxidation while avoiding excessive muscle catabolism.',
      ruleImpactTitle: 'Rule #3: Protect Knees and Spine',
      ruleImpactDesc: 'Prioritize low-impact machines (Incline Treadmill walking, StairMaster, Elliptical) over continuous flat pavement running to safeguard joints and lower back.',
      selectMachineTitle: 'Select a gym machine to view exact settings:',
      minAdvised: 'Recommended time',
      approxKcal: 'Est. calories',
      seeBtn: 'View machine protocol',
      selectedMachine: 'Selected Gym Machine',
      jointImpact: 'Joint impact level',
      protocolFatLoss: 'Fat Loss Protocol',
      protocolMuscle: 'Muscle Preservation Protocol',
      intensityZone: 'Target heart-rate zone',
      exactSettings: 'Exact gym machine settings',
      idealTiming: 'Ideal timing for session',
      safetyTitle: 'Biomechanical safety cues for this machine',
      attentionTitle: 'Crucial safety rule'
    },
    nutrition: {
      badge: 'Integrated Nutrition Tracker',
      heroTitle: 'Targeted Nutrition: Fuel for Results',
      heroDesc: 'Training stimulates muscle protein synthesis, but real transformation happens on your plate. Track your calories, prioritize protein (~2g/kg), and optimize meal timing.',
      targetCals: 'Daily Target Calories',
      tdeeTotal: 'Calculated TDEE (Maintenance)',
      proteinTitle: 'Protein (~2g / kg)',
      proteinSub: 'Crucial for muscle repair & satiety',
      carbsTitle: 'Carbohydrates (Energy)',
      carbsSub: 'Glycogen re-fueling & strength output',
      fatsTitle: 'Healthy Fats',
      fatsSub: 'Hormonal support & joint lubrication',
      waterTitle: 'Daily Water Intake Tracker',
      waterTarget: 'Target',
      waterGlasses: 'glasses (250ml)',
      waterBtn: '+1 Glass (250 ml)',
      quickLogTitle: 'Quick Calorie & Protein Tracker',
      quickLogSub: 'Track your total consumed today',
      resetBtn: 'Reset counter',
      consumedCals: 'Calories consumed',
      consumedProt: 'Protein consumed',
      quickAddTitle: 'Quick one-tap entry:',
      timingTitle: 'Meal Timing Around Workouts: What & When?',
      timingSub: 'Fueling your body at the right window boosts strength output and accelerates recovery.',
      t1: '1. Pre-workout (2h before)',
      t2: '2. Immediate pre-workout (30 min)',
      t3: '3. Intra-workout (during session)',
      t4: '4. Immediate post-workout (anabolic window)',
      sampleDayTitle: 'Sample High-Performance Day Plan'
    },
    coach: {
      title: 'kolotrini AI Coach',
      liveBadge: 'Gym floor assistant',
      subtitle: 'Biomechanical safety, machine alternatives & targeted sports nutrition',
      inputPlaceholder: 'Ask your coach (e.g., lower back hurts on squat, machine busy alternative...)',
      analyzing: 'Coach is analyzing your workout and physiological recovery...',
      welcomeMsg: (name: string) => `Hello ${name}! I'm your dedicated kolotrini gym coach. Are you on the gym floor right now or planning today's session?\n\nFeel free to ask me anything: if a movement feels awkward, if a machine is occupied and you need an alternative, how many minutes of incline treadmill you should do, or what to eat post-workout. How can I help you crush your session?`
    },
    profile: {
      title: 'My Profile & Fitness Goals',
      subtitle: 'Set up your metrics for personalized gym workouts, cardio durations, and nutrition targets',
      nameLabel: 'First Name or Nickname',
      goalLabel: 'Primary Fitness Goal',
      goals: {
        fat_loss: { title: 'Burn Fat (Cutting)', desc: 'Shed body fat and reveal muscle definition' },
        muscle_gain: { title: 'Build Muscle (Hypertrophy)', desc: 'Maximize clean muscle volume and growth' },
        strength: { title: 'Athletic Strength', desc: 'Peak power and performance on heavy barbell lifts' },
        general_fitness: { title: 'Health & Longevity', desc: 'Cardiovascular endurance and everyday vitality' }
      },
      genderLabel: 'Gender',
      genderMale: 'Male',
      genderFemale: 'Female',
      ageLabel: 'Age',
      weightLabel: 'Weight (kg)',
      heightLabel: 'Height (cm)',
      freqLabel: (days: number) => `Gym frequency (${days} days / week)`,
      levelLabel: 'Experience Level',
      levelBeginner: 'Beginner (< 6 months in gym)',
      levelInter: 'Intermediate (6 months to 2 years)',
      levelAdv: 'Advanced (2+ years consistent training)',
      cancelBtn: 'Cancel',
      saveBtn: 'Save My Profile'
    }
  },
  es: {
    appName: 'kolotrini',
    threeBars: {
      bar1: {
        title: 'Musculación y Rutina de Hoy',
        subtitle: 'Qué entrenar hoy (Superior o Inferior) y Guía de Postura Segura',
        badge: 'Rutina'
      },
      bar2: {
        title: 'Máquinas de Cardio y Tiempos Clave',
        subtitle: 'Cinta inclinada, StairMaster, Remo: minutos exactos según tu objetivo',
        badge: 'Cardio'
      },
      bar3: {
        title: 'Nutrición y Metabolismo Integrado',
        subtitle: 'Cálculo de calorías, proteínas (~2g/kg), timing de comidas y agua',
        badge: 'Nutrición'
      }
    },
    nav: {
      today: '¿Qué entrenar hoy?',
      workout: 'Entrenamiento en Gimnasio',
      exercises: 'Guía de Ejercicios y Seguridad',
      cardio: 'Máquinas de Cardio',
      nutrition: 'Seguimiento Nutricional',
      coach: 'Coach Virtual',
      profile: 'Mi Perfil',
      menuTitle: 'Menú de Navegación',
      menuSubtitle: 'Acceso rápido a todos los módulos de entrenamiento y nutrición',
      closeMenu: 'Cerrar menú',
      openMenu: 'Abrir menú de navegación',
      desc: {
        today: 'Diagnóstico Superior / Inferior según tu recuperación',
        workout: 'Sesión activa, series, repeticiones y cronómetro',
        exercises: 'Postura correcta, biomecánica y prevención',
        cardio: 'Minutos exactos y máquinas recomendadas',
        nutrition: 'Cálculo de calorías, proteínas (~2g/kg) y agua',
        coach: 'Habla en directo con tu coach inteligente'
      }
    },
    todayAdvisor: {
      badge: 'Rutina del Día · Coach Atlético',
      heroTitle: '¿Qué deberías entrenar hoy en el gimnasio?',
      heroDesc: 'Nunca vuelvas a entrar al gimnasio con dudas. Responde 3 preguntas rápidas para recibir tu recomendación personalizada según tu objetivo.',
      checkpoints: {
        safety: 'Biomecánica articular segura garantizada',
        cardio: 'Minutos de cardio precisos por máquina',
        recovery: 'Supercompensación muscular óptima'
      },
      q1Title: '1. ¿Qué grupo muscular entrenaste la última vez?',
      q1Desc: 'Ayuda a tu coach a programar tu recuperación y evitar sobreentrenamiento.',
      q1Upper: 'Tren Superior',
      q1UpperSub: 'Pecho, Espalda, Hombros, Brazos',
      q1Lower: 'Tren Inferior',
      q1LowerSub: 'Cuádriceps, Isquios, Glúteos',
      q1Full: 'Cuerpo Completo',
      q1FullSub: 'Circuito corporal general',
      q1None: 'Descanso / Regreso',
      q1NoneSub: 'Sin entrenar hace 3+ días',
      q2Title: '2. ¿Cuánto tiempo tienes disponible hoy en el gimnasio?',
      q2Express: 'Rápido',
      q2Standard: 'Estándar',
      q2Full: 'Completo',
      q3Title: '3. ¿Cuál es tu nivel de energía actual?',
      q3High: 'Máxima Energía',
      q3Med: 'Moderada',
      q3Low: 'Cansado',
      verdictBadge: 'Recomendación del Coach',
      durationEst: 'Duración estimada',
      mustWorkToday: 'Lo que debes trabajar hoy',
      cardioRecTitle: 'Cardio recomendado post-pesas',
      startBtn: 'Comenzar este entrenamiento en el gimnasio',
      cardioBtn: 'Ver máquinas de cardio y minutos recomendados',
      manualChoice: 'O selecciona otra rutina manualmente:'
    },
    workout: {
      activeSession: 'Sesión Activa en el Gimnasio',
      durationEst: 'Duración estimada',
      exercisesCount: 'Ejercicios clave',
      warmupTitle: 'Calentamiento y Activación Articular (5-8 min)',
      warmupSub: 'Esencial para lubricar articulaciones, manguito rotador y caderas antes de cargar peso.',
      restTimerTitle: 'Temporizador de descanso entre series',
      set: 'Serie',
      loadKg: 'Peso (kg)',
      reps: 'Reps',
      status: 'Estado',
      validate: 'Anotar',
      validated: 'Hecho',
      postCardioTitle: 'Cardio Específico Post-Entrenamiento',
      machineAdvised: 'Máquina recomendada para tu meta',
      finishWorkout: 'Finalizar y registrar sesión',
      congratsTitle: '¡Entrenamiento completado con éxito!',
      congratsSub: 'Tu registro ha sido actualizado para tu próximo diagnóstico.',
      seePostMeal: 'Ver comida post-entrenamiento'
    },
    cardio: {
      badge: 'Guía de Máquinas de Cardio',
      heroTitle: '¿Cuánto tiempo de cardio y en qué máquina?',
      heroDesc: 'Quema grasa de forma eficiente sin perder masa muscular. Protocolos claros con velocidades, inclinación y tiempos exactos por máquina.',
      fatLossTab: 'Enfoque en Pérdida de Grasa (Definición)',
      muscleGainTab: 'Enfoque en Ganancia de Masa Muscular',
      ruleWhenTitle: 'Regla #1: ¿Cuándo hacer el cardio?',
      ruleWhenDesc: 'Haz el cardio siempre DESPUÉS de las pesas o en días de descanso separados. Levantar pesas primero consume el glucógeno, obligando a tu cuerpo a quemar reservas de grasa.',
      ruleZoneTitle: 'Regla #2: La Zona Óptima (Zona 2)',
      ruleZoneDesc: 'Mantén un ritmo donde puedas mantener una conversación sin ahogarte (65-75% FC máx). Esto maximiza la oxidación de grasas sin quemar músculo.',
      ruleImpactTitle: 'Regla #3: Protege Rodillas y Espalda',
      ruleImpactDesc: 'Prioriza máquinas de bajo impacto articular (Cinta con inclinación caminando, StairMaster, Elíptica) sobre correr en asfalto para cuidar tu espalda.',
      selectMachineTitle: 'Selecciona una máquina del gimnasio para ver la configuración:',
      minAdvised: 'Tiempo recomendado',
      approxKcal: 'Calorías est.',
      seeBtn: 'Ver protocolo de la máquina',
      selectedMachine: 'Máquina Seleccionada',
      jointImpact: 'Impacto en articulaciones',
      protocolFatLoss: 'Protocolo para Perder Grasa',
      protocolMuscle: 'Protocolo para Ganar Músculo',
      intensityZone: 'Zona de frecuencia cardíaca',
      exactSettings: 'Ajustes exactos en la máquina',
      idealTiming: 'Momento ideal de la sesión',
      safetyTitle: 'Pautas de seguridad y postura para esta máquina',
      attentionTitle: 'Norma de seguridad clave'
    },
    nutrition: {
      badge: 'Seguimiento Nutricional Integrado',
      heroTitle: 'Nutrición Deportiva: El Combustible de tus Resultados',
      heroDesc: 'Las pesas estimulan el músculo, pero los resultados reales se construyen en la cocina. Controla tus calorías, asegura tu proteína (~2g/kg) y optimiza tus comidas.',
      targetCals: 'Calorías Diarias Objetivo',
      tdeeTotal: 'TDEE Calculado (Mantenimiento)',
      proteinTitle: 'Proteínas (~2g / kg)',
      proteinSub: 'Construcción muscular y saciedad',
      carbsTitle: 'Carbohidratos (Energía)',
      carbsSub: 'Recarga de glucógeno y fuerza',
      fatsTitle: 'Grasas Saludables',
      fatsSub: 'Salud hormonal y articulaciones',
      waterTitle: 'Consumo Diario de Agua',
      waterTarget: 'Objetivo',
      waterGlasses: 'vasos (250ml)',
      waterBtn: '+1 Vaso (250 ml)',
      quickLogTitle: 'Registro Rápido de Calorías y Proteínas',
      quickLogSub: 'Total consumido hoy hasta el momento',
      resetBtn: 'Reiniciar',
      consumedCals: 'Calorías consumidas',
      consumedProt: 'Proteína consumida',
      quickAddTitle: 'Añadir rápidamente con un toque:',
      timingTitle: 'Timing de Comidas: ¿Qué comer y cuándo?',
      timingSub: 'Aportar nutrientes en el momento adecuado mejora tu fuerza y acelera tu recuperación.',
      t1: '1. Pre-entreno (2h antes)',
      t2: '2. Pre-entreno inmediato (30 min antes)',
      t3: '3. Intra-entreno (durante la sesión)',
      t4: '4. Post-entreno inmediato (recuperación)',
      sampleDayTitle: 'Ejemplo de Menú Diario de Alto Rendimiento'
    },
    coach: {
      title: 'Coach kolotrini IA',
      liveBadge: 'Asistente en vivo',
      subtitle: 'Seguridad biomecánica, alternativas de máquinas y nutrición deportiva',
      inputPlaceholder: 'Pregunta a tu coach (ej: dolor lumbar en sentadillas, máquina ocupada...)',
      analyzing: 'El coach está analizando tu entrenamiento y recuperación...',
      welcomeMsg: (name: string) => `¡Hola ${name}! Soy tu coach personal certificado en kolotrini. ¿Estás en el gimnasio ahora mismo o planeando tu sesión de hoy?\n\nPuedes preguntarme cualquier duda: si un ejercicio te molesta, si una máquina está ocupada y buscas alternativa, cuántos minutos de cardio hacer o qué cenar esta noche. ¿Cómo te puedo ayudar a dar el máximo hoy?`
    },
    profile: {
      title: 'Mi Perfil y Objetivos',
      subtitle: 'Configura tus datos para recibir recomendaciones de entrenamiento y nutrición a tu medida',
      nameLabel: 'Nombre o Apodo',
      goalLabel: 'Objetivo Personal Principal',
      goals: {
        fat_loss: { title: 'Eliminar Grasa (Definición)', desc: 'Quemar reservas de grasa y tonificar' },
        muscle_gain: { title: 'Ganar Masa Muscular', desc: 'Hipertrofia muscular limpia y volumen' },
        strength: { title: 'Fuerza Atlética', desc: 'Rendimiento y levantar más peso en barra' },
        general_fitness: { title: 'Salud y Vitalidad', desc: 'Resistencia cardiovascular y bienestar' }
      },
      genderLabel: 'Sexo',
      genderMale: 'Hombre',
      genderFemale: 'Mujer',
      ageLabel: 'Edad',
      weightLabel: 'Peso (kg)',
      heightLabel: 'Estatura (cm)',
      freqLabel: (days: number) => `Frecuencia semanal (${days} días / semana)`,
      levelLabel: 'Nivel de Experiencia',
      levelBeginner: 'Principiante (< 6 meses en gimnasio)',
      levelInter: 'Intermedio (6 meses a 2 años)',
      levelAdv: 'Avanzado (+ de 2 años continuos)',
      cancelBtn: 'Cancelar',
      saveBtn: 'Guardar Mi Perfil'
    }
  }
};
