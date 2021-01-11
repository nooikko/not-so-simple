import { BiCheckShield } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { Badge, Img } from './';

export const Card = ({
  name,
  verified,
  webapp,
  ios,
  android,
  backer,
  savingsrate,
  cardtype,
  website,
  missing,
  matching,
  fresh,
}) => {
  return (
    <div className='rounded-md p-3 border-solid bg-white border-2 border-gray-300'>
      <div className='flex justify-between'>
        <div className='font-bold text-3xl text-purple-600 flex flex-row items-center'>
          <a
            href={website}
            className='pr-2 flex items-center hover:text-purple-400'
            target='_blank'
            rel='noreferrer'
          >
            {name}
            <span className='pl-2'>
              <AiOutlineLink />
            </span>
          </a>
          {verified && (
            <span className='text-green-600'>
              <BiCheckShield />
            </span>
          )}
        </div>
        <div className='flex flex-row'>
          {webapp && <Img src='/images/website.png' />}
          {android && <Img src='/images/google-play.png' />}
          {ios && <Img src='/images/ios.png' />}
        </div>
      </div>
      <div className='py-2'>
        <h2 className='font-bold text-lg pb-1'>General Info</h2>
        <div className='grid grid-cols-2 gap-y-2'>
          <div>
            <h3 className='font-medium'>Backing Bank</h3>
            <div className='text-gray-600'>{backer}</div>
          </div>
          <div>
            <h3 className='font-medium'>Savings Rate</h3>
            <div className='text-gray-600'>{savingsrate}</div>
          </div>
          <div>
            <h3 className='font-medium'>Card Type</h3>
            <div className='text-gray-600'>{cardtype}</div>
          </div>
        </div>
      </div>
      {Boolean(matching.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg pb-2'>Matching Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {matching.map((item) => (
              <Badge key={item} name={item} matching />
            ))}
          </div>
        </div>
      )}
      {Boolean(missing.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg pb-2'>Missing Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {missing.map((item) => (
              <Badge key={item} name={item} missing />
            ))}
          </div>
        </div>
      )}
      {Boolean(fresh.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg pb-2'>Other Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {fresh.map((item) => (
              <Badge key={item} name={item} fresh />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
