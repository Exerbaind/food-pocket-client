import { Metadata } from 'next';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  return data;
};

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getData();
  return {
    title: posts[0].title,
  };
}

export default async function Home() {
  const posts = await getData();
  return (
    <div className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      <h1>hello</h1>
      <h3>давайте посмотрим немного шрифт</h3>
      {posts.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
