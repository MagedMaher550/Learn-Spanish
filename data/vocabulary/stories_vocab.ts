import stories from "../stories"

function convertWordsToArray(wordsObject: any): any[] {
    if (!wordsObject) return []
    return Object.values(wordsObject).map((word: any) => ({
        spanish: word.spanish,
        english: word.english,
        arabic: word.arabic,
        pronunciation: word.pronunciation,
    }))
}

const storiesVocabs: Record<string, any[]> = {}

Object.entries(stories).forEach(([id, story]: any) => {
    storiesVocabs[`story_${id}_vocab`] = convertWordsToArray(story.words)
})

export default storiesVocabs
