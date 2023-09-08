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
    <div className="flex justify-center m-auto max-w-lg">
      <div className="w-full">{children}</div>
    </div>
  );
}
