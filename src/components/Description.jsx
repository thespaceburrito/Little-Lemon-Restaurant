import { Heading, SimpleGrid, Box, Text, Img} from '@chakra-ui/react';
import restaurantFood from '../assets/images/restaurantFood.jpg'


export default function Description() {
    return (
        <Box  as='section' w='60%' justify='center' align='center' spacing={30}  pt={200} pb={200} >

        <SimpleGrid spacing={10}  align='left' columns={{base: 1, md: 2}} >
            <Box  alignSelf='center'>
                <Heading as='h1' fontSize='64px' >Little Lemon</Heading>
                <Heading as='h3' fontSize='40px' >Chicago</Heading>
                <br />
                <Box pr={{base: 0, lg: 40}}> <Text as='p' fontSize='18px' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    <br />Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
                </Box>

            </Box>
            <Box >



                <Img w='100%' h='500px'  src={restaurantFood} alt='little-lemon-food' objectFit='cover'></Img>


            </Box>



        </SimpleGrid>
    </Box>

    );
}