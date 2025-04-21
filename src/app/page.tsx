export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Freelancy
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Gérer vos clients, devis et factures. Simple. Rapide. Efficace.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Commencer
          </a>
          <a
            href="#"
            className="text-black px-6 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-100 transition"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </main>
  );
}
