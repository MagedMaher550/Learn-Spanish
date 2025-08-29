"use client"

import { useLocalization } from "@/contexts/localization-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Trophy, Target } from "lucide-react"

interface DashboardStatsProps {
  totalLessons: number
  completedLessons: number
  totalTime: number
  streak: number
}

export function DashboardStats({ totalLessons, completedLessons, totalTime, streak }: DashboardStatsProps) {
  const { t } = useLocalization()

  const stats = [
    {
      title: t("lessons"),
      value: `${completedLessons}/${totalLessons}`,
      icon: BookOpen,
      color: "text-primary",
    },
    {
      title: "Study Time",
      value: `${totalTime}h`,
      icon: Clock,
      color: "text-blue-500",
    },
    {
      title: "Streak",
      value: `${streak} days`,
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "Progress",
      value: `${Math.round((completedLessons / totalLessons) * 100)}%`,
      icon: Target,
      color: "text-green-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="vocabulary-card hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
