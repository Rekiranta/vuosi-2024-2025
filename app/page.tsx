"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { events } from "@/data/events";

export default function Home() {
  // Get the 3 most recent events for preview
  const previewEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen bg-playful">
      <Header />

      {/* Decorative Blobs */}
      <div className="blob blob-coral" style={{ top: "10%", right: "-5%" }} />
      <div className="blob blob-mint" style={{ top: "40%", left: "-10%" }} />
      <div className="blob blob-yellow" style={{ bottom: "20%", right: "10%" }} />

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Emoji Header */}
          <div className="flex justify-center gap-4 mb-8 text-5xl">
            <span className="animate-bounce-in animate-delay-100 float">✨</span>
            <span className="animate-bounce-in animate-delay-200 float" style={{ animationDelay: "0.5s" }}>🎉</span>
            <span className="animate-bounce-in animate-delay-300 float" style={{ animationDelay: "1s" }}>💫</span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up font-display text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-coral via-sky to-mint bg-clip-text text-transparent">
              Hei!
            </span>
            <br />
            <span className="text-charcoal">Tervetuloa kuulumisilleni</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up animate-delay-200 font-body text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Täältä löydät kaikki tärkeimmät hetket ja tapahtumat elämästäni vuosina{" "}
            <span className="font-bold text-coral">2024</span> ja{" "}
            <span className="font-bold text-sky">2025</span>.
            Yhteenmuutto, opiskelu, työ, ja paljon muuta!
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up animate-delay-300">
            <Link href="/timeline" className="btn-primary text-lg">
              Katso aikajana
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Preview Cards Section */}
        <section className="max-w-6xl mx-auto mt-24">
          <h2 className="section-title animate-fade-up">Viimeisimmät tapahtumat</h2>
          <p className="section-subtitle animate-fade-up animate-delay-100">
            Pieni kurkistus mitä kaikkea on tapahtunut
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {previewEvents.map((event, index) => (
              <div
                key={event.id}
                className={`card animate-fade-up animate-delay-${(index + 2) * 100} hover-wobble`}
              >
                {/* Emoji */}
                <div className="text-4xl mb-4">{event.emoji}</div>

                {/* Date */}
                <p className="text-sm font-display font-semibold text-gray-400 mb-2">
                  {event.date}
                </p>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                  {event.title}
                </h3>

                {/* Short Description */}
                <p className="font-body text-gray-600 text-sm line-clamp-2">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10 animate-fade-up animate-delay-500">
            <Link href="/timeline" className="btn-secondary">
              Näytä kaikki tapahtumat ({events.length})
            </Link>
          </div>
        </section>

        {/* Fun Stats Section */}
        <section className="max-w-4xl mx-auto mt-24 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card card-coral animate-fade-up animate-delay-100">
              <div className="text-3xl mb-2">🏠</div>
              <div className="font-display font-bold text-2xl text-charcoal">1</div>
              <div className="font-body text-sm text-gray-500">Yhteenmuutto</div>
            </div>
            <div className="card card-sky animate-fade-up animate-delay-200">
              <div className="text-3xl mb-2">💪</div>
              <div className="font-display font-bold text-2xl text-charcoal">4</div>
              <div className="font-body text-sm text-gray-500">Uutta harrastusta</div>
            </div>
            <div className="card card-mint animate-fade-up animate-delay-300">
              <div className="text-3xl mb-2">🧳</div>
              <div className="font-display font-bold text-2xl text-charcoal">2</div>
              <div className="font-body text-sm text-gray-500">Reissua</div>
            </div>
            <div className="card card-yellow animate-fade-up animate-delay-400">
              <div className="text-3xl mb-2">🎸</div>
              <div className="font-display font-bold text-2xl text-charcoal">1</div>
              <div className="font-body text-sm text-gray-500">Unelmakonsertti</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
