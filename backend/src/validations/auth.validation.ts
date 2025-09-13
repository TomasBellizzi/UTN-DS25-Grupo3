import { z } from 'zod';

export const LoginSchema = z.object({
    body: z.object({
        email: z.string().email('Email inválido'),
        password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    }),
});
