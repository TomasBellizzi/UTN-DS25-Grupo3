import { Socio } from './Socio';
export type Sexo = 'MASCULINO' | 'FEMENINO' | 'OTRO';
export type Role = 'ADMIN' | 'SOCIO';

export interface UserData {
  id: number;
  email: string;
  role: Role;
  creadoEn: Date;
  socio?: Socio | null; 
}

export interface CreateUserRequest {
  email: string;
  password: string;
  role: Role;
  socio?: {
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: Date;
    pais: string;
    sexo: Sexo;
    fotoCarnet?: string | null;
  };
}

export interface UpdateUserRequest {
  email?: string;
  password?: string;
  role?: Role;
  socio?: {
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: Date;
    pais: string;
    sexo: Sexo;
    fotoCarnet?: string | null;
  }; 
}

export interface UserResponse {
  user: UserData;
  message: string;
}

export interface UsersListResponse {
  users: UserData[];
  total: number;
  message: string;
}
