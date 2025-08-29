export const translations = {
  en: {
    // Navigation
    home: "Home",
    lessons: "Lessons",
    settings: "Settings",

    // Main content
    title: "Learn Spanish from Scratch",
    subtitle: "Master Spanish step by step with interactive lessons, audio, and video content",
    startLearning: "Start Learning",
    continueLesson: "Continue Lesson",

    // Lesson content
    lesson: "Lesson",
    vocabulary: "Vocabulary",
    grammar: "Grammar",
    audio: "Audio",
    video: "Video",

    // UI elements
    next: "Next",
    previous: "Previous",
    complete: "Complete",
    play: "Play",
    pause: "Pause",

    // Theme
    lightMode: "Light Mode",
    darkMode: "Dark Mode",

    // Language
    language: "Language",
    english: "English",
    arabic: "العربية",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    lessons: "الدروس",
    settings: "الإعدادات",

    // Main content
    title: "تعلم الإسبانية من الصفر",
    subtitle: "أتقن الإسبانية خطوة بخطوة مع دروس تفاعلية ومحتوى صوتي ومرئي",
    startLearning: "ابدأ التعلم",
    continueLesson: "متابعة الدرس",

    // Lesson content
    lesson: "درس",
    vocabulary: "المفردات",
    grammar: "القواعد",
    audio: "صوت",
    video: "فيديو",

    // UI elements
    next: "التالي",
    previous: "السابق",
    complete: "إكمال",
    play: "تشغيل",
    pause: "إيقاف",

    // Theme
    lightMode: "الوضع الفاتح",
    darkMode: "الوضع الداكن",

    // Language
    language: "اللغة",
    english: "English",
    arabic: "العربية",
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
