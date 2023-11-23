import { Box, Heading, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box
      height="100vh"
      backgroundImage="/backgrounds/3R.jpg"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      textAlign="center"
    >
			<Box h="100%" w="100%"
      backgroundColor="rgba(0, 0, 0, 0.5)" // Ajuste o último valor para controlar a opacidade
      flexDirection="column"
      display="flex"
			justifyContent="center"
						alignItems="center"
						color="white"
			>
				<Heading fontSize="4xl" mb={4}>
					Bem-vindo ao nosso site de reciclagem!
				</Heading>
				<Text fontSize="lg">
					Ajude-nos a tornar o mundo um lugar melhor. Registre suas contribuições
					de reciclagem e entre em contato conosco.
				</Text>
			</Box>
    </Box>
  );
};

export default Home;
