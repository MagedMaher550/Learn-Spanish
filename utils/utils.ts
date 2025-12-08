import all_vocab from "@/data/vocabulary/all_vocab"
import { Vocabulary } from "@/types/lesson"

export function slugifyAudioFilename(phrase: string): string {
    return phrase
        .normalize("NFD")                     // split accented chars
        .replace(/[\u0300-\u036f]/g, "")     // remove accents
        .replace(/[¿¡?!"',.]/g, "")          // remove punctuation
        .replace(/\s+/g, "_")                // replace spaces with underscores
        .replace(/[^a-zA-Z0-9_-]/g, "")     // remove any other invalid chars
        .trim()
        .toLowerCase();                       // lowercase for consistency
}



export function weightedSearch(query: string): Vocabulary[] {
    if (!query.trim()) return all_vocab

    const lowerQuery = query.toLowerCase()

    return all_vocab
        .map((vocab) => {
            let score = 0

            // Apply weights only to Spanish and Arabic
            if (vocab.spanish.toLowerCase().includes(lowerQuery)) score += 5
            if (vocab.arabic.toLowerCase().includes(lowerQuery)) score += 3

            return { vocab, score }
        })
        .filter((entry) => entry.score > 0) // keep only matches
        .sort((a, b) => b.score - a.score) // sort by score desc
        .map((entry) => entry.vocab)
}
