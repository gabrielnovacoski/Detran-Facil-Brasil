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
    region: 'Nordeste',
    note: 'PRECISA LOGIN - GOV'
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
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'es',
    name: 'Espírito Santo',
    initials: 'ES',
    flagUrl: getFlagUrl('ES'),
    detranUrl: 'https://login.acessocidadao.es.gov.br/',
    region: 'Sudeste',
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'go',
    name: 'Goiás',
    initials: 'GO',
    flagUrl: getFlagUrl('GO'),
    detranUrl: 'https://www.go.gov.br/servicos/servico/consultar-veiculo--ipva-multas-e-crlv',
    region: 'Centro-Oeste',
    note: 'PRECISA LOGIN - GOV'
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
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'mg',
    name: 'Minas Gerais',
    initials: 'MG',
    flagUrl: getFlagUrl('MG'),
    detranUrl: 'https://transito.mg.gov.br/veiculos/situacao-do-veiculo/consulta-de-situacao-do-veiculo',
    region: 'Sudeste'
  },
  {
    id: 'pa',
    name: 'Pará',
    initials: 'PA',
    flagUrl: getFlagUrl('PA'),
    detranUrl: 'https://sistemas-renavam.detran.pa.gov.br/sistransito/detran-web/servicos/veiculos/indexRenavam.jsf',
    region: 'Norte'
  },
  {
    id: 'pb',
    name: 'Paraíba',
    initials: 'PB',
    flagUrl: getFlagUrl('PB'),
    detranUrl: 'https://detran.pb.gov.br/formularios/licenciamento',
    region: 'Nordeste'
  },
  {
    id: 'pr',
    name: 'Paraná',
    initials: 'PR',
    flagUrl: getFlagUrl('PR'),
    detranUrl: 'https://www.extratodebito.detran.pr.gov.br/detranextratos/geraExtrato.do?action=iniciarProcesso',
    region: 'Sul'
  },
  {
    id: 'pe',
    name: 'Pernambuco',
    initials: 'PE',
    flagUrl: getFlagUrl('PE'),
    detranUrl: 'https://online8.detran.pe.gov.br/DetranPessoal/PortalServicos/LoginGov?servico_uri=https://online5.detran.pe.gov.br/ServicosWeb/VeiculoMVC/Extrato/Extrato',
    region: 'Nordeste',
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'pi',
    name: 'Piauí',
    initials: 'PI',
    flagUrl: getFlagUrl('PI'),
    detranUrl: 'https://www.pi.getran.com.br/site/apps/veiculo/filtroplacarenavam-consultaveiculo.jsp',
    region: 'Nordeste'
  },
  {
    id: 'rj',
    name: 'Rio de Janeiro',
    initials: 'RJ',
    flagUrl: getFlagUrl('RJ'),
    detranUrl: 'https://www.detran.rj.gov.br/consultas/consultas-drv/cadastro-de-veiculo.html',
    region: 'Sudeste'
  },
  {
    id: 'rn',
    name: 'Rio Grande do Norte',
    initials: 'RN',
    flagUrl: getFlagUrl('RN'),
    detranUrl: 'https://portal.detran.rn.gov.br/login',
    region: 'Nordeste',
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'rs',
    name: 'Rio Grande do Sul',
    initials: 'RS',
    flagUrl: getFlagUrl('RS'),
    detranUrl: 'https://pcsdetran.rs.gov.br/login?redirectUrl=%2Fconsulta-veiculo',
    region: 'Sul',
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'ro',
    name: 'Rondônia',
    initials: 'RO',
    flagUrl: getFlagUrl('RO'),
    detranUrl: 'https://centralservicos.detran.ro.gov.br/consulta/veiculo',
    region: 'Norte'
  },
  {
    id: 'rr',
    name: 'Roraima',
    initials: 'RR',
    flagUrl: getFlagUrl('RR'),
    detranUrl: 'https://www.rr.getran.com.br/site/apps/veiculo/filtroplacarenavam-consultaveiculo.jsp',
    region: 'Norte'
  },
  {
    id: 'sc',
    name: 'Santa Catarina',
    initials: 'SC',
    flagUrl: getFlagUrl('SC'),
    detranUrl: 'https://servicos.detran.sc.gov.br/login',
    region: 'Sul',
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'sp',
    name: 'São Paulo',
    initials: 'SP',
    flagUrl: getFlagUrl('SP'),
    detranUrl: 'https://sso.acesso.gov.br/login?client_id=idp.sp.gov.br&authorization_id=19c4f5c9cba',
    region: 'Sudeste',
    note: 'PRECISA LOGIN - GOV'
  },
  {
    id: 'se',
    name: 'Sergipe',
    initials: 'SE',
    flagUrl: getFlagUrl('SE'),
    detranUrl: 'https://www.detran.se.gov.br/portal/?pg=cons_veiculo',
    region: 'Nordeste'
  },
  {
    id: 'to',
    name: 'Tocantins',
    initials: 'TO',
    flagUrl: getFlagUrl('TO'),
    detranUrl: 'https://www.to.gov.br/detran/veiculos',
    region: 'Norte'
  }
];