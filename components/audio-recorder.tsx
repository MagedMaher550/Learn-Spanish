"use client"

import { useState, useRef } from "react"
import { useLocalization } from "@/contexts/localization-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Square, Play, Pause, Trash2 } from "lucide-react"

interface AudioRecorderProps {
  onRecordingComplete?: (audioBlob: Blob) => void
  title?: string
}

export function AudioRecorder({ onRecordingComplete, title }: AudioRecorderProps) {
  const { t } = useLocalization()
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [recordingTime, setRecordingTime] = useState(0)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" })
        const url = URL.createObjectURL(blob)
        setAudioBlob(blob)
        setAudioUrl(url)
        onRecordingComplete?.(blob)

        // Stop all tracks to release microphone
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } catch (error) {
      console.error("Error accessing microphone:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const playRecording = () => {
    const audio = audioRef.current
    if (!audio || !audioUrl) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const deleteRecording = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
    }
    setAudioBlob(null)
    setAudioUrl(null)
    setIsPlaying(false)
    setRecordingTime(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic className="h-5 w-5" />
          {title || "Practice Pronunciation"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Recording Controls */}
        <div className="flex items-center justify-center gap-4">
          {!isRecording ? (
            <Button onClick={startRecording} size="lg" className="gap-2">
              <Mic className="h-5 w-5" />
              Start Recording
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <Button onClick={stopRecording} size="lg" variant="destructive" className="gap-2">
                <Square className="h-5 w-5" />
                Stop Recording
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-mono">{formatTime(recordingTime)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Playback Controls */}
        {audioUrl && (
          <div className="space-y-4 p-4 bg-muted rounded-lg">
            <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />

            <div className="flex items-center justify-center gap-2">
              <Button onClick={playRecording} variant="outline" size="sm">
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button onClick={deleteRecording} variant="outline" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-center text-muted-foreground">
              Recording saved • Duration: {formatTime(recordingTime)}
            </p>
          </div>
        )}

        {!audioUrl && !isRecording && (
          <p className="text-sm text-center text-muted-foreground">
            Click the microphone to start recording your pronunciation
          </p>
        )}
      </CardContent>
    </Card>
  )
}
