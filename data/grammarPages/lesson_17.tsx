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

export function lesson_17_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const equalityExercises = [
    {
      id: 1,
      sentence: "Mi casa es _____ grande _____ la tuya.",
      answer: "tan grande como",
    },
    {
      id: 2,
      sentence: "Compro _____ libros _____ Ahmed.",
      answer: "tantos libros como",
    },
    {
      id: 3,
      sentence: "Ellos trabajan _____ que nosotros.",
      answer: "tanto como",
    },
  ];

  const inequalityExercises = [
    {
      id: 4,
      sentence: "El tren es _____ rápido _____ el avión.",
      answer: "más rápido que",
    },
    {
      id: 5,
      sentence: "Esta habitación es _____ luminosa _____ la otra.",
      answer: "menos luminosa que",
    },
    {
      id: 6,
      sentence: "María es _____ joven _____ Amira.",
      answer: "más joven que",
    },
  ];

  const irregularComparatives = [
    {
      id: 7,
      sentence: "Este libro es _____ (bueno) que el otro.",
      answer: "mejor",
    },
    {
      id: 8,
      sentence: "El café aquí es _____ (malo) que en casa.",
      answer: "peor",
    },
    {
      id: 9,
      sentence: "Mi hermano es _____ (grande) que yo.",
      answer: "mayor",
    },
    {
      id: 10,
      sentence: "Su hija es _____ (pequeña) que la mía.",
      answer: "menor",
    },
  ];

  const quererPreferirExercises = [
    {
      id: 11,
      sentence: "Quiero _____ unas vacaciones en la playa. (infinitivo)",
      answer: "pasar",
    },
    {
      id: 12,
      sentence:
        "¿_____ pasar unas vacaciones en una ciudad al lado del mar? (tú)",
      answer: "¿Quieres",
    },
    {
      id: 13,
      sentence: "Prefiero _____ en un lugar tranquilo. (infinitivo)",
      answer: "quedarme / alojarme",
    },
    {
      id: 14,
      sentence: "¿Prefieres las playas grandes o las calas?",
      answer: "Prefieres las playas grandes o las calas?",
    },
  ];

  const translationExercises = [
    {
      id: 15,
      sentence: "I want a quiet place for my holidays.",
      answer: "Quiero un lugar tranquilo para mis vacaciones.",
    },
    {
      id: 16,
      sentence: "Do you prefer big beaches or coves?",
      answer: "¿Prefieres las playas grandes o las calas?",
    },
  ];

  const threeExamples = [
    {
      id: 1,
      title: "Ejemplo 1 — Querer + infinitivo / مثال 1 — Querer + مصدر",
      spanish:
        "¿Quieres pasar unas vacaciones en una ciudad maravillosa a orillas del mar Mediterráneo?",
      arabic: "هل تريد قضاء عطلة في مدينة جميلة على شاطئ البحر الأبيض المتوسط؟",
      note: "Querer + infinitivo para expresar deseo.",
    },
    {
      id: 2,
      title: "Ejemplo 2 — Querer + nombre / مثال 2 — Querer + اسم",
      spanish: "Quiero un lugar tranquilo para mis vacaciones.",
      arabic: "أريد مكانًا هادئًا لقضاء عطلاتي.",
      note: "Querer + nombre (sustantivo) para pedir o desear algo.",
    },
    {
      id: 3,
      title: "Ejemplo 3 — Preferir + infinitivo / مثال 3 — Preferir + مصدر",
      spanish: "¿Prefieres las playas grandes o las calas?",
      arabic: "هل تفضّل الشواطئ الكبيرة أم الخلجان الصغيرة؟",
      note: "Preferir expresa preferencia; puede ir con infinitivo o nombre.",
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
              Lesson 17 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Comparaciones (igualdad / desigualdad). Usos de <em>querer</em> y{" "}
              <em>preferir</em>. Irregularidades:{" "}
              <em>mejor, peor, mayor, menor</em>.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* SECTION: SUMMARY / ORGANIZATION */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                Resumen rápido — estructura de la lección
              </h3>
              <ol className="list-decimal list-inside mt-3 text-sm sm:text-base space-y-2">
                <li>
                  <strong>Comparaciones de igualdad</strong>: tan + adj + como ;
                  tanto/a/os/as + sust. + como.
                </li>
                <li>
                  <strong>Comparaciones de desigualdad</strong>: más/menos + adj
                  + que.
                </li>
                <li>
                  <strong>Comparativos irregulares</strong>: bueno→mejor,
                  malo→peor, grande→mayor, pequeño→menor.
                </li>
                <li>
                  <strong>Usos de querer y preferir</strong>: expresar deseos y
                  preferencias con infinitivo o nombre. Conjugaciones en
                  presente incluidas más abajo.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* SECTION: COMPARISONS — EQUALITY */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                1. Igualdad (quality y quantity)
              </h3>

              <div className="mt-3 space-y-3 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Forma — calidad</div>
                  <div className="mt-1">
                    <strong>tan + adjetivo + como</strong>
                  </div>
                  <div className="mt-2">
                    Ejemplos:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Soy <strong>tan</strong> alto <strong>como</strong>{" "}
                        Maged. — أنا طويل مثل ماجد.
                      </li>
                      <li>
                        Esta ciudad es <strong>tan</strong> bonita{" "}
                        <strong>como</strong> la otra. — هذه المدينة جميلة مثل
                        الأخرى.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Forma — cantidad</div>
                  <div className="mt-1">
                    <strong>tanto/a/os/as + sustantivo + como</strong>
                  </div>
                  <div className="mt-2">
                    Ejemplos:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Compro <strong>tantos libros como</strong> Ahmed. —
                        أشتري عددًا من الكتب مثل أحمد.
                      </li>
                      <li>
                        Tienes <strong>tanta</strong> paciencia{" "}
                        <strong>como</strong> tu madre. — لديك نفس قدر الصبر مثل
                        والدتك.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SECTION: COMPARISONS — INEQUALITY */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                2. Desigualdad
              </h3>

              <div className="mt-3 text-sm sm:text-base border rounded p-3 bg-muted/5">
                <div className="font-medium">Formas</div>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>más + adjetivo + que</strong> → superioridad. Ej:
                    Ella es <strong>más</strong> inteligente{" "}
                    <strong>que</strong> él.
                  </li>
                  <li>
                    <strong>menos + adjetivo + que</strong> → inferioridad. Ej:
                    Este coche es <strong>menos</strong> rápido{" "}
                    <strong>que</strong> aquel.
                  </li>
                </ul>

                <div className="mt-3">
                  Notas de uso:
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Para cantidad también:{" "}
                      <strong>más/menos + sustantivo + que</strong>. Ej: Tengo{" "}
                      <strong>más</strong> trabajo <strong>que</strong> tú.
                    </li>
                    <li>
                      Comparaciones con verbos:{" "}
                      <strong>verbo + tanto + como</strong>. Ej: Trabajo{" "}
                      <strong>tanto</strong> <strong>como</strong> ella.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SECTION: IRREGULAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                3. Adjetivos comparativos irregulares
              </h3>

              <div className="mt-3 grid gap-3 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Lista</div>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <strong>bueno → mejor / el mejor</strong> — أفضل / أحسن
                    </li>
                    <li>
                      <strong>malo → peor / el peor</strong> — أسوأ
                    </li>
                    <li>
                      <strong>grande → mayor / el mayor</strong> — أكبر / أقدم
                      (edad)
                    </li>
                    <li>
                      <strong>pequeño → menor / el menor</strong> — أصغر / أقل
                      (edad)
                    </li>
                  </ul>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Ejemplos y notas</div>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Este café es <strong>mejor</strong> que el otro. — هذا
                      القهوة أفضل من الأخرى.
                    </li>
                    <li>
                      La película fue <strong>peor</strong> que el libro. —
                      الفيلم كان أسوأ من الكتاب.
                    </li>
                    <li>
                      Mi hermano <strong>mayor</strong> vive en Madrid. — أخي
                      الأكبر يعيش في مدريد.
                    </li>
                    <li>
                      Su hermana <strong>menor</strong> tiene diez años. —
                      شقيقتها الصغرى عمرها عشرة سنوات.
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Observación: <strong>mayor/menor</strong> se usan también
                    para edad y relación temporal.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SECTION: QUERER & PREFERIR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                4. Usos de <em>querer</em> y <em>preferir</em>
              </h3>

              <div className="mt-3 space-y-3 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Regla</div>
                  <div className="mt-1">
                    <strong>Querer</strong> y <strong>preferir</strong> expresan
                    deseos y preferencias. Ambas pueden acompañarse de:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        infinitivo → Quiero <strong>visitar</strong> el museo.
                      </li>
                      <li>nombre (sustantivo) → Quiero un lugar tranquilo.</li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Conjugación en presente (forma rápida)
                  </div>
                  <div className="mt-2">
                    <strong>Querer:</strong> quiero, quieres, quiere, queremos,
                    queréis, quieren.
                    <br />
                    <strong>Preferir:</strong> prefiero, prefieres, prefiere,
                    preferimos, preferís, prefieren.
                  </div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Tres ejemplos bilingües (español + árabe)
                  </div>
                  {threeExamples.map((ex) => (
                    <div key={ex.id} className="mt-2">
                      <div className="font-semibold">{ex.title}</div>
                      <div className="mt-1">
                        <strong>ES:</strong> {ex.spanish}
                      </div>
                      <div className="mt-1">
                        <strong>AR:</strong> {ex.arabic}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {ex.note}
                      </div>
                      <Separator className="my-2" />
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
                  Practice — ejercicios
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowAnswers((s) => !s)}
                >
                  {showAnswers ? (
                    <>
                      <Check className="w-4 h-4" /> Ocultar
                    </>
                  ) : (
                    "Mostrar respuestas"
                  )}
                </Button>
              </div>

              <div className="mt-4 text-sm sm:text-base space-y-4">
                <div>
                  <div className="font-medium">A. Igualdad — completa</div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {equalityExercises.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Respuesta: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="font-medium">B. Desigualdad — completa</div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {inequalityExercises.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Respuesta: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="font-medium">
                    C. Irregulares — elige la forma correcta
                  </div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {irregularComparatives.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Respuesta: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="font-medium">
                    D. Querer / Preferir — completa
                  </div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {quererPreferirExercises.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Respuesta: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="font-medium">E. Traducción breve</div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {translationExercises.map((p) => (
                      <li key={p.id}>
                        <div>{p.sentence}</div>
                        {showAnswers && (
                          <div className="text-muted-foreground">
                            Respuesta: <strong>{p.answer}</strong>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="font-medium">Mini producción (tarea)</div>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Escribe 3 oraciones usando <em>tan + adj + como</em> y
                      tradúcelas al árabe.
                    </li>
                    <li>
                      Escribe 2 oraciones usando{" "}
                      <em>más / menos + adj + que</em> y subraya el comparativo.
                    </li>
                    <li>
                      Escribe 3 oraciones con{" "}
                      <em>quiero / prefiero + infinitivo</em> y proporciona la
                      forma en árabe.
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
              Referencia rápida
            </h4>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
              <li>
                <strong>tan + adj + como</strong> — igualdad de cualidad.
              </li>
              <li>
                <strong>tanto/a/os/as + sust. + como</strong> — igualdad de
                cantidad.
              </li>
              <li>
                <strong>más / menos + adj + que</strong> — desigualdad.
              </li>
              <li>
                <strong>bueno → mejor</strong>, <strong>malo → peor</strong>.
              </li>
              <li>
                <strong>grande → mayor</strong>,{" "}
                <strong>pequeño → menor</strong> (edad o tamaño).
              </li>
              <li>
                <strong>Querer</strong>: quiero, quieres, quiere, queremos,
                queréis, quieren.
              </li>
              <li>
                <strong>Preferir</strong>: prefiero, prefieres, prefiere,
                preferimos, preferís, prefieren.
              </li>
            </ul>
          </Card>

          <Card className="p-4">
            <div className="font-medium mb-2">Ejemplos rápidos</div>
            <div className="text-sm space-y-2">
              <div>Soy tan alto como mi amigo. — أنا طويل مثل صديقي.</div>
              <div>
                Tengo tantos libros como Ahmed. — لدي نفس عدد الكتب مثل أحمد.
              </div>
              <div>
                Este restaurante es mejor que ese. — هذا المطعم أفضل من ذلك.
              </div>
              <div>
                ¿Prefieres descansar o visitar museos? — هل تفضل الراحة أم زيارة
                المتاحف؟
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default lesson_17_grammar;
