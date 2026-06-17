import heroImg from "@/assets/hero-marisqueiras.jpg";
import ostrasImg from "@/assets/product-ostras.jpg";
import marisqueiraImg from "@/assets/marisqueira-1.jpg";

export { heroImg, ostrasImg, marisqueiraImg };

export type Marisqueira = {
  id: string;
  nome: string;
  foto: string;
  localizacao: string;
  colonia?: string;
  bio: string;
  produtosIds: string[];
  prioridade: "baixa" | "media" | "alta";
};

export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  unidade: string;
  estoque: number;
  foto: string;
  marisqueiraId: string;
};

export const marisqueiras: Marisqueira[] = [
  {
    id: "dona-jurema",
    nome: "Dona Jurema",
    foto: marisqueiraImg,
    localizacao: "Igarassu, PE",
    colonia: "Colônia Z-21",
    bio: "Marisco há 28 anos no mangue do Recôncavo. Quem prova, volta.",
    produtosIds: ["p1", "p2"],
    prioridade: "alta",
  },
  {
    id: "tia-celia",
    nome: "Tia Célia",
    foto: marisqueiraImg,
    localizacao: "Saubara, BA",
    colonia: "Colônia Z-5",
    bio: "Sururu fresquinho colhido toda manhã na maré baixa.",
    produtosIds: ["p3"],
    prioridade: "media",
  },
  {
    id: "ana-do-mangue",
    nome: "Ana do Mangue",
    foto: marisqueiraImg,
    localizacao: "Cachoeira, BA",
    bio: "Trabalha individual, especialista em ostras nativas.",
    produtosIds: ["p4"],
    prioridade: "alta",
  },
  {
    id: "luzia-mares",
    nome: "Luzia Mares",
    foto: marisqueiraImg,
    localizacao: "São Félix, BA",
    colonia: "Colônia Z-21",
    bio: "Família de marisqueiras há três gerações.",
    produtosIds: ["p5"],
    prioridade: "baixa",
  },
];

export const produtos: Produto[] = [
  { id: "p1", nome: "Ostras nativas", descricao: "Colhidas no mangue na maré da manhã.", preco: 38, unidade: "dúzia", estoque: 24, foto: ostrasImg, marisqueiraId: "dona-jurema" },
  { id: "p2", nome: "Sururu limpo", descricao: "Sem casca, pronto para a moqueca.", preco: 22, unidade: "kg", estoque: 12, foto: ostrasImg, marisqueiraId: "dona-jurema" },
  { id: "p3", nome: "Sururu na casca", descricao: "Fresquinho, direto do mangue.", preco: 14, unidade: "kg", estoque: 30, foto: ostrasImg, marisqueiraId: "tia-celia" },
  { id: "p4", nome: "Ostra do Recôncavo", descricao: "Sabor intenso, criada na maré.", preco: 42, unidade: "dúzia", estoque: 18, foto: ostrasImg, marisqueiraId: "ana-do-mangue" },
  { id: "p5", nome: "Marisco misto", descricao: "Mistura artesanal para caldeirada.", preco: 28, unidade: "kg", estoque: 9, foto: ostrasImg, marisqueiraId: "luzia-mares" },
];

export const pedidosMarisqueira = [
  { id: "#1042", cliente: "Marina S.", itens: "2 dúzias de ostras", valor: 76, status: "Preparando" as const },
  { id: "#1041", cliente: "Roberto L.", itens: "1 kg sururu limpo", valor: 22, status: "A caminho" as const },
  { id: "#1038", cliente: "Cris P.", itens: "3 kg marisco misto", valor: 84, status: "Entregue" as const },
];

export const statusPedido = [
  { label: "Pedido recebido", time: "09:14", done: true },
  { label: "Marisqueira aceitou", time: "09:21", done: true },
  { label: "Em preparo", time: "10:05", done: true },
  { label: "A caminho", time: "—", done: false },
  { label: "Entregue", time: "—", done: false },
];

export const adminMetrics = {
  marisqueiras: 142,
  altaNecessidade: 38,
  pedidos: 1284,
  receitaTaxa: 4_726.5,
};

export const parceiros = [
  {
    nome: "Bronze",
    preco: "Apoiador",
    cor: "from-amber-700 to-amber-900",
    beneficios: ["Divulgação nas redes sociais", "Selo de empresa apoiadora"],
  },
  {
    nome: "Prata",
    preco: "Aliado",
    cor: "from-slate-400 to-slate-600",
    beneficios: ["Benefícios do Bronze", "Destaque dentro do aplicativo", "Participação em campanhas educativas"],
    destaque: true,
  },
  {
    nome: "Ouro",
    preco: "Patrono",
    cor: "from-amber-400 to-orange-500",
    beneficios: ["Benefícios do Prata", "Relatórios de impacto social", "Maior visibilidade institucional", "Participação em eventos do projeto"],
  },
];
