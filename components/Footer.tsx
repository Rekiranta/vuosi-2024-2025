export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[var(--color-paper)] py-12 mt-16 z-content relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative emojis */}
        <div className="flex justify-center gap-3 mb-6 text-2xl">
          <span className="hover:scale-110 transition-transform cursor-default">🏠</span>
          <span className="hover:scale-110 transition-transform cursor-default">💑</span>
          <span className="hover:scale-110 transition-transform cursor-default">📚</span>
          <span className="hover:scale-110 transition-transform cursor-default">🍽️</span>
          <span className="hover:scale-110 transition-transform cursor-default">🎸</span>
          <span className="hover:scale-110 transition-transform cursor-default">⛳</span>
          <span className="hover:scale-110 transition-transform cursor-default">🚴</span>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-16 bg-[var(--color-paper)]"></span>
          <span className="text-[var(--color-amber)]">✦</span>
          <span className="h-px w-16 bg-[var(--color-paper)]"></span>
        </div>

        <p className="font-body text-[var(--color-ink-light)]">
          Tehty rakkaudella {currentYear}
        </p>
        <p className="font-display text-sm text-[var(--color-ink-light)] mt-2 italic opacity-70">
          Vuodet 2024–2025 olivat täynnä seikkailuja!
        </p>
      </div>
    </footer>
  );
}
