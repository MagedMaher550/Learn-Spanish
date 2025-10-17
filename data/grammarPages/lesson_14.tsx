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

export function lesson_14_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const fillBlanks = [
    {
      id: 1,
      sentence: "Yo _____ una chaqueta roja.",
      answer: "Yo llevo una chaqueta roja.",
    },
    {
      id: 2,
      sentence: "Ellos _____ pantalones azules.",
      answer: "Ellos llevan pantalones azules.",
    },
    {
      id: 3,
      sentence: "¿Qué _____ tú hoy?",
      answer: "¿Qué llevas tú hoy?",
    },
    {
      id: 4,
      sentence: "Nosotros _____ uniformes en la escuela.",
      answer: "Nosotros llevamos uniformes en la escuela.",
    },
    {
      id: 5,
      sentence: "Ella _____ un vestido elegante.",
      answer: "Ella lleva un vestido elegante.",
    },
  ];

  const multipleChoice = [
    {
      id: 6,
      sentence:
        "¿Qué verbo se usa para describir la ropa que alguien tiene puesta? a) tener  b) ponerse  c) llevar",
      answer: "c) llevar",
    },
    {
      id: 7,
      sentence:
        "Elige la forma correcta: Nosotros _____ camisetas blancas. a) llevo  b) llevamos  c) llevan",
      answer: "b) llevamos",
    },
    {
      id: 8,
      sentence:
        "Completa: Ella siempre _____ pendientes grandes. a) lleva  b) llevo  c) llevas",
      answer: "a) lleva",
    },
  ];

  const translationExercises = [
    {
      id: 9,
      sentence: "Translate: I’m wearing jeans. →",
      answer: "Llevo vaqueros.",
    },
    {
      id: 10,
      sentence: "Translate: He is wearing a hat. →",
      answer: "Él lleva un sombrero.",
    },
    {
      id: 11,
      sentence: "Translate: We are wearing black shoes. →",
      answer: "Llevamos zapatos negros.",
    },
  ];

  const conjugationTable = [
    { pronoun: "yo", form: "llevo" },
    { pronoun: "tú", form: "llevas" },
    { pronoun: "él / ella / usted", form: "lleva" },
    { pronoun: "nosotros / nosotras", form: "llevamos" },
    { pronoun: "vosotros / vosotras", form: "lleváis" },
    { pronoun: "ellos / ellas / ustedes", form: "llevan" },
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
              Lesson 13 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Using <em>llevar</em> to describe clothing and accessories.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* RULES */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                1. Overview — the verb <em>llevar</em>
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                <strong>Llevar</strong> literally means “to carry” or “to wear.”
                In the context of clothing, it is used to describe what someone{" "}
                <em>is wearing</em> or usually wears.
              </p>
              <div className="mt-3 border rounded p-3 bg-muted/5 text-sm">
                <strong>Example:</strong> Yo llevo una camisa blanca. → I’m
                wearing a white shirt.
              </div>
              <div className="mt-3 text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>llevar + ropa/accesorio</strong> → to wear something
                  </li>
                  <li>
                    <strong>llevar puesto/a(s)</strong> → to have something on
                    (emphasizes being dressed)
                  </li>
                  <li>
                    Can also mean “to carry” (llevar una mochila → carry a
                    backpack)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CONJUGATION */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                2. Present tense conjugation of <em>llevar</em>
              </h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base">
                {conjugationTable.map((row) => (
                  <div
                    key={row.pronoun}
                    className="border rounded p-2 bg-muted/5 flex justify-between"
                  >
                    <span>{row.pronoun}</span>
                    <strong>{row.form}</strong>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Regular -AR verb. Stem stays <em>llev-</em>. Same pattern as{" "}
                <em>hablar</em>.
              </p>
            </CardContent>
          </Card>

          {/* EXAMPLES */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                3. Example sentences
              </h3>
              <ul className="list-disc list-inside mt-3 space-y-1 text-sm sm:text-base">
                <li>
                  <em>Llevo un abrigo negro.</em> — I’m wearing a black coat.
                </li>
                <li>
                  <em>Ella lleva un vestido azul y unos zapatos blancos.</em> —
                  She’s wearing a blue dress and white shoes.
                </li>
                <li>
                  <em>¿Qué llevas tú?</em> — What are you wearing?
                </li>
                <li>
                  <em>Mis amigos llevan uniformes en el colegio.</em> — My
                  friends wear uniforms at school.
                </li>
                <li>
                  <em>Siempre llevo gafas de sol.</em> — I always wear
                  sunglasses.
                </li>
              </ul>
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

                <div className="mt-3">
                  <div className="font-medium">Mini production tasks</div>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Write 5 sentences describing what you and your friends are
                      wearing today using <em>llevar</em>.
                    </li>
                    <li>
                      Add adjectives for color and material. Example:{" "}
                      <em>Llevo una camisa blanca de algodón.</em>
                    </li>
                    <li>
                      Record 2 sentences with <em>llevar puesto</em> to show
                      mastery.
                    </li>
                  </ul>
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
                <strong>llevar</strong> = to wear / to carry
              </li>
              <li>
                Use present tense to describe current clothing:{" "}
                <em>Llevo pantalones negros.</em>
              </li>
              <li>
                Add <em>puesto/a(s)</em> for emphasis:{" "}
                <em>Llevo puesta una chaqueta.</em>
              </li>
              <li>Regular -AR verb pattern (hablo, llevo, trabajo).</li>
              <li>
                Use adjectives after the noun: <em>una camisa roja</em>.
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

export default lesson_14_grammar;
