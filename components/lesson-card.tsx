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
    <Card className="hover:shadow-md transition-all duration-300 hover:scale-[1.02] vocabulary-card flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg line-clamp-2">
              {lesson.title[language === "ar" ? "arabic" : "english"]}
            </CardTitle>
            <CardDescription className="line-clamp-7">
              {lesson.description[language === "ar" ? "arabic" : "english"]}
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20"
          >
            {lesson.level}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            {language === "en" && <Clock className="h-4 w-4" />}
            {lesson.estimatedTime} {t("min")}
            {language === "ar" && <Clock className="h-4 w-4" />}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow">
        <div className="space-y-4 flex flex-col flex-grow">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {language === "ar" ? t("vocabulary") : ""}{" "}
              {lesson.vocabulary.length}{" "}
              {language === "en" ? t("vocabulary") : ""}{" "}
              {language === "en" ? "words" : ""}
            </span>
          </div>

          <Button
            onClick={() => onStartLesson(lesson.id)}
            className="w-full mt-auto transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            variant="default"
          >
            {t("startLearning")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
