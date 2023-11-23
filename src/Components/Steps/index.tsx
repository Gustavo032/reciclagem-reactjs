import { Box, Heading, Text, SimpleGrid, Center, Container } from '@chakra-ui/react';

const Steps: React.FC = () => {
  return (
		<Box background="radial-gradient(circle closest-side at 50% 50%, #294a2b, #247c3d);" textAlign="center" p={8} h="100vh">
		<Container maxW="container.lg" h="100%">

			<Heading mb={4} color="teal.800">
				Passo a Passo da Reciclagem
			</Heading>

			<Center minW="100%"  minH="100%" >
				<Box
					w="100%" h="100%"
					textAlign="center"
				>
					<SimpleGrid columns={[1, 2, 3]} gap="5rem" justifyContent="space-between">
						<Box
							p={4}
							borderWidth="1px"
							borderRadius="lg"
							bgColor="white"
							boxShadow="md"
						>
							<Heading fontSize="lg">Separação</Heading>
							<Text mt={2}>
								Separe os materiais recicláveis, como papel, plástico, vidro e
								metal.
							</Text>
						</Box>
						<Box
							p={4}
							borderWidth="1px"
							borderRadius="lg"
							bgColor="white"
							boxShadow="md"
						>
							<Heading fontSize="lg">Armazenamento</Heading>
							<Text mt={2}>
								Armazene os materiais separados em recipientes apropriados até a
								coleta.
							</Text>
						</Box>
						<Box
							p={4}
							borderWidth="1px"
							borderRadius="lg"
							bgColor="white"
							boxShadow="md"
						>
							<Heading fontSize="lg">Coleta</Heading>
							<Text mt={2}>
								Agende a coleta ou leve os materiais até um ponto de entrega
								designado.
							</Text>
						</Box>
						<Box
							p={4}
							borderWidth="1px"
							borderRadius="lg"
							bgColor="white"
							boxShadow="md"
						>
							<Heading fontSize="lg">Processamento</Heading>
							<Text mt={2}>
								Os materiais recicláveis são processados para produzir novos
								produtos.
							</Text>
						</Box>
						<Box
							p={4}
							borderWidth="1px"
							borderRadius="lg"
							bgColor="white"
							boxShadow="md"
						>
							<Heading fontSize="lg">Reutilização</Heading>
							<Text mt={2}>
								Os produtos reciclados são reutilizados na fabricação de novos
								itens.
							</Text>
						</Box>
						<Box
							p={4}
							borderWidth="1px"
							borderRadius="lg"
							bgColor="white"
							boxShadow="md"
						>
							<Heading fontSize="lg">Redução de Resíduos</Heading>
							<Text mt={2}>
								Contribua para a redução de resíduos e preservação do meio ambiente.
							</Text>
						</Box>
					</SimpleGrid>
				</Box>
			</Center> 
		</Container>
		</Box>

	);
};

export default Steps;
