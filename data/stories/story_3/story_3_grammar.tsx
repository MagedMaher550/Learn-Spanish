import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const story_3_grammar = (
  <Card className="bg-card border-border">
    <CardHeader>
      <CardTitle className="text-card-foreground">Grammar Notes</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-sm text-foreground leading-relaxed">
      <section>
        <h3 className="font-semibold text-primary mb-2">1. Hay vs Está</h3>
        <p>
          - <strong>hay</strong> → means “there is / there are” (existence).
          Example: <em>En la casa hay muchas habitaciones</em>.
        </p>
        <p>
          - <strong>está / están</strong> → means “is / are located” (position).
          Example: <em>El frigorífico está a la izquierda</em>.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">
          2. Prepositions of place
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <em>a la izquierda de</em> = to the left of
          </li>
          <li>
            <em>a la derecha de</em> = to the right of
          </li>
          <li>
            <em>debajo de</em> = under
          </li>
          <li>
            <em>encima de</em> = on / above
          </li>
          <li>
            <em>al lado de</em> = next to
          </li>
          <li>
            <em>delante de</em> = in front of
          </li>
          <li>
            <em>detrás de</em> = behind
          </li>
          <li>
            <em>en</em> = in / on / at
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">
          3. Definite & Indefinite Articles
        </h3>
        <p>Spanish uses gender and number in articles:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <em>el sofá</em> (the sofa, masculine singular)
          </li>
          <li>
            <em>la mesa</em> (the table, feminine singular)
          </li>
          <li>
            <em>los recuerdos</em> (the memories, masculine plural)
          </li>
          <li>
            <em>unas cortinas</em> (some curtains, feminine plural)
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">4. Adjectives</h3>
        <p>
          Adjectives agree with the noun in gender and number. Example:{" "}
          <em>casa acogedora</em> (cozy house, feminine) vs
          <em>jardín favorito</em> (favorite garden, masculine).
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">5. Possession</h3>
        <p>
          - <em>La casa de Marta</em> → Marta’s house (literally: the house of
          Marta).
        </p>
        <p>
          - <em>su lugar favorito</em> → her favorite place.
        </p>
      </section>
    </CardContent>
  </Card>
);
