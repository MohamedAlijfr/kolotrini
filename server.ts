import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI with mandatory headers
const apiKey = process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback coach answers if API key is unconfigured or during offline use
function getSmartFallbackResponse(userPrompt: string, userGoal: string = 'hypertrophy'): string {
  const promptLower = userPrompt.toLowerCase();
  
  if (promptLower.includes('cardio') || promptLower.includes('machine') || promptLower.includes('tapis') || promptLower.includes('rameur')) {
    if (userGoal === 'fat_loss') {
      return `🏃‍♂️ **Protocole Cardio Recommandé (Perte de gras & Préservation Musculaire)** :
- **Meilleure machine** : Tapis de course incliné (Incline Walking) ou Rameur.
- **Paramètres Tapis** : Pente 10 à 12%, Vitesse 4.8 à 5.5 km/h.
- **Durée** : 20 à 25 minutes immédiatement *après* ta séance de musculation (pour brûler directement les réserves lipidiques sans épuiser ton glycogène avant les barres).
- **Zone cardiaque** : Zone 2 (65-72% de ta FC max, tu dois pouvoir parler sans être essoufflé).
- **Alternative intense** : Stairmaster (Escaliers) 12-15 min au niveau 6-7 si tu manques de temps.`;
    } else {
      return `💪 **Protocole Cardio Recommandé (Prise de masse & Santé Cardiovasculaire)** :
- **Meilleure machine** : Vélo stationnaire ou Rameur basse résistance.
- **Durée** : 12 à 15 minutes en fin de séance, 2 à 3 fois par semaine maximum.
- **Pourquoi ?** Maintient un cœur en santé et améliore la récupération inter-séries sans créer de déficit calorique excessif.
- **Éviter** : Le cardio HIIT violent juste avant de soulever des charges lourdes.`;
    }
  }

  if (promptLower.includes('douleur') || promptLower.includes('mal') || promptLower.includes('dos') || promptLower.includes('genou') || promptLower.includes('épaule')) {
    return `⚠️ **Conseils de Sécurité & Ajustement Postural** :
1. **Règle d'or** : Ne jamais forcer sur une douleur articulaire ou tendineuse vive.
2. **Si bas du dos au Squat / Soulevé de terre** : 
   - Vérifie le "bracing" (verrouillage abdominal via manœuvre de Valsalva).
   - Substitue temporairement par la **Presse à cuisses 45°** (dos bien plaqué) ou le **Squat bulgare aux haltères**.
3. **Si douleur aux épaules au Développé couché** :
   - Resserre la prise de quelques centimètres et amène les coudes à 45° du buste (pas à 90°).
   - Remplace par le **Développé haltères prise neutre** (paumes face à face) pour libérer l'espace sous-acromial.`;
  }

  if (promptLower.includes('nutrition') || promptLower.includes('manger') || promptLower.includes('protéine') || promptLower.includes('repas') || promptLower.includes('calorie')) {
    return `🥗 **Conseils Nutrition Personnalisés** :
- **Apport en Protéines** : Vise 1,8 à 2,0 g par kilo de poids de corps (ex: 140g à 160g si tu pèses 75kg), réparties sur 3 à 4 prises avec des sources complètes (œufs, poulet, poisson, tofu, whey).
- **Collation Pré-Entraînement (1h-1h30 avant)** : Une banane + 2 galettes de riz avec beurre de cacahuète ou un yaourt grec, pour booster le stock de glycogène.
- **Collation Post-Entraînement (dans les 2h)** : 30g de protéines rapides + glucides complexes pour lancer la synthèse protéique et réparer les micro-lésions musculaires.
- **Hydratation** : Bois 500ml d'eau par heure d'effort intense en salle.`;
  }

  if (promptLower.includes('quoi faire') || promptLower.includes('aujourd') || promptLower.includes('haut') || promptLower.includes('bas')) {
    return `🎯 **Choix de la séance d'aujourd'hui** :
- Si tu as travaillé le **Haut du corps** la dernière fois : Aujourd'hui c'est **Bas du corps** (Quadriceps, Ischios, Fessiers, Mollets) pour laisser 48h de repos aux pectoraux et au dos.
- Si tu n'as pas fait de séance depuis 3 jours ou plus : Fais une séance **Full Body** ou **Haut du corps** en priorité.
- Pense à l'échauffement dynamique : 5 min de cardio léger + mobilité des chevilles/hanches ou des épaules selon le split du jour.`;
  }

  return `Tu as une excellente question ! En musculation, la régularité et la technique stricte l'emportent toujours sur l'ego-lifting.
Pour optimiser ta séance aujourd'hui :
1. Échauffe-toi 5 min (mobilité articulaire + montée progressive en charge).
2. Priorise les mouvements polyarticulaires (Squat, Développé couché, Tirage) en début de séance quand ton système nerveux est frais.
3. Respecte 90 à 120 secondes de repos entre les séries lourdes.
4. Termine par 15 à 20 min de cardio selon ton objectif (sèche ou masse).`;
}

// API: Coach Chat
app.post('/api/coach/chat', async (req, res) => {
  try {
    const { message, profile, history = [], lang = 'fr' } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message requis' });
    }

    if (!ai) {
      if (lang === 'ar') {
        const arabicFallback = `أهلاً بك يا بطل! أنا مدربك الذكي في صالة الجيم kolotrini.
للإجابة على سؤالك:
1. ركز دائماً على التكنيك السليم والتنفس المنتظم لحماية مفاصلك وأسفل ظهرك.
2. إذا كان لديك ألم مفصلي، لا تضغط على الألم واستبدل التمرين بحركة أخرى آمنة.
3. التزم بتمارين الكارديو (مثل المشي المائل أو الدراجة) بعد تمارين الحديد لمدة 15-20 دقيقة.
4. تأكد من شرب الماء وتناول كفايتك من البروتين (حوالي 2 غرام لكل كيلوغرام من وزنك).`;
        return res.json({ reply: arabicFallback, source: 'fallback' });
      }
      const fallback = getSmartFallbackResponse(message, profile?.goal);
      return res.json({ reply: fallback, source: 'fallback' });
    }

    const goalLabel = profile?.goal === 'fat_loss' ? 'Perte de graisse / Sèche / حرق الدهون' :
      profile?.goal === 'muscle_gain' ? 'Prise de masse musculaire / Hypertrophie / بناء العضلات' :
      profile?.goal === 'strength' ? 'Gain de force athlétique / زيادة القوة' : 'Remise en forme globale & santé / الصحة واللياقة';

    const langInstruction = 
      lang === 'ar' ? 'Arabe (اللغة العربية الفصحى الواضحة والرياضية والمشجعة)' :
      lang === 'en' ? 'English (Direct, encouraging, and scientifically grounded athletic fitness coach)' :
      lang === 'es' ? 'Español (Claro, motivador, con terminología técnica de fitness y biomecánica deportiva)' :
      'Français direct et bienveillant';

    const systemInstruction = `Tu es "Coach Athlète Pro" sur l'application kolotrini, un préparateur physique et coach sportif d'élite en salle de sport, expert en biomécanique, sécurité d'exécution des mouvements, programmation d'entraînement (Haut/Bas/Full Body/Push Pull Legs), cardio ciblé par machine et nutrition sportive calculée.
Profil de l'adhérent(e) actuel(le) :
- Objectif principal : ${goalLabel}
- Niveau d'expérience : ${profile?.level || 'Intermédiaire'}
- Poids : ${profile?.weight || '75'} kg
- Taille : ${profile?.height || '175'} cm
- Fréquence : ${profile?.daysPerWeek || '3'} jours par semaine
- Langue de réponse obligatoire : ${langInstruction}.

Directives de réponse :
1. Rédige obligatoirement dans la langue sélectionnée (${langInstruction}).
2. Structure tes réponses avec des points clairs, des indications de sécurité précises (placement des pieds, cambrure neutre, respiration inspiration à la descente / expiration à l'effort), tempo recommandé et temps de repos.
3. Précise toujours les machines cardio et les durées exactes adaptées à son profil.
4. Si la personne hésite sur quoi travailler aujourd'hui (Haut ou Bas), propose une répartition équilibrée selon sa fatigue et ses derniers entraînements.
5. Intègre des repères nutritionnels quand pertinent.`;

    const contents = [
      ...history.map((h: { sender: string; text: string }) => ({
        role: h.sender === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }],
      })),
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents,
      config: {
        systemInstruction,
      },
    });

    const reply = response.text || getSmartFallbackResponse(message, profile?.goal);
    return res.json({ reply, source: 'gemini' });
  } catch (error) {
    console.error('Erreur API Coach:', error);
    const fallback = getSmartFallbackResponse(req.body?.message || '', req.body?.profile?.goal);
    return res.json({ reply: fallback, source: 'fallback_after_error' });
  }
});

// Start Vite server in development, serve static in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
