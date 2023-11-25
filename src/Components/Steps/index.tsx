import { Box, Heading, Text, SimpleGrid, Center, Container } from '@chakra-ui/react';
import { StepCard } from './StepCard';

const Steps: React.FC = () => {
	const steps = [
		{
			title: "Separação",
			description: "Separe os materiais recicláveis, como papel, plástico, vidro e metal.",
			backgroundImage: "/Logo.png", // Set the background image for this step
		},
		{
			title: "Armazenamento",
			description: "Armazene os materiais separados em recipientes apropriados até a coleta.",
			backgroundImage: "/Logo.png", // Set the background image for this step
		},
		{
			title: "Coleta",
			description: "Agende a coleta ou leve os materiais até um ponto de entrega designado.",
			backgroundImage: "/Logo.png", // Set the background image for this step
		},
		{
			title: "Processamento",
			description: "Os materiais recicláveis são processados para produzir novos produtos.",
			backgroundImage: "/Logo.png", // Set the background image for this step
		},
		{
			title: "Reutilização",
			description: "Os produtos reciclados são reutilizados na fabricação de novos itens.",
			backgroundImage: "/Logo.png", // Set the background image for this step
		},
		{
			title: "Redução de Resíduos",
			description: "Contribua para a redução de resíduos e preservação do meio ambiente.",
			backgroundImage: "/Logo.png", // Set the background image for this step
		},
	];
	
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
					{steps.map((step, index) => (
        <StepCard
          key={index}
          title={step.title}
          description={step.description}
          backgroundImage={step.backgroundImage}
        />
      ))}
					</SimpleGrid>
				</Box>
			</Center> 
		</Container>
		</Box>

	);
};

export default Steps;
