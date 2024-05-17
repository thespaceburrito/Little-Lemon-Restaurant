import { useState } from 'react';
import { Box, HStack, Grid, GridItem, Img, IconButton, useBreakpointValue, VStack, Collapse } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Added faTimes for the 'x' icon

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const displayMenu = useBreakpointValue({ base: 'none', lg: 'flex' });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HStack as='nav' justify='center' pt='30px' pb='30px'>
            <Grid templateColumns='1fr 1fr' w={{base: '80%', md: '60%'}}>
                <GridItem minWidth='34px'>
                    <Box> <Img src={Logo} alt='little-lemon-logo'></Img> </Box>
                </GridItem>
                <GridItem align='right' alignSelf='center' >
                    <HStack spacing={10} display={displayMenu} >
                        <Box><Link to='/'>Home</Link></Box>
                        <Box><Link to='/about'>About</Link></Box>
                        <Box><Link to='/menu'>Menu</Link></Box>
                        <Box><Link to='/booking'>Reservations</Link></Box>
                        <Box><Link to='/order-online'>Order</Link></Box>
                        <Box><Link to='/login'>Login</Link></Box>
                    </HStack>
                    <IconButton
                        align='right'
                        icon={isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />} // Conditional icon rendering
                        aria-label='Menu'
                        display={{ base: 'flex', lg: 'none' }}
                        onClick={toggleMenu}
                        transition='all 0.3s' // Added transition
                        transform={isMenuOpen ? 'rotate(90deg)' : 'none'} // Rotate icon on open
                    />
                    <Collapse in={isMenuOpen} animateOpacity>
                        <VStack
                            spacing={10}
                            display={{ base: 'flex', lg: 'none' }}
                            backgroundColor='white'
                            zIndex={10}
                            mt={2}
                            p={4}
                            boxShadow='md'
                        >
                            <Box><Link to='/'>Home</Link></Box>
                            <Box><Link to='/about'>About</Link></Box>
                            <Box><Link to='/menu'>Menu</Link></Box>
                            <Box><Link to='/booking'>Reservations</Link></Box>
                            <Box><Link to='/order-online'>Order</Link></Box>
                            <Box><Link to='/login'>Login</Link></Box>
                        </VStack>
                    </Collapse>
                </GridItem>
            </Grid>
        </HStack>
    );
}

export default Nav;
