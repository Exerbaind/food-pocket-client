import DataComp from '@/components/DataComp';
import { Post } from '@/interfaces/post.interface';
import PostClientHydration from '@/store/posts/ClientHydration';
import appApi from '@/utils/api';
import { Metadata } from 'next';

export const revalidate = 3600;

const getData = async () => {
  const { data } = await appApi.get<Post[]>('/posts');

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
        <PostClientHydration data={posts} />
        <h1>hello</h1>
        <h3>давайте посмотрим немного шрифт</h3>
        { posts &&  <DataComp />}
      </div>
  );
}
