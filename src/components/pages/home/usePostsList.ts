import { useGetPosts } from '@/hooks/post';

export const usePostsList = () => {
  const { data: postsRes, isLoading } = useGetPosts();
  console.log('🚀 ~ usePostsList ~ postsRes:', postsRes);

  return {};
};
