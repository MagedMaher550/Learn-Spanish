import type { LessonContent } from "@/types/lesson";
import lesson_one_vocab from "./vocabulary/lesson_1";
import lesson_two_vocab from "./vocabulary/lesson_2";

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
    vocabulary: lesson_one_vocab,

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
    vocabulary: lesson_two_vocab,
    grammarPdfUrl: "/pdfs/grammar/lesson-2-grammar.pdf",
  },
];
