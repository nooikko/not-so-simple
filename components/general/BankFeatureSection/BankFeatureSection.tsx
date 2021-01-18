import { Badge } from '@components/general';

interface BankFeatureSectionProps {
  features: string[];
  title: string;
  color: 'green' | 'red' | 'blue';
}

export const BankFeatureSection: React.FC<BankFeatureSectionProps> = ({
  features,
  title,
  color,
}) => {
  return (
    <div>
      <h3 className='text-sm font-medium text-gray-500 mb-2'>
        {title} ({features.length})
      </h3>
      <div className='flex flex-wrap'>
        {features.map((item) => (
          <Badge key={item} label={item} color={color} />
        ))}
      </div>
    </div>
  );
};
