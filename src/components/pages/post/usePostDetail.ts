import { useGetSinglePost } from '@/hooks/post';

interface IProps {
  postId: string;
}

export const usePostDetail = ({ postId }: IProps) => {
  const {
    data: postRes,
    isLoading,
    isFetched,
  } = useGetSinglePost(
    {
      params: {
        postId: +postId,
      },
    },
    {
      queryKey: ['post', postId],
      enabled: !!postId,
    }
  );

  return {
    post: isFetched ? postRes?.data : null,
    isLoading,
  };
};
