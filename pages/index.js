import GithubCorner from 'react-github-corner';
import { PageLayout, Card } from '../components';
import { buildRelationships } from '../helpers';
import banks from '../constants/banks.json';

const Home = () => {
  const banksWithFeatures = buildRelationships(banks);

  return (
    <PageLayout>
      <GithubCorner href='https://github.com/elijah-penney/not-so-simple' />
      <div className='text-center py-32 text-3xl'>
        <a
          href='https://www.simple.com/blog/simple-is-closing'
          className='text-purple-600 underline'
        >
          Simple is closing.
        </a>{' '}
        Here's some alternatives.
        <div className='w-100 flex justify-center py-6 text-lg'>
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

      <div className='grid grid-cols-3 gap-4 pt-6'>
        {banksWithFeatures.map((data) => (
          <Card key={data.name} {...data} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
