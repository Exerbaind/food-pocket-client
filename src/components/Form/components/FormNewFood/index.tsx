'use client';

import { inputStyles } from '@/utils/constants/commonStyles';
import cn from '@/utils/tailwind/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { UseFormReset, useForm } from 'react-hook-form';
import { NewFoodFormSchema, newFoodFormSchema } from './schema';

const onSubmit = (
  data: NewFoodFormSchema,
  // reset: UseFormReset<NewFoodFormSchema>,
) => {
  console.log(data);
};

function FormNewFood() {
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    register,
    reset,
  } = useForm<NewFoodFormSchema>({
    resolver: zodResolver(newFoodFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-4">
        <label htmlFor="city">Город</label>
        <input className={cn('mt-1', inputStyles)} {...register('city')} />
        {errors?.city && <p>{errors.city.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="restaurant">Ресторан</label>
        <input
          className={cn('mt-1', inputStyles)}
          {...register('restaurant')}
        />
        {errors?.restaurant && <p>{errors.restaurant.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="name">Название блюда</label>
        <input className={cn('mt-1', inputStyles)} {...register('name')} />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="kcals">Количество килокалорий</label>
        <input
          className={cn('mt-1', inputStyles)}
          type="number"
          step="0.01"
          {...register('kcals', { valueAsNumber: true })}
        />
        {errors?.kcals && <p>{errors.kcals.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="prots">Количество белков</label>
        <input
          className={cn('mt-1', inputStyles)}
          type="number"
          step="0.01"
          {...register('prots', { valueAsNumber: true })}
        />
        {errors?.prots && <p>{errors.prots.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="fats">Количество жиров</label>
        <input
          className={cn('mt-1', inputStyles)}
          type="number"
          step="0.01"
          {...register('fats', { valueAsNumber: true })}
        />
        {errors?.fats && <p>{errors.fats.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="carbs">Количество углеводов</label>
        <input
          className={cn('mt-1', inputStyles)}
          type="number"
          step="0.01"
          {...register('carbs', { valueAsNumber: true })}
        />
        {errors?.carbs && <p>{errors.carbs.message}</p>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default FormNewFood;
