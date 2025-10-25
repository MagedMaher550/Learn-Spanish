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

export function lesson_4_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const fillBlanks = [
    {
      id: 1,
      sentence: "1) El ______ está en la plaza. (mapa / mapaS / mapaO)",
      answer: "El mapa está en la plaza.",
    },
    {
      id: 2,
      sentence: "2) La ______ canta en el campo. (vaca / vaco)",
      answer: "La vaca canta en el campo.",
    },
    {
      id: 3,
      sentence: "3) Mis ______ son rojos. (color / colores)",
      answer: "Mis colores son rojos.",
    },
    {
      id: 4,
      sentence: "4) Ella tiene dos ______. (mano / manos)",
      answer: "Ella tiene dos manos.",
    },
    {
      id: 5,
      sentence: "5) Hay muchos ______ en el río. (pez / peces)",
      answer: "Hay muchos peces en el río.",
    },
  ];

  const chooseCorrect = [
    {
      id: 6,
      sentence: "6) ¿Cuál es correcto? — El/La día es largo.",
      answer: "El día es largo.",
    },
    {
      id: 7,
      sentence: "7) ¿Cuál es correcto? — La/El mano derecha.",
      answer: "La mano derecha.",
    },
    {
      id: 8,
      sentence: "8) Plural: un libro → _____.",
      answer: "unos libros",
    },
    {
      id: 9,
      sentence: "9) Plural: una canción → _____.",
      answer: "unas canciones",
    },
    {
      id: 10,
      sentence: "10) Femenino de 'doctor' → doctora / doctoro?",
      answer: "doctora",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="p-4 sm:p-6">
          <CardHeader className="p-0">
            <div>
              <CardTitle className="text-lg sm:text-2xl">
                Lesson 4 — Grammar
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Reglas de género, plural, correspondencia masculino↔femenino y
                artículos. Reglas, excepciones y muchos ejemplos A1.1.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* Masculine rules */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                1. Reglas del género — Masculino
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Características comunes que indican género masculino.
              </p>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <strong>1.</strong> La mayoría terminan en <code>-o</code>.
                  <div className="mt-1">
                    Ej: <em>chico</em>, <em>toro</em>.
                  </div>
                </div>

                <div>
                  <strong>2.</strong> Muchas terminan en <code>-or</code> o{" "}
                  <code>-aje</code>.
                  <div className="mt-1">
                    Ej: <em>profesor</em>, <em>paisaje</em>, <em>mensaje</em>.
                  </div>
                </div>

                <div>
                  <strong>3.</strong> Palabras en <code>-ma</code> (de origen
                  griego) suelen ser masculinas.
                  <div className="mt-1">
                    Ej: <em>sistema</em>, <em>tema</em>, <em>problema</em>.
                  </div>
                </div>

                <div>
                  <strong>4–7.</strong> Categorías que son masculinas:
                  <div className="mt-1">
                    Ríos, días de la semana, colores, mares.
                  </div>
                </div>

                <div>
                  <strong>8.</strong> Montañas: normalmente masculinas pero hay
                  excepciones.
                  <div className="mt-1">
                    Nota: algunos topónimos o nombres propios pueden variar.
                  </div>
                </div>

                <div>
                  <strong>9. Excepciones</strong> — palabras en <code>-a</code>{" "}
                  que son masculinas:
                  <div className="mt-1">
                    Ej: <em>d&iacute;a</em>, <em>planeta</em>, <em>profeta</em>,{" "}
                    <em>agua</em>, <em>mapa</em>, <em>sofá</em>.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feminine rules */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                2. Reglas del género — Femenino
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Cómo identificar sustantivos femeninos y excepciones.
              </p>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <strong>1.</strong> La mayoría terminan en <code>-a</code>.
                  <div className="mt-1">
                    Ej: <em>chica</em>, <em>vaca</em>.
                  </div>
                </div>

                <div>
                  <strong>2.</strong> Terminan en <code>-ción</code>,{" "}
                  <code>-sión</code>, <code>-dad</code>, <code>-tud</code>.
                  <div className="mt-1">
                    Ej: <em>canción</em>, <em>profesión</em>, <em>ciudad</em>,{" "}
                    <em>juventud</em>.
                  </div>
                </div>

                <div>
                  <strong>3.</strong> Terminaciones <code>-is</code>,{" "}
                  <code>-umbre</code>, <code>-eza</code>.
                  <div className="mt-1">
                    Ej: <em>crisis</em>, <em>costumbre</em>, <em>esperanza</em>.
                  </div>
                </div>

                <div>
                  <strong>4.</strong> Excepciones femeninas que terminan en{" "}
                  <code>-o</code>.
                  <div className="mt-1">
                    Ej: <em>foto</em>, <em>moto</em>, <em>mano</em>,{" "}
                    <em>radio</em>.
                  </div>
                </div>

                <div>
                  <strong>5.</strong> Sustantivos de género común:{" "}
                  <code>-ista</code>, <code>-ente</code>.
                  <div className="mt-1">
                    Ej: <em>periodista</em>, <em>pianista</em>,{" "}
                    <em>estudiante</em> (el/la).
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plural rules */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                3. Reglas del plural
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Formación del plural según la terminación de la palabra.
              </p>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <strong>• Vocal + -s</strong>
                  <div className="mt-1">
                    Ej: <em>libro → libros</em>, <em>casa → casas</em>.
                  </div>
                </div>

                <div>
                  <strong>• Consonante + -es</strong>
                  <div className="mt-1">
                    Ej: <em>papel → papeles</em>, <em>ciudad → ciudades</em>.
                  </div>
                </div>

                <div>
                  <strong>• Cambios ortográficos:</strong>
                  <div className="mt-1">
                    Ej: <em>pez → peces</em> (z → c + -es). Cuidar g/j en
                    algunos casos.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Correspondence */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                4. Correspondencia masculino ↔ femenino
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Reglas simples para formar el femenino desde el masculino.
              </p>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <strong>1.</strong> Terminación en <code>-n</code> →{" "}
                  <code>-na</code>.
                  <div className="mt-1">
                    Ej: <em>actor → actriz</em> (irregular), pero{" "}
                    <em>hermano → hermana</em>.
                  </div>
                </div>

                <div>
                  <strong>2.</strong> Terminación en <code>-o</code> →{" "}
                  <code>-a</code>.
                  <div className="mt-1">
                    Ej: <em>amigo → amiga</em>, <em>profesor → profesora</em>.
                  </div>
                </div>

                <div>
                  <strong>3.</strong> Terminación en <code>-l</code> →{" "}
                  <code>-la</code> (añadir -a).
                  <div className="mt-1">
                    Ej: <em>actor → actriz</em> (irregular),{" "}
                    <em>español → española</em>.
                  </div>
                </div>

                <div>
                  <strong>4.</strong> Atención a cambios ortográficos con{" "}
                  <code>-z</code> → <code>-ces</code>.
                  <div className="mt-1">
                    Ej: <em>pez → peces</em>, no *pezes.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Articles */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                5. Artículos
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Determinados e indeterminados. Deben concordar en género y
                número.
              </p>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <strong>Artículos indeterminados:</strong>{" "}
                  <code>un, una, unos, unas</code>.
                  <div className="mt-1">
                    Ej: <em>un libro, una casa, unos mapas, unas flores</em>.
                  </div>
                </div>

                <div>
                  <strong>Artículos determinados:</strong>{" "}
                  <code>el, la, los, las</code>.
                  <div className="mt-1">
                    Ej: <em>el mapa, la mano, los días, las canciones</em>.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                6. Ejemplos
              </h3>
              <div className="mt-3 text-sm space-y-2">
                <div>
                  <strong>Masculino</strong>
                </div>
                <ol className="list-decimal list-inside ml-4">
                  <li>El chico juega en el parque.</li>
                  <li>El toro es muy fuerte.</li>
                  <li>El profesor explica la lección.</li>
                  <li>El mapa está en la mesa.</li>
                </ol>

                <div className="mt-2">
                  <strong>Femenino</strong>
                </div>
                <ol className="list-decimal list-inside ml-4">
                  <li>La chica canta una canción.</li>
                  <li>La vaca da leche.</li>
                  <li>La profesión de mi madre es doctora.</li>
                  <li>La mano derecha está herida.</li>
                </ol>

                <div className="mt-2">
                  <strong>Plural</strong>
                </div>
                <ol className="list-decimal list-inside ml-4">
                  <li>Los libros están en la mochila.</li>
                  <li>Las flores son muy bonitas.</li>
                  <li>Los peces nadan en el agua.</li>
                </ol>
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
                  <div className="font-medium">B. Choose the correct form</div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {chooseCorrect.map((p) => (
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

        {/* Sidebar */}
        <aside className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Quick reference</h4>
              <ul className="text-xs sm:text-sm space-y-2">
                <li>
                  <strong>-o</strong> suele ser masculino. Ej: chico.
                </li>
                <li>
                  <strong>-a</strong> suele ser femenino. Ej: chica.
                </li>
                <li>
                  <strong>-ción / -sión / -dad</strong> → femenino. Ej: canción,
                  ciudad.
                </li>
                <li>
                  Plural: vocal + <strong>-s</strong>, consonante +{" "}
                  <strong>-es</strong>.
                </li>
                <li>
                  Artículos: <code>el/la/los/las</code> y{" "}
                  <code>un/una/unos/unas</code>.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Common pitfalls</h4>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm">
                <li>
                  Confundir <em>el día</em> (masc.) con patrones -a.
                </li>
                <li>
                  Olvidar concordancia de artículos y adjetivos en
                  género/número.
                </li>
                <li>Errores en plurales irregulares (pez → peces).</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Next steps</h4>
              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                <li>Crear 10 frases usando masculino y femenino.</li>
                <li>Practicar plurales con 15 sustantivos.</li>
                <li>Revisar excepciones y memorizarlas.</li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default lesson_4_grammar;
