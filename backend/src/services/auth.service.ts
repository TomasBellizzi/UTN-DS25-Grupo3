import prisma from '../config/prisma' ;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken' ;
import { LoginRequest , LoginResponse  } from '../types/auth' ;

export async function login(data: LoginRequest ): Promise<LoginResponse ['data']> {
   // 1. Buscar usuario
   const user = await prisma.user.findUnique ({
       where: { email: data.email }
   });
   if (!user) {
       const error = new Error('Credenciales inválidas' ) as any;
       error.statusCode  = 401;
       throw error;
   }
   // 2. Verificar password
   const validPassword = await bcrypt.compare(data.password, user.password);
   if (!validPassword ) {
       const error = new Error('Credenciales inválidas' ) as any;
       error.statusCode  = 401;
       throw error;
   }
   // 3. Generar JWT
   const token = jwt.sign(
       {
            id: user.id,
            email: user.email,
            role: user.role
       },
       process.env.JWT_SECRET !,
       { expiresIn:  process.env.JWT_EXPIRES_IN  }
   );
   // 4. Retornar sin password
   const { password: _, ...userWithoutPassword  } = user;
   return {
       user: userWithoutPassword ,
       token
   };
}
