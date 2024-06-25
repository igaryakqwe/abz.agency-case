import z from 'zod';

export const userSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  phone: z.string().startsWith('+380'),
  position_id: z.string(),
})
