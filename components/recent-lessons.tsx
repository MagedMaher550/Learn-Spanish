"use client"

import { useLocalization } from "@/contexts/localization-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { LessonContent } from "@/types/lesson"

interface RecentLessonsProps {
  lessons: LessonContent[]
}

export function RecentLessons({ lessons }: RecentLessonsProps) {
  const { t, language } = useLocalization()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Recent {t("lessons")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lessons.slice(0, 3).map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between p-3 rounded-lg vocabulary-card hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {lesson.completed ? (
                    <CheckCircle className="h-5 w-5 lesson-complete" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{lesson.title[language]}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {lesson.estimatedTime} min
                    <Badge variant="secondary" className="text-xs">
                      {lesson.level}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="ghost" asChild>
                <Link href={`/lessons/${lesson.id}`}>{lesson.completed ? "Review" : "Start"}</Link>
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/lessons">View All {t("lessons")}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
