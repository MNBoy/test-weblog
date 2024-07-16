'use client';

import { PostItem } from './PostItem';
import { usePostsList } from './usePostsList';

export const PostsList = () => {
  const { posts, isLoading } = usePostsList();

  return (
    <section className='mt-12 flex flex-col gap-y-16'>
      {isLoading ? (
        <p className='text-gray-500 dark:text-secondary'>Waiting...</p>
      ) : (
        posts?.map((post) => <PostItem key={post.id} {...post} />)
      )}
    </section>
  );
};
