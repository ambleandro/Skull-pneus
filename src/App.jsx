import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <header className="p-4 flex justify-between items-center border-b">
        <img
          src={darkMode ? "/logo-skull-light.svg" : "/logo-skull-dark.svg"}
          alt="Skull Pneus"
          className="h-12"
        />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 border rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo à Skull Pneus</h1>
        <p>Loja premium de pneus para motocicletas com instalação agendada.</p>
      </main>
    </div>
  );
}

export default App;
