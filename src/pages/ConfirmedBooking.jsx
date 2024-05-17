import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Heading, Text, VStack, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <VStack as='main' justify='center' pt='30px' pb='30px'  >
    <Box w='60%' justify='center' spacing={30} pb={200} pt={200} align='center'>
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <br /><br />
      <Heading>Your reservation has been confirmed.</Heading>
      <br />
      <Text>You will receive an email with all the details.</Text>
      <br />
      <br />
      <Button aria-label="On Click" colorScheme='yellow' color='#333333' fontSize='18px' size='lg' borderRadius='16px' marginBottom={5}><Link to='/'>Back To Homepage</Link></Button>
    </Box>
    </VStack>
  );
};

export default ConfirmedBooking;