import React, { JSX } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function lesson_18_grammar(): JSX.Element {
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
              Lesson — Telling Time & Present Irregular Verbs
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Comprehensive grammar: how to tell the time in Spanish +
              present-tense irregular verbs and stem-changing patterns.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      {/* ---------------- SECTION: TELLING TIME ---------------- */}
      <Card>
        <CardContent className="p-4 sm:p-6 space-y-6">
          <h3 className="text-lg font-semibold">1. Basic Structure</h3>

          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>
              <strong>Es la…</strong> → only for 1:00
            </li>
            <li>
              <strong>Son las…</strong> → all other hours
            </li>
          </ul>

          <div className="p-3 rounded border bg-muted/5 text-sm sm:text-base">
            <strong>Formula:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Es la + una + minutos</li>
              <li>Son las + hora + minutos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Examples</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Es la una.</li>
              <li>Es la una y diez.</li>
              <li>Son las cuatro.</li>
              <li>Son las siete y veinte.</li>
            </ul>
          </div>

          {/* Minutes with Y */}
          <h3 className="text-lg font-semibold">2. Minutes with “y”</h3>
          <p className="text-sm sm:text-base">
            Use <strong>y</strong> to add minutes after the hour.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Son las dos y cinco.</li>
            <li>Son las nueve y veinte.</li>
            <li>Son las once y treinta.</li>
          </ul>

          {/* Media y Cuarto */}
          <h3 className="text-lg font-semibold">3. “Y media” and “y cuarto”</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Son las tres y media.</li>
            <li>Es la una y cuarto.</li>
            <li>Son las dos y cuarto.</li>
          </ul>

          {/* Menos */}
          <h3 className="text-lg font-semibold">4. Using “menos”</h3>
          <p className="text-sm sm:text-base">
            Used for :31–:59 by subtracting from the next hour.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Son las cinco menos diez. (4:50)</li>
            <li>Son las ocho menos cuarto. (7:45)</li>
            <li>Son las tres menos cinco. (2:55)</li>
          </ul>

          {/* Asking the time */}
          <h3 className="text-lg font-semibold">5. Asking the Time</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>¿Qué hora es?</li>
            <li>¿Tienes hora? / ¿Tiene hora?</li>
          </ul>

          {/* Schedules */}
          <h3 className="text-lg font-semibold">6. Schedules</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Abre desde… hasta…</li>
            <li>Está abierto de… a…</li>
            <li>Funciona desde… hasta…</li>
          </ul>

          {/* Precision */}
          <h3 className="text-lg font-semibold">7. Exact Time</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>En punto → Son las cuatro en punto.</li>
            <li>Son las tres y cincuenta y ocho.</li>
          </ul>

          {/* 24h */}
          <h3 className="text-lg font-semibold">8. 24-Hour Format</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>A las trece horas. (13:00)</li>
            <li>A las quince treinta. (15:30)</li>
          </ul>

          {/* Parts of the Day */}
          <h3 className="text-lg font-semibold">9. Parts of the Day</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>de la mañana</li>
            <li>del mediodía</li>
            <li>de la tarde</li>
            <li>de la noche</li>
            <li>de la madrugada</li>
          </ul>

          {/* Activities */}
          <h3 className="text-lg font-semibold">10. Time + Activity</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              La clase empieza <strong>a las</strong> nueve.
            </li>
            <li>
              El vuelo sale <strong>a las</strong> tres y media.
            </li>
          </ul>

          {/* Common expressions */}
          <h3 className="text-lg font-semibold">11. Common Expressions</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>A primera hora</li>
            <li>A medianoche</li>
            <li>Sobre las…</li>
          </ul>

          {/* Mistakes */}
          <h3 className="text-lg font-semibold">12. Common Mistakes</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>❌ Es las dos → ✔ Son las dos</li>
            <li>❌ Son la una → ✔ Es la una</li>
            <li>12:00 → el mediodía</li>
            <li>00:00 → la medianoche</li>
          </ul>
        </CardContent>
      </Card>

      {/* ---------------- SECTION: PRESENT IRREGULAR VERBS ---------------- */}
      <Card>
        <CardContent className="p-4 sm:p-6 space-y-6">
          <h3 className="text-lg font-semibold">
            Present Tense — Irregular Verbs
          </h3>

          <p className="text-sm sm:text-base">
            Irregularities appear in the <strong>yo form</strong>, in
            <strong>stem-changing patterns</strong>, or in completely irregular
            verbs. Stem changes never apply to <strong>nosotros</strong>
            or <strong>vosotros</strong>.
          </p>

          {/* e → ie */}
          <h4 className="font-semibold mt-4">A) Stem-Changing Verbs</h4>
          <h5 className="font-medium">1) e → ie</h5>
          <ul className="list-disc list-inside space-y-1">
            <li>entender → entiendo</li>
            <li>pensar → pienso</li>
            <li>querer, preferir, comenzar, empezar</li>
          </ul>

          {/* o → ue */}
          <h5 className="font-medium mt-4">2) o → ue</h5>
          <ul className="list-disc list-inside space-y-1">
            <li>dormir → duermo</li>
            <li>volver → vuelvo</li>
            <li>poder, costar, encontrar, mover</li>
          </ul>

          {/* e → i */}
          <h5 className="font-medium mt-4">3) e → i</h5>
          <ul className="list-disc list-inside space-y-1">
            <li>pedir → pido</li>
            <li>elegir → elijo</li>
            <li>seguir, corregir, vestir(se)</li>
          </ul>

          {/* u → ue */}
          <h5 className="font-medium mt-4">4) u → ue</h5>
          <p>Only: jugar → juego</p>

          {/* Completely irregular */}
          <h4 className="font-semibold mt-6">B) Completely Irregular Verbs</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>ser → soy, eres, es, somos, sois, son</li>
            <li>ir → voy, vas, va, vamos, vais, van</li>
          </ul>

          {/* Irregular YO */}
          <h4 className="font-semibold mt-6">Irregular “yo” Forms</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>hacer → hago</li>
            <li>poner → pongo</li>
            <li>salir → salgo</li>
            <li>traer → traigo</li>
            <li>conocer → conozco</li>
            <li>ver → veo</li>
            <li>conducir → conduzco</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
