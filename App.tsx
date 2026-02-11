import React, { useState, useMemo } from 'react';
import { BRAZIL_STATES } from './constants';
import StateCard from './components/StateCard';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = useMemo(() => {
    return BRAZIL_STATES.filter(state => {
      const term = searchTerm.toLowerCase();
      return state.name.toLowerCase().includes(term) ||
        state.initials.toLowerCase().includes(term);
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Premium com Gradiente */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 sticky top-0 z-40 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl shadow-lg ring-2 ring-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-black text-white leading-none drop-shadow-md">DETRAN FÁCIL - Brasil</h1>
                <p className="text-[10px] text-blue-100 font-bold uppercase tracking-wider mt-1">Links Oficiais dos DETRANs</p>
              </div>
            </div>

            {/* Barra de Busca Premium */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Pesquisar por estado ou sigla..."
                className="block w-full pl-10 pr-3 py-2.5 bg-white/95 backdrop-blur-sm border-none rounded-xl focus:ring-2 focus:ring-white/50 text-sm transition-all outline-none shadow-lg placeholder-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Grid de Bandeiras - Design Premium */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 py-6">
        {filteredStates.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredStates.map(state => (
              <StateCard key={state.id} state={state} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg m-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-bold text-slate-600 mb-2">Nenhum estado encontrado</p>
            <p className="text-xs text-slate-400 mb-4">Tente buscar por outro termo</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase rounded-lg hover:shadow-lg transition-all"
            >
              Limpar busca
            </button>
          </div>
        )}
      </main>

      {/* Footer Premium */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs font-semibold mb-1">
            Portal Independente de Utilidade Pública
          </p>
          <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest">
            Facilitando o acesso aos serviços do DETRAN
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;