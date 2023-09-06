import { Metadata } from 'next';

export async function Metadata() {
  return {
    title: 'Добавление блюда',
  };
}

export default async function Home() {
  return (
    <div>
      <h1>Форма для блюда</h1>
    </div>
  );
}
