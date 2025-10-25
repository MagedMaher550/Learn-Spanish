"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function lesson_3_grammar() {
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
            <h1 className="text-3xl font-bold mb-2">Lesson 3 — Grammar</h1>
            <Separator className="mb-6" />
          </div>

          {/* Section 1: Verbos Llamarse y Apellidarse */}
          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                1. Verbos “Llamarse” y “Apellidarse”
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed">
              <p>
                In Spanish, <strong>llamarse</strong> means{" "}
                <em>“to be called”</em> and is used to say a person’s{" "}
                <strong>first name</strong>.<strong>Apellidarse</strong> means{" "}
                <em>“to have as a surname”</em> and is used for last names. Both
                are <strong>reflexive verbs</strong>.
              </p>

              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b font-medium text-left">
                    <th className="p-2">Pronoun</th>
                    <th className="p-2">Llamarse</th>
                    <th className="p-2">Apellidarse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Yo</td>
                    <td className="p-2">me llamo</td>
                    <td className="p-2">me apellido</td>
                  </tr>
                  <tr>
                    <td className="p-2">Tú</td>
                    <td className="p-2">te llamas</td>
                    <td className="p-2">te apellidas</td>
                  </tr>
                  <tr>
                    <td className="p-2">Él / Ella / Usted</td>
                    <td className="p-2">se llama</td>
                    <td className="p-2">se apellida</td>
                  </tr>
                  <tr>
                    <td className="p-2">Nosotros/as</td>
                    <td className="p-2">nos llamamos</td>
                    <td className="p-2">nos apellidamos</td>
                  </tr>
                  <tr>
                    <td className="p-2">Vosotros/as</td>
                    <td className="p-2">os llamáis</td>
                    <td className="p-2">os apellidáis</td>
                  </tr>
                  <tr>
                    <td className="p-2">Ellos / Ellas / Ustedes</td>
                    <td className="p-2">se llaman</td>
                    <td className="p-2">se apellidan</td>
                  </tr>
                </tbody>
              </table>

              <p className="font-semibold pt-3">Examples:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Me llamo <strong>Ana</strong>. → My name is Ana.
                </li>
                <li>¿Cómo te llamas? → What is your name?</li>
                <li>
                  Se llama <strong>Pedro</strong>. → His name is Pedro.
                </li>
                <li>
                  Me apellido <strong>García</strong>. → My surname is García.
                </li>
                <li>¿Cómo te apellidas? → What is your surname?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 2: Verbo SER */}
          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                2. Verbo “Ser” (To Be)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed">
              <p>
                The verb <strong>ser</strong> means <em>“to be”</em>. It is used
                to express identity, nationality, profession, and origin.
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
                    <td className="p-2">soy</td>
                    <td className="p-2">
                      Yo soy estudiante. — I am a student.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Tú</td>
                    <td className="p-2">eres</td>
                    <td className="p-2">Tú eres médico. — You are a doctor.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Él / Ella / Usted</td>
                    <td className="p-2">es</td>
                    <td className="p-2">Él es español. — He is Spanish.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Nosotros/as</td>
                    <td className="p-2">somos</td>
                    <td className="p-2">
                      Nosotros somos amigos. — We are friends.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Vosotros/as</td>
                    <td className="p-2">sois</td>
                    <td className="p-2">
                      Vosotros sois turistas. — You are tourists.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Ellos / Ellas / Ustedes</td>
                    <td className="p-2">son</td>
                    <td className="p-2">
                      Ellas son profesoras. — They are teachers.
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="font-semibold pt-2">Main Uses of “Ser”:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Identity:</strong> Yo soy Maged. (I am Maged.)
                </li>
                <li>
                  <strong>Profession:</strong> Ella es doctora. (She is a
                  doctor.)
                </li>
                <li>
                  <strong>Nationality:</strong> Soy egipcio. (I am Egyptian.)
                </li>
                <li>
                  <strong>Origin:</strong> Soy de Egipto. (I am from Egypt.)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3: Asking for Name and Nationality */}
          <Card className="shadow-sm rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                3. Asking for Name, Surname, Nationality, and Origin
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                In basic conversations, it’s common to ask about names,
                surnames, nationality, and where someone is from. Below are
                typical questions and answers.
              </p>

              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b font-medium text-left">
                    <th className="p-2">Question</th>
                    <th className="p-2">Meaning</th>
                    <th className="p-2">Possible Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">¿Cómo te llamas?</td>
                    <td className="p-2">What is your name?</td>
                    <td className="p-2">Me llamo Ahmed.</td>
                  </tr>
                  <tr>
                    <td className="p-2">¿Cómo se llama usted?</td>
                    <td className="p-2">What is your name? (formal)</td>
                    <td className="p-2">Me llamo Señor García.</td>
                  </tr>
                  <tr>
                    <td className="p-2">¿Cómo te apellidas?</td>
                    <td className="p-2">What is your surname?</td>
                    <td className="p-2">Me apellido Saleh.</td>
                  </tr>
                  <tr>
                    <td className="p-2">¿De dónde eres?</td>
                    <td className="p-2">Where are you from?</td>
                    <td className="p-2">Soy de Egipto.</td>
                  </tr>
                  <tr>
                    <td className="p-2">¿Cuál es tu nacionalidad?</td>
                    <td className="p-2">What is your nationality?</td>
                    <td className="p-2">Soy egipcio / egipcia.</td>
                  </tr>
                </tbody>
              </table>

              <p className="font-semibold pt-3">More Examples:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>¿De dónde es usted? — Soy de México. (formal)</li>
                <li>¿Eres español? — No, soy argentino.</li>
                <li>Mi nombre es Laura y mi apellido es Torres.</li>
                <li>Se llama David y es de Colombia.</li>
                <li>Somos de Chile, somos chilenos.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column — Sidebar */}
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
                <strong>Llamarse:</strong> me llamo, te llamas, se llama…
              </p>
              <p>
                <strong>Apellidarse:</strong> me apellido, te apellidas…
              </p>
              <p>
                <strong>Ser:</strong> soy, eres, es, somos, sois, son
              </p>
              <p>
                <strong>Key Questions:</strong> ¿Cómo te llamas?, ¿De dónde
                eres?
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
                <li>Confusing “ser” and “estar” — here use “ser”.</li>
                <li>Using “soy de” + country, not “estoy de”.</li>
                <li>
                  Nationalities are lowercase in Spanish (español, egipcio).
                </li>
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
              <p>
                Practice introducing yourself: “Hola, me llamo..., soy de...”
              </p>
              <p>Memorize the “ser” conjugations.</p>
              <p>Record short dialogues asking for names and origin.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
