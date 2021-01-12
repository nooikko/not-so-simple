import Image from 'next/image';

export const Img = ({ src, alt }) => {
  return (
    <div className='px-1'>
      <Image src={src} height='25' width='25' alt={alt} />
    </div>
  );
};
