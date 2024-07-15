import { PATHS } from '@/common/constants/PATHS';
import { Tools } from '@/lib/tools';
import { IPost } from '@/service/post';
import Link from 'next/link';
import { FC } from 'react';

interface IProps extends IPost {}

export const PostItem: FC<IProps> = ({ body, id, title }) => {
  return (
    <Link href={PATHS.POST.ID(id)}>
      <div className='flex flex-col gap-y-2 hover:scale-[1.02] transition-all duration-200 cursor-pointer'>
        <h2 className='font-extrabold gradient-text text-2xl lg:text-3xl'>
          {Tools.capitalizeFirstLetter(title)}
        </h2>
        <span className='text-xs text-secondary'>{Tools.createDate(id)}</span>
        <p className='text-sm text-secondary'>
          {body.slice(0, 60)} {body.length > 60 ? '...' : ''}
        </p>
      </div>
    </Link>
  );
};
