import { Card } from '@components/general';
import { Form, Button, Input, Select, Switch } from 'antd';

export interface BankInfoFormDataType {
  name: string;
  backer?: string;
  cardType?: 'VISA' | 'MASTERCARD';
  noFees?: boolean;
  description?: string;
}

interface BankInfoFormProps {
  onFinish: (values: BankInfoFormDataType) => void;
  onNext: () => void;
  defaults: BankInfoFormDataType;
}

export const BankInfoForm: React.FC<BankInfoFormProps> = ({
  onFinish,
  onNext,
  defaults,
}) => {
  return (
    <Card>
      <h1 className='text-2xl'>Bank Information</h1>
      <Form
        layout='vertical'
        onFinish={(value: BankInfoFormDataType) => {
          onNext();
          onFinish(value);
        }}
      >
        <Form.Item
          name='name'
          label='Name'
          rules={[{ required: true, message: 'Name is required' }]}
          initialValue={defaults?.name}
        >
          <Input />
        </Form.Item>
        <Form.Item name='backer' label='Backer' initialValue={defaults?.backer}>
          <Input />
        </Form.Item>
        <Form.Item
          name='cardType'
          label='Card Type'
          initialValue={defaults?.cardType}
        >
          <Select allowClear>
            <Select.Option value='VISA'>Visa</Select.Option>
            <Select.Option value='MASTERCARD'>Mastercard</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='noFees'
          label='No Fees'
          valuePropName='checked'
          initialValue={defaults?.noFees}
        >
          <Switch />
        </Form.Item>
        <Form.Item
          name='description'
          label='Description'
          initialValue={defaults?.description}
        >
          <Input.TextArea />
        </Form.Item>
        <div className='flex justify-end'>
          <Button type='primary' htmlType='submit'>
            Next
          </Button>
        </div>
      </Form>
    </Card>
  );
};
