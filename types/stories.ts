export interface Word {
    id?: string
    spanish: string;
    english: string;
    arabic: string;
    audio?: string;
    pronunciation?: string;
    partOfSpeech?: string;
}

export interface Sentence {
    id: number
    spanish: string;
    english: string;
    arabic: string;
    words: Word[] | string[];
    audio: string;
}

export interface Story {
    id: number;
    title: string;
    arTitle: string;
    level: string;
    image: string;
    sentences: Sentence[];
    fullAudio?: string;
    vocabulary: Word[];
    grammar?: string;
}
export type PlaybackSpeed = 0.5 | 0.75 | 1 | 1.25 | 1.5;
