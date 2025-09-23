"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AudioPlayer } from "./audio-player";
import { slugifyAudioFilename } from "@/utils/utils";
import { PlaybackSpeed, Word } from "@/types/stories";
import { useLocalization } from "@/contexts/localization-context";

interface WordTooltipProps {
  word: Word;
  children: React.ReactNode;
  position?: "top" | "bottom";
  playbackSpeed: PlaybackSpeed;
}

export function WordTooltip({
  word,
  children,
  position = "top",
  playbackSpeed,
}: WordTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const { language } = useLocalization();

  const toggleTooltip = () => setIsVisible((v) => !v);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <span className="relative inline-block">
      <span
        className="cursor-pointer hover:bg-primary/20 hover:text-primary rounded px-1 py-0.5 transition-colors"
        onClick={toggleTooltip}
      >
        {children}
      </span>

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 ${
            position === "top"
              ? "-top-2 -translate-y-full"
              : "-bottom-2 translate-y-full"
          } left-1/2 transform -translate-x-1/2`}
        >
          <Card className="bg-card border-border shadow-lg min-w-48">
            <CardContent className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-semibold text-primary text-lg">
                    {word.spanish}
                  </span>
                  {word.pronunciation && (
                    <span className="text-xs text-muted-foreground ml-2">
                      /{word.pronunciation}/
                    </span>
                  )}
                </div>

                <AudioPlayer
                  src={`/audio/vocab/${slugifyAudioFilename(
                    word.id || ""
                  )}.mp3`}
                  compact
                  showTitle={false}
                  playbackRate={playbackSpeed}
                />
              </div>

              <div className="space-y-1">
                <p className="text-foreground font-medium">
                  {language === "en" ? word.english : word.arabic}
                </p>
                {word.partOfSpeech && (
                  <p className="text-xs text-muted-foreground italic">
                    {word.partOfSpeech}
                  </p>
                )}
              </div>

              {/* Tooltip arrow (disabled for now) */}
              {/* <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-border rotate-45 ${
                  position === "top"
                    ? "-bottom-1 border-r border-b"
                    : "-top-1 border-l border-t"
                }`}
              /> */}
            </CardContent>
          </Card>
        </div>
      )}
    </span>
  );
}
