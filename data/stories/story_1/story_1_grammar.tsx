import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const story_1_grammar = (
  <Card className="bg-card border-border">
    <CardHeader>
      <CardTitle className="text-card-foreground">Grammar Notes</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-sm text-foreground leading-relaxed">
      <section>
        <h3 className="font-semibold text-primary mb-2">1. Prepositions</h3>
        <p>
          - <strong>en</strong> → means <em>in / at</em>. Example:
          <em> En Roma</em> (“In Rome”).
        </p>
        <p>
          - <strong>con</strong> → means <em>with</em>. Example:
          <em> con tus perros</em> (“with your dogs”).
        </p>
        <p>
          - <strong>para</strong> → used for purpose or intention. Example:
          <em> Para usar este servicio</em> (“To use this service”).
        </p>
        <p>
          - <strong>al</strong> → contraction of <em>a + el</em>, meaning “to
          the”. Example: <em> una vez al mes</em> (“once a month”).
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">2. Articles</h3>
        <p>
          Spanish uses definite and indefinite articles to show specificity:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <em>los museos</em> = the museums (plural, masculine, definite)
          </li>
          <li>
            <em>las guarderías</em> = the day care centers (plural, feminine,
            definite)
          </li>
          <li>
            <em>un boleto</em> = a ticket (singular, masculine, indefinite)
          </li>
          <li>
            <em>este servicio</em> = this service (demonstrative)
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">
          3. Verb Conjugations
        </h3>
        <p>
          Verbs in the story are conjugated in <strong>present tense</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <em>puedes</em> = you can (2nd person singular of <em>poder</em>)
          </li>
          <li>
            <em>tienen</em> = they have (3rd person plural of <em>tener</em>)
          </li>
          <li>
            <em>usan</em> = they use (3rd person plural of <em>usar</em>)
          </li>
          <li>
            <em>abren</em> = they open (3rd person plural of <em>abrir</em>)
          </li>
        </ul>
        <p>
          Notice also the structure <strong>tienes que + infinitive</strong>
          (“you have to + verb”). Example: <em>tienes que comprar</em> (“you
          have to buy”).
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">
          4. Expressions of Frequency
        </h3>
        <p>
          - <em>una vez al mes</em> → literally “one time to the month”, means
          “once a month”. This is a common structure: <em>vez</em>{" "}
          (time/occurrence) + <em>al</em> + unit of time.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-primary mb-2">5. Demonstratives</h3>
        <p>
          - <em>este</em> means “this” and changes by gender/number. Example:{" "}
          <em>este servicio</em> (“this service”). Feminine would be{" "}
          <em>esta</em>, plurals: <em>estos / estas</em>.
        </p>
      </section>
    </CardContent>
  </Card>
);
