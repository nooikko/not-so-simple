import GithubCorner from 'react-github-corner';
import { PageLayout, Card } from '../components';
import banks from '../banks.json';

const simpleBank = banks.filter(({ name }) => name === 'Simple');
const restBanks = banks.filter(({ name }) => name !== 'Simple');

const Home = () => {
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
      </div>
      <div className='grid grid-cols-3 gap-4 pt-6'>
        {restBanks.map((data) => (
          <Card key={data.name} {...data} simple={simpleBank[0]} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
