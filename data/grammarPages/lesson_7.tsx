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

export function lesson_7_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);
  const [openAr, setOpenAr] = useState(false);
  const [openEr, setOpenEr] = useState(false);
  const [openIr, setOpenIr] = useState(false);

  const practiceExercises = [
    { id: 1, sentence: "Yo _____ (hablar) español.", answer: "hablo" },
    { id: 2, sentence: "Tú _____ (comer) pizza.", answer: "comes" },
    { id: 3, sentence: "Nosotros _____ (vivir) en Madrid.", answer: "vivimos" },
    {
      id: 4,
      sentence: "Ellos _____ (trabajar) en la oficina.",
      answer: "trabajan",
    },
    { id: 5, sentence: "Ella _____ (beber) agua.", answer: "bebe" },
    {
      id: 6,
      sentence: "Vosotros _____ (escribir) cartas.",
      answer: "escribís",
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
              Lesson 7 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              El Presente — Regular Verbs
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* AR VERBS */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  1. Verbos regulares -AR
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenAr((s) => !s)}
                >
                  {openAr ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openAr && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Regular verbs ending in <strong>-ar</strong>. To conjugate,
                    remove <em>-ar</em> and add the ending according to the
                    subject.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Endings:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>Yo → -o</li>
                      <li>Tú → -as</li>
                      <li>Él / Ella / Usted → -a</li>
                      <li>Nosotros/as → -amos</li>
                      <li>Vosotros/as → -áis</li>
                      <li>Ellos / Ellas / Ustedes → -an</li>
                    </ul>
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>Yo hablo español. (I speak Spanish.)</li>
                      <li>Tú estudias inglés. (You study English.)</li>
                      <li>
                        Él trabaja en la oficina. (He works at the office.)
                      </li>
                      <li>Nosotros cantamos una canción. (We sing a song.)</li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* ER VERBS */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  2. Verbos regulares -ER
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenEr((s) => !s)}
                >
                  {openEr ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openEr && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Regular verbs ending in <strong>-er</strong>. Remove{" "}
                    <em>-er</em> and add the ending according to the subject.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Endings:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>Yo → -o</li>
                      <li>Tú → -es</li>
                      <li>Él / Ella / Usted → -e</li>
                      <li>Nosotros/as → -emos</li>
                      <li>Vosotros/as → -éis</li>
                      <li>Ellos / Ellas / Ustedes → -en</li>
                    </ul>
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>Yo como pizza. (I eat pizza.)</li>
                      <li>Tú bebes agua. (You drink water.)</li>
                      <li>Ella aprende español. (She learns Spanish.)</li>
                      <li>
                        Nosotros corremos en el parque. (We run in the park.)
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* IR VERBS */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  3. Verbos regulares -IR
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenIr((s) => !s)}
                >
                  {openIr ? "Collapse" : "Expand"}
                </Button>
              </div>
              {openIr && (
                <>
                  <p className="mt-2 text-sm sm:text-base">
                    Regular verbs ending in <strong>-ir</strong>. Remove{" "}
                    <em>-ir</em> and add the ending according to the subject.
                  </p>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Endings:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>Yo → -o</li>
                      <li>Tú → -es</li>
                      <li>Él / Ella / Usted → -e</li>
                      <li>Nosotros/as → -imos</li>
                      <li>Vosotros/as → -ís</li>
                      <li>Ellos / Ellas / Ustedes → -en</li>
                    </ul>
                    <strong>Examples:</strong>
                    <ul className="list-disc list-inside mt-1">
                      <li>Yo vivo en Madrid. (I live in Madrid.)</li>
                      <li>Tú escribes cartas. (You write letters.)</li>
                      <li>Él recibe un regalo. (He receives a gift.)</li>
                      <li>
                        Nosotros compartimos la comida. (We share the food.)
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
              Quick reference — Regular Present
            </h4>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
              <li>-AR endings: o, as, a, amos, áis, an</li>
              <li>-ER endings: o, es, e, emos, éis, en</li>
              <li>-IR endings: o, es, e, imos, ís, en</li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}
