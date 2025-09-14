import lesson_one_vocab from "./lesson_1"
import lesson_two_vocab from "./lesson_2"
import lesson_three_vocab from "./lesson_3"
import lesson_four_vocab from "./lesson_4"
import lesson_five_vocab from "./lesson_5"
import lesson_six_vocab from "./lesson_6"

const lessons = [lesson_one_vocab, lesson_two_vocab, lesson_three_vocab, lesson_four_vocab, lesson_five_vocab, lesson_six_vocab]

const all_vocab = lessons.flat()

// remove duplicates by `spanish`
const unique_vocab = Array.from(
    new Map(all_vocab.map((item) => [item.spanish.toLowerCase(), item])).values()
)

export default unique_vocab
