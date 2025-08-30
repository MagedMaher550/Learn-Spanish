"use client";

import { useLocalization } from "@/contexts/localization-context";
import { Navigation } from "@/components/navigation";
import { LessonCard } from "@/components/lesson-card";
import { lessons } from "@/data/lessons";
import { BookOpen } from "lucide-react";

export default function LessonsPage() {
  const { t, language } = useLocalization();

  const handleStartLesson = (lessonId: string) => {
    window.location.href = `/lessons/${lessonId}`;
  };

  const headerContent = (
    <h1 className="text-xl font-bold">
      {language === "ar"
        ? `${t("lessons")} ${t("Spanish")}`
        : `${t("Spanish")} ${t("lessons")}`}
    </h1>
  );

  const bookIcon = <BookOpen className="h-8 w-8 text-primary" />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              {language === "en" ? (
                <>
                  {bookIcon} {headerContent}
                </>
              ) : (
                <>
                  {headerContent}
                  {bookIcon}{" "}
                </>
              )}
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Choose a lesson to start learning Spanish vocabulary and grammar."
              )}
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onStartLesson={handleStartLesson}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
