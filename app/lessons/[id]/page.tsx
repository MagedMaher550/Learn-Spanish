"use client";

import { useParams } from "next/navigation";
import { useLocalization } from "@/contexts/localization-context";
import { Navigation } from "@/components/navigation";
import { VocabularyCard } from "@/components/vocabulary-card";
import { AudioPlayer } from "@/components/audio-player";
import { VideoPlayer } from "@/components/video-player";
import { lessons } from "@/data/lessons";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { PDFViewer } from "@/components/pdf-viewer";
import { useState } from "react";

export default function LessonDetailPage() {
  const params = useParams();
  const { t, language } = useLocalization();
  const lessonId = params.id as string;
  const [activeTab, setActiveTab] = useState<"vocab" | "grammar">("vocab");

  const lesson = lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
            <Button asChild>
              <Link href="/lessons">Back to Lessons</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Lesson Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">
                {lesson.title[language === "ar" ? "arabic" : "english"]}
              </h1>
            </div>
            <p className="text-muted-foreground">
              {lesson.description[language === "ar" ? "arabic" : "english"]}
            </p>

            {/* Media Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {lesson.audioUrl && (
                <AudioPlayer
                  src={lesson.audioUrl}
                  title={`${t("lesson")} ${t("audio")}`}
                />
              )}
              {lesson.videoUrl && (
                <VideoPlayer
                  src={lesson.videoUrl}
                  title={`${t("lesson")} ${t("video")}`}
                  poster="/spanish-lesson-thumbnail.png"
                />
              )}
            </div>
          </div>

          <Tabs defaultValue="vocabulary" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vocabulary">{t("vocabulary")}</TabsTrigger>
              <TabsTrigger value="grammar">{t("grammar")}</TabsTrigger>
            </TabsList>

            <TabsContent value="vocabulary" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lesson.vocabulary.map((vocab, index) => (
                  <VocabularyCard key={index} vocabulary={vocab} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="grammar" className="space-y-6">
              {lesson.grammarPdfUrl ? (
                <PDFViewer
                  src={lesson.grammarPdfUrl}
                  title={`${
                    lesson.title[language === "ar" ? "arabic" : "english"]
                  } - ${t("grammar")}`}
                />
              ) : (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-muted-foreground">
                      {language === "ar"
                        ? "لا يوجد ملف قواعد متاح لهذا الدرس"
                        : "No grammar PDF available for this lesson"}
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
