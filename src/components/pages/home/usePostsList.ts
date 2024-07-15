import { useGetPosts } from '@/hooks/post';

export const usePostsList = () => {
  const { data: postsRes, isLoading } = useGetPosts();

  return {
    posts: isLoading ? [] : postsRes?.data.slice(0, 40), // We don't need all posts for testing project or any pagination,
    isLoading,
  };
};
