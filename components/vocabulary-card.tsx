"use client";

import { useState } from "react";
import { useLocalization } from "@/contexts/localization-context";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/audio-player";
import { Volume2, RotateCcw } from "lucide-react";
import type { Vocabulary } from "@/types/lesson";

interface VocabularyCardProps {
  vocabulary: Vocabulary;
}

export function VocabularyCard({ vocabulary }: VocabularyCardProps) {
  const { language } = useLocalization();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      className="h-48 cursor-pointer vocabulary-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-flip"
      onClick={handleFlip}
    >
      <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
        {!isFlipped ? (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              {vocabulary.spanish}
            </h3>
            <p className="text-sm text-muted-foreground">
              /{vocabulary.pronunciation}/
            </p>
            <div className="flex justify-center gap-2">
              {vocabulary.audioUrl ? (
                <div onClick={(e) => e.stopPropagation()}>
                  <AudioPlayer
                    src={vocabulary.audioUrl}
                    compact={true}
                    showTitle={false}
                  />
                </div>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-primary/10 transition-colors bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                className="hover:bg-primary/10 transition-colors bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold">{vocabulary.english}</p>
              <p className="text-lg font-semibold">{vocabulary.arabic}</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="hover:bg-primary/10 transition-colors bg-transparent"
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
