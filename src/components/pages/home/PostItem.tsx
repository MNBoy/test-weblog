import { Tools } from '@/lib/tools';
import { IPost } from '@/service/post';
import { FC } from 'react';

interface IProps extends IPost {}

export const PostItem: FC<IProps> = ({ body, id, title }) => {
  return (
    <div className='flex flex-col gap-y-2 hover:scale-[1.02] transition-all duration-200 cursor-pointer'>
      <h2 className='font-extrabold text-primary text-2xl lg:text-3xl'>
        {Tools.capitalizeFirstLetter(title)}
      </h2>
      <span className='text-xs'>{Tools.createDate(id)}</span>
      <p className='text-sm'>{body}</p>
    </div>
  );
};
