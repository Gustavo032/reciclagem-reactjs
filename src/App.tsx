import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Main from './Components/Main';
import ContactForm from './Components/ContactForm';
import { Footer } from './Components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
