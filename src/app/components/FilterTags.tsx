import { X } from "lucide-react";
import React from "react";

interface FilterTag {
  id: string;
  label: string;
}

interface FilterTagsProps {
  tags: FilterTag[];
  onRemoveTag: (id: string) => void;
}

export function FilterTags({ tags, onRemoveTag }: FilterTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="px-4 py-3 bg-[#faf9f7] border-b border-[#e8e6e1]">
      <div
        className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none" }}>
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onRemoveTag(tag.id)}
            className="flex items-center gap-2 px-4 h-8 bg-[#ede9e4] text-[#2a2420] rounded-full text-sm whitespace-nowrap hover:bg-[#e4dfd8] transition-colors">
            {/* <span>{tag.label}</span> */}
            <X className="w-3.5 h-3.5" />
          </button>
        ))}
      </div>
    </div>
  );
}
