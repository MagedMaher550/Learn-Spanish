import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function lesson_19_grammar(): JSX.Element {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6 space-y-6">
        <h3 className="text-lg font-semibold">
          Present Tense — Irregular Verbs
        </h3>

        <p className="text-sm sm:text-base">
          These irregularities appear in the <strong>yo form</strong>, in{" "}
          <strong>stem changes</strong>, or in <strong>spelling changes</strong>.
          Stem changes do not apply to <strong>nosotros</strong> or{" "}
          <strong>vosotros</strong>.
        </p>

        {/* ---------------- C) -cer / -cir → -zco ---------------- */}
        <h4 className="font-semibold mt-6">
          C) Verbs ending in -cer / -cir that take “-zco” in the yo-form
        </h4>

        <p className="text-sm sm:text-base">
          These verbs add <strong>-zco</strong> in the yo-form to preserve a
          soft sound when the stem ends in a vowel.
        </p>

        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Examples:</strong> obedecer, conocer, traducir
        </div>

        <h5 className="font-medium mt-2">Conjugations</h5>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>yo → obedezco / conozco / traduzco</li>
          <li>tú → obedeces / conoces / traduces</li>
          <li>él/ella/usted → obedece / conoce / traduce</li>
          <li>nosotros/as → obedecemos / conocemos / traducimos</li>
          <li>vosotros/as → obedecéis / conocéis / traducís</li>
          <li>ellos/ellas/ustedes → obedecen / conocen / traducen</li>
        </ul>

        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Rule:</strong> Add <strong>-zco</strong> in the yo-form of
          verbs ending in <strong>-cer / -cir</strong> when preceded by a vowel.
        </div>

        {/* ---------------- Irregular Yo ---------------- */}
        <h4 className="font-semibold mt-6">Irregular “yo” Forms</h4>

        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>poner → pongo</li>
          <li>salir → salgo</li>
          <li>hacer → hago</li>
          <li>saber → sé</li>
          <li>dar → doy</li>
          <li>ver → veo</li>
          <li>traer → traigo</li>
          <li>caer → caigo</li>
          <li>caber → quepo</li>
          <li>estar → estoy</li>
        </ul>

        {/* ---------------- D) Double Irregularity ---------------- */}
        <h4 className="font-semibold mt-6">D) Verbs with Double Irregularity</h4>

        <p className="text-sm sm:text-base">
          These verbs have an <strong>irregular yo-form</strong> plus a{" "}
          <strong>stem change</strong> in the other persons.
        </p>

        {/* Tener */}
        <h5 className="font-medium mt-4">1) Tener (to have)</h5>
        <p className="text-sm sm:text-base">
          Stem change: <strong>e → ie</strong> | Yo: <strong>tengo</strong>
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>tengo, tienes, tiene, tenemos, tenéis, tienen</li>
        </ul>

        {/* Venir */}
        <h5 className="font-medium mt-4">2) Venir (to come)</h5>
        <p className="text-sm sm:text-base">
          Stem change: <strong>e → ie</strong> | Yo: <strong>vengo</strong>
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>vengo, vienes, viene, venimos, venís, vienen</li>
        </ul>

        {/* Decir */}
        <h5 className="font-medium mt-4">3) Decir (to say/tell)</h5>
        <p className="text-sm sm:text-base">
          Stem change: <strong>e → i</strong> | Yo: <strong>digo</strong>
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>digo, dices, dice, decimos, decís, dicen</li>
        </ul>

        {/* Seguir */}
        <h5 className="font-medium mt-4">4) Seguir (to follow)</h5>
        <p className="text-sm sm:text-base">
          Stem change: <strong>e → i</strong> | Yo: <strong>sigo</strong>{" "}
          (drops the “u”)
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>sigo, sigues, sigue, seguimos, seguís, siguen</li>
        </ul>

        {/* Oír */}
        <h5 className="font-medium mt-4">5) Oír (to hear)</h5>
        <p className="text-sm sm:text-base">
          Double irregularity: spelling change + stem behavior
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>oigo, oyes, oye, oímos, oís, oyen</li>
        </ul>

        {/* ---------------- -uir Verbs ---------------- */}
        <h4 className="font-semibold mt-6">
          E) Verbs Ending in “-uir” — Add “y”
        </h4>

        <p className="text-sm sm:text-base">
          These verbs add <strong>-y-</strong> in all forms except{" "}
          <strong>nosotros</strong> and <strong>vosotros</strong>.
        </p>

        <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
          <strong>Examples:</strong> construir, influir, destruir, sustituir
        </div>

        <h5 className="font-medium mt-2">Influir (to influence)</h5>

        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>influyo</li>
          <li>influyes</li>
          <li>influye</li>
          <li>influimos</li>
          <li>influís</li>
          <li>influyen</li>
        </ul>

        <p className="text-sm sm:text-base mt-2">
          Same pattern for <strong>construir</strong>,{" "}
          <strong>destruir</strong>, <strong>sustituir</strong>.
        </p>
      </CardContent>
    </Card>
  );
}
