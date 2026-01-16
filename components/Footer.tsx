export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-4 mb-4 text-3xl">
          <span className="hover-wobble cursor-default">🏠</span>
          <span className="hover-wobble cursor-default">💑</span>
          <span className="hover-wobble cursor-default">📚</span>
          <span className="hover-wobble cursor-default">🍽️</span>
          <span className="hover-wobble cursor-default">🎸</span>
          <span className="hover-wobble cursor-default">⛳</span>
          <span className="hover-wobble cursor-default">🚴</span>
        </div>
        <p className="text-gray-500 font-body">
          Tehty rakkaudella {currentYear} 💖
        </p>
        <p className="text-gray-400 text-sm mt-2 font-body">
          Vuodet 2024-2025 olivat täynnä seikkailuja!
        </p>
      </div>
    </footer>
  );
}
