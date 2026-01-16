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

  const filteredEvents = events.filter((event) => {
    if (activeYear && event.year !== activeYear) return false;
    if (activeTag && event.tag !== activeTag) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-scrapbook">
      <Header />

      <main className="pt-28 pb-16 px-6 z-content relative">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="section-title-wrapper animate-fade-up">
              <h1 className="section-title inline-block">Aikajana</h1>
            </div>
            <p className="section-subtitle animate-fade-up animate-delay-100">
              Kaikki elämäni tärkeät hetket vuosilta 2024–2025
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
          <div className="text-center mb-10 animate-fade-up animate-delay-300">
            <span className="font-body text-[var(--color-ink-light)]">
              Näytetään{" "}
              <strong className="text-[var(--color-terracotta)]">{filteredEvents.length}</strong>{" "}
              tapahtumaa
            </span>
          </div>

          {/* Timeline */}
          <div className="relative timeline-container">
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
                      style={{ top: "2rem" }}
                    />
                    <TimelineCard event={event} index={index} />
                  </div>
                ))
              ) : (
                <div className="text-center py-16 animate-fade-up">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="font-display font-bold text-xl text-[var(--color-ink)] mb-2">
                    Ei tuloksia
                  </h3>
                  <p className="font-body text-[var(--color-ink-light)] mb-6">
                    Kokeile eri suodattimia nähdäksesi tapahtumia
                  </p>
                  <button
                    onClick={() => {
                      setActiveYear(null);
                      setActiveTag(null);
                    }}
                    className="btn-secondary"
                  >
                    Tyhjennä suodattimet
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section */}
          {filteredEvents.length > 0 && (
            <div className="text-center mt-20 animate-fade-up">
              <div className="scrapbook-card inline-block px-8 py-6">
                <p className="font-display text-lg text-[var(--color-ink)] italic">
                  Ja lisää on vielä tulossa...
                </p>
                <div className="flex justify-center gap-3 mt-4 text-2xl">
                  <span>🌟</span>
                  <span>💖</span>
                  <span>🎯</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
