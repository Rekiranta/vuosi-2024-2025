"use client";

import { Tag, tags, years } from "@/data/events";

interface FilterButtonsProps {
  activeYear: number | null;
  activeTag: Tag | null;
  onYearChange: (year: number | null) => void;
  onTagChange: (tag: Tag | null) => void;
}

export default function FilterButtons({
  activeYear,
  activeTag,
  onYearChange,
  onTagChange,
}: FilterButtonsProps) {
  return (
    <div className="mb-12 space-y-4">
      {/* Year Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => onYearChange(null)}
          className={`filter-btn ${activeYear === null && activeTag === null ? "active" : ""}`}
        >
          Kaikki
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(activeYear === year ? null : year)}
            className={`filter-btn ${activeYear === year ? "active" : ""}`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(activeTag === tag ? null : tag)}
            className={`filter-btn text-sm ${activeTag === tag ? "active" : ""}`}
          >
            {tag === "Elämä" && "💑 "}
            {tag === "Työ" && "💼 "}
            {tag === "Opiskelu" && "📚 "}
            {tag === "Harrastukset" && "⛳ "}
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
