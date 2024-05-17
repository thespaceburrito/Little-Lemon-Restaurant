import { HStack, Text, Heading, Button, Img, Grid, GridItem } from '@chakra-ui/react';
import restaurantFood from '../assets/images/restaurantFood.jpg'

function Hero() {

    return (
        <>
            <HStack as='header' justify='center' bg='#495E57'>
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap='20px' w='60%' pt='40px'>
                    <GridItem
                        >
                        <Heading as='h1' fontSize='64px' color='#F4CE14'>Little Lemon</Heading>
                        <Heading as='h3' fontSize='40px' color='#EDEFEE'>Chicago</Heading>
                        <br />
                        <Text as='p' color='#EDEFEE' fontSize='18px'>We are a family owned Mediterranean restaurant, <br />focused on traditional recipes served with a <br />modern twist.</Text>
                        <br />
                        <br />
                        <Button aria-label="On Click" colorScheme='yellow' color='#333333' fontSize='18px' size='lg' borderRadius='16px' marginBottom={5}>Reserve a Table</Button>
                    </GridItem>
                    <GridItem h='450px'  align='right'>
                        <Img w='100% ' h='500px' src={restaurantFood} alt='little-lemon-food' borderRadius={16} objectFit='cover'></Img>
                    </GridItem>
                </Grid>
            </HStack>
        </>
    );

}

export default Hero;