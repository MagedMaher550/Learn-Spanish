import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";
import Paragraph from "@/types/paragraph";

export function ParagraphCard({ paragraph }: { paragraph: Paragraph }) {
  const { id, title, description, estimatedTime, level, date, image } =
    paragraph;

  return (
    <Card className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-card-foreground text-balance">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-400 border-green-500/30"
            >
              {level}
            </Badge>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="h-3 w-3" />
              {estimatedTime}
            </div>
          </div>
        </div>

        {date && (
          <div className="text-xs text-muted-foreground mb-4">{date}</div>
        )}

        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Link href={`/paragraphs/${id}`}>Start Reading</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
