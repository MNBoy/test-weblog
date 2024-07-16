export const PATHS = {
  HOME: '/',
  POST: {
    ROOT: '/posts',
    ID: (postId: number) => `/posts/${postId}`,
  },
};
