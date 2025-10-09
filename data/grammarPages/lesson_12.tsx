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

export function lesson_12_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const fillBlanks = [
    {
      id: 1,
      sentence: "_____ casa es grande. (yo)",
      answer: "Mi casa es grande.",
    },
    {
      id: 2,
      sentence: "¿Dónde está _____ coche? (tú)",
      answer: "¿Dónde está tu coche?",
    },
    {
      id: 3,
      sentence: "Ellos buscan _____ pasaporte. (ellos)",
      answer: "Ellos buscan su pasaporte.",
    },
    {
      id: 4,
      sentence: "Nosotros abrimos _____ tienda. (nosotros)",
      answer: "Nosotros abrimos nuestra tienda.",
    },
    {
      id: 5,
      sentence: "Vosotras visitáis _____ abuelos. (vosotras)",
      answer: "Vosotras visitáis vuestros abuelos.",
    },
  ];

  const replaceWithPronoun = [
    {
      id: 6,
      sentence:
        "Este libro pertenece a mí. → (Replace with possessive pronoun)",
      answer: "Es mío. / El libro es mío.",
    },
    {
      id: 7,
      sentence: "Esa casa es de ustedes. → (Replace)",
      answer: "Es suya. / La casa es suya.",
    },
    {
      id: 8,
      sentence: "Estas son nuestras llaves. → (Replace)",
      answer: "Son nuestras. / Las llaves son nuestras.",
    },
    {
      id: 9,
      sentence: "El bolígrafo es de ti. → (Replace)",
      answer: "Es tuyo. / El bolígrafo es tuyo.",
    },
  ];

  const multipleChoice = [
    {
      id: 10,
      sentence: "____ profesor es nuevo. (yo)  a) Mi  b) Mío",
      answer: "a) Mi profesor es nuevo.",
    },
    {
      id: 11,
      sentence: "El coche es _____. (ella)  a) su  b) suyo",
      answer:
        "b) El coche es suyo. (posesivo pronombre requiere artículo: 'El coche es suyo' o 'Es suyo')",
    },
    {
      id: 12,
      sentence:
        "¿Es esta casa de vosotros? → Sí, es _____. a) nuestro b) vuestra c) vuestra(s)",
      answer: "b) vuestra (si 'casa' femenino singular: vuestra casa)",
    },
  ];

  const transformSentences = [
    {
      id: 13,
      sentence: "Change to long possessive pronoun: 'Mi teléfono' →",
      answer: "El mío.",
    },
    {
      id: 14,
      sentence: "Avoid ambiguity: 'Su libro' (de Carlos) →",
      answer:
        "El libro de Carlos / El suyo (if context makes owner clear). To avoid ambiguity use 'de Carlos'.",
    },
    {
      id: 15,
      sentence: "Change adjective to pronoun: 'Nuestras casas' →",
      answer: "Las nuestras.",
    },
  ];

  const translationExercises = [
    { id: 16, sentence: "Translate: 'My brother' →", answer: "Mi hermano" },
    { id: 17, sentence: "Translate: 'Their daughters' →", answer: "Sus hijas" },
    {
      id: 18,
      sentence: "Translate: 'Ours (feminine plural)' →",
      answer: "Las nuestras",
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
              Lesson 12 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Possessive adjectives and pronouns.{" "}
              <em>mi / tu / su / nuestro / vuestro</em>. Long forms{" "}
              <em>mío / tuyo / suyo</em>. Agreement and ambiguity.
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
                1. Overview — two families of forms
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Spanish has <strong>short possessive adjectives</strong> that go{" "}
                <em>before</em> the noun (mi, tu, su, nuestro, vuestro) and{" "}
                <strong>long possessive pronouns/adjectives</strong> used after
                an article or to replace the noun (mío, tuyo, suyo, nuestro,
                vuestro).
              </p>

              <div className="mt-3 grid gap-3">
                <div className="rounded-md border p-3 bg-muted/5">
                  <div className="font-medium">
                    Short adjectives (before noun)
                  </div>
                  <div className="mt-1 text-sm">
                    mi, mis • tu, tus • su, sus • nuestro/a(s) • vuestro/a(s)
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Match the <strong>owned noun</strong> in gender and number
                    for <em>nuestro/vuestro</em>. Example: <em>nuestra casa</em>
                    , <em>nuestros libros</em>.
                  </div>
                </div>

                <div className="rounded-md border p-3 bg-muted/5">
                  <div className="font-medium">
                    Long forms (after article or to replace noun)
                  </div>
                  <div className="mt-1 text-sm">
                    mío/mía/míos/mías • tuyo/tuya/tuyos/tuyas •
                    suyo/suya/suyos/suyas • nuestro/nuestra/nuestros/nuestras •
                    vuestro/vuestra/vuestros/vuestras
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Use with article: <em>el mío, la tuya, los nuestros</em>.
                    They agree with the thing possessed.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TABLE */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                2. Quick tables
              </h3>

              <div className="mt-3 text-sm sm:text-base grid gap-3">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Possessive adjectives</div>
                  <div className="mt-1">
                    yo: <strong>mi / mis</strong>
                    <br />
                    tú: <strong>tu / tus</strong>
                    <br />
                    él/ella/usted: <strong>su / sus</strong>
                    <br />
                    nosotros/as:{" "}
                    <strong>nuestro / nuestra / nuestros / nuestras</strong>
                    <br />
                    vosotros/as:{" "}
                    <strong>vuestro / vuestra / vuestros / vuestras</strong>
                    <br />
                    ellos/ellas/ustedes: <strong>su / sus</strong>
                  </div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Possessive pronouns (replace noun)
                  </div>
                  <div className="mt-1">
                    mío/mía/míos/mías • tuyo/tuya/tuyos/tuyas •
                    suyo/suya/suyos/suyas • nuestro/nuestra/nuestros/nuestras •
                    vuestro/vuestra/vuestros/vuestras
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Use with article:{" "}
                    <em>el mío, la tuya, los nuestros, las vuestras</em>.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AGREEMENT AND EXAMPLES */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                3. Agreement rules & examples
              </h3>

              <div className="mt-3 space-y-2 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Adjective agrees with the noun owned
                  </div>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <strong>Mi</strong> casa es grande. (mi + casa singular)
                    </li>
                    <li>
                      <strong>Mis</strong> libros están aquí. (mis + libros
                      plural)
                    </li>
                    <li>
                      <strong>Nuestra</strong> hija estudia medicina. (nuestra +
                      hija feminine)
                    </li>
                    <li>
                      <strong>Nuestros</strong> hijos hablan español. (nuestros
                      + hijos masculine plural)
                    </li>
                  </ul>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Pronoun agrees with the noun it replaces
                  </div>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      ¿Dónde está tu mochila? — <em>La mía</em> está en la casa.
                    </li>
                    <li>
                      Estos cuadros son <em>nuestros</em>.
                    </li>
                    <li>
                      ¿Estas llaves son tuyas? Sí, son <em>mías</em>.
                    </li>
                  </ul>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Short vs long form usage</div>
                  <div className="mt-1">
                    <strong>Short (before noun):</strong> Mi hermano, tu casa,
                    su perro.
                    <br />
                    <strong>Long (after article / to replace):</strong> El
                    hermano mío (less common), el mío (common pronoun).
                    <br />
                    Use long forms when you <em>replace</em> the noun or need
                    emphasis.
                  </div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Ambiguity: su vs suyo</div>
                  <div className="mt-1">
                    <strong>Su</strong> is ambiguous because it can mean
                    his/her/their/your (formal). To clarify use:{" "}
                    <em>de + él / de + ella / de + ellos</em> or use long form
                    with context. Examples:
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <em>Su casa</em> → could be "his house", "her house",
                        "their house".
                      </li>
                      <li>
                        Ambiguity resolved: <em>La casa de él</em> /{" "}
                        <em>La casa de ella</em> / <em>La casa de ellos</em>.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ESTAR FOR MARITAL STATUS */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                4. Using <em>estar</em> to express marital status
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                In Spanish, the verb <strong>estar</strong> is used to describe{" "}
                <em>temporary or changeable states</em> — including your marital
                status. Even though being married or single can last years, it’s
                still considered a <em>state</em> rather than a permanent trait,
                so you must use <strong>estar</strong> (not <em>ser</em>).
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium mb-1">Common forms:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong>Estoy casado / casada</strong> — I am married
                    </li>
                    <li>
                      <strong>Estoy soltero / soltera</strong> — I am single
                    </li>
                    <li>
                      <strong>Estoy divorciado / divorciada</strong> — I am
                      divorced
                    </li>
                    <li>
                      <strong>Estoy separado / separada</strong> — I am
                      separated
                    </li>
                    <li>
                      <strong>Estoy viudo / viuda</strong> — I am widowed
                    </li>
                  </ul>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium mb-1">Examples in context:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <em>Estoy casado y tengo dos hijos.</em> — I’m married and
                      I have two children.
                    </li>
                    <li>
                      <em>Mi hermana está soltera.</em> — My sister is single.
                    </li>
                    <li>
                      <em>¿Estás divorciado?</em> — Are you divorced?
                    </li>
                    <li>
                      <em>Mis padres están separados.</em> — My parents are
                      separated.
                    </li>
                    <li>
                      <em>Mi abuelo está viudo.</em> — My grandfather is
                      widowed.
                    </li>
                  </ul>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium mb-1">Grammar note:</div>
                  <p className="text-sm">
                    The adjective ending changes with gender:{" "}
                    <em>casado / casada</em>, <em>soltero / soltera</em>, etc.
                    Always use <strong>estar</strong> + adjective for these
                    states.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PRACTICE SECTIONS */}
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
                  <div className="font-medium">
                    A. Fill the blank with the correct possessive adjective
                  </div>
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
                    B. Replace the underlined noun with a possessive pronoun
                  </div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {replaceWithPronoun.map((p) => (
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
                    C. Multiple choice — choose the correct form
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
                  <div className="font-medium">
                    D. Transform and clarity tasks
                  </div>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    {transformSentences.map((p) => (
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
                  <div className="font-medium">E. Translation (short)</div>
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
                      Write 5 sentences about your family using short adjectives
                      (mi, tu, su, nuestro, vuestro).
                    </li>
                    <li>
                      Replace the nouns in 3 of those sentences with the correct
                      long possessive pronoun (el mío, la tuya, las nuestras).
                    </li>
                    <li>
                      Rewrite 3 sentences that use <em>su</em> to remove
                      ambiguity using <em>de + nombre</em> (e.g.,{" "}
                      <em>la casa de Ana</em>).
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
                <strong>Short forms</strong> go before the noun:{" "}
                <em>mi casa</em>, <em>nuestros libros</em>.
              </li>
              <li>
                <strong>Long forms</strong> replace the noun and need an
                article: <em>el mío, la tuya</em>.
              </li>
              <li>
                <strong>Agreement</strong> is with the thing owned (gender &
                number).
              </li>
              <li>
                <strong>Su</strong> is ambiguous. Use{" "}
                <em>de + él/ella/ellos</em> to clarify.
              </li>
              <li>
                <strong>Latin America:</strong> ustedes always uses <em>su</em>.
              </li>
            </ul>
          </Card>

          <Card className="p-4">
            <div className="font-medium mb-2">Examples at a glance</div>
            <div className="text-sm space-y-2">
              <div>Mi madre → my mother</div>
              <div>Mis amigos → my friends</div>
              <div>
                La casa es suya → The house is theirs / his / hers (context
                required)
              </div>
              <div>El coche es mío → The car is mine</div>
              <div>Nuestros problemas → Our problems</div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default lesson_12_grammar;
