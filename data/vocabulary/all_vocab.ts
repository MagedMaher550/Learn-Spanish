import lesson_one_vocab from "./lesson_1"
import lesson_two_vocab from "./lesson_2"
import lesson_three_vocab from "./lesson_3"
import lesson_four_vocab from "./lesson_4"
import lesson_five_vocab from "./lesson_5"
import lesson_six_vocab from "./lesson_6"
import lesson_seven_vocab from "./lesson_7"
import lesson_8_vocab from "./lesson_8"
import lesson_9_vocab from "./lesson_9"
import lesson_10_vocab from "./lesson_10"
import lesson_11_vocab from "./lesson_11"
import lesson_12_vocab from "./lesson_12"
import lesson_13_vocab from "./lesson_13"

const lessons = [
    lesson_one_vocab,
    lesson_two_vocab,
    lesson_three_vocab,
    lesson_four_vocab,
    lesson_five_vocab,
    lesson_six_vocab,
    lesson_seven_vocab,
    lesson_8_vocab,
    lesson_9_vocab,
    lesson_10_vocab,
    lesson_11_vocab,
    lesson_12_vocab,
    lesson_13_vocab
]

const all_vocab = lessons.flat()

// remove duplicates by `spanish`
const unique_vocab = Array.from(
    new Map(all_vocab.map((item) => [item.spanish.toLowerCase(), item])).values()
)

export default unique_vocab
