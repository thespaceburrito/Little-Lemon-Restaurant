import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Construction = () => {
  return (
    <VStack as='main' justify='center' pt='30px' pb='30px'  >
    <Box w='60%' justify='center' spacing={30} pb={200} pt={200} align='center'>
      <FontAwesomeIcon icon={faScrewdriverWrench} size="3x" />
      <br /><br />
      <Heading>This Page Is Under Construction</Heading>
      <br />
      <Text>Check Back Soon!</Text>
    </Box>
    </VStack>
  );
};

export default Construction;