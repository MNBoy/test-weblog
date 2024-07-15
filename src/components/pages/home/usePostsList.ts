import { useGetPosts } from '@/hooks/post';

export const usePostsList = () => {
  const { data: postsRes, isLoading, isFetched } = useGetPosts();

  return {
    posts: isFetched
      ? postsRes?.data.slice(0, 40).sort((a, b) => b.id - a.id)
      : [], // We don't need all posts for testing project or any pagination,
    isLoading,
  };
};
