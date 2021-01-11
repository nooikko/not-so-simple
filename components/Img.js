import Image from 'next/image';

export const Img = ({ src }) => {
  return (
    <div className='px-1'>
      <Image src={src} height='25' width='25' />
    </div>
  );
};
