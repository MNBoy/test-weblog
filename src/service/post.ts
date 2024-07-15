import Server from './axiosInstance';

const baseUrl = '/posts';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApi = {
  getPosts: () => {
    const url = `${baseUrl}`;
    return Server.get<IPost[]>(url);
  },
};
