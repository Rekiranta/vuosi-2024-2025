"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { events } from "@/data/events";

export default function Home() {
  const previewEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen bg-scrapbook">
      <Header />

      {/* Hero Section */}
      <main className="pt-28 pb-16 px-6 z-content">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative tape elements */}
          <div className="relative inline-block mb-8">
            <div className="tape tape-pink -rotate-12" style={{ top: '-20px', left: '-60px' }} />
            <div className="tape tape-blue rotate-6" style={{ top: '-15px', right: '-70px' }} />
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up font-display text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-[var(--color-terracotta)]">Hei!</span>
            <span className="block text-[var(--color-ink)] mt-2">
              Tervetuloa<br />kuulumisilleni
            </span>
          </h1>

          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up animate-delay-100">
            <span className="h-px w-12 bg-[var(--color-amber)]"></span>
            <span className="text-2xl">✦</span>
            <span className="h-px w-12 bg-[var(--color-amber)]"></span>
          </div>

          {/* Subtitle */}
          <p className="animate-fade-up animate-delay-200 font-body text-lg md:text-xl text-[var(--color-ink-light)] mb-10 max-w-xl mx-auto leading-relaxed">
            Täältä löydät kaikki tärkeimmät hetket ja tapahtumat elämästäni vuosina{" "}
            <strong className="text-[var(--color-terracotta)]">2024</strong> ja{" "}
            <strong className="text-[var(--color-sage)]">2025</strong>.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up animate-delay-300">
            <Link href="/timeline" className="btn-primary text-lg">
              Katso aikajana
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Preview Cards - Polaroid Style */}
        <section className="max-w-5xl mx-auto mt-24">
          <div className="section-title-wrapper animate-fade-up">
            <h2 className="section-title inline-block">Viimeisimmät hetket</h2>
          </div>
          <p className="section-subtitle animate-fade-up animate-delay-100">
            Pieni kurkistus mitä kaikkea on tapahtunut
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {previewEvents.map((event, index) => {
              const rotations = ['-rotate-2', 'rotate-1', '-rotate-1'];
              return (
                <div
                  key={event.id}
                  className={`polaroid ${rotations[index]} animate-fade-up animate-delay-${(index + 2) * 100}`}
                >
                  <div className="polaroid-content">
                    {event.emoji}
                  </div>
                  <p className="polaroid-caption">{event.title}</p>
                </div>
              );
            })}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12 animate-fade-up animate-delay-500">
            <Link href="/timeline" className="btn-secondary">
              Näytä kaikki tapahtumat ({events.length})
            </Link>
          </div>
        </section>

        {/* Stats Section - Stamp Style */}
        <section className="max-w-4xl mx-auto mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="stamp-card animate-fade-up animate-delay-100">
              <div className="stamp-emoji">🏠</div>
              <div className="stamp-number">1</div>
              <div className="stamp-label">Yhteenmuutto</div>
            </div>
            <div className="stamp-card animate-fade-up animate-delay-200">
              <div className="stamp-emoji">💪</div>
              <div className="stamp-number">4</div>
              <div className="stamp-label">Harrastusta</div>
            </div>
            <div className="stamp-card animate-fade-up animate-delay-300">
              <div className="stamp-emoji">🧳</div>
              <div className="stamp-number">2</div>
              <div className="stamp-label">Reissua</div>
            </div>
            <div className="stamp-card animate-fade-up animate-delay-400">
              <div className="stamp-emoji">🎸</div>
              <div className="stamp-number">1</div>
              <div className="stamp-label">Konsertti</div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="max-w-2xl mx-auto mt-24 text-center animate-fade-up animate-delay-500">
          <div className="scrapbook-card">
            <p className="font-display text-xl md:text-2xl text-[var(--color-ink)] italic leading-relaxed">
              &quot;Elämä on täynnä pieniä ihmeitä, kun vain muistaa pysähtyä katsomaan.&quot;
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-[var(--color-amber)]">✦</span>
              <span className="font-body text-sm text-[var(--color-ink-light)]">2024-2025</span>
              <span className="text-[var(--color-amber)]">✦</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
