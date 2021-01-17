import { FiCreditCard } from 'react-icons/fi';
import { MdLocalAtm } from 'react-icons/md';
import { FaBalanceScaleLeft } from 'react-icons/fa';

interface QuickInfoProps {
  apr: string;
  cardtype: string;
  nofees: boolean;
}

export const QuickInfo: React.FC<QuickInfoProps> = ({
  apr,
  cardtype,
  nofees,
}) => {
  return (
    <div className='flex'>
      <div className='flex items-center pr-6 font-medium'>
        <MdLocalAtm className='text-xl mr-1 sm:mr-2 text-gray-500' />
        {apr}% APR
      </div>
      <div className='flex items-center pr-6 font-medium'>
        <FiCreditCard className='text-lg mr-1 sm:mr-2 text-gray-500' />
        {cardtype}
      </div>
      {nofees && (
        <div className='flex items-center pr-6 font-medium'>
          <FaBalanceScaleLeft className='text-lg mr-1 sm:mr-2 text-gray-500' />
          No Fees
        </div>
      )}
    </div>
  );
};
