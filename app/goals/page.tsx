import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoalCard, { Goal } from "@/components/GoalCard";

const goals: Goal[] = [
  {
    id: 1,
    title: "IT-alan työpaikka",
    description: "Valmistua opinnoista ja löytää unelmatyö IT-alalta. Koodaus, DevOps tai data – kaikki kiinnostaa!",
    emoji: "💼💻",
    status: "in_progress",
    color: "coral",
  },
  {
    id: 2,
    title: "Kuntoilu kuntoon",
    description: "Jatkaa säännöllistä treeniä salilla ja juoksemista. Tavoitteena rakentaa voimaa ja kestävyyttä.",
    emoji: "💪🏋️",
    status: "in_progress",
    color: "mint",
  },
  {
    id: 3,
    title: "Henkilökohtainen kasvu",
    description: "Oppia uusia taitoja, kehittyä ihmisenä ja nauttia elämästä täysillä.",
    emoji: "🌱📖",
    status: "in_progress",
    color: "sky",
  },
  {
    id: 4,
    title: "Matkustelu",
    description: "Kokea uusia paikkoja ja seikkailuja yhdessä Micaelan kanssa. Ehkä Eurooppaan?",
    emoji: "✈️🌍",
    status: "not_started",
    color: "yellow",
  },
];

export default function Goals() {
  const inProgressCount = goals.filter((g) => g.status === "in_progress").length;
  const completedCount = goals.filter((g) => g.status === "completed").length;

  return (
    <div className="min-h-screen bg-playful">
      <Header />

      {/* Decorative Blobs */}
      <div className="blob blob-coral" style={{ top: "15%", left: "-10%" }} />
      <div className="blob blob-mint" style={{ top: "60%", right: "-8%" }} />
      <div className="blob blob-yellow" style={{ bottom: "10%", left: "10%" }} />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="section-title animate-fade-up">
              🎯 Tavoitteet 2025
            </h1>
            <p className="section-subtitle animate-fade-up animate-delay-100">
              Unelmat ja päämäärät, joita kohti kuljen
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-up animate-delay-200">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl">🔥</span>
              <span className="font-display font-bold text-charcoal">{inProgressCount}</span>
              <span className="font-body text-gray-500 text-sm">käynnissä</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl">✅</span>
              <span className="font-display font-bold text-charcoal">{completedCount}</span>
              <span className="font-body text-gray-500 text-sm">valmis</span>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <GoalCard key={goal.id} goal={goal} index={index} />
            ))}
          </div>

          {/* Motivational Quote */}
          <div className="mt-16 text-center animate-fade-up animate-delay-500">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl mb-4">💫</div>
              <blockquote className="font-display text-xl text-charcoal italic mb-4">
                &quot;Pienet askeleet vievät kohti suuria unelmia.&quot;
              </blockquote>
              <p className="font-body text-gray-500">
                Jokainen päivä on mahdollisuus päästä lähemmäs tavoitteita!
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-up animate-delay-600">
            <Link href="/timeline" className="btn-primary">
              Katso mitä olen jo saavuttanut
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
