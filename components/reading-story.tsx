"use client";

import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InteractiveSentence } from "./interactive-sentence";
import { Volume2 } from "lucide-react";
import { Navigation } from "./navigation";
import { PlaybackSpeed, Story, Word } from "@/types/stories";
import { VocabularyCard } from "./vocabulary-card";
import { useLocalization } from "@/contexts/localization-context";
import { AudioPlayer } from "./audio-player";
import useViewPortWidth from "@/hooks/use-viewport-width";
import Loader from "./ui/loader";

interface ReadingStoryProps {
  story: Story;
  words: Word[];
  grammar: JSX.Element;
}

export function ReadingStory({ story, words, grammar }: ReadingStoryProps) {
  const [hoveredWord, setHoveredWord] = useState<Word | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<PlaybackSpeed>(1);
  const [hydrated, setHydrated] = useState(false);
  const [loading, setIsLoading] = useState<boolean>(true);

  const { language } = useLocalization();
  const { viewPortWidth } = useViewPortWidth();

  useEffect(() => {
    setHydrated(true);
    setIsLoading(false);
  }, []);

  const handleSpeedChange = () => {
    const speeds = [1, 1.25, 1.5, 0.5, 0.75];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed as PlaybackSpeed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid w-full grid-flow-col auto-cols-fr bg-card">
            <TabsTrigger
              value="story"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Story
            </TabsTrigger>
            <TabsTrigger value="vocabulary">Keywords</TabsTrigger>
            <TabsTrigger value="grammar">Grammar</TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="mt-6">
            {loading ? (
              <Loader />
            ) : (
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-card-foreground">
                      {language === "en" ? story.title : story.arTitle}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {story.level}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div
                    className={`flex items-center mb-6 rounded-lg ${
                      hydrated
                        ? viewPortWidth > 485
                          ? "flex-row justify-between"
                          : "flex-col-reverse justify-between bg-red"
                        : "flex-col-reverse justify-between"
                    }`}
                  >
                    <AudioPlayer
                      src={story.fullAudio || ""}
                      showTitle
                      title="Full story"
                    />

                    <Button
                      variant="outline"
                      onClick={handleSpeedChange}
                      className={`flex items-center gap-2 bg-transparent cursor-pointer ${
                        hydrated && viewPortWidth <= 485 ? "mb-8" : "mb-0"
                      }`}
                      disabled={!story.fullAudio}
                    >
                      <Volume2 className="h-4 w-4" />
                      {playbackSpeed}x
                    </Button>
                  </div>

                  {/* Interactive Sentences */}
                  <div className="space-y-4">
                    {story.sentences.map((sentence, index) => (
                      <InteractiveSentence
                        key={index}
                        sentence={sentence}
                        storyWords={words}
                        onWordHover={setHoveredWord}
                        playbackSpeed={playbackSpeed}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="vocabulary" className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  Story Vocabulary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {story.vocabulary.map((word, index) => (
                    <VocabularyCard
                      key={`${word.id}#${index}`}
                      vocabulary={words[word]}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="grammar" className="mt-6">
            {grammar}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
