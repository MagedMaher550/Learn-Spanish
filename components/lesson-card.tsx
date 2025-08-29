"use client";

import { useLocalization } from "@/contexts/localization-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, CheckCircle } from "lucide-react";
import type { LessonContent } from "@/types/lesson";

interface LessonCardProps {
  lesson: LessonContent;
  onStartLesson: (lessonId: string) => void;
}

export function LessonCard({ lesson, onStartLesson }: LessonCardProps) {
  const { t, language } = useLocalization();

  return (
    <Card className="hover:shadow-md transition-all duration-300 hover:scale-[1.02] vocabulary-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg">
              {lesson.title[language === "ar" ? "arabic" : "english"]}
            </CardTitle>
            <CardDescription>
              {lesson.description[language === "ar" ? "arabic" : "english"]}
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20"
          >
            {lesson.level}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {lesson.estimatedTime} min
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {lesson.vocabulary.length} {t("vocabulary")} words
            </span>
          </div>

          <Button
            onClick={() => onStartLesson(lesson.id)}
            className="w-full transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            variant="default"
          >
            {t("startLearning")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
