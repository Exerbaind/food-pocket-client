import { Metadata } from 'next';
import DataComp from '@/components/DataComp';
import InitPostsOnClient from '@/store/posts/InitOnClient';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 },
  });

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
      <div>
        <InitPostsOnClient data={posts} />
        <h1>hello</h1>
        <h3>давайте посмотрим немного шрифт</h3>
        { posts &&  <DataComp />}
      </div>
  );
}
