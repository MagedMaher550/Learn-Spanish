"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Play, Pause, Loader2 } from "lucide-react";
import { useAudio } from "@/hooks/use-audio";

interface AudioButtonProps {
  audioUrl?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "ghost" | "outline";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export function AudioButton({
  audioUrl,
  size = "sm",
  variant = "ghost",
  className = "",
  children,
  disabled = false,
}: AudioButtonProps) {
  const { isPlaying, isLoading, play, pause } = useAudio();

  const handleClick = () => {
    if (!audioUrl || disabled) return;

    if (isPlaying) {
      pause();
    } else {
      play(audioUrl);
    }
  };

  const Icon = isLoading ? Loader2 : isPlaying ? Pause : Play;

  return (
    <Button
      size={size}
      variant={variant}
      className={`${className} ${
        !audioUrl ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleClick}
      disabled={disabled || !audioUrl || isLoading}
    >
      <Icon
        className={`h-4 w-4 ${isLoading ? "animate-spin" : ""} ${
          children ? "mr-2" : ""
        }`}
      />
      {children}
    </Button>
  );
}
