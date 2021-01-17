import { useRouter } from 'next/router';
import Link from 'next/link';
import { PageLayout, Badge } from '@components';
import { FaChevronLeft } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { FiCreditCard } from 'react-icons/fi';
import { MdLocalAtm } from 'react-icons/md';
import { FaBalanceScaleLeft } from 'react-icons/fa';

const mockFeatures = [
  'Checking Account',
  'Savings Account',
  'Joint Accounts',
  'Goals',
  'Round Up',
  'Mobile Deposits',
  'Checks',
  'Venmo',
  'Incoming Wires',
  'No Fees',
  'Plaid Integration',
  '2FA',
];

const mockMissing = [
  'Expenses',
  'Safe To Spend',
  'Instant Account to Account Transfer',
  'Automatic Goal Funding',
  'Automatic Expense Funding',
  'Automatic Goal/Expense Spending',
  'ACH Transfers',
  'Transaction Notifications',
  'Apple Pay',
  'Google Pay',
  'CSV/JSON Export',
  'Graphical Analysis',
  'Dark Mode UI',
  'Custom Transaction Notes',
  'Modern UI',
  'Real-Time Accuracy',
];

const mockOther = [
  'Investing Options',
  'Online Bill Pay',
  'Zelle',
  'Outgoing Wires',
];

const Bank = () => {
  const { query } = useRouter();

  return (
    <PageLayout>
      <div className='mb-4'>
        <Link href='/'>
          <a className='inline-block'>
            <button className='flex items-center bg-gray-200 py-2 px-3 rounded font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-300'>
              <FaChevronLeft className='mr-2' />
              All Banks
            </button>
          </a>
        </Link>
      </div>
      <div className='flex grid grid-cols-3'>
        <div className='col-span-2'>
          <div className='bg-white w-100 shadow rounded p-4 grid gap-4'>
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
              <h1 className='text-3xl font-bold'>Simple</h1>
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
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pretium dolor non sapien varius aliquet. Duis pretium faucibus
              finibus. Duis maximus ligula nunc, eu luctus nisi convallis at.
              Suspendisse auctor justo et urna vestibulum tincidunt. Proin sem
              enim, tempus nec consequat non, bibendum id lectus. In hac
              habitasse platea dictumst.
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
            <div>
              <h3 className='text-sm font-medium text-gray-500 mb-2'>
                Missing Features ({mockMissing.length})
              </h3>
              <div className='flex flex-wrap'>
                {mockMissing.map((item) => (
                  <Badge key={item} label={item} color='red' />
                ))}
              </div>
            </div>
            <div>
              <h3 className='text-sm font-medium text-gray-500 mb-2'>
                Other Features ({mockOther.length})
              </h3>
              <div className='flex flex-wrap'>
                {mockOther.map((item) => (
                  <Badge key={item} label={item} color='blue' />
                ))}
              </div>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-2'>Feature Descriptions</h3>
              <div className='font-medium'>
                Expenses -{' '}
                <span className='text-gray-600'>Expected Q1 2021</span>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pretium dolor non sapien varius aliquet. Duis pretium faucibus
              finibus. Duis maximus ligula nunc, eu luctus nisi convallis at.
              Suspendisse auctor justo et urna vestibulum tincidunt. Proin sem
              enim, tempus nec consequat non, bibendum id lectus. In hac
              habitasse platea dictumst.
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </PageLayout>
  );
};

export default Bank;
