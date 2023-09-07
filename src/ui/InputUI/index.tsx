import cn from '@/utils/tailwind/cn';
import React, { forwardRef } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';


const InputUI = forwardRef<HTMLInputElement, ControllerRenderProps<FieldValues, string>>(function InputUI (props, ref) {
    return (
      <input {...props} ref={ref} className={cn('bg-input outline-none')} />
    )

});
export default InputUI