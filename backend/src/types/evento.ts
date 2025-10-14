import { Entrada } from "./entradas";
import { Actividad } from "./actividad";
import { Cancha } from "./cancha";

export interface Evento {
  id: number;
  nombre: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  precioEntrada: number;
  actividadId: number;
  canchaId: number;
  descripcion: string;
  createdAt?: Date;
  actividad?: Actividad;   
  cancha?: Cancha;        
  entradas?: Entrada[];
}

export interface CreateEventoRequest {
  nombre: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  precioEntrada: number;
  actividadId: number;  
  canchaId: number;     
  descripcion: string;
}

export interface UpdateEventoRequest {
  nombre?: string;
  fecha?: Date;
  horaInicio?: string;
  horaFin?: string;
  capacidad?: number;
  precioEntrada?: number;
  actividadId?: number;  
  canchaId?: number;
  descripcion?: string;
}

export interface EventoResponse {
  evento: Evento;
  entradas?: Entrada[];
  message: string;
}

export interface EventoListResponse {
  eventos: Evento[];
  total: number;
}
