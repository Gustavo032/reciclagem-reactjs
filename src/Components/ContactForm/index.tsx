import { Box, Heading, Input, Button, Text, Container } from '@chakra-ui/react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione a lógica para enviar os dados do formulário para Formspree ou outro serviço de formulário
    try {
      await axios.post('URL_DO_FORMSPREE', { data: 'seu-dado-aqui' });
      alert('Formulário enviado com sucesso!');
    } catch (error) {
      alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
    }
  };

  return (
		<Container maxW="container.lg"
			background="linear-gradient(to top, #294a2b, #247c3d);"
      color="white"
      height="100vh"
      minWidth="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading mb={4}>Entre em Contato</Heading>
      <form
        onSubmit={handleSubmit}
        style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}
      >
        <Input
          type="text"
          placeholder="Nome"
          mb={4}
          variant="filled"
          _hover={{ bgColor: 'teal.600' }}
        />
        <Input
          type="email"
          placeholder="E-mail"
          mb={4}
          variant="filled"
          _hover={{ bgColor: 'teal.600' }}
        />
        <Button type="submit" colorScheme="teal" w="100%" _hover={{ bgColor: 'teal.600' }}>
          Enviar
        </Button>
      </form>
      <Text mt={2} fontSize="sm">
        Ou ligue para nós: (11) 1234-5678
      </Text>
    </Container>
  );
};

export default ContactForm;
