export interface Vocabulary {
  spanish: string
  english: string
  arabic: string
  pronunciation: string
  audioUrl?: string
}

export interface GrammarPoint {
  title: {
    english: string
    arabic: string
  }
  explanation: {
    english: string
    arabic: string
  }
  examples: {
    spanish: string
    english: string
    arabic: string
  }[]
}

export interface Exercise {
  id: string
  type: "multiple-choice" | "fill-blank" | "translation" | "audio-match"
  question: {
    english: string
    arabic: string
  }
  options?: string[]
  correctAnswer: string | number
  explanation?: {
    english: string
    arabic: string
  }
}

export interface LessonContent {
  id: string
  title: {
    english: string
    arabic: string
  }
  description: {
    english: string
    arabic: string
  }
  level: "A1.1" | "A1.2" | "A2.1" | "A2.2"
  order: number
  estimatedTime: number // in minutes
  vocabulary: Vocabulary[]
  audioUrl?: string
  videoUrl?: string
  grammarPdfUrl?: string // Added grammarPdfUrl field for PDF grammar content
}

export interface LessonProgress {
  lessonId: string
  completed: boolean
  score?: number
  completedAt?: Date
  timeSpent: number // in minutes
}
