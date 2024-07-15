import Server from './axiosInstance';

const baseUrl = '/posts';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IGetSinglePostRequest {
  params: {
    postId: number;
  };
}

export const postApi = {
  getPosts: () => {
    const url = `${baseUrl}`;
    return Server.get<IPost[]>(url);
  },

  getSinglePost: ({ params }: IGetSinglePostRequest) => {
    const url = `${baseUrl}/${params.postId}`;
    return Server.get<IPost>(url);
  },
};
