import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...values: ClassValue[]) {
  return twMerge(clsx(values));
}

export default cn;
