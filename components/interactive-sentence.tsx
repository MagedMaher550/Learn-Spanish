"use client";

import { PlaybackSpeed, Sentence, Word } from "@/types/stories";
import { WordTooltip } from "./word-tooltip";
import { AudioPlayer } from "./audio-player";
import { useLocalization } from "@/contexts/localization-context";

interface InteractiveSentenceProps {
  sentence: Sentence;
  storyWords: Word[];
  onWordHover?: (word: Word) => void;
  playbackSpeed: PlaybackSpeed;
}

export function InteractiveSentence({
  sentence,
  storyWords,
  onWordHover,
  playbackSpeed,
}: InteractiveSentenceProps) {
  const handleWordClick = (word: Word) => {
    onWordHover?.(word);
  };

  const { language } = useLocalization();
  const { english, arabic, words, audio } = sentence;

  const transformedWords = (words || []).map((word) => storyWords[word]);

  return (
    <div className="mb-6 p-4 rounded-lg bg-card/50 border border-border">
      <div className="flex items-start gap-3 mb-3">
        <AudioPlayer src={audio} compact playbackRate={playbackSpeed} />

        <div className="flex-1">
          {/* ⬇ FIX: use div, not p */}
          <div className="text-lg text-foreground mb-2 leading-relaxed flex flex-wrap gap-1">
            {transformedWords.map((word, index) => (
              <span key={index}>
                <WordTooltip word={word} playbackSpeed={playbackSpeed}>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleWordClick(word)}
                  >
                    {word.spanish}
                  </span>
                </WordTooltip>
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground italic leading-relaxed">
            {language === "en" ? english : arabic}
          </p>
        </div>
      </div>
    </div>
  );
}
