import { LifeEvent } from "@/data/events";

interface TimelineCardProps {
  event: LifeEvent;
  index: number;
}

const tagColors: Record<string, string> = {
  Elämä: "tag-elama",
  Työ: "tag-tyo",
  Opiskelu: "tag-opiskelu",
  Harrastukset: "tag-harrastukset",
};

const borderColors: Record<string, string> = {
  Elämä: "border-coral",
  Työ: "border-mint",
  Opiskelu: "border-sky",
  Harrastukset: "border-yellow",
};

export default function TimelineCard({ event, index }: TimelineCardProps) {
  const isEven = index % 2 === 0;
  const delayClass = `animate-delay-${(index % 5) * 100 + 100}`;

  return (
    <div
      className={`animate-fade-up ${delayClass} w-full md:w-5/12 ${
        isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      }`}
    >
      <div
        className={`timeline-card hover-wobble ${borderColors[event.tag]}`}
        style={{ borderColor: "transparent" }}
      >
        {/* Emoji Container */}
        <div className="emoji-container">
          <span className="text-5xl">{event.emoji}</span>
        </div>

        {/* Date Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-display font-semibold text-gray-400">
            {event.date}
          </span>
          <span className={`tag ${tagColors[event.tag]}`}>{event.tag}</span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-charcoal mb-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="font-body text-gray-600 leading-relaxed">
          {event.description}
        </p>

        {/* Year Badge */}
        <div className="mt-4 flex justify-end">
          <span className="text-xs font-display font-bold text-white bg-gradient-to-r from-coral to-sky px-3 py-1 rounded-full">
            {event.year}
          </span>
        </div>
      </div>
    </div>
  );
}
