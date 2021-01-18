import { Checkbox } from '@components/general';

export const BankFilters = () => {
  return (
    <div className='flex flex-col w-100 h-100 grid gap-4'>
      <div>
        <h2 className='font-semibold text-purple-600 mb-1'>Features</h2>
        <div className='flex flex-col grid gap-1'>
          <Checkbox
            label='Checking Account'
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            label='Savings Account'
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            label='Expenses'
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            label='Goals'
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            label='Safe to Spend'
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            label='Mobile Deposit'
            onChange={(checked) => console.log(checked)}
          />
        </div>
      </div>
      <div>
        <h2 className='font-semibold text-purple-600 mb-1'>Apps</h2>
        <div className='flex flex-col grid gap-1'>
          <Checkbox
            label='Website'
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox
            label='Android'
            onChange={(checked) => console.log(checked)}
          />
          <Checkbox label='iOS' onChange={(checked) => console.log(checked)} />
        </div>
      </div>
    </div>
  );
};
