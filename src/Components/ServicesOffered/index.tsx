import { Box, Heading, Text, SimpleGrid, Center } from '@chakra-ui/react';

const ServicesOffered: React.FC = () => {
  return (
    <Center>
      <Box
        w="100vw"
        background="linear-gradient(to bottom, #294a2b, #247c3d);"
        p={8}
        textAlign="center"
      >
        <Heading mb={4} color="teal.400">
          Nossos Serviços
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={6} justifyContent="center">
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bgColor="#000000bd"
            boxShadow="md"
          >
            <Heading fontSize="lg" color="gray.400">
              Coleta Residencial
            </Heading>
            <Text mt={2}>
              Agendamos a coleta dos seus materiais recicláveis diretamente na
              sua casa.
            </Text>
          </Box>
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bgColor="#000000bd"
            boxShadow="md"
          >
            <Heading fontSize="lg" color="gray.400">
              Pontos de Entrega
            </Heading>
            <Text mt={2}>
              Possuímos pontos de entrega onde você pode deixar seus materiais
              recicláveis.
            </Text>
          </Box>
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bgColor="#000000bd"
            boxShadow="md"
          >
            <Heading fontSize="lg" color="gray.400">
              Reciclagem Educativa
            </Heading>
            <Text mt={2}>
              Oferecemos programas educativos sobre a importância da reciclagem
              para escolas e comunidades.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default ServicesOffered;
