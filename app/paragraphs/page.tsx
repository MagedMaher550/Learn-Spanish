import { Navigation } from "@/components/navigation";
import paragraphs from "@/data/paragraphs";
import { ParagraphCard } from "@/components/paragraph-card";
import ParagraphsContainer from "@/components/ui/paragraphs-container";

export default function ParagraphsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Reading Paragraphs
          </h2>
          <p className="text-muted-foreground text-lg">
            Interactive Spanish stories with audio, translations, and vocabulary
            support
          </p>
        </div>

        <ParagraphsContainer>
          {paragraphs.map((paragraph, index) => (
            <ParagraphCard
              paragraph={paragraph}
              key={`${index}#${paragraph.id}#${paragraph.title}#${paragraph.description}`}
            />
          ))}
        </ParagraphsContainer>
      </main>
    </div>
  );
}
