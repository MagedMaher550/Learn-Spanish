import type { LessonContent } from "@/types/lesson";
import {
  lesson_9_grammar,
  lesson_10_grammar,
  lesson_11_grammar,
  lesson_12_grammar,
  lesson_13_grammar
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
  lesson_13_vocab
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
    grammarPdfUrl: "/pdfs/grammar/lesson-2-grammar.pdf",
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
    grammarPdfUrl: "/pdfs/grammar/lesson-3-grammar.pdf",
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
    grammarPdfUrl: "/pdfs/grammar/lesson-4-grammar.pdf",
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
    grammarPdfUrl: "/pdfs/grammar/lesson-6-grammar.pdf",
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
    grammarPdfUrl: "/pdfs/grammar/lesson-7-grammar.pdf",
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
    grammarPdfUrl: "/pdfs/grammar/lesson-8-grammar.pdf",
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
  }




];
