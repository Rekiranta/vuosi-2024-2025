"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimelineCard from "@/components/TimelineCard";
import FilterButtons from "@/components/FilterButtons";
import { events, Tag } from "@/data/events";

export default function Timeline() {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  // Filter events based on selected year and tag
  const filteredEvents = events.filter((event) => {
    if (activeYear && event.year !== activeYear) return false;
    if (activeTag && event.tag !== activeTag) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-playful">
      <Header />

      {/* Decorative Blobs */}
      <div className="blob blob-coral" style={{ top: "20%", left: "-8%" }} />
      <div className="blob blob-mint" style={{ top: "50%", right: "-5%" }} />
      <div className="blob blob-yellow" style={{ bottom: "10%", left: "5%" }} />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="section-title animate-fade-up">
              📅 Aikajana
            </h1>
            <p className="section-subtitle animate-fade-up animate-delay-100">
              Kaikki elämäni tärkeät hetket vuosilta 2024-2025
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="animate-fade-up animate-delay-200">
            <FilterButtons
              activeYear={activeYear}
              activeTag={activeTag}
              onYearChange={setActiveYear}
              onTagChange={setActiveTag}
            />
          </div>

          {/* Results Count */}
          <div className="text-center mb-8 animate-fade-up animate-delay-300">
            <span className="font-body text-gray-500">
              Näytetään{" "}
              <span className="font-bold text-coral">{filteredEvents.length}</span>{" "}
              tapahtumaa
            </span>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line (desktop only) */}
            <div className="hidden md:block timeline-line" />

            {/* Timeline Cards */}
            <div className="space-y-8 md:space-y-12">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <div key={event.id} className="relative">
                    {/* Timeline Dot (desktop only) */}
                    <div
                      className="hidden md:block timeline-dot"
                      style={{
                        top: "2rem",
                        background:
                          event.tag === "Elämä"
                            ? "var(--color-coral)"
                            : event.tag === "Työ"
                            ? "var(--color-mint)"
                            : event.tag === "Opiskelu"
                            ? "var(--color-sky)"
                            : "var(--color-yellow)",
                      }}
                    />
                    <TimelineCard event={event} index={index} />
                  </div>
                ))
              ) : (
                <div className="text-center py-16 animate-fade-up">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                    Ei tuloksia
                  </h3>
                  <p className="font-body text-gray-500">
                    Kokeile eri suodattimia nähdäksesi tapahtumia
                  </p>
                  <button
                    onClick={() => {
                      setActiveYear(null);
                      setActiveTag(null);
                    }}
                    className="btn-secondary mt-4"
                  >
                    Tyhjennä suodattimet
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          {filteredEvents.length > 0 && (
            <div className="text-center mt-16 animate-fade-up">
              <p className="font-body text-gray-500 mb-4">
                Ja lisää on vielä tulossa! 🚀
              </p>
              <div className="flex justify-center gap-4 text-4xl">
                <span className="float">🌟</span>
                <span className="float" style={{ animationDelay: "0.3s" }}>💖</span>
                <span className="float" style={{ animationDelay: "0.6s" }}>🎯</span>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
