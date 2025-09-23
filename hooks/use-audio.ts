"use client"

import { useState, useRef, useCallback } from "react"

interface UseAudioOptions {
    onPlay?: () => void
    onPause?: () => void
    onEnd?: () => void
    onError?: () => void
}

export function useAudio(options: UseAudioOptions = {}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const play = useCallback(
        (audioUrl: string) => {
            if (!audioUrl) return

            // Stop any currently playing audio
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }

            setIsLoading(true)
            setError(null)

            const audio = new Audio(audioUrl)
            audioRef.current = audio

            audio.onloadstart = () => setIsLoading(true)
            audio.oncanplay = () => setIsLoading(false)

            audio.onplay = () => {
                setIsPlaying(true)
                options.onPlay?.()
            }

            audio.onpause = () => {
                setIsPlaying(false)
                options.onPause?.()
            }

            audio.onended = () => {
                setIsPlaying(false)
                setIsLoading(false)
                audioRef.current = null
                options.onEnd?.()
            }

            audio.onerror = () => {
                setIsPlaying(false)
                setIsLoading(false)
                setError("Failed to load audio")
                audioRef.current = null
                options.onError?.()
            }

            audio.play().catch((err) => {
                setIsPlaying(false)
                setIsLoading(false)
                setError("Failed to play audio")
                audioRef.current = null
                options.onError?.()
            })
        },
        [options],
    )

    const pause = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause()
        }
    }, [])

    const stop = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
            audioRef.current = null
        }
        setIsPlaying(false)
        setIsLoading(false)
    }, [])

    const restart = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }
    }, [])

    return {
        isPlaying,
        isLoading,
        error,
        play,
        pause,
        stop,
        restart,
    }
}
