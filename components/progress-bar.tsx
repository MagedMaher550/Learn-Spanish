"use client"

import { useLocalization } from "@/contexts/localization-context"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Target } from "lucide-react"

interface ProgressBarProps {
  current: number
  total: number
  title?: string
  showStats?: boolean
}

export function ProgressBar({ current, total, title, showStats = true }: ProgressBarProps) {
  const { t } = useLocalization()
  const percentage = Math.round((current / total) * 100)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="h-5 w-5 text-primary" />
          {title || t("progress")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{t("completed")}</span>
            <span className="font-semibold">{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-3 progress-bar">
            <div
              className="h-full progress-fill rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </Progress>
        </div>

        {showStats && (
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              <span>
                {current} / {total} {t("lessons")}
              </span>
            </div>
            <span>{total - current} remaining</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
