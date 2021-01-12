import Head from 'next/head';
import GithubCorner from 'react-github-corner';
import Select from 'react-select';
import { PageLayout, Card } from '../components';
import { buildRelationships, buildFilters, handleFilters } from '../helpers';
import banks from '../constants/banks.json';
import { useState } from 'react';

const Home = () => {
  const banksWithFeatures = buildRelationships(banks);

  const [filters, setFilters] = useState([]);

  const banksToShow = handleFilters(banksWithFeatures, filters);

  return (
    <PageLayout>
      <Head>
        <title>NSS</title>
      </Head>
      <GithubCorner href='https://github.com/elijah-penney/not-so-simple' />
      <div className='text-center py-32 text-3xl'>
        <a
          href='https://www.simple.com/blog/simple-is-closing'
          className='text-purple-600 underline'
        >
          Simple is closing.
        </a>{' '}
        Here's some alternatives.
        <div className='w-100 flex justify-center pt-6 text-lg'>
          <span>
            <a
              href='https://www.reddit.com/r/SimpleBanking/comments/ksjpw5/megathread_for_discussing_alternatives/gigdx7f?utm_source=share&utm_medium=web2x&context=3'
              target='_blank'
              rel='noreferrer'
              className='text-purple-600 underline'
            >
              Original Data
            </a>{' '}
            by{' '}
            <a
              className='text-purple-600 underline'
              href='https://www.reddit.com/user/11jwolfe2/'
            >
              11jwolfe2
            </a>
          </span>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='inline-block w-96'>
          <label>Filters</label>
          <Select
            isMulti
            instanceId='filter-select'
            options={buildFilters()}
            onChange={setFilters}
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 pt-6'>
        {banksToShow.map((data) => (
          <Card key={data.name} {...data} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
