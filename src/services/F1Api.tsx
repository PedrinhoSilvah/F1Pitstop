const BASE_URL = "https://f1api.dev/api";

export interface Temporada {
  id: string; // ex: "2025"
  nome: string; // ex: "Temporada 2025"
  ano: number;
}

export interface NextRace {
  total: number;
  season: number;
  round: number;
  championship: Championship;
  race: Race[];
  circuit: Circuit[];
}

export interface Championship {
  championshipId: string;
  championshipName: string;
  url: string;
  year: number;
}

export interface Race {
  raceId: string;
  championshipId: string;
  raceName: string;
  laps: number;
  round: number;
  url: string;
  winner: string | null;
  teamWinner: string | null;
  schedule: Schedule;
  circuit: Circuit;
  fast_lap: {
    fast_lap: string | null;
    fast_lap_driver_id: string | null;
    fast_lap_team_id: string | null;
  };
}

export interface Schedule {
  race: DateTime;
  qualy: DateTime;
  fp1: DateTime;
  fp2: DateTime;
  fp3: DateTime;
  sprintQualy: DateTime;
  sprintRace: DateTime;
}

export interface DateTime {
  date: string | null; // Ex: "2025-07-06"
  time: string | null; // Ex: "14:00:00Z"
}

export interface Circuit {
  circuitId: string;
  circuitName: string;
  country: string;
  city: string;
  circuitLength: string;
  lapRecord: string;
  firstParticipationYear: number;
  corners: number;
  fastestLapDriverId: string;
  fastestLapTeamId: string;
  fastestLapYear: number;
  url: string;
}

export interface Driver {
  id: string;
  nomeCompleto: string;
  nacionalidade: string;
  dataNascimento?: string;
  equipeId?: string;
  fotoUrl?: string;
}

// services/F1Api.ts

export interface DriverChampionship {
  classificationId: number;
  driverId: string;
  teamId: string;
  position: number;
  points: number;
  wins: number | null;
  driver: {
    name: string;
    surname: string;
    nationality: string;
    birthday: string;
    number: number;
    shortName: string;
    url: string;
  };
  team: {
    teamId: string;
    teamName: string;
    country: string;
    firstAppareance: number;
    constructorsChampionships: number | null;
    driversChampionships: number | null;
    url: string;
  };
}

export interface ConstructorStanding {
  classificationId: number;
  teamId: string;
  position: number;
  points: number;
  wins: number | null;
  team: {
    teamName: string;
    country: string;
    firstAppareance: number;
    constructorsChampionships: number | null;
    driversChampionships: number | null;
    url: string;
  };
}

// Busca classificação dos pilotos
export async function getDriversChampionship(): Promise<DriverChampionship[]> {
  const res = await fetch(`${BASE_URL}/current/drivers-championship`);
  if (!res.ok) throw new Error("Erro ao buscar classificação de pilotos");
  const data = await res.json();
  return data.drivers_championship;
}

// Busca classifição das equipes
export async function getConstructorsChampionship(): Promise<
  ConstructorStanding[]
> {
  const res = await fetch(`${BASE_URL}/current/constructors-championship`);
  if (!res.ok) throw new Error("Erro ao buscar classificação de construtores");
  const data = await res.json();
  return data.constructors_championship;
}

// Busca proximas corridas
export async function getProximaCorrida(): Promise<NextRace> {
  const res = await fetch(`${BASE_URL}/current/next`);
  if (!res.ok) throw new Error("Erro ao buscar a próxima corrida");
  return await res.json();
}
