import { HStack, VStack, Heading, Button, Spacer, SimpleGrid, Box, Img, Text, Avatar } from '@chakra-ui/react';
import greekSalad from '../assets/images/greeksalad.jpg'
import bruchetta from '../assets/images/bruchetta.jpg'
import lemondessert from '../assets/images/lemondessert.jpeg'
import moped from '../assets/images/moped.png'

//import { useLoaderData } from 'react-router-dom';


function Main() {

    return (
        <VStack as='main' justify='center' pt='30px' pb='30px' >
            <Box w='60%' justify='center' spacing={30} pb={200}>
                <Box marginTop='100px'>
                    <HStack marginBottom='30px'>
                        <Heading as='h3' fontSize='40px' color='#000000'>This week's specials</Heading>
                        <Spacer />
                        <Button colorScheme='yellow' color='#333333' fontSize='18px' size='lg' borderRadius='16px'>Online Menu</Button>
                    </HStack>

                    <SimpleGrid spacing={10} minChildWidth='300px'>
                        <Box bgColor='#EDEFEE' borderRadius='16px 16px 0 0' pb={20} position='relative'>
                            <Img w='100% ' h='300px' src={greekSalad} alt='little lemon greek salad' borderRadius='16px 16px 0 0' objectFit='cover' marginBottom={5} />
                            <VStack spacing={7} align='stretch' pl='10px' pr='10px'>
                                <HStack>
                                    <Heading as='div' fontSize='24px'>Greek Salad</Heading>
                                    <Spacer />
                                    <Heading as='div' fontSize='16px' color='#EE9972'>$12.99</Heading>
                                </HStack>
                                <Text color='#495E57'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </Text>
                                <HStack justify='flex-end' position='absolute' bottom={5}>
                                    <Text> Order a delivery</Text>
                                    <Img src={moped}></Img>
                                </HStack>
                            </VStack>
                        </Box>
                        <Box bgColor='#EDEFEE' borderRadius='16px 16px 0 0' pb={10} position='relative'>
                            <Img w='100% ' h='300px' src={bruchetta} alt='little lemon bruchetta' borderRadius='16px 16px 0 0' objectFit='cover' marginBottom={5} />
                            <VStack spacing={7} align='stretch' pl='10px' pr='10px'>
                                <HStack>
                                    <Heading as='div' fontSize='24px'>Bruchetta</Heading>
                                    <Spacer />
                                    <Heading as='div' fontSize='16px' color='#EE9972'>$5.99</Heading>
                                </HStack>
                                <Text color='#495E57'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </Text>
                                <HStack justify='flex-end' position='absolute' bottom={5}>
                                    <Text> Order a delivery</Text>
                                    <Img src={moped}></Img>
                                </HStack>
                            </VStack>
                        </Box>
                        <Box bgColor='#EDEFEE' borderRadius='16px 16px 0 0' pb={10} position='relative'>
                            <Img w='100% ' h='300px' src={lemondessert} alt='little lemon dessert' borderRadius='16px 16px 0 0' objectFit='cover' marginBottom={5} />
                            <VStack spacing={7} align='stretch' pl='10px' pr='10px'>
                                <HStack>
                                    <Heading as='div' fontSize='24px'>Lemon Dessert</Heading>
                                    <Spacer />
                                    <Heading as='div' fontSize='16px' color='#EE9972'>$5.00</Heading>
                                </HStack>
                                <Text color='#495E57'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </Text>
                                <HStack justify='flex-end' position='absolute' bottom={5}>
                                    <Text> Order a delivery</Text>
                                    <Img src={moped}></Img>
                                </HStack>
                            </VStack>
                        </Box>
                    </SimpleGrid>


                </Box>





            </Box>

            <Box bgColor='#EDEFEE' align='center' spacing={30} w='100%' pt={200} pb={200}>
                <Box w='60%' marginBottom={20} justify='center'>
                    <Heading as='h3' fontSize='40px' color='#000000'>Testimonials</Heading>
                </Box>
                <SimpleGrid spacing={10} minChildWidth='250px' width='60%'>
                    <Box bgColor='#D9D9D9' p={10} >

                        <VStack spacing={3} align='left' pl='10px' pr='10px'>
                            <Heading align='left' as='div' fontSize='14px'>4.5/5</Heading>
                            <HStack>
                                <Avatar size='lg'></Avatar>
                                <Heading as='div' fontSize='14px'>Jon Doe</Heading>
                            </HStack>
                            <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                        </VStack>
                    </Box>
                    <Box bgColor='#D9D9D9' p={10} >

                        <VStack spacing={3} align='left' pl='10px' pr='10px'>
                            <Heading align='left' as='div' fontSize='14px'>4.5/5</Heading>
                            <HStack>
                                <Avatar size='lg'></Avatar>

                                <Heading as='div' fontSize='14px'>Jon Doe</Heading>
                            </HStack>
                            <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                        </VStack>
                    </Box>
                    <Box bgColor='#D9D9D9' p={10} >

                        <VStack spacing={3} align='left' pl='10px' pr='10px'>
                            <Heading align='left' as='div' fontSize='14px'>4.5/5</Heading>
                            <HStack>
                                <Avatar size='lg'></Avatar>
                                <Heading as='div' fontSize='14px'>Jon Doe</Heading>
                            </HStack>
                            <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                        </VStack>
                    </Box>
                    <Box bgColor='#D9D9D9' p={10} >

                        <VStack spacing={3} align='left' pl='10px' pr='10px'>
                            <Heading align='left' as='div' fontSize='14px'>4.5/5</Heading>
                            <HStack>
                                <Avatar size='lg'></Avatar>
                                <Heading as='div' fontSize='14px'>Jon Doe</Heading>
                            </HStack>
                            <Text align='left' as='div' fontSize='14px'>Great Food!</Text>
                        </VStack>
                    </Box>


                </SimpleGrid>
            </Box>

            <Box align='center' spacing={30} w='100%' pt={200} pb={200}>

                <SimpleGrid spacing={10} minChildWidth='400px' width='60%' align='left' >
                    <Box >
                        <Heading as='h1' fontSize='64px' >Little Lemon</Heading>
                        <Heading as='h3' fontSize='40px' >Chicago</Heading>
                        <br />
                        <Box pr={40}> <Text as='p' fontSize='18px' >WAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            <br />Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
                        </Box>

                    </Box>
                    <Box bgColor='#D9D9D9' p={10} >

                        <VStack spacing={3} align='left' pl='10px' pr='10px'>

                            <HStack>

                            </HStack>

                        </VStack>
                    </Box>



                </SimpleGrid>
            </Box>


        </VStack>
    );
}
/*
export const menuLoader = async () => {
    const res = await fetch('http://localhost:3000/menu')

    return res.json;
}
*/

export default Main;