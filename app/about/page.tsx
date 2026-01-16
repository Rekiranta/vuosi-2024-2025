import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-playful">
      <Header />

      {/* Decorative Blobs */}
      <div className="blob blob-coral" style={{ top: "15%", right: "-10%" }} />
      <div className="blob blob-mint" style={{ bottom: "30%", left: "-8%" }} />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="section-title animate-fade-up">
              👋 Tietoa tästä sivusta
            </h1>
          </div>

          {/* Main Content Card */}
          <div className="card animate-fade-up animate-delay-100">
            <div className="space-y-6 font-body text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="text-2xl mr-2">💡</span>
                Tämä sivu on tehty sinulle, rakas ystävä! Halusin jakaa kanssasi
                kaikki tärkeät hetket ja tapahtumat, jotka ovat muokanneet elämääni
                vuosina 2024 ja 2025.
              </p>

              <p>
                <span className="text-2xl mr-2">🏠</span>
                Vuosi 2024 alkoi isolla muutoksella kun muutin yhteen Micaelan kanssa.
                Se oli yksi elämäni parhaista päätöksistä!
              </p>

              <p>
                <span className="text-2xl mr-2">📚</span>
                Aloitin myös tietojenkäsittelyn opiskelut, mikä on avannut aivan uusia
                ovia ja mahdollisuuksia. Koodaaminen on osoittautunut todella kiinnostavaksi!
              </p>

              <p>
                <span className="text-2xl mr-2">🍽️</span>
                Ravintola-alan työt ovat jatkuneet ja olen aloittanut uudessa paikassa,
                Ravintola Solmussa. Tykkään todella paljon tiimistäni ja työympäristöstä.
              </p>

              <p>
                <span className="text-2xl mr-2">🎸</span>
                Yksi vuoden 2024 kohokohdista oli ehdottomasti Coldplayn konsertti
                Micaelan kanssa. Se oli ikimuistoinen kokemus!
              </p>

              <p>
                <span className="text-2xl mr-2">⛳🚴</span>
                Uusina harrastuksina olen innostunut golfista ja hankkinut sähköpyörän.
                Molemmat tuovat iloa ja liikuntaa arkeen!
              </p>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-center text-gray-500">
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
            <div className="card card-coral animate-fade-up animate-delay-300">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                Vuoden 2024 motto
              </h3>
              <p className="font-body text-gray-600">
                &quot;Rohkeasti kohti uutta!&quot;
              </p>
            </div>

            <div className="card card-mint animate-fade-up animate-delay-400">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                Vuoden 2025 tavoite
              </h3>
              <p className="font-body text-gray-600">
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
