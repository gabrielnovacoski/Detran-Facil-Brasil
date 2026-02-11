import React, { useState } from 'react';
import { BrazilState } from '../types';

interface StateCardProps {
  state: BrazilState;
}

const StateCard: React.FC<StateCardProps> = ({ state }) => {
  const [imageError, setImageError] = useState(false);

  const handleOpenDetran = () => {
    window.open(state.detranUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="group bg-white rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-2 active:scale-95"
      onClick={handleOpenDetran}
    >
      {/* Container da Bandeira com Design Premium */}
      <div className="h-28 sm:h-32 bg-gray-50 flex items-center justify-center relative overflow-hidden p-4 group-hover:bg-white transition-colors duration-500">
        {!imageError ? (
          <img
            src={state.flagUrl}
            alt={`Bandeira de ${state.name}`}
            className="max-w-[75%] max-h-[75%] object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)] group-hover:scale-115 group-hover:rotate-1 transition-all duration-700 ease-out"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 w-full h-full">
            <span className="text-3xl font-black text-slate-200 tracking-tighter">{state.initials}</span>
          </div>
        )}

        {/* Sigla Glassmorphism */}
        <div className="absolute top-3 right-3 bg-white/40 backdrop-blur-md text-slate-800 text-[9px] font-black px-2.5 py-1 rounded-full border border-white/50 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
          {state.initials}
        </div>

        {/* Efeito de Brilho Dinâmico */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Conteúdo Inferior Premium */}
      <div className="px-4 pb-4 pt-3 flex flex-col flex-grow">
        <h3 className="text-xs sm:text-sm font-bold text-slate-700 text-center mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {state.name}
        </h3>

        {state.note && (
          <div className="mb-3 px-3 py-1.5 bg-amber-50/50 text-amber-700 text-[9px] font-black rounded-full flex items-center justify-center gap-1.5 border border-amber-100/50 uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            {state.note}
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpenDetran();
          }}
          className="w-full mt-auto bg-slate-900 hover:bg-blue-600 text-white text-[10px] font-black py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/25"
        >
          <span className="tracking-widest">ACESSAR</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StateCard;