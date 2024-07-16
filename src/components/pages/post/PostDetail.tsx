'use client';

import { Tools } from '@/lib/tools';
import { FC } from 'react';
import { usePostDetail } from './usePostDetail';

interface IProps {
  postId: string;
}

export const PostDetail: FC<IProps> = ({ postId }) => {
  const { post, isLoading } = usePostDetail({ postId });

  return (
    <section className='mt-12 flex flex-col gap-y-16'>
      {isLoading && (
        <p className='text-gray-500 dark:text-secondary'>Waiting...</p>
      )}

      {post && !isLoading && (
        <div className='flex flex-col gap-y-2'>
          <h2 className='font-extrabold text-gray-800 dark:text-white text-2xl lg:text-3xl'>
            {Tools.capitalizeFirstLetter(post.title)}
          </h2>
          <span className='text-xs text-gray-500 dark:text-secondary'>
            {Tools.createDate(post.id)}
          </span>
          <p className='text-sm text-gray-500 dark:text-secondary mt-8'>
            {post.body}
          </p>
        </div>
      )}
    </section>
  );
};
