import { LifeEvent } from "@/data/events";

interface TimelineCardProps {
  event: LifeEvent;
  index: number;
}

const tagStyles: Record<string, string> = {
  Elämä: "sticker-terracotta",
  Työ: "sticker-sage",
  Opiskelu: "sticker-blue",
  Harrastukset: "sticker-amber",
};

export default function TimelineCard({ event, index }: TimelineCardProps) {
  const isEven = index % 2 === 0;
  const delayClass = `animate-delay-${(index % 5) * 100 + 100}`;
  const rotation = isEven ? "-rotate-1" : "rotate-1";

  return (
    <div
      className={`animate-fade-up ${delayClass} w-full md:w-5/12 ${
        isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      }`}
    >
      <div className={`postcard ${rotation}`}>
        {/* Stamp */}
        <div className="postcard-stamp">
          {event.year}
        </div>

        {/* Dashed divider line */}
        <div className="postcard-divider hidden md:block" />

        {/* Content */}
        <div className="postcard-content">
          {/* Emoji */}
          <div className="postcard-emoji">{event.emoji}</div>

          {/* Date */}
          <p className="postcard-date">{event.date}</p>

          {/* Title */}
          <h3 className="postcard-title">{event.title}</h3>

          {/* Description */}
          <p className="postcard-description">{event.description}</p>

          {/* Tag */}
          <div className="mt-4">
            <span className={`sticker ${tagStyles[event.tag]}`}>
              {event.tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
