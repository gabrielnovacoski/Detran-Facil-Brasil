import { BrazilState } from './types';

// Função auxiliar para gerar URLs das bandeiras dos estados brasileiros (SVG/PNG)
// Usando o oficial IBGE Atlas Escolar para estabilidade e fidelidade dos estados
const getFlagUrl = (initials: string) => `https://atlasescolar.ibge.gov.br/images/bandeiras/ufs/${initials.toLowerCase()}.png`;

export const BRAZIL_STATES: BrazilState[] = [
  {
    id: 'ac',
    name: 'Acre',
    initials: 'AC',
    flagUrl: getFlagUrl('AC'),
    detranUrl: 'https://www.ac.getran.com.br/site/apps/veiculo/consulta/filtro-consulta-veiculo.jsp',
    region: 'Norte'
  },
  {
    id: 'al',
    name: 'Alagoas',
    initials: 'AL',
    flagUrl: getFlagUrl('AL'),
    detranUrl: 'https://www.detran.al.gov.br/veiculos/consulta-veiculo/menu_lateral',
    region: 'Nordeste'
  },
  {
    id: 'ap',
    name: 'Amapá',
    initials: 'AP',
    flagUrl: getFlagUrl('AP'),
    detranUrl: 'https://www.ap.getran.com.br/site/apps/veiculo/consulta/filtro-consulta-veiculo.jsp',
    region: 'Norte'
  },
  {
    id: 'am',
    name: 'Amazonas',
    initials: 'AM',
    flagUrl: getFlagUrl('AM'),
    detranUrl: 'https://digital.detran.am.gov.br/#focoMenu',
    region: 'Norte'
  },
  {
    id: 'ba',
    name: 'Bahia',
    initials: 'BA',
    flagUrl: getFlagUrl('BA'),
    detranUrl: 'https://servicos.detran.ba.gov.br/tiposervicos#veiculos',
    region: 'Nordeste'
  },
  {
    id: 'ce',
    name: 'Ceará',
    initials: 'CE',
    flagUrl: getFlagUrl('CE'),
    detranUrl: 'https://sistemas.detran.ce.gov.br/central',
    region: 'Nordeste'
  },
  {
    id: 'df',
    name: 'Distrito Federal',
    initials: 'DF',
    flagUrl: getFlagUrl('DF'),
    detranUrl: 'https://portal.detran.df.gov.br/#/home',
    region: 'Centro-Oeste',
    note: 'LOGIN'
  },
  {
    id: 'es',
    name: 'Espírito Santo',
    initials: 'ES',
    flagUrl: getFlagUrl('ES'),
    detranUrl: 'https://login.acessocidadao.es.gov.br/',
    region: 'Sudeste',
    note: 'LOGIN'
  },
  {
    id: 'go',
    name: 'Goiás',
    initials: 'GO',
    flagUrl: getFlagUrl('GO'),
    detranUrl: 'https://www.go.gov.br/servicos/servico/consultar-veiculo--ipva-multas-e-crlv',
    region: 'Centro-Oeste',
    note: 'LOGIN'
  },
  {
    id: 'ma',
    name: 'Maranhão',
    initials: 'MA',
    flagUrl: getFlagUrl('MA'),
    detranUrl: 'https://portal.detrannet.detran.ma.gov.br/Veiculo/Veiculos.cshtml',
    region: 'Nordeste'
  },
  {
    id: 'mt',
    name: 'Mato Grosso',
    initials: 'MT',
    flagUrl: getFlagUrl('MT'),
    detranUrl: 'https://www.detran.mt.gov.br/consulte-seu-veiculo',
    region: 'Centro-Oeste'
  },
  {
    id: 'ms',
    name: 'Mato Grosso do Sul',
    initials: 'MS',
    flagUrl: getFlagUrl('MS'),
    detranUrl: 'https://www.meudetran.ms.gov.br/login',
    region: 'Centro-Oeste',
    note: 'LOGIN'
  },
  {
    id: 'mg',
    name: 'Minas Gerais',
    initials: 'MG',
    flagUrl: getFlagUrl('MG'),
    detranUrl: 'https://www.detran.mg.gov.br/veiculos',
    region: 'Sudeste'
  },
  {
    id: 'pa',
    name: 'Pará',
    initials: 'PA',
    flagUrl: getFlagUrl('PA'),
    detranUrl: 'https://www.detran.pa.gov.br/veiculos',
    region: 'Norte'
  },
  {
    id: 'pb',
    name: 'Paraíba',
    initials: 'PB',
    flagUrl: getFlagUrl('PB'),
    detranUrl: 'https://www.detran.pb.gov.br/veiculos',
    region: 'Nordeste'
  },
  {
    id: 'pr',
    name: 'Paraná',
    initials: 'PR',
    flagUrl: getFlagUrl('PR'),
    detranUrl: 'https://www.detran.pr.gov.br/veiculos',
    region: 'Sul'
  },
  {
    id: 'pe',
    name: 'Pernambuco',
    initials: 'PE',
    flagUrl: getFlagUrl('PE'),
    detranUrl: 'https://www.detran.pe.gov.br/veiculos',
    region: 'Nordeste'
  },
  {
    id: 'pi',
    name: 'Piauí',
    initials: 'PI',
    flagUrl: getFlagUrl('PI'),
    detranUrl: 'https://www.detran.pi.gov.br/veiculos',
    region: 'Nordeste'
  },
  {
    id: 'rj',
    name: 'Rio de Janeiro',
    initials: 'RJ',
    flagUrl: getFlagUrl('RJ'),
    detranUrl: 'https://www.detran.rj.gov.br/_documento.asp?cod=1',
    region: 'Sudeste'
  },
  {
    id: 'rn',
    name: 'Rio Grande do Norte',
    initials: 'RN',
    flagUrl: getFlagUrl('RN'),
    detranUrl: 'https://www.detran.rn.gov.br/veiculos',
    region: 'Nordeste'
  },
  {
    id: 'rs',
    name: 'Rio Grande do Sul',
    initials: 'RS',
    flagUrl: getFlagUrl('RS'),
    detranUrl: 'https://www.detrans.rs.gov.br/veiculos',
    region: 'Sul'
  },
  {
    id: 'ro',
    name: 'Rondônia',
    initials: 'RO',
    flagUrl: getFlagUrl('RO'),
    detranUrl: 'https://www.detran.ro.gov.br/veiculos',
    region: 'Norte'
  },
  {
    id: 'rr',
    name: 'Roraima',
    initials: 'RR',
    flagUrl: getFlagUrl('RR'),
    detranUrl: 'https://www.detran.rr.gov.br/veiculos',
    region: 'Norte'
  },
  {
    id: 'sc',
    name: 'Santa Catarina',
    initials: 'SC',
    flagUrl: getFlagUrl('SC'),
    detranUrl: 'https://www.detran.sc.gov.br/veiculos',
    region: 'Sul'
  },
  {
    id: 'sp',
    name: 'São Paulo',
    initials: 'SP',
    flagUrl: getFlagUrl('SP'),
    detranUrl: 'https://www.detran.sp.gov.br/veiculos',
    region: 'Sudeste'
  },
  {
    id: 'se',
    name: 'Sergipe',
    initials: 'SE',
    flagUrl: getFlagUrl('SE'),
    detranUrl: 'https://www.detran.se.gov.br/veiculos',
    region: 'Nordeste'
  },
  {
    id: 'to',
    name: 'Tocantins',
    initials: 'TO',
    flagUrl: getFlagUrl('TO'),
    detranUrl: 'https://www.detran.to.gov.br/veiculos',
    region: 'Norte'
  }
];