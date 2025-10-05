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

export function lesson_10_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const practiceItems = [
    { id: 1, sentence: "En mi ciudad ____ una universidad.", answer: "hay" },
    {
      id: 2,
      sentence: "La universidad ____ cerca del centro.",
      answer: "está",
    },
    { id: 3, sentence: "En la mesa ____ tres libros.", answer: "hay" },
    { id: 4, sentence: "Los libros ____ encima de la mesa.", answer: "están" },
    {
      id: 5,
      sentence: "En mi barrio ____ un supermercado grande.",
      answer: "hay",
    },
    {
      id: 6,
      sentence: "El supermercado ____ al lado del banco.",
      answer: "está",
    },
    { id: 7, sentence: "____ dos parques en mi barrio.", answer: "Hay" },
    {
      id: 8,
      sentence: "Los parques ____ detrás del hospital.",
      answer: "están",
    },
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
          <CardHeader className="p-0">
            <CardTitle className="text-xl sm:text-2xl">
              Lesson 10 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Places · Difference between <em>hay</em> and <em>estar</em>. Learn
              when to use each verb, practice with examples, and apply
              prepositions of place.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <main className="lg:col-span-2 space-y-6">
          {/* HAY */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                El verbo <em>hay</em>
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                <strong>Hay</strong> = “there is / there are”. It expresses the{" "}
                <strong>existence</strong> or
                <strong>quantity</strong> of something, without focusing on its
                identity.
              </p>
              <table className="w-full text-sm sm:text-base mt-3 border">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 text-left">Spanish</th>
                    <th className="p-2 text-left">English</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">
                      En la clase <strong>hay</strong> veinte estudiantes.
                    </td>
                    <td className="p-2">There are 20 students in the class.</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      En mi barrio <strong>hay</strong> un parque.
                    </td>
                    <td className="p-2">There is a park in my neighborhood.</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      En la mesa <strong>hay</strong> un libro.
                    </td>
                    <td className="p-2">There is a book on the table.</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* ESTAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                El verbo <em>estar</em>
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                <strong>Estar</strong> = “to be”. It indicates the{" "}
                <strong>location</strong> of something already known.
              </p>
              <table className="w-full text-sm sm:text-base mt-3 border">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 text-left">Spanish</th>
                    <th className="p-2 text-left">English</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">
                      El parque <strong>está</strong> en el centro.
                    </td>
                    <td className="p-2">The park is downtown.</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      El libro <strong>está</strong> en la mesa.
                    </td>
                    <td className="p-2">The book is on the table.</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      Mis amigos <strong>están</strong> en el restaurante.
                    </td>
                    <td className="p-2">My friends are in the restaurant.</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Prepositions of place */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                Preposiciones de lugar
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Prepositions of place are often used with <em>estar</em> to
                describe <strong>where</strong> things are.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm sm:text-base">
                <li>
                  <em>encima de</em> – on top of
                </li>
                <li>
                  <em>debajo de</em> – under
                </li>
                <li>
                  <em>al lado de</em> – next to
                </li>
                <li>
                  <em>delante de</em> – in front of
                </li>
                <li>
                  <em>detrás de</em> – behind
                </li>
                <li>
                  <em>entre</em> – between
                </li>
              </ul>
              <p className="mt-3 text-sm sm:text-base italic">
                Ejemplo: La lámpara <strong>está encima de</strong> la mesa.
              </p>
            </CardContent>
          </Card>

          {/* HAY vs ESTAR summary */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                ¿Hay o está(n)?
              </h3>
              <Separator className="my-3" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border bg-muted/5">
                  <div className="font-medium">Hay</div>
                  <div className="text-muted-foreground text-sm">
                    Existence / Quantity
                  </div>
                  <p className="mt-1">
                    <em>En Madrid hay muchos museos.</em>
                  </p>
                </div>
                <div className="p-3 rounded-xl border bg-muted/5">
                  <div className="font-medium">Estar</div>
                  <div className="text-muted-foreground text-sm">
                    Location / Position
                  </div>
                  <p className="mt-1">
                    <em>El museo del Prado está en Madrid.</em>
                  </p>
                </div>
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

          {/* Challenge */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">Challenge</h3>
              <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
                <li>
                  Write 10 sentences with <em>hay</em> describing your city.
                </li>
                <li>
                  Write 10 sentences with <em>estar</em> describing locations.
                </li>
                <li>
                  Combine with prepositions: e.g. “El banco está al lado de la
                  estación.”
                </li>
                <li>
                  Speak aloud: Ask and answer with a partner — “¿Hay un cine
                  aquí?” / “Sí, está cerca del centro.”
                </li>
              </ul>
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
                  <strong>Hay:</strong> existence / quantity
                </li>
                <li>
                  <strong>Estar:</strong> location / position
                </li>
                <li>Prepositions add detail: encima de, debajo de, etc.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Common mistakes</h4>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm">
                <li>
                  Using <em>estar</em> instead of <em>hay</em> for existence.
                </li>
                <li>
                  Forgetting plural: <em>hay muchos…</em>
                </li>
                <li>
                  Mixing <em>ser</em> with <em>estar</em> for location.
                </li>
              </ol>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
