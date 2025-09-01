"use client";

import { useLocalization } from "@/contexts/localization-context";
import { Navigation } from "@/components/navigation";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Vocabulary } from "@/types/lesson";
import { VocabularyCard } from "@/components/vocabulary-card";
import { weightedSearch } from "@/utils/utils";

export default function Page() {
  const { t } = useLocalization();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Vocabulary[]>([]);

  // debounce input for smoother UX
  useEffect(() => {
    if (searchTerm.trim()) {
      setSearchResults(weightedSearch(searchTerm));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <div className="px-6 md:px-12 lg:px-16 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          {t("vocabulary")}
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          {t("Search and explore all vocabulary words from your lessons")}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-4xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder={t("Search in Spanish or Arabic...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full text-lg"
          />
        </div>
      </div>

      {/* Results Grid */}
      <div className="px-6 md:px-12 lg:px-16 pb-12">
        {searchResults.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((vocab, index) => (
              <VocabularyCard key={index} vocabulary={vocab} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center text-lg mt-12">
            {searchTerm.trim()
              ? t("No matching words found.")
              : t("Start typing to search your vocabulary.")}
          </p>
        )}
      </div>
    </div>
  );
}
