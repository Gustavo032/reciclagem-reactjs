import { Box, Heading, Text } from "@chakra-ui/react";

interface StepCardProps {
	backgroundImage: string;
	title: string;
	description: string;
}
export function StepCard(props: StepCardProps){
	return (
		<Box
			backgroundImage={props.backgroundImage}
			borderWidth="1px"
			borderRadius="lg"
			bgColor="white"
			backgroundSize="contain"
			backgroundAttachment="fixed"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
		
		>
			<Box  h="100%"
      w="100%"
			p={4}
			backgroundImage="linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4) 51%)"
			boxShadow="md"
			>
				<Heading fontSize="lg">{props.title}</Heading>
				<Text mt={2}>
					{props.description}
				</Text>
			</Box>
		</Box>
	)
}