import { PageLayout, BankFilters, BankPreviewCard } from '@components/general';

const Home = () => {
  return (
    <PageLayout>
      <div className='text-center text-2xl lg:text-3xl pb-24'>
        <div>
          Simple is{' '}
          <a
            className='text-purple-600 underline'
            href='https://www.simple.com/blog/simple-is-closing'
          >
            closing
          </a>
          .
        </div>
        <div> Let's get you a new bank.</div>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-3'>
        <div className='hidden sm:block'></div>
        <div className='col-span-3'>
          <div className='flex justify-between font-medium text-gray-600'>
            <div>Results: 3</div>
            <div className='hidden md:block'>
              <span className='text-gray-400'>Sort By:</span> Most Similar
            </div>
          </div>
        </div>
        <div className='hidden lg:block'></div>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        <div className='hidden md:block'>
          <BankFilters />
        </div>
        <div className='col-span-3'>
          <BankPreviewCard />
        </div>
        <div className='hidden lg:block'>Place Holder</div>
      </div>
      <div className='lg:hidden text-center'>Place Holder</div>
    </PageLayout>
  );
};

export default Home;
