import { BiCheckShield } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Tooltip } from 'antd';
import { Badge, AppCheck } from './';

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
        <div className='font-bold  flex flex-row items-center pb-2'>
          <span className='text-purple-600 pr-3 text-3xl leading-5'>
            {name}
          </span>
          {verified && (
            <span className='text-green-600 text-2xl'>
              <Tooltip title='Admin Verified'>
                <BiCheckShield />
              </Tooltip>
            </span>
          )}
        </div>
        <div className='flex flex-row items-start'>
          <a href={website} target='_blank' rel='noreferrer' className='flex'>
            <span className='pr-1 leading-3'>Visit Site</span>
            <HiOutlineExternalLink />
          </a>{' '}
        </div>
      </div>
      <div className='py-2'>
        <h2 className='font-bold text-lg'>General Info</h2>
        <div className='grid grid-cols-3 gap-y-2'>
          <div>
            <h3 className='font-medium my-0'>Backing Bank</h3>
            <div className='text-gray-600'>{backer}</div>
          </div>
          <div>
            <h3 className='font-medium my-0'>Savings Rate</h3>
            <div className='text-gray-600'>{savingsrate}</div>
          </div>
          <div>
            <h3 className='font-medium my-0'>Card Type</h3>
            <div className='text-gray-600'>{cardtype}</div>
          </div>
        </div>
      </div>
      <div className='py-2'>
        <h2 className='font-bold text-lg'>Applications</h2>
        <div className='grid grid-cols-3 gap-y-2'>
          <div className='flex items-center'>
            <div className='text-gray-600 pr-1'>Website</div>
            <div>
              <AppCheck exists={webapp} />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='text-gray-600 pr-1'>Android</div>
            <div>
              <AppCheck exists={android} />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='text-gray-600 pr-1'>IOS</div>
            <div>
              <AppCheck exists={ios} />
            </div>
          </div>
        </div>
      </div>
      {Boolean(matching.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg'>Matching Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {matching.map((item) => (
              <Badge key={item} name={item} matching />
            ))}
          </div>
        </div>
      )}
      {Boolean(missing.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg'>Missing Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {missing.map((item) => (
              <Badge key={item} name={item} missing />
            ))}
          </div>
        </div>
      )}
      {Boolean(fresh.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg'>Other Features</h2>
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
