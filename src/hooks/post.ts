import { IError } from '@/common/interfaces/axios';
import { IGetSinglePostRequest, IPost, postApi } from '@/service/post';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosError, AxiosResponse } from 'axios';

export const useGetPosts = (
  queryOptions?: UseQueryOptions<AxiosResponse<IPost[]>, AxiosError<IError>>
) => {
  return useQuery<AxiosResponse<IPost[]>, AxiosError<IError>>({
    queryKey: ['posts'],
    queryFn: () => postApi.getPosts(),
    ...queryOptions,
  });
};

export const useGetSinglePost = (
  data: IGetSinglePostRequest,
  queryOptions?: UseQueryOptions<AxiosResponse<IPost>, AxiosError<IError>>
) => {
  return useQuery<AxiosResponse<IPost>, AxiosError<IError>>({
    queryKey: ['posts'],
    queryFn: () => postApi.getSinglePost(data),
    ...queryOptions,
  });
};
