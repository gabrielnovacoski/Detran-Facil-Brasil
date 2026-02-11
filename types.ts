
export interface BrazilState {
  id: string;
  name: string;
  initials: string;
  flagUrl: string;
  detranUrl: string;
  region: 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul';
  note?: string;
}