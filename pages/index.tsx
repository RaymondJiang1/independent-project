import type { NextPage } from 'next';
import { GetPersonButton } from './components/getPersonButton';
import { getPerson } from './functions/functions';

const Home: NextPage = () => {
	return <GetPersonButton />;
};

export default Home;
