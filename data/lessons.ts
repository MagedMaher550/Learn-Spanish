import type { LessonContent } from "@/types/lesson";
import {
  lesson_2_grammar,
  lesson_3_grammar,
  lesson_4_grammar,
  lesson_6_grammar,
  lesson_7_grammar,
  lesson_8_grammar,
  lesson_9_grammar,
  lesson_10_grammar,
  lesson_11_grammar,
  lesson_12_grammar,
  lesson_13_grammar,
  lesson_14_grammar,
  lesson_15_grammar,
  lesson_16_grammar,
  lesson_17_grammar,
  lesson_18_grammar,
  lesson_19_grammar,
  lesson_20_grammar,
  lesson_22_grammar,
} from "./grammarPages";
import {
  lesson_1_vocab,
  lesson_2_vocab,
  lesson_3_vocab,
  lesson_4_vocab,
  lesson_5_vocab,
  lesson_6_vocab,
  lesson_7_vocab,
  lesson_8_vocab,
  lesson_9_vocab,
  lesson_10_vocab,
  lesson_11_vocab,
  lesson_12_vocab,
  lesson_13_vocab,
  lesson_14_vocab,
  lesson_15_vocab,
  lesson_16_vocab,
  lesson_17_vocab,
  lesson_18_vocab,
  lesson_19_vocab,
  lesson_20_vocab,
  lesson_21_vocab,
  lesson_22_vocab,
  lesson_23_vocab
} from './vocabulary'
import paragraphs from "./paragraphs";

export const lessons: LessonContent[] = [
  {
    id: "lesson-1",
    title: {
      english: "Constant Letters",
      arabic: "الحروف الساكنة",
    },
    description: {
      english: "Learn how to pronounce consonant letters in spanish",
      arabic: "تعلم كيفية نطق الحروف الساكنة في اللغة الاسبانية",
    },
    level: "A1.1",
    order: 1,
    estimatedTime: 45,
    vocabulary: lesson_1_vocab,

    grammarPdfUrl: "/pdfs/grammar/lesson-1-grammar.pdf",
  },
  {
    id: "lesson-2",
    title: {
      english: "Vowels and first verb",
      arabic: "الحروف المتحركة والفعل الاول",
    },
    description: {
      english: "Learn to how to pronunce vowels and pronuns in Spanish",
      arabic: "تعلم كيفية نطق الحروف المتحركة والضمائر بالإسبانية",
    },
    level: "A1.1",
    order: 2,
    estimatedTime: 75,
    vocabulary: lesson_2_vocab,
    // grammarPdfUrl: "/pdfs/grammar/lesson-2-grammar.pdf",
    grammarPageContent: lesson_2_grammar
  },
  {
    id: "lesson-3",
    title: {
      english: "Nationalities and verbs",
      arabic: "الجنسيات والأفعال",
    },
    description: {
      english: "Learn to how to pronunce nationalities and verbs in Spanish",
      arabic: "تعلم كيفية نطق الجنسيات والأفعال بالإسبانية",
    },
    level: "A1.1",
    order: 2,
    estimatedTime: 105,
    vocabulary: lesson_3_vocab,
    // grammarPdfUrl: "/pdfs/grammar/lesson-3-grammar.pdf",
    grammarPageContent: lesson_3_grammar
  },
  {
    id: "lesson-4",
    title: {
      english: "Tha class",
      arabic: "الفصل",
    },
    description: {
      english: "This lesson is about masculine, feminine, plural, and the indefinite and definite articles.",
      arabic: "الدرس يتناول المذكر والمؤنث والجمع وأدوات النكرة والمعرفة.",
    },
    level: "A1.1",
    order: 2,
    estimatedTime: 115,
    vocabulary: lesson_4_vocab,
    // grammarPdfUrl: "/pdfs/grammar/lesson-4-grammar.pdf",
    grammarPageContent: lesson_4_grammar
  },
  {
    id: "lesson-5",
    title: {
      english: "Professions",
      arabic: "المهن",
    },
    description: {
      english: "This lesson is about common professions and the places where people work.",
      arabic: "الدرس يتناول المهن الشائعة وأماكن العمل في اللغة الاسبانية.",
    },
    level: "A1.1",
    order: 2,
    estimatedTime: 100,
    vocabulary: lesson_5_vocab,
    grammarPdfUrl: undefined,
  },
  {
    id: "lesson-6",
    title: {
      english: "Colors and Questions",
      arabic: "الألوان والأسئلة",
    },
    description: {
      english: "This lesson covers common colors and basic question words in Spanish.",
      arabic: "الدرس يتناول الألوان الشائعة وأدوات الاستفهام في اللغة الإسبانية.",
    },
    level: "A1.1",
    order: 2,
    estimatedTime: 55,
    vocabulary: lesson_6_vocab,
    grammarPageContent: lesson_6_grammar
  },
  {
    id: "lesson-7",
    title: {
      english: "Present Simple Tense",
      arabic: "زمن المضارع البسيط",
    },
    description: {
      english: "This lesson introduces the present simple tense in Spanish, focusing on common verbs and daily routine expressions.",
      arabic: "هذا الدرس يشرح زمن المضارع البسيط في اللغة الإسبانية مع التركيز على الأفعال الشائعة والتعبيرات اليومية.",
    },
    level: "A1.1",
    order: 7,
    estimatedTime: 70,
    vocabulary: lesson_7_vocab,
    grammarPageContent: lesson_7_grammar
  },
  {
    id: "lesson-8",
    title: {
      english: "Numbers and ownership",
      arabic: "الأعداد وفعل الامتلاك Tener",
    },
    description: {
      english: "This lesson covers numbers from one to one hundred ninety-nine in Spanish, and introduces the verb 'tener'",
      arabic: "هذا الدرس يتناول الأعداد من واحد إلى مائة وتسعة وتسعين في اللغة الإسبانية، ويشرح فعل 'tener' للتعبير عن الامتلاك والحيازة.",
    },
    level: "A1.1",
    order: 7,
    estimatedTime: 70,
    vocabulary: lesson_8_vocab,
    grammarPageContent: lesson_8_grammar
  },
  {
    id: "lesson-9",
    title: {
      english: "House and prepositions of place",
      arabic: "مفردات المنزل وحروف الجر للمكان"
    },
    description: {
      english: "This lesson covers essential house vocabulary and introduces prepositions of place to describe the location of objects.",
      arabic: "هذا الدرس يتناول مفردات المنزل الأساسية ويشرح حروف الجر للمكان لوصف موقع الأشياء."
    },
    level: "A1.2",
    order: 7,
    estimatedTime: 85,
    vocabulary: lesson_9_vocab,
    grammarPageContent: lesson_9_grammar
  },
  {
    id: "lesson-10",
    title: {
      english: "Places and the verbs 'hay' and 'estar'",
      arabic: "الأماكن واستخدام فعلي 'hay' و 'estar'"
    },
    description: {
      english: "This lesson introduces vocabulary for common places and explains the difference between 'hay' (there is/are) and 'estar' (to be) when describing the existence and location of things.",
      arabic: "هذا الدرس يقدم مفردات الأماكن الشائعة ويشرح الفرق بين 'hay' (يوجد) و 'estar' (يكون) عند وصف وجود الأشياء وموقعها."
    },
    level: "A1.2",
    order: 8,
    estimatedTime: 90,
    vocabulary: lesson_10_vocab,
    grammarPageContent: lesson_10_grammar
  },
  {
    id: "lesson-11",
    title: {
      english: "Hay, estar, dónde, cuántos, mucho/muy/poco",
      arabic: "استخدام hay و estar و dónde و cuántos و mucho/muy/poco"
    },
    description: {
      english: "Learn to express existence, location, quantity, and intensity using 'hay', 'estar', 'dónde', 'cuántos', and modifiers like 'mucho', 'poco', and 'muy'.",
      arabic: "تعلّم كيف تعبّر عن الوجود والمكان والكمية والشدة باستخدام 'hay' و 'estar' و 'dónde' و 'cuántos' وكلمات مثل 'mucho' و 'poco' و 'muy'."
    },
    level: "A1.2",
    order: 11,
    estimatedTime: 210,
    vocabulary: lesson_11_vocab,
    grammarPageContent: lesson_11_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 4)]
  },
  {
    id: "lesson-12",
    title: {
      english: "Family and Possessive Adjectives (mi, tu, su...)",
      arabic: "العائلة وصفات الملكية (mi، tu، su...)"
    },
    description: {
      english: "Learn how to talk about your family and relationships using family vocabulary and possessive adjectives such as 'mi', 'tu', 'su', 'nuestro', and 'vuestro'.",
      arabic: "تعلّم كيف تتحدث عن عائلتك وعلاقاتك باستخدام مفردات العائلة وصفات الملكية مثل 'mi' و'tu' و'su' و'nuestro' و'vuestro'."
    },
    level: "A1.2",
    order: 12,
    estimatedTime: 175,
    vocabulary: lesson_12_vocab,
    grammarPageContent: lesson_12_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 5 || p.id === 6)]
  }
  , {
    id: "lesson-13",
    "title": {
      "english": "Descriptive Adjectives and Self-Description",
      "arabic": "الصفات وكيفية وصف النفس"
    },
    "description": {
      "english": "Learn how to describe yourself and others in Spanish using common descriptive adjectives for appearance, personality, and character traits.",
      "arabic": "تعلّم كيفية وصف نفسك والآخرين بالإسبانية باستخدام الصفات الشائعة للمظهر والشخصية والصفات المميزة."
    },
    level: "A1.2",
    order: 12,
    estimatedTime: 125,
    vocabulary: lesson_13_vocab,
    grammarPageContent: lesson_13_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 7)]
  },
  {
    "id": "lesson-14",
    "title": {
      "english": "Clothing and Fabrics",
      "arabic": "الملابس والأقمشة"
    },
    "description": {
      "english": "Learn the names of common clothing items and materials in Spanish to describe what you wear and identify fabrics.",
      "arabic": "تعلّم أسماء الملابس والأقمشة الشائعة بالإسبانية لوصف ما ترتديه والتعرّف على أنواع الأقمشة."
    },
    "level": "A1.2",
    "order": 13,
    "estimatedTime": 65,
    vocabulary: lesson_14_vocab,
    grammarPageContent: lesson_14_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 8)]
  },
  {
    id: "lesson-15",
    title: {
      english: "Clothing, Descriptions, and Transportation",
      arabic: "الملابس والأوصاف ووسائل النقل"
    },
    description: {
      english: "Learn common clothing items, adjectives, and transportation methods in Spanish, and how to describe people and what they wear.",
      arabic: "تعلّم أسماء الملابس، الصفات، ووسائل النقل بالإسبانية، وكيفية وصف الأشخاص وما يرتدونه."
    },
    level: "A1.2",
    order: 16,
    estimatedTime: 75,
    vocabulary: lesson_15_vocab,
    grammarPageContent: lesson_15_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 9)]
  },
  {
    id: "lesson-16",
    title: {
      english: "Adjectives and the Verb IR / IRSE",
      arabic: "الصفات وفعلَي IR و IRSE"
    },
    description: {
      english: "Learn how to describe people and places using common Spanish adjectives, and how to use the verbs IR (to go) and IRSE (to leave) in context. Understand the difference between them through practical examples and dialogues.",
      arabic: "تعلّم كيفية وصف الأشخاص والأماكن باستخدام الصفات الشائعة بالإسبانية، وكيفية استخدام الفعلين IR (يذهب) و IRSE (يغادر) في السياق. افهم الفرق بينهما من خلال أمثلة وحوارات عملية."
    },
    level: "A1.2",
    order: 16,
    estimatedTime: 75,
    vocabulary: lesson_16_vocab,
    grammarPageContent: lesson_16_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 10)]
  },
  {
    "id": "lesson-17",
    "title": {
      "english": "Comparisons and Describing Places and Locations",
      "arabic": "المقارنة ووصف الأماكن والمواقع"
    },
    "description": {
      "english": "Learn how to compare people, things, and places in Spanish using comparative structures like 'más... que', 'menos... que', and 'tan... como'. Also, master how to describe locations with prepositions such as 'en', 'cerca de', 'lejos de', 'delante de', and 'detrás de'. Practice both skills in real-life contexts and dialogues.",
      "arabic": "تعلّم كيف تقارن بين الأشخاص والأشياء والأماكن بالإسبانية باستخدام تراكيب المقارنة مثل 'más... que' (أكثر من)، و'menos... que' (أقل من)، و'tan... como' (مثل). وتدرّب أيضًا على وصف المواقع باستخدام حروف الجر مثل 'en' (في)، 'cerca de' (بالقرب من)، 'lejos de' (بعيد عن)، 'delante de' (أمام)، و'detrás de' (خلف). طبّق المهارتين في سياقات وحوارات واقعية."
    },
    "level": "A1.2",
    "order": 17,
    "estimatedTime": 80,
    vocabulary: lesson_17_vocab,
    grammarPageContent: lesson_17_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 11 || p.id === 12)]

  },
  {
    "id": "lesson-18",
    "title": {
      "english": "Telling time and the irregular verbs of present simple",
      "arabic": "الوقت والأفعال الغير منتظمة في المضارع البسيط"
    },
    "description": {
      "english": "Learn how to tell time in Spanish using the 12-hour clock system. Also, master the irregular verbs of present simple in Spanish.",
      "arabic": "تعلّم كيفية قول الوقت بالإسبانية باستخدام نظام الساعة 12 ساعة. وتدرّب أيضًا على الأفعال الغير منتظمة في المضارع البسيط بالإسبانية."
    },
    "level": "A1.3",
    "order": 17,
    "estimatedTime": 80,
    vocabulary: lesson_18_vocab,
    grammarPageContent: lesson_18_grammar,
  },
  {
    "id": "lesson-19",
    "title": {
      "english": "Irregular verbs of present simple and days of the week",
      "arabic": "الأفعال الغير منتظمة في المضارع البسيط وأيام الأسبوع"
    },
    "description": {
      "english": "Learn the irregular verbs of present simple and the days of the week in Spanish.",
      "arabic": "تعلّم الأفعال الغير منتظمة في المضارع البسيط وأيام الأسبوع بالإسبانية."
    },
    "level": "A1.3",
    "order": 17,
    "estimatedTime": 80,
    vocabulary: lesson_19_vocab,
    grammarPageContent: lesson_19_grammar,
  },
  {
    "id": "lesson-20",
    "title": {
      "english": "Frequency and time",
      "arabic": "التكرار والوقت"
    },
    "description": {
      "english": "Learn how to express frequency and time in Spanish.",
      "arabic": "تعلّم كيفية التعبير عن التكرار والوقت بالإسبانية."
    },
    "level": "A1.3",
    "order": 17,
    "estimatedTime": 45,
    vocabulary: lesson_20_vocab,
    grammarPageContent: lesson_20_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 13)]

  },
  {
    "id": "lesson-21",
    "title": {
      "english": "Food and Drinks",
      "arabic": "الطعام والمشروبات"
    },
    "description": {
      "english": "Learn how to talk about food and drinks in Spanish.",
      "arabic": "تعلّم كيفية التحدث عن الطعام والمشروبات بالإسبانية."
    },
    "level": "A1.3",
    "order": 17,
    "estimatedTime": 165,
    vocabulary: lesson_21_vocab,
    // grammarPageContent: lesson_20_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 14)]
  },
  {
    "id": "lesson-22",
    "title": {
      "english": "Emotional Verbs",
      "arabic": "الأفعال العاطفية"
    },
    "description": {
      "english": "Learn how to express emotions, preferences, and reactions using verbs like gustar.",
      "arabic": "تعلّم كيفية التعبير عن المشاعر، التفضيلات، وردود الفعل باستخدام أفعال مثل gustar."
    },
    "level": "A1.3",
    "order": 17,
    "estimatedTime": 65,
    vocabulary: lesson_22_vocab,
    grammarPageContent: lesson_22_grammar,
    paragraphs: [...paragraphs.filter((p) => p.id === 15 || p.id === 16)]
  },
  {
    "id": "lesson-23",
    "title": {
      "english": "Body Parts",
      "arabic": "أجزاء الجسم"
    },
    "description": {
      "english": "Learn how to describe body parts in Spanish.",
      "arabic": "تعلّم كيفية وصف أجزاء الجسم بالإسبانية."
    },
    "level": "A1.3",
    "order": 17,
    "estimatedTime": 65,
    vocabulary: lesson_23_vocab,
    paragraphs: [...paragraphs.filter((p) => p.id === 17)]
  },



];
