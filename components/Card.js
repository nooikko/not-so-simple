import { BiCheckShield } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { Badge, Img } from './';

const fieldNames = {
  'Bank Name': 'name',
  'Verified By Mod': 'verified',
  'Checking Account': 'checking',
  'Savings Account': 'savings',
  'Investing Options': 'investing',
  'Joint Accounts': 'joint',
  Expenses: 'expenses',
  Goals: 'goals',
  'Safe To Spend': 'safetospend',
  'Round Up': 'roundup',
  'Savings Rate': 'savingsrate',
  'Online Bill Pay': 'onlinebillpay',
  'Mobile Deposits': 'mobilecheckdeposit',
  Checks: 'checks',
  Venmo: 'venmo',
  Zelle: 'zelle',
  'Outgoing Wires': 'outgoingwires',
  'Incoming Wires': 'incomingwires',
  'No Fees': 'nofees',
  'Business Banking': 'businessbanking',
  'Card Type': 'cardtype',
  'Big Bank Backer': 'backer',
  Website: 'website',
  'Plaid Integration': 'plaid',
  Web: 'webapp',
  Ios: 'ios',
  Android: 'android',
};

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
  simple,
  ...rest
}) => {
  const possibleBadges = Object.keys(rest).reduce((acc, cur) => {
    const keys = Object.keys(fieldNames);
    const [matchingKey] = keys.filter((key) => fieldNames[key] === cur);
    return {
      ...acc,
      [matchingKey]: cur,
    };
  }, {});

  const simpleFeatures = Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const simpleValue = simple[fieldValue];
    return {
      ...acc,
      [fieldValue]: simpleValue,
    };
  }, {});

  const currentFeatures = Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const currentValue = rest[fieldValue];

    return {
      ...acc,
      [fieldValue]: currentValue,
    };
  }, {});

  const matchingFeatures = Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const simpleValue = simpleFeatures[fieldValue];
    const currentValue = currentFeatures[fieldValue];

    if (simpleValue && currentValue) {
      return [...acc, cur];
    }

    return acc;
  }, []);

  const missingFeatures = Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const simpleValue = simpleFeatures[fieldValue];
    const currentValue = currentFeatures[fieldValue];

    if (simpleValue && !currentValue) {
      return [...acc, cur];
    }

    return acc;
  }, []);

  const otherFeatures = Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const simpleValue = simpleFeatures[fieldValue];
    const currentValue = currentFeatures[fieldValue];

    if (!simpleValue && currentValue) {
      return [...acc, cur];
    }

    return acc;
  }, []);

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
      {Boolean(matchingFeatures.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg pb-2'>Matching Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {matchingFeatures.map((item) => (
              <Badge key={item} name={item} matching />
            ))}
          </div>
        </div>
      )}
      {Boolean(missingFeatures.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg pb-2'>Missing Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {missingFeatures.map((item) => (
              <Badge key={item} name={item} missing />
            ))}
          </div>
        </div>
      )}
      {Boolean(otherFeatures.length) && (
        <div className='py-2'>
          <h2 className='font-medium text-lg pb-2'>Other Features</h2>
          <div className='grid grid-cols-3 gap-2'>
            {otherFeatures.map((item) => (
              <Badge key={item} name={item} fresh />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
