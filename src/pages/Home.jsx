import { VStack } from '@chakra-ui/react';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Description from '../components/Description';

function Home() {

    return (
        <>
          <Hero></Hero>
          <VStack as='main' justify='center' pt='30px' pb='30px' minWidth='300px' >
          <Menu></Menu>
          <Testimonial />
           <Description />
          </VStack>
        
      </>
    );

}

export default Home;