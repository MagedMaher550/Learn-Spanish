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
import { Check } from "lucide-react";

export function lesson_6_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);
  const [openCuanto, setOpenCuanto] = useState(false);
  const [openCual, setOpenCual] = useState(false);
  const [openQue, setOpenQue] = useState(false);
  const [openCuando, setOpenCuando] = useState(false);
  const [openQuien, setOpenQuien] = useState(false);
  const [openDonde, setOpenDonde] = useState(false);
  const [openPorQue, setOpenPorQue] = useState(false);

  const fillBlanks = [
    { id: 1, sentence: "¿_____ cuesta este libro?", answer: "Cuánto" },
    { id: 2, sentence: "¿_____ es tu profesor favorito?", answer: "Quién" },
    { id: 3, sentence: "¿_____ quieres comer?", answer: "Qué" },
    {
      id: 4,
      sentence: "¿_____ días vas a estar en España?",
      answer: "Cuántos",
    },
    { id: 5, sentence: "¿_____ es tu color preferido?", answer: "Cuál" },
  ];

  const translationExercises = [
    { id: 6, sentence: "¿Qué hora es?", answer: "What time is it?" },
    { id: 7, sentence: "¿Dónde vives?", answer: "Where do you live?" },
    { id: 8, sentence: "¿Quién es ella?", answer: "Who is she?" },
    {
      id: 9,
      sentence: "¿Cuándo empieza la clase?",
      answer: "When does the class start?",
    },
    {
      id: 10,
      sentence: "¿Por qué estudias español?",
      answer: "Why do you study Spanish?",
    },
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
              Lesson 6 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Spanish Interrogatives — <em>palabras interrogativas</em>. A1.1
              level.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* CUÁNTO/A/OS/AS */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  1. <em>Cuánto/a/os/as</em> — How much / How many
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenCuanto((s) => !s)}
                >
                  {openCuanto ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openCuanto && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Used to ask about **quantity or price**. Must agree in
                    gender and number with the noun.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>
                        ¿Cuánto cuesta este libro? (How much does this book
                        cost?)
                      </li>
                      <li>
                        ¿Cuántas manzanas quieres? (How many apples do you
                        want?)
                      </li>
                      <li>
                        ¿Cuántos días vas a estar aquí? (How many days will you
                        be here?)
                      </li>
                      <li>
                        ¿Cuánta agua bebes al día? (How much water do you drink
                        per day?)
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* CUÁL/CUÁLES */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  2. <em>Cuál / Cuáles</em> — Which / Which ones
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenCual((s) => !s)}
                >
                  {openCual ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openCual && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Used to **choose from a set of options**. It does not change
                    with gender except for plural.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>
                        ¿Cuál es tu color favorito? (Which is your favorite
                        color?)
                      </li>
                      <li>
                        ¿Cuáles son tus libros preferidos? (Which ones are your
                        favorite books?)
                      </li>
                      <li>
                        ¿Cuál prefieres, té o café? (Which do you prefer, tea or
                        coffee?)
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* QUÉ */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  3. <em>Qué</em> — What
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenQue((s) => !s)}
                >
                  {openQue ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openQue && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Used to ask for a **definition, explanation, or object**.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>¿Qué es esto? (What is this?)</li>
                      <li>¿Qué quieres comer? (What do you want to eat?)</li>
                      <li>¿Qué haces hoy? (What are you doing today?)</li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* CUÁNDO */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  4. <em>Cuándo</em> — When
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenCuando((s) => !s)}
                >
                  {openCuando ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openCuando && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Used to ask about **time, date, or moment**.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>
                        ¿Cuándo empieza la clase? (When does the class start?)
                      </li>
                      <li>
                        ¿Cuándo es tu cumpleaños? (When is your birthday?)
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* QUIÉN / QUIÉNES */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  5. <em>Quién / Quiénes</em> — Who / Who (plural)
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenQuien((s) => !s)}
                >
                  {openQuien ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openQuien && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Used to ask **about a person or people**.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>¿Quién es ella? (Who is she?)</li>
                      <li>¿Quiénes son tus amigos? (Who are your friends?)</li>
                      <li>
                        ¿Quién llama por teléfono? (Who is calling on the
                        phone?)
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* DÓNDE */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  6. <em>Dónde</em> — Where
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenDonde((s) => !s)}
                >
                  {openDonde ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openDonde && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Used to ask about **place or location**.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>¿Dónde vives? (Where do you live?)</li>
                      <li>¿Dónde está el baño? (Where is the bathroom?)</li>
                      <li>¿Dónde trabajas? (Where do you work?)</li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* POR QUÉ */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  7. <em>Por qué</em> — Why
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenPorQue((s) => !s)}
                >
                  {openPorQue ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openPorQue && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Used to ask about **reason or cause**.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>
                        ¿Por qué estudias español? (Why do you study Spanish?)
                      </li>
                      <li>
                        ¿Por qué llegaste tarde? (Why did you arrive late?)
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* PRACTICE SECTION */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  Practice — Exercises
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
                  <div className="font-medium">A. Fill in the blanks</div>
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
                  <div className="font-medium">B. Translation practice</div>
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
                <strong>Qué</strong> → What (object / definition)
              </li>
              <li>
                <strong>Cuánto/a/os/as</strong> → How much / How many (quantity)
              </li>
              <li>
                <strong>Cuál / Cuáles</strong> → Which / Which ones (choice)
              </li>
              <li>
                <strong>Cuándo</strong> → When (time / date)
              </li>
              <li>
                <strong>Quién / Quiénes</strong> → Who / Who (plural) (person)
              </li>
              <li>
                <strong>Dónde</strong> → Where (place / location)
              </li>
              <li>
                <strong>Por qué</strong> → Why (reason / cause)
              </li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}
