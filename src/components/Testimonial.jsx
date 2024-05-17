import { HStack, VStack, Heading, SimpleGrid, Box, Text, Avatar } from '@chakra-ui/react';


export default function Testimonial() {
    return (
        <Box  bgColor='#EDEFEE' align='center' spacing={30} w='100%' pt={200} pb={200}>
        <Box w='60%' marginBottom={20} justify='center'>
            <Heading as='h3' fontSize='40px' color='#000000'>Testimonials</Heading>
        </Box>
        <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={10} width='60%'>
            <Box bgColor='#D9D9D9' p={10} >

                <VStack spacing={3} align='left' pl='10px' pr='10px'>
                    <Text align='left' as='div' fontSize='14px'>4.5/5</Text>
                    <HStack>
                        <Avatar size='lg'></Avatar>
                        <Text as='div' fontSize='14px'>Jon Doe</Text>
                    </HStack>
                    <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                </VStack>
            </Box>
            <Box bgColor='#D9D9D9' p={10} >

                <VStack spacing={3} align='left' pl='10px' pr='10px'>
                    <Text align='left' as='div' fontSize='14px'>4.5/5</Text>
                    <HStack>
                        <Avatar size='lg'></Avatar>

                        <Text as='div' fontSize='14px'>Jon Doe</Text>
                    </HStack>
                    <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                </VStack>
            </Box>
            <Box bgColor='#D9D9D9' p={10} >

                <VStack spacing={3} align='left' pl='10px' pr='10px'>
                    <Text align='left' as='div' fontSize='14px'>4.5/5</Text>
                    <HStack>
                        <Avatar size='lg'></Avatar>
                        <Text as='div' fontSize='14px'>Jon Doe</Text>
                    </HStack>
                    <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                </VStack>
            </Box>
            <Box bgColor='#D9D9D9' p={10} >

                <VStack spacing={3} align='left' pl='10px' pr='10px'>
                    <Text align='left' as='div' fontSize='14px'>4.5/5</Text>
                    <HStack>
                        <Avatar size='lg'></Avatar>
                        <Text as='div' fontSize='14px'>Jon Doe</Text>
                    </HStack>
                    <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                </VStack>
            </Box>


        </SimpleGrid>
    </Box>


    );
}