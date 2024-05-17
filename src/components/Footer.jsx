import { VStack, Heading, SimpleGrid, Box, Link, Img } from '@chakra-ui/react';
import Logo from '../assets/images/Vector.svg'

function Footer() {
    return (
        <VStack as='footer' justify='center' pt='30px' >
            <Box bgColor='#EDEFEE' align='center' spacing={30} w='100%' pt={100} pb={100}>

                <SimpleGrid spacing={10} minChildWidth='150px' width='60%' align='left' >
                    <Box p={10} >

                         <Img src={Logo} alt='little-lemon-logo' w='60%'></Img> 
                    </Box>
                        <Box>
                            <VStack align='left'>
                            <Heading fontSize='20px'>Navigation</Heading>
                            <br />
                            <Box><Link to='/about'>About</Link></Box>
                            <Box><Link to='/menu'>Menu</Link></Box>
                            <Box><Link to='/reservations'>Reservations</Link></Box>
                            <Box><Link to='/order-online'>Order Online</Link></Box>
                            <Box><Link to='/login'>Login</Link></Box>
                            </VStack>
                            </Box>
                            <Box>

                            <VStack align='left'>
                            <Heading fontSize='20px'>Contact</Heading>
                            <br />
                            <Box><Link to='/about'>Address</Link></Box>
                            <Box><Link to='/menu'>Number</Link></Box>
                            <Box><Link to='/reservations'>Email</Link></Box>
                            </VStack>
                            </Box>
                            <Box>
                            <VStack align='left' position='relative'>
                            <Box>
                            <Heading fontSize='20px' >Social Media Links</Heading>
                            <br />
                            <Box><Link to='/about'>Instagram</Link></Box>
                            <Box><Link to='/menu'>Facebook</Link></Box>
                            <Box><Link to='/reservations'>Twitter</Link></Box>
                            </Box>
                            </VStack>
                            </Box>








                </SimpleGrid>
            </Box>
        </VStack>


    );
}

export default Footer;