import { Box, Container, Heading, Text } from '@chakra-ui/react';
import ServicesOffered from '../ServicesOffered';
import Steps from '../Steps';
import ContactForm from '../ContactForm';
import Home from '../Home';

const Main: React.FC = () => {
  return (
		<>
      <Home />
			<ServicesOffered />
			<Steps />
			<ContactForm />
		</>
  );
};

export default Main;
