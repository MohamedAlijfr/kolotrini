import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, AlertCircle, Dumbbell, Flame, Apple, RefreshCw } from 'lucide-react';
import { UserProfile, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface Message {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  timestamp: number;
}

interface AICoachChatProps {
  userProfile: UserProfile;
  lang?: Language;
}

export const AICoachChat: React.FC<AICoachChatProps> = ({ userProfile, lang = 'fr' }) => {
  const t = TRANSLATIONS[lang];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'coach',
      text: t.coach.welcomeMsg(userProfile.name),
      timestamp: Date.now()
    }
  ]);

  // Update initial message if lang changes
  useEffect(() => {
    setMessages(prev => {
      if (prev.length <= 1) {
        return [{
          id: 'welcome',
          sender: 'coach',
          text: t.coach.welcomeMsg(userProfile.name),
          timestamp: Date.now()
        }];
      }
      return prev;
    });
  }, [lang, userProfile.name, t]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/coach/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          profile: userProfile,
          history: messages.slice(-6),
          lang: lang
        })
      });

      const data = await response.json();
      const coachMsg: Message = {
        id: `c-${Date.now()}`,
        sender: 'coach',
        text: data.reply || (lang === 'ar' ? "عذراً، حدث خطأ مؤقت. أعد المحاولة بعد لحظات!" : "Désolé, je n'ai pas pu générer de réponse. Réessaie dans un instant !"),
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, coachMsg]);
    } catch {
      const errorMsg: Message = {
        id: `err-${Date.now()}`,
        sender: 'coach',
        text: lang === 'ar' 
          ? "حدث انقطاع بالشبكة. حافظ على تركيزك في التمرين وحاول ثانية بعد قليل!"
          : lang === 'en'
          ? "Network connection interrupted. Stay focused on your workout and retry in a moment!"
          : lang === 'es'
          ? "Se produjo un error de conexión. ¡Mantén la concentración y vuelve a probar en un momento!"
          : "Une erreur réseau est survenue. Reste concentré sur tes barres, hydrate-toi et réessaie dans quelques instants !",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = 
    lang === 'ar' ? [
      { label: "عندي ألم بأسفل الظهر في السكوات", icon: AlertCircle },
      { label: "بديل للبنش برس (المقاعد مشغولة)", icon: Dumbbell },
      { label: "كم دقيقة كارديو بعد التمرين؟", icon: Flame },
      { label: "ماذا آكل الليلة بعد الحصة؟", icon: Apple },
      { label: "لدي 35 دقيقة فقط اليوم", icon: RefreshCw }
    ] : lang === 'en' ? [
      { label: "Lower back feels tight during squats", icon: AlertCircle },
      { label: "Bench press alternative (benches occupied)", icon: Dumbbell },
      { label: "How much cardio post-workout today?", icon: Flame },
      { label: "What should I eat tonight after lifting?", icon: Apple },
      { label: "I only have 35 minutes today", icon: RefreshCw }
    ] : lang === 'es' ? [
      { label: "Siento molestia lumbar en sentadilla", icon: AlertCircle },
      { label: "Alternativa a press banca (bancos llenos)", icon: Dumbbell },
      { label: "¿Cuánto cardio hacer tras el entreno?", icon: Flame },
      { label: "¿Qué cenar hoy post-entreno?", icon: Apple },
      { label: "Solo dispongo de 35 minutos hoy", icon: RefreshCw }
    ] : [
      { label: "J'ai mal au dos au squat", icon: AlertCircle },
      { label: "Remplacer le développé couché (bancs pris)", icon: Dumbbell },
      { label: "Combien de cardio après la séance ?", icon: Flame },
      { label: "Quoi manger ce soir après ma séance ?", icon: Apple },
      { label: "J'ai seulement 35 minutes aujourd'hui", icon: RefreshCw }
    ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      
      {/* Header card */}
      <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
            <Bot className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">{t.coach.title}</h2>
              <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 px-2 py-0.5 rounded-full font-semibold">
                {t.coach.liveBadge}
              </span>
            </div>
            <p className="text-xs text-[#4A5568] dark:text-[#9E9E9E] mt-0.5">
              {t.coach.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Prompts Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {quickPrompts.map((q, idx) => {
          const Icon = q.icon;
          return (
            <button
              key={idx}
              onClick={() => sendMessage(q.label)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF] dark:bg-[#1E1E1E] hover:bg-slate-100 dark:hover:bg-[#262628] text-[#4A5568] dark:text-[#CCCCCC] hover:text-[#1A1A1A] dark:hover:text-white border border-slate-200 dark:border-[#2D2D32] text-xs font-medium whitespace-nowrap transition-colors shrink-0 shadow-sm"
            >
              <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{q.label}</span>
            </button>
          );
        })}
      </div>

      {/* Chat Messages Box */}
      <div className="h-[520px] bg-[#FFFFFF] dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2D2D32] rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'coach' && (
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-4 h-4 stroke-[2.2]" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white font-medium rounded-tr-none shadow-sm'
                    : 'bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-[#333338] text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#4A5568] dark:text-[#9E9E9E] text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-spin" />
                <span>{t.coach.analyzing}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="mt-4 pt-4 border-t border-slate-100 dark:border-[#2D2D32] flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.coach.inputPlaceholder}
            className="flex-1 h-12 px-4 rounded-xl bg-[#F8F9FA] dark:bg-[#262628] border border-slate-200 dark:border-[#38383D] text-[#1A1A1A] dark:text-[#E0E0E0] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="h-12 w-12 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 transition-colors shadow-sm active:scale-95"
            aria-label="Envoyer au coach"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
};
