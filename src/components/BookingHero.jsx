import { Img, Box } from '@chakra-ui/react';
import restaurantFood from '../assets/images/restaurantFood.jpg'

function BookingHero() {

    return (
        <Box as='header'>
            <Img w='100% ' h={{base: '200px', sm: '300px', md:'400px'}} src={restaurantFood} alt='little-lemon-food' objectFit='cover' marginBottom={10}></Img>
        </Box>
    );

}

export default BookingHero;