import { z } from 'zod';

export const newFoodFormSchema = z.object({
  city: z.string({ required_error: 'Обязательное поле' }),
  restaurant: z.string({ required_error: 'Обязательное поел' }),
  name: z.string({ required_error: 'Обязательное поле' }),
  kcals: z.number({ required_error: 'Обязательное поле' }),
  prots: z.number({ required_error: 'Обязательное поле' }),
  fats: z.number({ required_error: 'Обязательное поле' }),
  carbs: z.number({ required_error: 'Обязательное поле' }),
  weightType: z.string({ required_error: 'Обязательное поле' }),
  weightSize: z.number().optional(),
});

export type NewFoodFormSchema = z.infer<typeof newFoodFormSchema>;
