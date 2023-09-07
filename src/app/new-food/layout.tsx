import type { Metadata } from 'next';

export async function Metadata() {
  return {
    title: 'Добавление блюда',
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex justify-center">
      <div className="max-w-max">{children}</div>
    </div>
  );
}
