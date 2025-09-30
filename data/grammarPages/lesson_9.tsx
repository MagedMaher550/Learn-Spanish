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
import { BookOpen, Clock, MapPin, Check } from "lucide-react";

export function lesson_9_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const practiceItems = [
    { id: 1, sentence: "El libro está ____ la mesa.", answer: "encima de" },
    { id: 2, sentence: "La silla está ____ la mesa.", answer: "al lado de" },
    { id: 3, sentence: "El coche está ____ la casa.", answer: "delante de" },
    { id: 4, sentence: "El gato está ____ la cama.", answer: "debajo de" },
    { id: 5, sentence: "La escuela está ____ mi casa.", answer: "cerca de" },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 px-3 sm:px-0">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="p-4 sm:p-6">
          <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-0">
            <div>
              <CardTitle className="text-xl sm:text-2xl">
                Lesson 9 — Grammar
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Estar · hoy · Prepositions of place. Clear rules, model
                sentences, and short practice.
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> Reference
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> 25–45 min study
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Two-column grid: main + quick ref */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main section */}
        <main className="lg:col-span-2 space-y-6">
          {/* ESTAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                El verbo <em>estar</em>
              </h3>
              <p className="mb-3 text-sm sm:text-base">
                <strong>Estar</strong> expresses <strong>location</strong>,
                <strong> temporary states</strong>, the{" "}
                <strong>progressive</strong> (estar + gerund) and results of
                recent actions. It is not interchangeable with <em>ser</em>.
              </p>

              {/* Table with scroll */}
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full min-w-[400px] text-left text-sm">
                  <thead>
                    <tr className="text-muted-foreground">
                      <th className="pr-4 py-2">Person</th>
                      <th className="py-2">Present</th>
                      <th className="py-2">English</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pr-4">Yo</td>
                      <td>estoy</td>
                      <td>I am</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="pr-4">Tú</td>
                      <td>estás</td>
                      <td>you are (informal)</td>
                    </tr>
                    <tr>
                      <td className="pr-4">Él / Ella / Ud.</td>
                      <td>está</td>
                      <td>he / she / you (formal) is</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="pr-4">Nosotros</td>
                      <td>estamos</td>
                      <td>we are</td>
                    </tr>
                    <tr>
                      <td className="pr-4">Vosotros</td>
                      <td>estáis</td>
                      <td>you (pl.) are</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="pr-4">Ellos / Uds.</td>
                      <td>están</td>
                      <td>they / you (pl.) are</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Separator className="my-4" />
              <h4 className="font-medium">Primary uses</h4>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm sm:text-base">
                <li>
                  <strong>Location:</strong> <em>Estoy en casa.</em>
                </li>
                <li>
                  <strong>Temporary state:</strong> <em>Estás cansado.</em>
                </li>
                <li>
                  <strong>Progressive:</strong> <em>Estoy leyendo.</em>
                </li>
                <li>
                  <strong>Result of action:</strong>{" "}
                  <em>La puerta está cerrada.</em>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* HOY */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                Uso de <em>hoy</em>
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                <strong>Hoy</strong> means <em>today</em>. It anchors sentences
                to the present day and can appear before or after the verb.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm sm:text-base">
                <li>
                  <em>Hoy estudio español.</em> (I study Spanish today.)
                </li>
                <li>
                  <em>Estudio español hoy.</em> (Same meaning, diff. emphasis)
                </li>
                <li>
                  <em>Hoy estoy cansado.</em> (Today I am tired.)
                </li>
                <li>
                  <em>Hoy no trabajo.</em> (I don’t work today.)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Prepositions */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                Preposiciones de lugar
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Prepositions describe location and are used with <em>estar</em>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  [
                    "encima de",
                    "on top of",
                    "El libro está encima de la mesa.",
                  ],
                  ["debajo de", "under", "El gato está debajo de la cama."],
                  [
                    "delante de",
                    "in front of",
                    "El coche está delante de la casa.",
                  ],
                  [
                    "detrás de",
                    "behind",
                    "El árbol está detrás de la escuela.",
                  ],
                  [
                    "al lado de",
                    "next to",
                    "El sofá está al lado de la ventana.",
                  ],
                  [
                    "entre ... y ...",
                    "between",
                    "La lámpara está entre la mesa y la silla.",
                  ],
                  [
                    "a la derecha de",
                    "to the right",
                    "El baño está a la derecha de la cocina.",
                  ],
                  [
                    "a la izquierda de",
                    "to the left",
                    "La nevera está a la izquierda de la puerta.",
                  ],
                  [
                    "cerca de",
                    "near",
                    "La farmacia está cerca de la estación.",
                  ],
                  ["lejos de", "far from", "Mi trabajo está lejos de mi casa."],
                ].map(([sp, en, ex]) => (
                  <div
                    key={sp}
                    className="p-3 rounded-xl border bg-muted/5 text-sm"
                  >
                    <div className="font-medium">{sp}</div>
                    <div className="text-muted-foreground">{en}</div>
                    <div className="mt-1">{ex}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Practice */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-semibold">Practice</h3>
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
              <ol className="list-decimal list-inside mt-4 space-y-3 text-sm sm:text-base">
                {practiceItems.map((p) => (
                  <li key={p.id}>
                    <div className="font-medium">{p.sentence}</div>
                    {showAnswers && (
                      <div className="text-muted-foreground">
                        Answer: <strong>{p.answer}</strong>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </main>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Quick reference</h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li>
                  <strong>Estar:</strong> location, temporary states,
                  progressive
                </li>
                <li>
                  <strong>Hoy:</strong> today marker, flexible position
                </li>
                <li>
                  <strong>Prepositions:</strong> use with <em>estar</em>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Common mistakes</h4>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm">
                <li>
                  Using <em>ser</em> for temporary states.
                </li>
                <li>
                  Misplacing <em>hoy</em>. Both positions valid.
                </li>
                <li>
                  Confusing <em>entre</em> with <em>en</em>.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Next steps</h4>
              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                <li>Record practice sentences.</li>
                <li>Create 5 sentences about your home.</li>
                <li>Compare with partner/teacher.</li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
