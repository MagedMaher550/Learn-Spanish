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

export function lesson_16_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);
  const [openIr, setOpenIr] = useState(false);
  const [openIrse, setOpenIrse] = useState(false);

  const fillBlanks = [
    {
      id: 1,
      sentence: "Yo _____ a la universidad todos los días.",
      answer: "Yo voy a la universidad todos los días.",
    },
    {
      id: 2,
      sentence: "Ellos _____ del restaurante porque ya terminaron.",
      answer: "Ellos se van del restaurante porque ya terminaron.",
    },
    {
      id: 3,
      sentence: "Nosotros _____ en tren a Madrid mañana.",
      answer: "Nosotros vamos en tren a Madrid mañana.",
    },
    {
      id: 4,
      sentence: "Tú _____ de casa muy temprano hoy.",
      answer: "Tú te vas de casa muy temprano hoy.",
    },
    {
      id: 5,
      sentence: "¿A dónde _____ vosotros esta noche?",
      answer: "¿A dónde vais vosotros esta noche?",
    },
  ];

  const translationExercises = [
    {
      id: 6,
      sentence: "Translate: I go to work by bus. →",
      answer: "Voy al trabajo en autobús.",
    },
    {
      id: 7,
      sentence: "Translate: We’re leaving now. →",
      answer: "Nos vamos ahora.",
    },
    {
      id: 8,
      sentence: "Translate: They go to the park on foot. →",
      answer: "Van al parque a pie.",
    },
    {
      id: 9,
      sentence: "Translate: She is leaving for France tomorrow. →",
      answer: "Ella se va a Francia mañana.",
    },
    {
      id: 10,
      sentence: "Translate: I go on horseback. →",
      answer: "Voy a caballo.",
    },
  ];

  const chooseCorrect = [
    {
      id: 11,
      sentence: "Nosotros _____ (vamos / nos vamos) a la playa mañana.",
      answer: "vamos",
    },
    {
      id: 12,
      sentence: "Ellos _____ (van / se van) del cine después de la película.",
      answer: "se van",
    },
    {
      id: 13,
      sentence: "Yo _____ (voy / me voy) en coche al trabajo.",
      answer: "voy",
    },
    {
      id: 14,
      sentence: "Mis amigos _____ (van / se van) de viaje este fin de semana.",
      answer: "se van",
    },
    {
      id: 15,
      sentence: "Tú _____ (vas / te vas) a casa a las diez, ¿verdad?",
      answer: "vas",
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
              Lesson 16 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Uses and present conjugations of the verbs <em>ir</em> and{" "}
              <em>irse</em>.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* IR — COLLAPSIBLE SECTION */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  1. The verb <em>ir</em> — “to go”
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenIr((s) => !s)}
                >
                  {openIr ? "Collapse" : "Expand"}
                </Button>
              </div>

              <p className="mt-2 text-sm sm:text-base">
                <strong>Ir</strong> indicates movement toward a destination. It
                is usually followed by <strong>a</strong> (a + place).
              </p>

              {openIr && (
                <>
                  <div className="mt-3 bg-muted/5 border rounded p-3 space-y-2 text-sm">
                    <strong>Structure:</strong>
                    <div>
                      <code>ir + a + place</code> → indicates destination.
                    </div>
                    <ul className="list-disc list-inside mt-2">
                      <li>Voy al trabajo. → I go to work.</li>
                      <li>Vamos a la playa. → We go to the beach.</li>
                      <li>¿A dónde vas? → Where are you going?</li>
                    </ul>
                  </div>

                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm">
                    <strong>Present (conjugation):</strong>
                    <p className="mt-1">
                      yo <strong>voy</strong> (I go) [boi], tú{" "}
                      <strong>vas</strong> (you go) [bas], él/ella/usted{" "}
                      <strong>va</strong> (he/she/you go) [ba], nosotros/as{" "}
                      <strong>vamos</strong> (we go) [BA-mos], vosotros/as{" "}
                      <strong>vais</strong> (you all go) [bais],
                      ellos/ellas/ustedes <strong>van</strong> (they/you all go)
                      [ban].
                    </p>
                    <div className="mt-2">
                      <strong>Examples:</strong>
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          Yo voy al gimnasio todos los días. → I go to the gym
                          every day.
                        </li>
                        <li>
                          Tú vas a la escuela temprano. → You go to school
                          early.
                        </li>
                        <li>
                          Ellos van al cine los sábados. → They go to the cinema
                          on Saturdays.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm">
                    <strong>Common uses & examples</strong>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <strong>Ir + a + infinitive</strong> → future plan. Ej:
                        Voy a estudiar esta noche.
                      </li>
                      <li>
                        <strong>Ir + en + transporte</strong> → means of travel.
                        Ej: Voy en tren.
                      </li>
                      <li>
                        <strong>Ir + a + place</strong> → movement to place. Ej:
                        Van al cine.
                      </li>
                      <li>
                        <strong>A pie / a caballo</strong> → use <em>a</em> (no{" "}
                        <em>en</em>): Voy a pie. Voy a caballo.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 text-sm">
                    <strong>Quick practice (ir)</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>
                        Conjugate: Yo ______ (ir) al mercado. — <em>voy</em>
                      </li>
                      <li>
                        Fill: Nosotros ______ (ir) en autobús. — <em>vamos</em>
                      </li>
                      <li>
                        Question: ¿Tú ______ (ir) ahora? — <em>vas</em>
                      </li>
                    </ol>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* IRSE — COLLAPSIBLE SECTION */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  2. The verb <em>irse</em> — “to leave / to go away”
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOpenIrse((s) => !s)}
                >
                  {openIrse ? "Collapse" : "Expand"}
                </Button>
              </div>

              <p className="mt-2 text-sm sm:text-base">
                <strong>Irse</strong> is the reflexive form of <em>ir</em>. It
                emphasizes departure from a place and always uses reflexive
                pronouns: <em>me, te, se, nos, os, se</em>.
              </p>

              {openIrse && (
                <>
                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm">
                    <strong>Present (conjugation):</strong>
                    <p className="mt-1">
                      yo <strong>me voy</strong> (I leave) [me boi], tú{" "}
                      <strong>te vas</strong> (you leave) [te bas],
                      él/ella/usted <strong>se va</strong> (he/she/you leave)
                      [se ba], nosotros/as <strong>nos vamos</strong> (we leave)
                      [nos BA-mos], vosotros/as <strong>os vais</strong> (you
                      all leave) [os bais], ellos/ellas/ustedes{" "}
                      <strong>se van</strong> (they/you all leave) [se ban].
                    </p>
                    <div className="mt-2">
                      <strong>Examples:</strong>
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          Me voy del trabajo a las seis. → I leave work at six.
                        </li>
                        <li>¿Te vas ya? → Are you leaving already?</li>
                        <li>
                          Nos vamos de vacaciones mañana. → We leave for
                          vacation tomorrow.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm space-y-2">
                    <strong>Structure:</strong>
                    <div>
                      <code>irse + de / a + place</code> → indicates from where
                      or to where someone leaves.
                    </div>
                    <ul className="list-disc list-inside mt-2">
                      <li>Me voy de casa. → I’m leaving home.</li>
                      <li>
                        Nos vamos a México mañana. → We’re leaving for Mexico
                        tomorrow.
                      </li>
                      <li>
                        Ellos se van del trabajo a las cinco. → They leave work
                        at five.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 bg-muted/5 border rounded p-3 text-sm">
                    <strong>Common contrasts</strong>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Voy al cine. → I’m going to the cinema. (destination)
                      </li>
                      <li>
                        Me voy del cine. → I’m leaving the cinema. (departure)
                      </li>
                      <li>Vamos a la fiesta. → We’re going to the party.</li>
                      <li>
                        Nos vamos de la fiesta. → We’re leaving the party.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 text-sm">
                    <strong>Quick practice (irse)</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>
                        Conjugate: Yo ______ (irse) ahora. — <em>me voy</em>
                      </li>
                      <li>
                        Fill: Ellos ______ (irse) a las nueve. — <em>se van</em>
                      </li>
                      <li>
                        Question: ¿Por qué ______ (irse) tú tan pronto? —{" "}
                        <em>te vas</em>
                      </li>
                    </ol>
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

                <div>
                  <div className="font-medium">
                    D. Mixed mini-quiz (write the correct present form)
                  </div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    <li>
                      Yo ______ (ir) al mercado. — <em>voy</em>{" "}
                      {showAnswers && (
                        <span className="ml-2 text-muted-foreground">
                          Answer: voy
                        </span>
                      )}
                    </li>
                    <li>
                      Nosotros ______ (irse) ahora. — <em>nos vamos</em>{" "}
                      {showAnswers && (
                        <span className="ml-2 text-muted-foreground">
                          Answer: nos vamos
                        </span>
                      )}
                    </li>
                    <li>
                      ¿Tú ______ (ir) a la reunión? — <em>vas</em>{" "}
                      {showAnswers && (
                        <span className="ml-2 text-muted-foreground">
                          Answer: vas
                        </span>
                      )}
                    </li>
                    <li>
                      Ellos ______ (irse) pronto. — <em>se van</em>{" "}
                      {showAnswers && (
                        <span className="ml-2 text-muted-foreground">
                          Answer: se van
                        </span>
                      )}
                    </li>
                    <li>
                      Ella ______ (ir) a la escuela en bici. — <em>va</em>{" "}
                      {showAnswers && (
                        <span className="ml-2 text-muted-foreground">
                          Answer: va
                        </span>
                      )}
                    </li>
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
                <strong>Ir</strong> → movement or destination. Example: Voy al
                trabajo.
              </li>
              <li>
                <strong>Irse</strong> → leaving a place. Example: Me voy del
                trabajo.
              </li>
              <li>
                <strong>en</strong> → for vehicles. Example: Voy en tren.
              </li>
              <li>
                <strong>a</strong> → for walking or animals. Example: Voy a pie.
              </li>
            </ul>
          </Card>

          <Card className="p-4">
            <div className="font-medium mb-2">Common expressions</div>
            <div className="text-sm space-y-2">
              <div>Ir al cine → to go to the cinema</div>
              <div>Ir de compras → to go shopping</div>
              <div>Ir de vacaciones → to go on vacation</div>
              <div>Ir en coche → to go by car</div>
              <div>Irse de casa → to leave home</div>
              <div>Irse a dormir → to go to sleep</div>
              <div>Irse bien/mal → to go well/badly (situations)</div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default lesson_16_grammar;
