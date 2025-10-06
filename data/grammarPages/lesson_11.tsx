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

export function lesson_11_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const practiceItems = [
    { id: 1, sentence: "En mi calle ____ una farmacia.", answer: "hay" },
    { id: 2, sentence: "La farmacia ____ en la esquina.", answer: "está" },
    { id: 3, sentence: "____ dos parques en mi barrio.", answer: "Hay" },
    {
      id: 4,
      sentence: "¿____ dónde la estación?",
      answer: "Está / Dónde está",
    },
    {
      id: 5,
      sentence: "¿____ cuántas tiendas hay?",
      answer: "¿Cuántas... hay?",
    },
    {
      id: 6,
      sentence: "El banco ____ al lado del supermercado.",
      answer: "está",
    },
    { id: 7, sentence: "En la mesa ____ tres libros.", answer: "hay" },
    { id: 8, sentence: "Los libros ____ encima de la mesa.", answer: "están" },
    {
      id: 9,
      sentence: "Hay ____ gente hoy (mucho/poco).",
      answer: "mucha / poca",
    },
    {
      id: 10,
      sentence: "El edificio es ____ alto (muy/poco).",
      answer: "muy / poco",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="p-4 sm:p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-lg sm:text-2xl">
              Lesson 11 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Existencia, ubicación y cantidad. <em>hay</em>, <em>estar</em>,{" "}
              <em>dónde</em>, <em>cuántos/as</em>,{" "}
              <em>mucho/mucha/muchos/muchas</em>, <em>muy/poco</em>,{" "}
              <em>del/al</em>.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* HAY */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                1. <em>HAY</em> — existencia / cantidad
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Usamos <strong>hay</strong> para decir que algo existe o está
                presente.
              </p>

              <div className="mt-3 grid gap-2 text-sm sm:text-base">
                <div className="rounded-md border p-3 bg-muted/5">
                  <div className="font-medium">Estructura</div>
                  <div>Hay + un/una/unos/unas + nombre</div>
                  <div>Hay + nombre (plural sin artículo)</div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="p-2 border rounded">
                    <div className="text-xs text-muted-foreground">
                      Ejemplos
                    </div>
                    <div className="mt-1">
                      En mi calle <strong>hay</strong> una farmacia.
                    </div>
                    <div>
                      En la plaza <strong>hay</strong> tiendas.
                    </div>
                  </div>
                  <div className="p-2 border rounded">
                    <div className="text-xs text-muted-foreground">
                      Pregunta
                    </div>
                    <div className="mt-1">
                      ¿<strong>Hay</strong> una biblioteca aquí?
                    </div>
                    <div>
                      Respuesta: <strong>Sí, hay</strong> una en la avenida.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ESTAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                2. <em>ESTAR</em> — ubicación
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Usamos <strong>estar</strong> para indicar la{" "}
                <strong>posición</strong> o ubicación de algo conocido.
              </p>

              <div className="mt-3 grid gap-2 text-sm sm:text-base">
                <div className="rounded-md border p-3 bg-muted/5">
                  <div className="font-medium">Estructura</div>
                  <div>El/La + nombre + está + lugar</div>
                  <div>Los/Las + nombre + están + lugar</div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="p-2 border rounded">
                    <div className="text-xs text-muted-foreground">
                      Ejemplos
                    </div>
                    <div className="mt-1">
                      La estación <strong>está</strong> en la esquina.
                    </div>
                    <div>
                      Los bancos <strong>están</strong> frente al parque.
                    </div>
                  </div>
                  <div className="p-2 border rounded">
                    <div className="text-xs text-muted-foreground">
                      Preposiciones comunes
                    </div>
                    <div className="mt-1">
                      al lado de, encima de, debajo de, delante de, detrás de,
                      entre
                    </div>
                    <div className="mt-1 italic">
                      Ej: El banco está <strong>al lado del</strong>{" "}
                      supermercado.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DÓNDE */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                3. <em>DÓNDE</em> — preguntar por el lugar
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                <strong>Dónde</strong> pregunta por la ubicación. Se usa con{" "}
                <em>estar</em> y con <em>hay</em>.
              </p>

              <div className="mt-3 space-y-2 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Con <em>estar</em> (lugar exacto)
                  </div>
                  <div>
                    ¿Dónde está la biblioteca? — Está cerca del colegio.
                  </div>
                  <div>¿Dónde están mis amigos? — Están en el restaurante.</div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Con <em>hay</em> (existencia en un lugar)
                  </div>
                  <div>
                    ¿Dónde hay un cajero automático? — Hay uno junto al banco.
                  </div>
                  <div>
                    ¿Dónde hay supermercados abiertos? — Hay muchos en el
                    centro.
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  Diferencia breve: <strong>¿Dónde hay…?</strong> = ¿Dónde
                  existe? • <strong>¿Dónde está…?</strong> = ¿Dónde está (ese)
                  elemento?
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CUÁNTOS */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                4. <em>CUÁNTOS / CUÁNTAS</em> — preguntar cantidad
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Usamos <strong>cuántos / cuántas</strong> para saber el número
                de objetos o personas.
              </p>

              <div className="mt-3 space-y-2 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Con <em>hay</em>
                  </div>
                  <div>
                    ¿Cuántas farmacias hay en tu calle? — Hay dos farmacias.
                  </div>
                  <div>¿Cuántos parques hay? — Hay tres.</div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    Con <em>estar</em> (cuántos están en un lugar)
                  </div>
                  <div>
                    ¿Cuántos estudiantes están en clase? — Están veinte.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MUCHO / MUY / POCO */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                5. <em>MUCHO / MUCHA / MUCHOS / MUCHAS</em>,{" "}
                <em>POCO / POCA / POCOS / POCAS</em> y <em>MUY</em>
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Estas palabras expresan <strong>cantidad</strong> o{" "}
                <strong>intensidad</strong>. Son muy frecuentes al describir
                lugares, personas o cosas.
              </p>

              <div className="mt-4 space-y-4 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">🔹 Cantidad — con nombres</div>
                  <p className="mt-1">
                    <strong>Mucho / mucha / muchos / muchas</strong> y{" "}
                    <strong>poco / poca / pocos / pocas</strong> se usan con{" "}
                    <em>sustantivos</em>.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Hay <strong>mucho tráfico</strong> hoy.
                    </li>
                    <li>
                      Hay <strong>mucha gente</strong> en el parque.
                    </li>
                    <li>
                      Hay <strong>muchos coches</strong> en la calle.
                    </li>
                    <li>
                      Hay <strong>muchas tiendas</strong> abiertas.
                    </li>
                    <li>
                      Hoy hay <strong>poco ruido</strong>.
                    </li>
                    <li>
                      En mi barrio hay <strong>pocas farmacias</strong>.
                    </li>
                  </ul>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Recuerda: el adjetivo cambia con el género y número del
                    nombre.
                  </div>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">
                    🔹 Intensidad — con adjetivos o adverbios
                  </div>
                  <p className="mt-1">
                    <strong>Muy</strong> se usa con adjetivos o adverbios y no
                    cambia de forma.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      El barrio es <strong>muy</strong> tranquilo.
                    </li>
                    <li>
                      La casa está <strong>muy</strong> lejos del centro.
                    </li>
                    <li>
                      El clima es <strong>muy</strong> caluroso.
                    </li>
                    <li>
                      Mis vecinos son <strong>muy</strong> simpáticos.
                    </li>
                  </ul>

                  <p className="mt-2">
                    <strong>Poco</strong> también puede indicar poca intensidad:
                  </p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>
                      El hotel es <strong>poco</strong> grande.
                    </li>
                    <li>
                      Mi casa es <strong>poco</strong> moderna.
                    </li>
                    <li>
                      El profesor es <strong>poco</strong> amable.
                    </li>
                  </ul>
                </div>

                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">⚖️ Diferencia</div>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      <strong>Mucho</strong> = cantidad → Hay mucho trabajo.
                    </li>
                    <li>
                      <strong>Muy</strong> = intensidad → El trabajo es muy
                      difícil.
                    </li>
                    <li>
                      <strong>Poco</strong> = cantidad o intensidad baja → Hay
                      poco dinero / El lugar es poco bonito.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CONTRACCIONES DEL / AL */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                6. Contracciones: <em>del</em> y <em>al</em>
              </h3>
              <div className="mt-2 text-sm sm:text-base">
                <div className="border rounded p-3 bg-muted/5">
                  <div className="font-medium">Reglas</div>
                  <div>
                    <strong>de + el = del</strong> → El baño está a la derecha{" "}
                    <strong>del</strong> estudio.
                  </div>
                  <div>
                    <strong>a + el = al</strong> → Ve <strong>al</strong> banco.
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  No se contraen con la/los/las: de la, de los, de las.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HAY vs ESTAR summary */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                Resumen: <em>Hay</em> vs <em>Estar</em>
              </h3>
              <Separator className="my-3" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border bg-muted/5">
                  <div className="font-medium">Hay</div>
                  <div className="text-xs text-muted-foreground">
                    Existencia / cantidad
                  </div>
                  <div className="mt-1">
                    <em>En mi barrio hay muchas tiendas.</em>
                  </div>
                </div>
                <div className="p-3 rounded-xl border bg-muted/5">
                  <div className="font-medium">Estar</div>
                  <div className="text-xs text-muted-foreground">
                    Ubicación / posición
                  </div>
                  <div className="mt-1">
                    <em>La tienda está en la esquina.</em>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-semibold">Practice</h3>
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

              <div className="mt-4 text-sm">
                <div className="font-medium">Mini tasks</div>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Escribe 5 frases con <strong>hay</strong> sobre tu ciudad.
                  </li>
                  <li>
                    Escribe 5 frases con <strong>estar</strong> + preposición
                    (al lado de, encima de...).
                  </li>
                  <li>
                    Haz 3 preguntas con <strong>dónde</strong> y responde.
                  </li>
                  <li>
                    Usa <strong>mucho/muy/poco</strong> para describir tu
                    barrio.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* SIDEBAR */}
        <aside className="space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              Claves rápidas
            </h4>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
              <li>
                <strong>Hay</strong> → existencia general.
              </li>
              <li>
                <strong>Estar</strong> → posición específica.
              </li>
              <li>
                <strong>Dónde</strong> → preguntar lugar.
              </li>
              <li>
                <strong>Cuántos</strong> → preguntar número.
              </li>
              <li>
                <strong>Mucho / Muy / Poco</strong> → cantidad o intensidad.
              </li>
              <li>
                <strong>Del / Al</strong> → contracciones comunes.
              </li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default lesson_11_grammar;
