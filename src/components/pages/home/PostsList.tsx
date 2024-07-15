'use client';

import { usePostsList } from './usePostsList';

export const PostsList = () => {
  const {} = usePostsList();

  return <section className='mt-8'>PostsList</section>;
};
