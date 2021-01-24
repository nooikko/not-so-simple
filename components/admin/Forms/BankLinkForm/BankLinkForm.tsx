import { Card } from '@components/general';
import { Form, Button, Input } from 'antd';

export interface BankLinkFormDataType {
  webUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
  phone?: string;
  chat?: string;
  email?: string;
}

interface BankLinkFormProps {
  onFinish: (values: BankLinkFormDataType) => void;
  onNext: () => void;
  onCancel: () => void;
  defaults: BankLinkFormDataType;
}

export const BankLinkForm: React.FC<BankLinkFormProps> = ({
  onFinish,
  onNext,
  onCancel,
  defaults,
}) => {
  return (
    <Card>
      <h1 className='text-2xl'>Bank Links</h1>
      <Form
        layout='vertical'
        onFinish={(value: BankLinkFormDataType) => {
          onNext();
          onFinish(value);
        }}
      >
        <Form.Item
          name='webUrl'
          label='Website URL'
          initialValue={defaults?.webUrl}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='iosUrl'
          label='Apple App Store URL'
          initialValue={defaults?.iosUrl}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='androidUrl'
          label='Google Play Store URL'
          initialValue={defaults?.androidUrl}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Support Phone Number'
          initialValue={defaults?.phone}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='chat'
          label='Support Chat Link'
          initialValue={defaults?.chat}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label='Support Email'
          initialValue={defaults?.email}
        >
          <Input />
        </Form.Item>
        <div className='flex justify-end'>
          <Button onClick={onCancel} className='mr-4'>
            Back
          </Button>
          <Button type='primary' htmlType='submit'>
            Next
          </Button>
        </div>
      </Form>
    </Card>
  );
};
