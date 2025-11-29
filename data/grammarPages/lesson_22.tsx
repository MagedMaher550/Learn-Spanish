import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function lesson_22_grammar(): JSX.Element {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6 space-y-6">
        {/* ---------------- LESSON 1 — Structure of Gustar ---------------- */}
        <h3 className="text-lg font-semibold">
          Lesson 1 — The Structure of <em>Gustar</em> and Similar Verbs
        </h3>

        {/* 1.1 Core Grammar */}
        <h4 className="font-semibold mt-6">1.1 Core Grammar Explanation</h4>
        <p className="text-sm sm:text-base">
          <em>Gustar</em> literally means “to be pleasing to.” The person is the
          indirect object, and the thing or activity is the grammatical subject.
        </p>

        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base leading-relaxed">
          <strong>Structure:</strong>
          <br />
          <span>
            (A + person) + indirect object pronoun + <em>gusta</em> /
            <em>gustan</em> + noun/verb
          </span>
        </div>

        {/* 1.2 Pronouns */}
        <h4 className="font-semibold mt-6">1.2 Indirect Object Pronouns</h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>
            Yo → me → <em>Me gusta el té.</em>
          </li>
          <li>
            Tú → te → <em>Te gustan los perros.</em>
          </li>
          <li>
            Él/Ella/Usted → le → <em>Le gusta el cine.</em>
          </li>
          <li>
            Nosotros/as → nos → <em>Nos gustan los libros.</em>
          </li>
          <li>
            Vosotros/as → os → <em>Os gusta la música.</em>
          </li>
          <li>
            Ellos/Ellas/Ustedes → les → <em>Les gustan las fiestas.</em>
          </li>
        </ul>

        {/* 1.3 Clarification */}
        <h4 className="font-semibold mt-6">
          1.3 Optional Clarification: “A + Person”
        </h4>

        <p className="text-sm sm:text-base">
          Used for emphasis or clarification.
        </p>

        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>A mí</li>
          <li>A ti</li>
          <li>A él / a ella / a usted</li>
          <li>A nosotros/as</li>
          <li>A vosotros/as</li>
          <li>A ellos/as / a ustedes</li>
        </ul>

        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base space-y-1">
          <div>A mí me gusta el chocolate.</div>
          <div>A ella le gustan los animales.</div>
          <div>A ellos les gusta viajar.</div>
        </div>

        {/* 1.4 Gusta vs Gustan */}
        <h4 className="font-semibold mt-6">
          1.4 <em>Gusta</em> vs. <em>Gustan</em>
        </h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>
            <strong>gusta</strong> → singular nouns or verbs
          </li>
          <li>
            <strong>gustan</strong> → plural nouns
          </li>
        </ul>

        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base space-y-1">
          <div>Me gusta la pizza.</div>
          <div>Me gustan las pizzas.</div>
          <div>Me gusta correr.</div>
          <div>A él le gustan los deportes.</div>
          <div>A ti te gusta estudiar.</div>
        </div>

        {/* 1.5 Similar Verbs */}
        <h4 className="font-semibold mt-6">
          1.5 Additional Verbs with the Same Structure
        </h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>
            <em>encantar</em>
          </li>
          <li>
            <em>interesar</em>
          </li>
          <li>
            <em>importar</em>
          </li>
          <li>
            <em>doler</em>
          </li>
          <li>
            <em>parecer</em>
          </li>
        </ul>

        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base space-y-1">
          <div>A mí me encanta el café.</div>
          <div>A ella le interesa la historia.</div>
          <div>A nosotros nos importa el clima.</div>
          <div>A mí me duele la espalda.</div>
          <div>A ellos les parece fácil la tarea.</div>
        </div>

        {/* 1.6 Extended Examples */}
        <h4 className="font-semibold mt-6">1.6 Extended Examples</h4>

        <p className="text-sm sm:text-base font-semibold">Singular</p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>A mí me gusta el pan.</li>
          <li>A ti te gusta el árabe.</li>
          <li>A ella le gusta el calor.</li>
        </ul>

        <p className="text-sm sm:text-base font-semibold mt-4">Plural</p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Me gustan las montañas.</li>
          <li>A vosotros os gustan los idiomas.</li>
          <li>A ellos les gustan los ordenadores.</li>
        </ul>

        <p className="text-sm sm:text-base font-semibold mt-4">Infinitives</p>
        <p className="text-sm sm:text-base">
          (always <em>gusta</em>)
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Nos gusta leer.</li>
          <li>Me gusta cocinar.</li>
          <li>A ti te gusta dormir.</li>
        </ul>

        {/* 1.7 Practice */}
        <h4 className="font-semibold mt-6">1.7 Practice</h4>

        <p className="font-semibold text-sm sm:text-base">
          A. Fill in “gusta / gustan”
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>A mí me ________ el cine.</li>
          <li>A ellos les ________ los coches.</li>
          <li>A ti te ________ nadar.</li>
          <li>A nosotros nos ________ los museos.</li>
          <li>A ella le ________ el fútbol.</li>
          <li>A vosotros os ________ viajar.</li>
          <li>A él le ________ las frutas.</li>
          <li>A ustedes les ________ correr.</li>
        </ul>

        <p className="font-semibold text-sm sm:text-base mt-4">
          B. Fill in the pronoun
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>A nosotros ___ encanta el invierno.</li>
          <li>A ti ___ interesa el arte.</li>
          <li>A ellos ___ gusta el café.</li>
          <li>A mí ___ duele la cabeza.</li>
          <li>A ella ___ gustan las plantas.</li>
          <li>A vosotros ___ importa el examen.</li>
          <li>A usted ___ gusta bailar.</li>
          <li>A él ___ parece difícil.</li>
        </ul>

        <p className="font-semibold text-sm sm:text-base mt-4">
          C. Rewrite with “A + person”
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Me gustan los hoteles.</li>
          <li>Nos interesa el deporte.</li>
          <li>Le encanta el cine.</li>
          <li>Te gusta el chocolate.</li>
          <li>Les importa el trabajo.</li>
        </ul>

        <p className="font-semibold text-sm sm:text-base mt-4">
          D. Translation (English → Spanish)
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>I like Spanish.</li>
          <li>They like cars.</li>
          <li>She likes studying.</li>
          <li>We love music.</li>
          <li>He is interested in technology.</li>
        </ul>

        {/* ---------------- LESSON 2 — Intensity ---------------- */}
        <h3 className="text-lg font-semibold mt-10">
          Lesson 2 — Degrees of Intensity (Gradación de Intensidad)
        </h3>

        <h4 className="font-semibold mt-6">2.1 The Intensity Scale</h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Amo / Adoro</li>
          <li>Me encanta</li>
          <li>Me gusta muchísimo</li>
          <li>Me gusta mucho</li>
          <li>Me gusta bastante</li>
          <li>Me gusta</li>
          <li>Me gusta poco</li>
          <li>No me gusta</li>
          <li>No me gusta nada</li>
          <li>Odio</li>
        </ul>

        <h4 className="font-semibold mt-6">2.2 Examples</h4>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base space-y-1">
          <div>Amo el café.</div>
          <div>Adoro viajar.</div>
          <div>Me encanta el cine.</div>
          <div>Me gusta muchísimo el chocolate.</div>
          <div>Me gusta mucho correr.</div>
          <div>Me gusta bastante la comida italiana.</div>
          <div>Me gusta la música.</div>
          <div>Me gusta poco el invierno.</div>
          <div>No me gusta el pescado.</div>
          <div>No me gusta nada el tráfico.</div>
          <div>Odio el frío.</div>
        </div>

        <h4 className="font-semibold mt-6">
          2.3 Practice — Choose the Intensity
        </h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Me gusta muchísimo correr.</li>
          <li>No me gusta nada el ruido.</li>
          <li>Me gusta.</li>
          <li>Odio las mentiras.</li>
          <li>Me gusta poco el fútbol.</li>
          <li>Me encanta viajar.</li>
          <li>Me gusta bastante la fruta.</li>
          <li>Amo los videojuegos.</li>
        </ul>

        <p className="font-semibold text-sm sm:text-base mt-4">
          B. Transform the sentence “Me gusta el café.”
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Strong</li>
          <li>Very strong</li>
          <li>Weak</li>
          <li>Negative</li>
          <li>Extreme</li>
        </ul>

        <p className="font-semibold text-sm sm:text-base mt-4">Apply to:</p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>El chocolate</li>
          <li>La música árabe</li>
          <li>Viajar</li>
          <li>El cine</li>
          <li>El gimnasio</li>
        </ul>

        <p className="font-semibold text-sm sm:text-base mt-4">
          C. Create five sentences following the scale.
        </p>

        {/* ---------------- LESSON 3 — Asking & Responding ---------------- */}
        <h3 className="text-lg font-semibold mt-10">
          Lesson 3 — Asking and Responding About Likes
        </h3>

        <h4 className="font-semibold mt-6">3.1 Asking About Preferences</h4>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base space-y-1">
          <div>¿A ti te gusta el café?</div>
          <div>¿A vosotros os gustan los animales?</div>
          <div>¿A ella le gusta viajar?</div>
          <div>¿A ustedes les gustan los deportes?</div>
        </div>

        <h4 className="font-semibold mt-6">3.2 Responding — Same Opinion</h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Me gusta… → A mí también.</li>
          <li>No me gusta… → A mí tampoco.</li>
        </ul>

        <h4 className="font-semibold mt-6">
          3.3 Responding — Different Opinion
        </h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Me gusta… → A mí no.</li>
          <li>No me gusta… → A mí sí.</li>
        </ul>

        <h4 className="font-semibold mt-6">3.4 Dialogue Examples</h4>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base space-y-1">
          <div>— A mí me gusta el sushi. — A mí también.</div>
          <div>— No me gusta el invierno. — A mí tampoco.</div>
          <div>— Me gusta mucho estudiar. — A mí no.</div>
          <div>— No me gusta nada correr. — A mí sí.</div>
        </div>

        <h4 className="font-semibold mt-6">3.5 Practice — Respond Correctly</h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Me gustan los videojuegos. → ________</li>
          <li>No me gusta el café. → ________</li>
          <li>Me encanta la música. → ________</li>
          <li>No me interesa el arte. → ________</li>
          <li>Me gusta poco estudiar. → ________</li>
          <li>No me gustan las verduras. → ________</li>
        </ul>

        <h4 className="font-semibold mt-6">
          3.6 Practice — Complete the Questions
        </h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>¿A ti te ________ el chocolate?</li>
          <li>¿A ellos les ________ estudiar español?</li>
          <li>¿A vosotros os ________ los viajes?</li>
          <li>¿A ella le ________ correr?</li>
          <li>¿A ustedes les ________ las películas?</li>
        </ul>

        <h4 className="font-semibold mt-6">3.7 Quiz — Conversation</h4>
        <p className="text-sm sm:text-base">
          Write a 4–6 line conversation including questions about food, sports,
          music, and travel. Use: <em>A mí también</em>, <em>A mí tampoco</em>,
          <em>A mí sí</em>, <em>A mí no</em>.
        </p>
      </CardContent>
    </Card>
  );
}
