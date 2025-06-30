const BASE_URL = "/api";

export interface Temporada {
  id: string;       // ex: "2025"
  nome: string;     // ex: "Temporada 2025"
  ano: number;
}

export interface Driver {
  id: string;
  nomeCompleto: string;
  nacionalidade: string;
  dataNascimento?: string;
  equipeId?: string;
  fotoUrl?: string;
}

export interface Circuito {
  id: string;
  nome: string;
  localizacao: string;
  pais: string;
  mapaUrl?: string;
}

export interface Equipe {
  id: string;
  nome: string;
  pais: string;
  principal: string;      // chefe da equipe
  fotoUrl?: string;
}

// Busca todas as temporadas
export async function getTemporadas(): Promise<Temporada[]> {
  const res = await fetch(`${BASE_URL}/temporadas`);
  if (!res.ok) throw new Error("Erro ao buscar temporadas");
  return await res.json();
}

// Busca todos os pilotos
export async function getDrivers(): Promise<Driver[]> {
  const res = await fetch(`${BASE_URL}/drivers`);
  if (!res.ok) throw new Error("Erro ao buscar pilotos");
  return await res.json();
}

// Busca todos os circuitos
export async function getCircuitos(): Promise<Circuito[]> {
  const res = await fetch(`${BASE_URL}/circuitos`);
  if (!res.ok) throw new Error("Erro ao buscar circuitos");
  return await res.json();
}

// Busca todas as equipes
export async function getEquipes(): Promise<Equipe[]> {
  const res = await fetch(`${BASE_URL}/equipes`);
  if (!res.ok) throw new Error("Erro ao buscar equipes");
  return await res.json();
}
