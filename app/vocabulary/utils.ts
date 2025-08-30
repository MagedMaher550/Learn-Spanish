import all_vocab from "@/data/vocabulary/all_vocab";
import { Vocabulary } from "@/types/lesson";

export default function weightedSearch(query: string): Vocabulary[] {
  if (!query.trim()) return all_vocab;

  const lowerQuery = query.toLowerCase();

  return all_vocab
    .map((vocab) => {
      let score = 0;

      // Higher weights for Spanish and English
      if (vocab.spanish.toLowerCase().includes(lowerQuery)) score += 5;
      if (vocab.english.toLowerCase().includes(lowerQuery)) score += 4;

      // Lower weights for Arabic and pronunciation
      if (vocab.arabic.toLowerCase().includes(lowerQuery)) score += 2;
      if (vocab.pronunciation.toLowerCase().includes(lowerQuery)) score += 1;

      return { vocab, score };
    })
    .filter((entry) => entry.score > 0) // keep only matches
    .sort((a, b) => b.score - a.score) // sort by score desc
    .map((entry) => entry.vocab);
}
