import { Navigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Heart } from "lucide-react";
import Link from "next/link";
import paragraphs from "@/data/paragraphs";

export default function ParagraphsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Reading Paragraphs
          </h2>
          <p className="text-muted-foreground text-lg">
            Interactive Spanish stories with audio, translations, and vocabulary
            support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paragraphs.map((paragraph) => (
            <Card
              key={paragraph.id}
              className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={paragraph.image || "/placeholder.svg"}
                  alt={paragraph.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-black/20 hover:bg-black/40 text-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-card-foreground text-balance">
                  {paragraph.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                  {paragraph.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-400 border-green-500/30"
                    >
                      {paragraph.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="h-3 w-3" />
                      {paragraph.estimatedTime}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  {paragraph.date}
                </div>

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href={`/paragraphs/${paragraph.id}`}>
                    Start Reading
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
