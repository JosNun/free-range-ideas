import type { CollectionEntry } from "astro:content";
import { formatDate } from "../utils";

export function IdeaCard({ idea }: { idea: CollectionEntry<"ideas">["data"] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border">
      <div className="flex gap-2 justify-between">
        <h3 className="text-lg font-bold">{idea.title}</h3>
        <span className="text-sm text-gray-500">
          {formatDate(idea.addedDate)}
        </span>
      </div>
      <p className="text-sm text-gray-500">{idea.description}</p>
    </div>
  );
}
