import storiesVocabs from './stories_vocab'
import {
    lesson_1_vocab,
    lesson_2_vocab,
    lesson_3_vocab,
    lesson_4_vocab,
    lesson_5_vocab,
    lesson_6_vocab,
    lesson_7_vocab,
    lesson_8_vocab,
    lesson_9_vocab,
    lesson_10_vocab,
    lesson_11_vocab,
    lesson_12_vocab,
    lesson_13_vocab,
    lesson_14_vocab,
} from './index'


const all_vocab = [
    ...Object.values(storiesVocabs).flat(),
    ...lesson_1_vocab,
    ...lesson_2_vocab,
    ...lesson_3_vocab,
    ...lesson_4_vocab,
    ...lesson_5_vocab,
    ...lesson_6_vocab,
    ...lesson_7_vocab,
    ...lesson_8_vocab,
    ...lesson_9_vocab,
    ...lesson_10_vocab,
    ...lesson_11_vocab,
    ...lesson_12_vocab,
    ...lesson_13_vocab,
    ...lesson_14_vocab,
]

// Remove duplicates by `spanish`
const unique_vocab = Array.from(
    new Map(
        all_vocab
            .filter((item) => typeof item.spanish === 'string')
            .map((item) => [item.spanish.toLowerCase(), item])
    ).values()
)

export default unique_vocab
