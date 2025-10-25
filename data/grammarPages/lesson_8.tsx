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

export function lesson_8_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);
  const [openTener, setOpenTener] = useState(false);
  const [openTomar, setOpenTomar] = useState(false);

  const practiceExercises = [
    { id: 1, sentence: "Yo _____ (tener) un coche.", answer: "tengo" },
    { id: 2, sentence: "Tú _____ (tener) hambre.", answer: "tienes" },
    { id: 3, sentence: "Él _____ (tener) una bicicleta.", answer: "tiene" },
    { id: 4, sentence: "Nosotros _____ (tomar) café.", answer: "tomamos" },
    { id: 5, sentence: "Vosotros _____ (tomar) agua.", answer: "tomáis" },
    { id: 6, sentence: "Ellos _____ (tomar) el tren.", answer: "toman" },
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
              Lesson 8 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Usage and conjugation of <strong>tener</strong> and{" "}
              <strong>tomar</strong> (A1.1 level)
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* VERBO TENER */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  1. Verbo <em>tener</em> — “to have / to possess”
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenTener((s) => !s)}
                >
                  {openTener ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openTener && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    <strong>Tener</strong> expresses possession, age, or
                    physical sensations (e.g., hunger, thirst, fear).
                  </p>

                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Present (conjugation):</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>
                        yo <strong>tengo</strong> (I have)
                      </li>
                      <li>
                        tú <strong>tienes</strong> (you have)
                      </li>
                      <li>
                        él / ella / usted <strong>tiene</strong> (he/she/you
                        have)
                      </li>
                      <li>
                        nosotros/as <strong>tenemos</strong> (we have)
                      </li>
                      <li>
                        vosotros/as <strong>tenéis</strong> (you all have)
                      </li>
                      <li>
                        ellos / ellas / ustedes <strong>tienen</strong>{" "}
                        (they/you all have)
                      </li>
                    </ul>

                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>Tengo un perro. → I have a dog.</li>
                      <li>Tienes hambre. → You are hungry.</li>
                      <li>Él tiene frío. → He is cold.</li>
                      <li>
                        Nosotros tenemos tres hermanos. → We have three
                        siblings.
                      </li>
                      <li>
                        Ellos tienen miedo de la oscuridad. → They are afraid of
                        the dark.
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* VERBO TOMAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  2. Verbo <em>tomar</em> — “to take / to drink / to consume”
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenTomar((s) => !s)}
                >
                  {openTomar ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openTomar && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    <strong>Tomar</strong> is used for consuming drinks or food,
                    taking transportation, or performing actions.
                  </p>

                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Present (conjugation):</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>
                        yo <strong>tomo</strong> (I take/drink)
                      </li>
                      <li>
                        tú <strong>tomas</strong> (you take/drink)
                      </li>
                      <li>
                        él / ella / usted <strong>toma</strong> (he/she/you
                        take/drink)
                      </li>
                      <li>
                        nosotros/as <strong>tomamos</strong> (we take/drink)
                      </li>
                      <li>
                        vosotros/as <strong>tomáis</strong> (you all take/drink)
                      </li>
                      <li>
                        ellos / ellas / ustedes <strong>toman</strong> (they/you
                        all take/drink)
                      </li>
                    </ul>

                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>
                        Yo tomo café por la mañana. → I drink coffee in the
                        morning.
                      </li>
                      <li>
                        Tú tomas el tren todos los días. → You take the train
                        every day.
                      </li>
                      <li>Ella toma una foto. → She takes a photo.</li>
                      <li>Nosotros tomamos agua. → We drink water.</li>
                      <li>Ellos toman un descanso. → They take a break.</li>
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
                  Practice — Fill in the blanks
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
              <div className="mt-4 text-sm sm:text-base space-y-2">
                <ol className="list-decimal list-inside space-y-2">
                  {practiceExercises.map((p) => (
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
                <strong>Tener</strong> → possession, age, physical state.
                Example: Tengo hambre.
              </li>
              <li>
                <strong>Tomar</strong> → drink, take, consume, or use transport.
                Example: Tomo el tren.
              </li>
              <li>
                Both verbs are regular except <strong>tener</strong> (irregular
                in yo form: tengo).
              </li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}
