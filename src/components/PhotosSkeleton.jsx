import { Skeleton } from './Skeleton';

export const PhotosSkeleton = () => {
  const fakeData = Array.from({ length: 25 });

/* eslint-disable */
  return fakeData.map((item, index) => <Skeleton key={index} />);
/* eslint-enable no-alert */
};
