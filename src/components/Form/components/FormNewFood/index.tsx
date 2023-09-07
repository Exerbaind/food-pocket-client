'use client';

import InputUI from '@/ui/InputUI';
import React, { useRef } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';

const onSubmit = (data: FieldValues) => {
  console.log(data);
};

function FormNewFood() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Обязательное поле',
        }}
        defaultValue=""
        render={({ field }) => <InputUI {...field} ref={field.ref} />}
      />
    </form>
  );
}

export default FormNewFood;
