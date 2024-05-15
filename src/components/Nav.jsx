import { Box, HStack, Grid, GridItem, Img} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/Vector.svg'
import { Link } from 'react-router-dom';

function Nav(){


    return (
        
        <HStack as='nav' justify='center' pt='30px' pb='30px'>
        <Grid templateColumns='1fr 1fr' w='60%' >
                <GridItem>

                <Box> <Img src={Logo} alt='little-lemon-logo'></Img> </Box>
                </GridItem>
                <GridItem align='center'>
                <HStack spacing={10}>
                <Box><a href='/'>Home</a></Box>
                    <Box><Link to='/about'>About</Link></Box>
                    <Box><Link to='/menu'>Menu</Link></Box>
                    <Box><Link to='/reservations'>Reservations</Link></Box>
                    <Box><Link to='/order-online'>Order Online</Link></Box>
                    <Box><Link to='/login'>Login</Link></Box>
                    <FontAwesomeIcon icon='fa-solid fa-bars' />

                </HStack>
                </GridItem>
            </Grid>
        </HStack>
     

    );
}

export default Nav;