"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function lesson_2_grammar() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Lesson 2 — Grammar</h1>
            <Separator className="mb-6" />
          </div>

          {/* Section 1: Las Vocales */}
          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                1. Las Vocales (Vowels)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                Spanish vowels are pronounced with consistent clarity. Each
                vowel or combination produces a fixed sound, unlike in English.
                Below is a guide with <strong>examples</strong> and approximate{" "}
                <strong>Arabic pronunciations</strong>.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-border rounded-lg">
                  <thead className="bg-muted text-left">
                    <tr>
                      <th className="p-2">Vocal / Combinación</th>
                      <th className="p-2">Approx. Arabic Sound</th>
                      <th className="p-2">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2 font-medium">A</td>
                      <td className="p-2">أَ</td>
                      <td className="p-2">Casa, Mano</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">E</td>
                      <td className="p-2">إِ</td>
                      <td className="p-2">Bebé, Escuela</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">I</td>
                      <td className="p-2">ي</td>
                      <td className="p-2">Libro, Fiesta</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">O</td>
                      <td className="p-2">أو</td>
                      <td className="p-2">Ojo, Flor</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">U</td>
                      <td className="p-2">و</td>
                      <td className="p-2">Luna, Mundo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-semibold pt-2">
                Vocal Combinations (Diphthongs and Hiatus):
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-border rounded-lg">
                  <thead className="bg-muted text-left">
                    <tr>
                      <th className="p-2">Combination</th>
                      <th className="p-2">Arabic Approximation</th>
                      <th className="p-2">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2">au</td>
                      <td className="p-2">أوَ</td>
                      <td className="p-2">Aumentar, Auxilio</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ae</td>
                      <td className="p-2">يَأ</td>
                      <td className="p-2">Aeropuerto, Caer</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ai</td>
                      <td className="p-2">يآ</td>
                      <td className="p-2">Aire, Bailar</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ao</td>
                      <td className="p-2">وآ</td>
                      <td className="p-2">Caoba, Cacao</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">eu</td>
                      <td className="p-2">إو</td>
                      <td className="p-2">Euro, Europa</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ua</td>
                      <td className="p-2">أوَا</td>
                      <td className="p-2">Uruguay, Paraguay</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ue</td>
                      <td className="p-2">وِي</td>
                      <td className="p-2">Fuente, Puente</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ui</td>
                      <td className="p-2">وِي (م روسك)</td>
                      <td className="p-2">Cuidar, Construir</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ia</td>
                      <td className="p-2">إيَا</td>
                      <td className="p-2">Pianista, Ciencia</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">ie</td>
                      <td className="p-2">يِي</td>
                      <td className="p-2">Abierto, Noviembre</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">iu</td>
                      <td className="p-2">وُوي</td>
                      <td className="p-2">Ciudad, Viudo(a)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">io</td>
                      <td className="p-2">وِي</td>
                      <td className="p-2">Precio, Horario</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Pronombres Personales */}
          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                2. Pronombres Personales (Personal Pronouns)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed">
              <p>
                Spanish uses pronouns to indicate who performs the action. They
                can be omitted when the context is clear.
              </p>

              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b font-medium text-left">
                    <th className="p-2">Singular</th>
                    <th className="p-2">Plural</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Yo — I</td>
                    <td className="p-2">Nosotros/Nosotras — We</td>
                  </tr>
                  <tr>
                    <td className="p-2">Tú — You (informal)</td>
                    <td className="p-2">
                      Vosotros/Vosotras — You (plural, Spain)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Usted — You (formal)</td>
                    <td className="p-2">
                      Ustedes — You (plural, Latin America)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Él — He</td>
                    <td className="p-2">Ellos — They (masculine)</td>
                  </tr>
                  <tr>
                    <td className="p-2">Ella — She</td>
                    <td className="p-2">Ellas — They (feminine)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Section 3: Verbo “Llamarse” */}
          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                3. Verbo “Llamarse” (To Be Called)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed">
              <p>
                <strong>Llamarse</strong> is used to express someone’s name. It
                is reflexive, so a reflexive pronoun must accompany it.
              </p>

              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b font-medium text-left">
                    <th className="p-2">Pronoun</th>
                    <th className="p-2">Conjugation</th>
                    <th className="p-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Yo</td>
                    <td className="p-2">me llamo</td>
                    <td className="p-2">Me llamo Juan.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Tú</td>
                    <td className="p-2">te llamas</td>
                    <td className="p-2">Te llamas Ana.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Él/Ella/Usted</td>
                    <td className="p-2">se llama</td>
                    <td className="p-2">Se llama Carlos.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Nosotros/as</td>
                    <td className="p-2">nos llamamos</td>
                    <td className="p-2">Nos llamamos Marta y Luis.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Vosotros/as</td>
                    <td className="p-2">os llamáis</td>
                    <td className="p-2">Os llamáis Pedro y Ana.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Ellos/Ellas/Ustedes</td>
                    <td className="p-2">se llaman</td>
                    <td className="p-2">Se llaman María y José.</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Quick Reference
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                <strong>Vowels:</strong> a, e, i, o, u
              </p>
              <p>
                <strong>Pronouns:</strong> yo, tú, él, ella, nosotros, vosotros,
                ellos
              </p>
              <p>
                <strong>Llamarse:</strong> me llamo, te llamas, se llama…
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Common Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul className="list-disc list-inside">
                <li>Forgetting reflexive pronouns (me, te, se).</li>
                <li>Mispronouncing vowel pairs like “ue” or “ia”.</li>
                <li>Using “llamar” instead of “llamarse” for names.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>Record yourself reading vowel combinations.</p>
              <p>Practice introductions using “me llamo”.</p>
              <p>Compare vowel sounds with English equivalents.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
