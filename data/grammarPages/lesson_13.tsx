"use client";

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
import { Check } from "lucide-react";

export function lesson_13_grammar(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState(false);

  const serExamples = [
    {
      id: 1,
      sentence: "Yo soy alto y simpático.",
      meaning: "I am tall and friendly.",
    },
    { id: 2, sentence: "Ella es estudiante.", meaning: "She is a student." },
    {
      id: 3,
      sentence: "Nosotros somos egipcios.",
      meaning: "We are Egyptian.",
    },
  ];

  const estarExamples = [
    { id: 4, sentence: "Estoy cansado hoy.", meaning: "I am tired today." },
    { id: 5, sentence: "Ella está contenta.", meaning: "She is happy." },
    {
      id: 6,
      sentence: "Mis padres están en casa.",
      meaning: "My parents are at home.",
    },
  ];

  const tenerExamples = [
    { id: 7, sentence: "Tengo el pelo largo.", meaning: "I have long hair." },
    {
      id: 8,
      sentence: "Ella tiene los ojos verdes.",
      meaning: "She has green eyes.",
    },
    {
      id: 9,
      sentence: "Mi hermano tiene barba.",
      meaning: "My brother has a beard.",
    },
  ];

  const llevarExamples = [
    { id: 10, sentence: "Llevo gafas.", meaning: "I wear glasses." },
    {
      id: 11,
      sentence: "Ella lleva un vestido rojo.",
      meaning: "She is wearing a red dress.",
    },
    {
      id: 12,
      sentence: "Mi padre lleva bigote.",
      meaning: "My father has a mustache.",
    },
  ];

  const fillBlanks = [
    {
      id: 13,
      sentence: "Yo _____ (ser) de Egipto.",
      answer: "Yo soy de Egipto.",
    },
    {
      id: 14,
      sentence: "Ella _____ (estar) enferma hoy.",
      answer: "Ella está enferma hoy.",
    },
    {
      id: 15,
      sentence: "Nosotros _____ (tener) los ojos marrones.",
      answer: "Nosotros tenemos los ojos marrones.",
    },
    {
      id: 16,
      sentence: "Mi hermana _____ (llevar) el pelo corto.",
      answer: "Mi hermana lleva el pelo corto.",
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
              Lesson 13 — Grammar
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Describing yourself and others using <em>ser</em>, <em>estar</em>,{" "}
              <em>tener</em>, and <em>llevar</em>.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-5">
          {/* SER */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                1. Using <em>ser</em> — Permanent traits
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Use <strong>ser</strong> to describe identity, nationality,
                profession, and permanent physical or personality traits.
              </p>

              <div className="mt-3 border rounded p-3 bg-muted/5 text-sm sm:text-base">
                <strong>Forms:</strong> soy, eres, es, somos, sois, son
              </div>

              <ul className="mt-3 list-disc list-inside text-sm sm:text-base space-y-1">
                {serExamples.map((ex) => (
                  <li key={ex.id}>
                    <em>{ex.sentence}</em> — {ex.meaning}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* ESTAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                2. Using <em>estar</em> — Temporary states and location
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Use <strong>estar</strong> for emotions, health, and temporary
                situations or locations.
              </p>

              <div className="mt-3 border rounded p-3 bg-muted/5 text-sm sm:text-base">
                <strong>Forms:</strong> estoy, estás, está, estamos, estáis,
                están
              </div>

              <ul className="mt-3 list-disc list-inside text-sm sm:text-base space-y-1">
                {estarExamples.map((ex) => (
                  <li key={ex.id}>
                    <em>{ex.sentence}</em> — {ex.meaning}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* TENER */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                3. Using <em>tener</em> — Physical features and age
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Use <strong>tener</strong> to describe features or things you
                possess: hair, eyes, age, or other attributes.
              </p>

              <div className="mt-3 border rounded p-3 bg-muted/5 text-sm sm:text-base">
                <strong>Forms:</strong> tengo, tienes, tiene, tenemos, tenéis,
                tienen
              </div>

              <ul className="mt-3 list-disc list-inside text-sm sm:text-base space-y-1">
                {tenerExamples.map((ex) => (
                  <li key={ex.id}>
                    <em>{ex.sentence}</em> — {ex.meaning}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* LLEVAR */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">
                4. Using <em>llevar</em> — What you wear or carry
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Use <strong>llevar</strong> for clothing, accessories, or parts
                of appearance that can change.
              </p>

              <div className="mt-3 border rounded p-3 bg-muted/5 text-sm sm:text-base">
                <strong>Forms:</strong> llevo, llevas, lleva, llevamos, lleváis,
                llevan
              </div>

              <ul className="mt-3 list-disc list-inside text-sm sm:text-base space-y-1">
                {llevarExamples.map((ex) => (
                  <li key={ex.id}>
                    <em>{ex.sentence}</em> — {ex.meaning}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* PRACTICE SECTION */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">
                  Practice — Fill the blanks
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

              <ol className="list-decimal list-inside mt-3 text-sm sm:text-base space-y-2">
                {fillBlanks.map((item) => (
                  <li key={item.id}>
                    {item.sentence}
                    {showAnswers && (
                      <div className="text-muted-foreground">
                        Answer: <strong>{item.answer}</strong>
                      </div>
                    )}
                  </li>
                ))}
              </ol>

              <div className="mt-4">
                <div className="font-medium">Mini production task</div>
                <ul className="list-disc list-inside text-sm sm:text-base mt-2 space-y-1">
                  <li>
                    Write 3 sentences using <em>ser</em> to describe who you
                    are.
                  </li>
                  <li>
                    Write 3 sentences using <em>estar</em> to describe how you
                    feel.
                  </li>
                  <li>
                    Write 2 sentences using <em>tener</em> for your physical
                    traits.
                  </li>
                  <li>
                    Write 2 sentences using <em>llevar</em> to describe what you
                    are wearing.
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
              Quick reference
            </h4>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
              <li>
                <strong>ser</strong> → identity, nationality, personality.
              </li>
              <li>
                <strong>estar</strong> → emotions, location, temporary state.
              </li>
              <li>
                <strong>tener</strong> → features, possessions, age.
              </li>
              <li>
                <strong>llevar</strong> → clothing, accessories, physical
                details.
              </li>
              <li>Adjectives must agree in gender and number.</li>
            </ul>
          </Card>

          <Card className="p-4">
            <div className="font-medium mb-2">Examples at a glance</div>
            <div className="text-sm space-y-2">
              <div>Soy amable y trabajador. → I am kind and hardworking.</div>
              <div>Estoy feliz hoy. → I am happy today.</div>
              <div>Tengo los ojos azules. → I have blue eyes.</div>
              <div>Llevo una chaqueta negra. → I’m wearing a black jacket.</div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default lesson_13_grammar;
