import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function lesson_20_grammar(): JSX.Element {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6 space-y-6">
        <h3 className="text-lg font-semibold">
          Frequency Expressions (Expresiones de frecuencia)
        </h3>

        <p className="text-sm sm:text-base">
          These adverbs and phrases quantify how often an action occurs and
          generally function as sentence-level modifiers.
        </p>

        {/* ---------------- 1. Alta frecuencia ---------------- */}
        <h4 className="font-semibold mt-6">1. Alta frecuencia</h4>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>siempre</li>
          <li>todos los días / todas las noches</li>
        </ul>
        <p className="text-sm sm:text-base">
          Indicates a recurring, uninterrupted pattern. Placement: beginning or
          end of sentence.
        </p>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Example:</strong> Siempre estudio español.
        </div>

        {/* ---------------- 2. Frecuencia regular ---------------- */}
        <h4 className="font-semibold mt-6">2. Frecuencia regular</h4>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>normalmente</li>
          <li>habitualmente</li>
          <li>a menudo</li>
        </ul>
        <p className="text-sm sm:text-base">
          Signals consistent cadence. Usually placed before the verb.
        </p>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Example:</strong> Normalmente desayuno temprano.
        </div>

        {/* ---------------- 3. Frecuencia moderada ---------------- */}
        <h4 className="font-semibold mt-6">3. Frecuencia moderada</h4>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>muchas veces</li>
          <li>algunas veces / a veces</li>
        </ul>
        <p className="text-sm sm:text-base">
          Captures mid-range recurrence without fixed periodicity.
        </p>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Example:</strong> A veces hago ejercicio por la tarde.
        </div>

        {/* ---------------- 4. Baja frecuencia ---------------- */}
        <h4 className="font-semibold mt-6">4. Baja frecuencia</h4>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>pocas veces</li>
          <li>muy pocas veces / casi nunca</li>
        </ul>
        <p className="text-sm sm:text-base">Communicates rare occurrence.</p>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Example:</strong> Casi nunca veo televisión.
        </div>

        {/* ---------------- 5. Frecuencia nula ---------------- */}
        <h4 className="font-semibold mt-6">5. Frecuencia nula</h4>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>nunca</li>
        </ul>
        <p className="text-sm sm:text-base">
          Indicates zero occurrence; absolute.
        </p>
        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Example:</strong> Nunca fumo.
        </div>

        {/* ---------------- Placement Rules ---------------- */}
        <h4 className="font-semibold mt-6">
          Placement Rules (Operational Grammar)
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>
            Before the verb: <em>Normalmente trabajo desde casa.</em>
          </li>
          <li>
            End of sentence: <em>Trabajo desde casa normalmente.</em>
          </li>
          <li>
            "Nunca" functions as the negative itself. Do not add "no". Correct:{" "}
            <em>Nunca salgo tarde.</em> Incorrect:{" "}
            <em>No nunca salgo tarde.</em>
          </li>
        </ul>

        {/* ---------------- Verb Compatibility ---------------- */}
        <h4 className="font-semibold mt-6">Verb Compatibility</h4>
        <p className="text-sm sm:text-base">
          These expressions integrate with:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>Present tense for habitual actions</li>
          <li>Imperfect for past routines</li>
          <li>Future for expectations or planned routines</li>
        </ul>
      </CardContent>
    </Card>
  );
}
