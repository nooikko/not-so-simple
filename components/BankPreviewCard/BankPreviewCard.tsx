import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';
import { FiCreditCard } from 'react-icons/fi';
import { MdLocalAtm } from 'react-icons/md';
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { Badge } from '@components';

const mockFeatures = [
  'Checking Account',
  'Savings Account',
  'Joint Accounts',
  'Transaction Notifications',
  'Apple Pay',
  'Google Pay',
  'Plaid Integration',
  'Two-Factor Authentication',
  'Incoming Wires',
  'Checks',
  'Round Up',
];

/**
 * @namespace Components/BankPreviewCard
 */
export const BankPreviewCard: React.FC = () => {
  return (
    <div className='bg-white rounded shadow w-100 p-5 grid gap-4'>
      <div>
        <div className='flex justify-between'>
          <h2 className='text-sm font-medium text-gray-400'>BBVA</h2>
          <a
            href='#'
            className='flex items-center text-purple-600 hover:text-purple-800'
          >
            Visit Site <GoLinkExternal className='pl-2 text-lg' />
          </a>
        </div>
        <h1 className='text-2xl font-bold'>Simple</h1>
      </div>
      <div className='flex'>
        <div className='flex items-center pr-6 font-medium'>
          <MdLocalAtm className='text-xl mr-1 sm:mr-2 text-gray-500' />
          0.50% APY
        </div>
        <div className='flex items-center pr-6 font-medium'>
          <FiCreditCard className='text-lg mr-1 sm:mr-2 text-gray-500' />
          Visa
        </div>
        <div className='flex items-center pr-6 font-medium'>
          <FaBalanceScaleLeft className='text-lg mr-1 sm:mr-2 text-gray-500' />
          No Fees
        </div>
      </div>
      <div className='line-clamp-2 text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium
        dolor non sapien varius aliquet. Duis pretium faucibus finibus. Duis
        maximus ligula nunc, eu luctus nisi convallis at. Suspendisse auctor
        justo et urna vestibulum tincidunt. Proin sem enim, tempus nec consequat
        non, bibendum id lectus. In hac habitasse platea dictumst.
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-500 mb-2'>
          Matching Features ({mockFeatures.length})
        </h3>
        <div className='flex flex-wrap'>
          {mockFeatures.map((item) => (
            <Badge key={item} label={item} color='green' />
          ))}
        </div>
      </div>
      <div className='flex justify-between mt-3'>
        <div>
          <Link href='/bank/simple'>
            <a>
              <button className='bg-purple-600 p-2 px-3 text-white rounded font-medium'>
                View More
              </button>
            </a>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};
