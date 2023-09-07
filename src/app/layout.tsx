import { store, useAppSelector } from '@/store';
import Providers from '@/store/Provider';
import cn from '@/utils/tailwind/cn';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Главная страница!',
  description: 'А это описание для главной страницы!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme }  = store.getState().appService;
  const customClassName = roboto.className;
  return (
    <html lang="ru">
      <Providers>
        <body
          className={cn('', customClassName, {
            'dark': theme,
          })}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
