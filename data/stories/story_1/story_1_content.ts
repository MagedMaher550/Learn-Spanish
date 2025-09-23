import { story_1_words } from "./story_1_words";

export const story_1_content = {
    id: 'story_1',
    title: "Dogs get free daycare in Italy!",
    arTitle: ".الكلاب في ايطاليا لديها رعاية صحية مجانية",
    level: "A1.1",
    image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-22%20at%2019.04.47_bb2e9312.jpg-IU6DyBim7lZbPegHCcC2QM2xjmitaJ.jpeg",
    fullAudio: "/audio/stories/story_1/full_story.mp3",

    sentences: [
        {
            spanish: "En Roma, puedes visitar los museos con tus perros.",
            english: "In Rome, you can visit the museums with your dogs.",
            arabic: "في روما، يمكنك زيارة المتاحف مع كلابك.",
            words: ["en", "roma", "puedes", "visitar", "los", "museos", "con", "tus", "perros"],
            audio: "/audio/stories/story_1/s1.mp3",
        },
        {
            spanish: "Tienen guarderías.",
            english: "They have dog day care.",
            arabic: "لديهم حضانات للكلاب.",
            words: ["tienen", "guarderias"],
            audio: "/audio/stories/story_1/s2.mp3",
        },
        {
            spanish: "Para usar este servicio, tienes que comprar un boleto.",
            english: "To use this service, you have to buy a ticket.",
            arabic: "لاستخدام هذه الخدمة، عليك شراء تذكرة.",
            words: ["para", "usar", "este", "servicio", "tienes", "que", "comprar", "un", "boleto"],
            audio: "/audio/stories/story_1/s3.mp3",
        },
        {
            spanish: "Las guarderías abren una vez al mes.",
            english: "The day care centers are open once a month.",
            arabic: "تفتح الحضانات مرة واحدة في الشهر.",
            words: ["las", "guarderias", "abren", "una", "vez", "al", "mes"],
            audio: "/audio/stories/story_1/s4.mp3",
        },
        {
            spanish: "Muchas personas usan este servicio con este.",
            english: "Many people use this service with this.",
            arabic: "العديد من الناس يستخدمون هذه الخدمة مع هذا.",
            words: ["muchas", "personas", "usan", "este", "servicio", "con", "este"],
            audio: "/audio/stories/story_1/s5.mp3",
        },

    ],

    // reuse from words dictionary
    vocabulary: Object.keys(story_1_words),
};