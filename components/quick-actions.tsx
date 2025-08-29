"use client"

import { useLocalization } from "@/contexts/localization-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, BookOpen, Mic, RotateCcw } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const { t } = useLocalization()

  const actions = [
    {
      title: "Continue Learning",
      description: "Resume your current lesson",
      icon: Play,
      href: "/lessons/lesson-1",
      variant: "default" as const,
    },
    {
      title: "Browse Lessons",
      description: "Explore all available lessons",
      icon: BookOpen,
      href: "/lessons",
      variant: "outline" as const,
    },
    {
      title: "Practice Pronunciation",
      description: "Record and improve your accent",
      icon: Mic,
      href: "/practice",
      variant: "outline" as const,
    },
    {
      title: "Review Vocabulary",
      description: "Practice words you've learned",
      icon: RotateCcw,
      href: "/vocabulary",
      variant: "outline" as const,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button
                key={index}
                variant={action.variant}
                size="lg"
                asChild
                className="h-auto p-4 justify-start hover:scale-[1.02] transition-all duration-200"
              >
                <Link href={action.href}>
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-semibold">{action.title}</div>
                      <div className="text-sm text-muted-foreground">{action.description}</div>
                    </div>
                  </div>
                </Link>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
