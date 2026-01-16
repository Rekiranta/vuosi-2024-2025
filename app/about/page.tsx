import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-scrapbook">
      <Header />

      <main className="pt-28 pb-16 px-6 z-content relative">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="section-title-wrapper animate-fade-up">
              <h1 className="section-title inline-block">Tietoa tästä sivusta</h1>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="scrapbook-card animate-fade-up animate-delay-100">
            <div className="space-y-6 font-body text-[var(--color-ink-light)] leading-relaxed">
              <p className="text-lg">
                <span className="text-2xl mr-3">💡</span>
                Tämä sivu on tehty sinulle, rakas ystävä! Halusin jakaa kanssasi
                kaikki tärkeät hetket ja tapahtumat, jotka ovat muokanneet elämääni
                vuosina 2024 ja 2025.
              </p>

              <p>
                <span className="text-2xl mr-3">🏠</span>
                Vuosi 2024 alkoi isolla muutoksella kun muutin yhteen Micaelan kanssa.
                Se oli yksi elämäni parhaista päätöksistä!
              </p>

              <p>
                <span className="text-2xl mr-3">📚</span>
                Aloitin myös tietojenkäsittelyn opiskelut, mikä on avannut aivan uusia
                ovia ja mahdollisuuksia. Koodaaminen on osoittautunut todella kiinnostavaksi!
              </p>

              <p>
                <span className="text-2xl mr-3">🍽️</span>
                Ravintola-alan työt ovat jatkuneet ja olen aloittanut uudessa paikassa,
                Ravintola Solmussa. Tykkään todella paljon tiimistäni ja työympäristöstä.
              </p>

              <p>
                <span className="text-2xl mr-3">🎸</span>
                Yksi vuoden 2024 kohokohdista oli ehdottomasti Coldplayn konsertti
                Micaelan kanssa. Se oli ikimuistoinen kokemus!
              </p>

              <p>
                <span className="text-2xl mr-3">⛳🚴</span>
                Uusina harrastuksina olen innostunut golfista ja hankkinut sähköpyörän.
                Molemmat tuovat iloa ja liikuntaa arkeen!
              </p>

              <div className="border-t-2 border-[var(--color-paper)] pt-6 mt-8 text-center">
                <p className="text-[var(--color-ink)] font-display italic">
                  Kiitos kun olet osa elämääni! 💖
                </p>
              </div>
            </div>
          </div>

          {/* Back to Timeline */}
          <div className="text-center mt-10 animate-fade-up animate-delay-200">
            <Link href="/timeline" className="btn-primary">
              Katso aikajana
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Fun Fact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="journal-card terracotta animate-fade-up animate-delay-300">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="journal-title">Vuoden 2024 motto</h3>
              <p className="journal-description">
                &quot;Rohkeasti kohti uutta!&quot;
              </p>
            </div>

            <div className="journal-card sage animate-fade-up animate-delay-400">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="journal-title">Vuoden 2025 tavoite</h3>
              <p className="journal-description">
                Jatkaa oppimista ja nauttia elämästä!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
