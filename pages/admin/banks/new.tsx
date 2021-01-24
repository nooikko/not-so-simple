import { PageLayout } from '@components/general';
import {
  BankInfoForm,
  BankLinkForm,
  BankFeatureForm,
  BankFeatureFormDataType,
  BankInfoFormDataType,
  BankLinkFormDataType,
} from '@components/admin';
import { Steps } from 'antd';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_BANK = gql`
  mutation ADD_BANK($data: BankInput!) {
    createBank(data: $data) {
      _id
      name
    }
  }
`;

interface AddBankDataShape
  extends BankFeatureFormDataType,
    BankInfoFormDataType,
    BankLinkFormDataType {}

interface AddBankDataType {
  data: AddBankDataShape;
}

interface AddBankResponseType {
  data: {
    _id: string;
    name: string;
  };
}

const Bank = () => {
  const [step, setStep] = useState(0);
  const [bankInfo, setBankInfo] = useState<BankInfoFormDataType>(null);
  const [bankLinks, setBankLinks] = useState<BankLinkFormDataType>(null);
  const [bankFeatuers, setBankFeatuers] = useState<BankFeatureFormDataType>(
    null,
  );

  const [addBank, { data: addBankResponse }] = useMutation<
    AddBankResponseType,
    AddBankDataType
  >(ADD_BANK);

  const incrementStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const decrementStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const onSubmit = (bankFeatuers: BankFeatureFormDataType) => {
    const data = { ...bankInfo, ...bankLinks, ...bankFeatuers };

    addBank({
      variables: {
        data,
      },
    });
  };

  return (
    <PageLayout>
      <div className='flex justify-center'>
        <div className='w-1/2'>
          <div className='my-12'>
            <Steps current={step}>
              <Steps.Step title='Bank Info' />
              <Steps.Step title='Links' />
              <Steps.Step title='Features' />
            </Steps>
          </div>
          {step === 0 && (
            <BankInfoForm
              onFinish={setBankInfo}
              onNext={incrementStep}
              defaults={bankInfo}
            />
          )}
          {step === 1 && (
            <BankLinkForm
              onFinish={setBankLinks}
              onNext={incrementStep}
              onCancel={decrementStep}
              defaults={bankLinks}
            />
          )}
          {step === 2 && (
            <BankFeatureForm
              onFinish={(values) => {
                setBankFeatuers(values);
                onSubmit(values);
              }}
              onCancel={decrementStep}
              defaults={bankFeatuers}
            />
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Bank;
