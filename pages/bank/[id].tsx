import { useRouter } from 'next/router';
import {
  PageLayout,
  QuickInfo,
  Card,
  Link,
  BankFeatureSection,
  FeatureDescription,
} from '@components';
import { FaChevronLeft } from 'react-icons/fa';

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

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
pretium dolor non sapien varius aliquet. Duis pretium faucibus
finibus. Duis maximus ligula nunc, eu luctus nisi convallis at.
Suspendisse auctor justo et urna vestibulum tincidunt. Proin sem
enim, tempus nec consequat non, bibendum id lectus. In hac
habitasse platea dictumst.`;

const Bank = () => {
  const { query } = useRouter();

  return (
    <PageLayout>
      <div className='mb-4'>
        <Link href='/' internal>
          <a className='inline-block'>
            <button className='flex items-center bg-gray-200 py-2 px-3 rounded font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-300'>
              <FaChevronLeft className='mr-2' />
              All Banks
            </button>
          </a>
        </Link>
      </div>
      <div className='flex grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='lg:col-span-2'>
          <Card>
            <div>
              <div className='flex justify-between'>
                <h2 className='text-sm font-medium text-gray-400'>BBVA</h2>
              </div>
              <h1 className='text-3xl font-bold'>Simple</h1>
            </div>
            <QuickInfo apr='0.50' cardtype='Visa' nofees={true} />
            <div>{lorem}</div>
            <BankFeatureSection
              title='Matching Features'
              features={mockFeatures}
              color='green'
            />
            <BankFeatureSection
              title='Missing Features'
              features={mockMissing}
              color='red'
            />
            <BankFeatureSection
              title='Other Features'
              features={mockOther}
              color='blue'
            />
            <div>
              <h3 className='text-lg font-medium mb-2'>Feature Descriptions</h3>
              <FeatureDescription
                title='Expenses'
                releaseDate='Q1 2021'
                description={lorem}
              />
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <h1 className='text-lg font-medium'>Additional Information</h1>
            <div>
              <h2 className='font-medium text-gray-500'>Website</h2>
              <Link href='https://simple.com'>https://simple.com</Link>
            </div>
            <div>
              <h2 className='font-medium text-gray-500'>Android App</h2>
              <Link href='https://play.google.com/store/apps/details?id=com.banksimple'>
                https://play.google.com/store/apps/details?id=com.banksimple
              </Link>
            </div>
            <div>
              <h2 className='font-medium text-gray-500'>iOS App</h2>
              <Link href='https://apps.apple.com/us/app/simple-mobile-banking/id479317486'>
                https://apps.apple.com/us/app/simple-mobile-banking/id479317486
              </Link>
            </div>
            <h1 className='text-lg font-medium'>Support</h1>
            <div>
              <h2 className='font-medium text-gray-500'>Phone Number</h2>
              <Link href='tel:1 (888) 248-0632'>1 (888) 248-0632</Link>
            </div>
            <div>
              <h2 className='font-medium text-gray-500'>Email Support</h2>
              <Link href='mailto:none@simple.com'>none@simple.com</Link>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Bank;
