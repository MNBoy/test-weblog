import { PostDetail } from '@/components/pages/post';

interface IProps {
  params: { postId: string };
}

export default function SinglePostPage({ params }: IProps) {
  const { postId } = params;
  return (
    <main>
      <PostDetail postId={postId} />
    </main>
  );
}
