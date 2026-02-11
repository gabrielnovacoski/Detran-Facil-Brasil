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
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 overflow-hidden flex flex-col cursor-pointer active:scale-95"
      onClick={handleOpenDetran}
    >
      {/* Container da Bandeira - Ajustado para exibir a bandeira completa */}
      <div className="h-20 sm:h-24 bg-white flex items-center justify-center relative overflow-hidden p-2">
        {!imageError ? (
          <img 
            src={state.flagUrl} 
            alt={`Bandeira de ${state.name}`} 
            className="max-w-full max-h-full object-contain drop-shadow-sm"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center bg-slate-100 w-full h-full rounded-lg">
             <span className="text-xl font-black text-slate-300">{state.initials}</span>
          </div>
        )}
        
        {/* Sigla no canto superior */}
        <div className="absolute top-1 right-1 bg-slate-100 text-slate-500 text-[9px] font-bold px-1 rounded border border-slate-200">
          {state.initials}
        </div>
      </div>
      
      {/* Conteúdo Inferior Muito Compacto */}
      <div className="px-2 pb-2 flex flex-col flex-grow">
        <h3 className="text-[11px] sm:text-xs font-bold text-slate-800 truncate text-center mb-1">
          {state.name}
        </h3>
        
        {state.note && (
          <div className="mb-1.5 px-1 py-0.5 bg-amber-50 text-amber-600 text-[8px] font-bold rounded flex items-center justify-center gap-1 border border-amber-100 uppercase">
            <div className="w-1 h-1 rounded-full bg-amber-500"></div>
            {state.note}
          </div>
        )}

        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleOpenDetran();
          }}
          className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
        >
          <span>ACESSAR</span>
        </button>
      </div>
    </div>
  );
};

export default StateCard;