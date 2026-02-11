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
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header Compacto */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h1 className="text-base font-black text-slate-900 leading-none">DETRAN FÁCIL - Brasil</h1>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">LINKS DOS DETRANS DOS ESTADOS</p>
              </div>
            </div>

            {/* Barra de Busca Simplificada */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Pesquisar por estado ou sigla..."
                className="block w-full pl-8 pr-3 py-1.5 bg-slate-100 border-none rounded-lg focus:ring-1 focus:ring-blue-500 text-xs transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-2 flex items-center text-slate-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Grid de Bandeiras - Otimizado para 2 colunas no celular */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-2 py-3">
        {filteredStates.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
            {filteredStates.map(state => (
              <StateCard key={state.id} state={state} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 bg-white rounded-xl border border-slate-200 m-2">
            <p className="text-[11px] font-bold text-slate-400">Nenhum estado encontrado</p>
            <button 
              onClick={() => setSearchTerm('')} 
              className="mt-2 text-blue-600 text-[10px] font-bold uppercase"
            >
              Limpar busca
            </button>
          </div>
        )}
      </main>

      {/* Footer minimalista */}
      <footer className="bg-slate-900 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-[8px] font-bold uppercase tracking-widest">
            Portal Independente de Utilidade Pública
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;