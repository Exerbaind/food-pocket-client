import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...values: ClassValue[]) {
  twMerge(clsx(values));
}

export default cn;
