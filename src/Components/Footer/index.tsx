import {
	Box,
	Flex,
	useColorModeValue,
	Image,
	Text,
  } from '@chakra-ui/react';
  

  
  export function Footer() {
	return (
	  <Box as="footer"
		bg={useColorModeValue('gray.900', 'gray.900')}
		color={useColorModeValue('gray.700', 'gray.200')}>
		<Box py={10}>
		  <Flex
			align={'center'}
			_before={{
			  content: '""',
			  borderBottom: '1px solid',
			  borderColor: useColorModeValue('gray.200', 'gray.700'),
			  flexGrow: 1,
			  mr: 8,
			}}
			_after={{
			  content: '""',
			  borderBottom: '1px solid',
			  borderColor: useColorModeValue('gray.200', 'gray.700'),
			  flexGrow: 1,
			  ml: 8,
			}}>
			<Image color="green" h={16} src="/Logo.png" />
		  </Flex>
		  <Text color={useColorModeValue('gray.200', 'gray.200')} pt={6} fontSize={'sm'} textAlign={'center'}>
			© 2023 Site de Reciclagem. All rights reserved.
		  </Text>
		</Box>
	  </Box>
	);
  }