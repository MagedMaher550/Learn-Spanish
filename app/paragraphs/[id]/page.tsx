import { ReadingStory } from "@/components/reading-story";
import { notFound } from "next/navigation";
import stories from "@/data/stories";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StoryPage({ params }: PageProps) {
  const { id } = await params;
  const storyId = Number.parseInt(id);
  const story = stories[storyId as keyof typeof stories];

  if (!story) {
    notFound();
  }

  return (
    <ReadingStory
      story={story.content}
      words={story.words}
      grammar={story.grammar}
    />
  );
}
