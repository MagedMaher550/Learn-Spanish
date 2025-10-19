import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export function lesson_15_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const fillBlanks = [
    {
      id: 1,
      sentence: "El gato es muy _____ y pequeño.",
      answer: "El gato es muy gatito y pequeño.",
    },
    {
      id: 2,
      sentence: "Mi abuela es _____ y cariñosa.",
      answer: "Mi abuela es abuelita y cariñosa.",
    },
    {
      id: 3,
      sentence: "Él _____ ojos verdes.",
      answer: "Él tiene ojos verdes.",
    },
    {
      id: 4,
      sentence: "Nosotros _____ altos y simpáticos.",
      answer: "Nosotros somos altos y simpáticos.",
    },
    {
      id: 5,
      sentence: "Ella _____ una chaqueta roja.",
      answer: "Ella lleva una chaqueta roja.",
    },
  ];

  const multipleChoice = [
    {
      id: 6,
      sentence:
        "Which suffix is used to indicate smallness, affection, or soften adjectives? a) -ito/-ita  b) -mente  c) -ón",
      answer: "a) -ito/-ita",
    },
    {
      id: 7,
      sentence:
        "Which verb describes permanent traits? a) tener  b) ser  c) llevar",
      answer: "b) ser",
    },
    {
      id: 8,
      sentence:
        "Choose the correct verb for temporary features or clothing: a) tener  b) llevar  c) ser",
      answer: "b) llevar",
    },
  ];

  const translationExercises = [
    {
      id: 9,
      sentence: "Translate: She is a little old. →",
      answer: "Ella es viejita.",
    },
    {
      id: 10,
      sentence: "Translate: He has short hair. →",
      answer: "Él tiene el pelo corto.",
    },
    {
      id: 11,
      sentence: "Translate: I’m wearing glasses. →",
      answer: "Llevo gafas.",
    },
  ];

  const conjugationLlevar = [
    { pronoun: "yo", form: "llevo" },
    { pronoun: "tú", form: "llevas" },
    { pronoun: "él / ella / usted", form: "lleva" },
    { pronoun: "nosotros / nosotras", form: "llevamos" },
    { pronoun: "vosotros / vosotras", form: "lleváis" },
    { pronoun: "ellos / ellas / ustedes", form: "llevan" },
  ];

  const conjugationSer = [
    { pronoun: "yo", form: "soy" },
    { pronoun: "tú", form: "eres" },
    { pronoun: "él / ella / usted", form: "es" },
    { pronoun: "nosotros / nosotras", form: "somos" },
    { pronoun: "vosotros / vosotras", form: "sois" },
    { pronoun: "ellos / ellas / ustedes", form: "son" },
  ];

  const conjugationTener = [
    { pronoun: "yo", form: "tengo" },
    { pronoun: "tú", form: "tienes" },
    { pronoun: "él / ella / usted", form: "tiene" },
    { pronoun: "nosotros / nosotras", form: "tenemos" },
    { pronoun: "vosotros / vosotras", form: "tenéis" },
    { pronoun: "ellos / ellas / ustedes", form: "tienen" },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="p-4 sm:p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-lg sm:text-2xl">
              Lesson 15 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Diminutives and describing people using <em>ser</em>,{" "}
              <em>tener</em>, and <em>llevar</em>.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* DIMINUTIVES */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                1. The suffix <em>-ito / -ita</em>
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                The suffix <strong>-ito / -ita</strong> adds a diminutive
                meaning. It can show small size, affection, or soften adjectives
                depending on context.
              </p>
              <div className="mt-3 border rounded p-3 bg-muted/5 text-sm">
                <strong>Examples:</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>Perro → perrito → “small dog”</li>
                  <li>Casa → casita → “small house”</li>
                  <li>Niña → niñita → “little girl”</li>
                  <li>Abuela → abuelita → “sweet grandma”</li>
                  <li>Gato → gatito → “kitten / cute cat”</li>
                  <li>Feo → feíto → “a little ugly / not very handsome”</li>
                  <li>Tonto → tontito → “a bit silly”</li>
                  <li>Viejo → viejito → “old man” (affectionately)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* SER, TENER, LLEVAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                2. Describing people: <em>ser</em>, <em>tener</em>,{" "}
                <em>llevar</em>
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Use <strong>ser</strong> for permanent traits,{" "}
                <strong>tener</strong> for age or physical features you "have,"
                and <strong>llevar</strong> for temporary or external features
                like clothing or accessories.
              </p>
              <div className="mt-3 border rounded p-3 bg-muted/5 text-sm">
                <strong>Examples:</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>Ser: Es alto. → He is tall.</li>
                  <li>Ser: Es simpática. → She is nice.</li>
                  <li>Tener: Tiene veinte años. → He is twenty years old.</li>
                  <li>Tener: Tiene los ojos verdes. → He has green eyes.</li>
                  <li>Llevar: Lleva gafas. → He wears glasses.</li>
                  <li>
                    Llevar: Lleva una chaqueta roja. → She is wearing a red
                    jacket.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CONJUGATIONS */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                3. Present tense conjugations
              </h3>
              <div className="mt-3 text-sm sm:text-base">
                <div className="mb-2 font-medium">Llevar</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {conjugationLlevar.map((row) => (
                    <div
                      key={row.pronoun}
                      className="border rounded p-2 bg-muted/5 flex justify-between"
                    >
                      <span>{row.pronoun}</span>
                      <strong>{row.form}</strong>
                    </div>
                  ))}
                </div>

                <div className="mt-3 mb-2 font-medium">Ser</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {conjugationSer.map((row) => (
                    <div
                      key={row.pronoun}
                      className="border rounded p-2 bg-muted/5 flex justify-between"
                    >
                      <span>{row.pronoun}</span>
                      <strong>{row.form}</strong>
                    </div>
                  ))}
                </div>

                <div className="mt-3 mb-2 font-medium">Tener</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {conjugationTener.map((row) => (
                    <div
                      key={row.pronoun}
                      className="border rounded p-2 bg-muted/5 flex justify-between"
                    >
                      <span>{row.pronoun}</span>
                      <strong>{row.form}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PRACTICE */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  Practice — exercises
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowAnswers((s) => !s)}
                >
                  {showAnswers ? (
                    <>
                      <Check className="w-4 h-4" /> Hide
                    </>
                  ) : (
                    "Show answers"
                  )}
                </Button>
              </div>

              <div className="mt-4 text-sm sm:text-base space-y-4">
                <div>
                  <div className="font-medium">A. Fill the blanks</div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {fillBlanks.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Answer: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="font-medium">
                    B. Multiple choice — choose the correct form
                  </div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {multipleChoice.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Answer: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="font-medium">C. Translation practice</div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {translationExercises.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Answer: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* SIDEBAR */}
        <aside className="space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              Quick reference
            </h4>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
              <li>
                <strong>-ito / -ita</strong> → diminutive suffix for smallness,
                affection, or softening adjectives.
              </li>
              <li>
                <strong>Ser</strong> → permanent traits: Es alto, Es simpática.
              </li>
              <li>
                <strong>Tener</strong> → age or characteristics you “have”:
                Tiene 20 años, Tiene ojos verdes.
              </li>
              <li>
                <strong>Llevar</strong> → temporary or external features: Lleva
                gafas, Lleva una chaqueta.
              </li>
            </ul>
          </Card>

          <Card className="p-4">
            <div className="font-medium mb-2">Common combinations</div>
            <div className="text-sm space-y-2">
              <div>Llevar gafas → to wear glasses</div>
              <div>Llevar barba → to have a beard</div>
              <div>Llevar uniforme → to wear a uniform</div>
              <div>Llevar maquillaje → to wear makeup</div>
              <div>Llevar pendientes → to wear earrings</div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default lesson_15_grammar;
