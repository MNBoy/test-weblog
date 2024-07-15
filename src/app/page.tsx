import { PostsList } from '@/components/pages/home';

export default function Home() {
  return (
    <main className='max-w-screen-sm mx-auto py-10'>
      <h1 className='text-2xl font-bold text-secondary'>overreacted</h1>

      {/* Posts List */}
      <PostsList />
    </main>
  );
}
