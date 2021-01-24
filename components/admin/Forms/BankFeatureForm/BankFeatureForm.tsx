import { Card } from '@components/general';
import { Form, Button, Select } from 'antd';

export interface BankFeatureFormDataType {
  features?: string[];
}

interface BankFeatureFormProps {
  onFinish: (values: BankFeatureFormDataType) => void;
  onCancel: () => void;
  defaults: BankFeatureFormDataType;
}

export const BankFeatureForm: React.FC<BankFeatureFormProps> = ({
  onFinish,
  onCancel,
  defaults,
}) => {
  return (
    <Card>
      <h1 className='text-2xl'>Bank Information</h1>
      <Form layout='vertical' onFinish={onFinish}>
        <Form.Item
          name='features'
          label='Features'
          initialValue={defaults?.features}
        >
          <Select mode='tags'></Select>
        </Form.Item>
        <div className='flex justify-end'>
          <Button onClick={onCancel} className='mr-4'>
            Back
          </Button>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </Card>
  );
};
